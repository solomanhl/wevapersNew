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
//		alert(this.name);
		if (this.fid != "" && this.fid != null){
			this.updateUI();
			this.getThemeList(false);
		}
		
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
		if (this.name != "" && this.name != null){
//			alert(this.name);
			this.comp("title").set({"title" : this.name});
		}
	}
	
	Model.prototype.getFid = function(){
		return this.fid;
	}
	
	Model.prototype.subMessage = function(str){
		if (str != null && str != ""){
			var out = str;
			var len = 60;
			if (str.length > len){
				out = str.substring(0,len);
			}
			return out;
		}else{
			return "";
		}
		
	}
	
	Model.prototype.dateTime = function(dateline){
//		var timestampPost = dateline * 1000; //帖子时间转成毫秒级
//		var time = new Date(timestampPost)//发帖标准时间
//		return time.toLocaleDateString();
	}
	
	//是否显示图片div
	Model.prototype.isShowPic = function (attachment){
		if (attachment !== "" && attachment!= null){
			return true;
		}else{
			return false;
		}
		
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};
	
	//找附件图片
	Model.prototype.findThumbPicBytid = function(attachment, index){//attachment:图片字符串集  index:1,2,3
//		alert(attachment);
//		var rtn = this.toUrl("./images/default_img.png" );
		var rtn = this.toUrl("" );
			
		if (attachment !== "" && attachment!= null){
			var attachs = attachment.split(",");	//因为最后多一个，所以会多一个空值，下面的判断也不用-1
			if ( attachs.length > index ){
				rtn = this.imgserver + "/data/attachment/forum/" + attachs[index - 1];
			}else{
				rtn = this.toUrl("./images/default_img.png" );
			}
			
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
		var me = this;
		var current = event.bindingContext.$object;//获得当前行
		var url = require.toUrl("./detailActivity.w");
	    var params = {
	        from : "listActivity",
	        name : me.name,
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

//dateline转换
	Model.prototype.datelineToBeforeDay = function(dateline){
//		var mydate = new Date();//Tue Jul 26 2016 09:24:38 GMT+0800(中国标准时间)
//		mydate.toLocaleDateString(); //获取当前日期，如2016/7/26
//		var mytime=mydate.toLocaleTimeString(); //获取当前时间,如上午9：35：35
		
		var timestampNow = new Date().getTime();//结果：1280977330748获取了当前毫秒的时间戳。
		var timestampPost = dateline * 1000; //帖子时间转成毫秒级

		var time1 = new Date(timestampPost)//发帖标准时间
		var year1 = time1.getUTCFullYear();
		var mounth1 = time1.getUTCMonth()+1;
		var day1 = time1.getUTCDate();
		var hour1 = time1.getUTCHours();
		var minite1 = time1.getUTCMinutes() ;
		var second1 = time1.getUTCSeconds();
		
		var time2 = new Date(timestampNow)//当前标准时间
		var year2 = time2.getUTCFullYear();
		var mounth2 = time2.getUTCMonth()+1;
		var day2 = time2.getUTCDate();
		var hour2 = time2.getUTCHours();
		var minite2 = time2.getUTCMinutes() ;
		var second2 = time2.getUTCSeconds();

		var rtn = "";
		
		if (year2 - year1 > 0){
			rtn = (year2 - year1) + "年前";
		}else if(mounth2 - mounth1 > 0){
			rtn = (mounth2 - mounth1) + "个月前";
		}else if(day2 - day1 > 0){
			rtn = (day2 - day1) + "天前";
		}else if(hour2 - hour1 > 0){
			rtn = (hour2 - hour1) + "小时前";
		}else if(minite2 - minite1 > 0){
			rtn = (minite2 - minite1) + "分钟前";
		}else if(second2 - second1 > 0){
			rtn = (second2 - second1) + "秒前";
		}
		
		return rtn;
	}
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
		this.name = event.name;
		
//		alert(this.name);
		
		
	};

	Model.prototype.modelActive = function(event){
		if (this.name != "" && this.name != null){
			this.updateUI();
		}
		
		if (this.fid != "" && this.fid != null && this.name != "" && this.name != null){
			
			this.getThemeList(false);
		}
	};

	return Model;
});

