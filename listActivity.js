define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		
		this.server = "http://wevapers.gkybi.com.cn";
		this.imgserver = "http://www.wevapers.com.cn";
		
		this.fid;
		this.name;
		this.pageNo = 0;
		this.pageCount = 0;
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		var me = this;
//		var data_forum = event.params.data.data_forum;
		
		this.fid = event.params.fid;
		this.name = event.params.name;
		
		this.updateUI();
		this.getThemeList(false);
	};
	
	//获取帖子列表
	Model.prototype.getThemeList = function(isApend){
		var me = this;
		var data = this.comp("themeList");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForumThreadListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"pageNo" : me.pageNo,
	        	"fid" : me.fid,
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var pageCountObj, threadsObj, pageNoObj;	
	        	threadsObj = resultData.threads;
	        	pageNoObj = resultData.pageNo;
	        	pageCountObj = resultData.pageCount;
	        	
	        	me.pageNo = pageNoObj;
	        	me.pageCount = pageCountObj;
//	        	alert(pageCountObj);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNoObj > 0){
		        	json={"@type" : "table","themeList" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :threadsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	Model.prototype.updateUI = function(){
		this.comp("title").set({"title" : this.name});
	}
	
	Model.prototype.getFid = function(){
		return this.fid;
	}
	
	Model.prototype.subMessage = function(str){
		var out = str;
		var len = 20
		if (str.length > len){
			out = str.substring(0,len);
		}
		return out;
	}
	
	Model.prototype.dateTime = function(dateline){
//		var timestampPost = dateline * 1000; //帖子时间转成毫秒级
//		var time = new Date(timestampPost)//发帖标准时间
//		return time.toLocaleDateString();
	}
	
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};
	
	//找附件图片
	Model.prototype.findThumbPicBytid = function(attachment){
		var rtn = this.toUrl("./images/default_img.png" );
		
		if (attachment !== "" && attachment!= null){
			rtn = this.imgserver + "/data/attachment/forum/" + attachment;
		}
//		alert(rtn); 
		return rtn;
	};

	Model.prototype.scrollView1PullDown = function(event){
		this.pageCount = 0;
		this.pageNo = 0;
		this.getThemeList(false);
	};

	Model.prototype.scrollView1PullUp = function(event){
		if (this.pageNo < this.pageCount){
			this.pageNo ++;
			this.getThemeList(true);
		}
	};

	Model.prototype.list1Click = function(event){
		var current = event.bindingContext.$object;//获得当前行
		var url = require.toUrl("./detailActivity.w");
	    var params = {
	        from : "listActivity",
	        // 将data中的一行数据传给对话框
	        data_post : this.comp("themeList").getCurrentRow().toJson(),
//	        subject : current.val("subject"),//这里val为什么报错
	        data : {
//	            fn : function() {
//	                alert("将一个函数传到对话框中");
//	            },
	            // 将data中的一行数据传给对话框
//	            data_post : this.comp("homeList").getCurrentRow().toJson()
	        }
	    }
	    justep.Shell.showPage(url, params);
	};


	Model.prototype.modelLoad = function(event){
		//添加事件
		justep.Shell.on("onRefreshList", this.onRefreshList, this);
	};


	Model.prototype.modelUnLoad = function(event){
		//卸载事件
		justep.Shell.off("onRefreshList", this.onRefreshList);
	};

	Model.prototype.onRefreshList = function(event){
		this.fid = event.fid;
		if (this.fid != "" && this.fid != null){
//			alert(this.fid);
			this.getThemeList(false);
		}
	};

	return Model;
});

