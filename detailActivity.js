define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		
		this.server = "http://wevapers.gkybi.com.cn";
		
		this.pre_forum_post;
		this.pre_forum_thread;
//		this.post;
		
		this.tid;
		this.message;
		
		this.subject;;
		this.author;
		this.views;
		this.replies;
		
		this.pageNo=1;
		this.pageCount=1;
	};

	Model.prototype.modelLoad = function(event){
//		alert("modelLoad" + this.tid);
		
	};
	
	Model.prototype.modelParamsReceive = function(event){
//		alert("modelParamsReceive");
	    var context = this.getContext();
//	    alert("modelParamsReceive");
	    //获取URL中的参数
//	    var p1 = context.getRequestParameter("p1");
//	    var p2 = context.getRequestParameter("p2");
//	    var buf = "来自url的参数: p1=" + p1 + ", p2=" + p2 + "\n";
	 
	    //获取简单参数
//	    buf += "简单参数：params.a1=" + event.params.a1 + ", params.a2=" + event.params.a2 + "\n";
//	    alert(event.params.from + event.params.subject);
	 
	    //获取复杂参数
//	    var buf;
//	    buf += "复杂参数：\n"
//	    if (event.params.data){
//	        buf += "    params.data.fn=" + event.params.data.fn + "\n";
//	        this.comp("dlgData").loadData([event.params.data.data1]);
//	        this.comp("dlgData").first();
//	    }
//	    alert(event.params.data.data_post);

	    var me = this;
	    var from = event.params.from;
	    var data_post = event.params.data_post;
//	    alert(from + data_post);
	   
	    var post = this.comp("post");
	    post.loadData([data_post]);
	    post.first();

	    
	    this.subject = post.val("subject");
	    this.author = post.val("author");
	    this.tid = post.val("tid");
		this.views = post.val("views");
		this.replies = post.val("replies");
		
		this.getMessage(this.tid);
		this.getReplies(this.tid, false);
		
	    

	};
	
	//获取message
	Model.prototype.getMessage = function(tid){
		var me = this;
	
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForumTopPostServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"tid" : tid
	        },
	        success: function(resultData) {
//	        	alert(resultData.message);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	
	        	me.message = resultData.message;
//	        	alert(me.message );
	        	me.updateUI();
	        	
//	        	alert(me.totalPage_study);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	

	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	//获取replies
	Model.prototype.getReplies = function(tid, isApend){
		var me = this;
		var data = this.comp("replies");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForumThreadListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"tid" : tid,
	        	"pageNo" : me.pageNo
	        },
	        success: function(resultData) {
//	        	alert(resultData.message);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var pageCount, pageNo, threadsObj;
	        	
	        	pageCount = resultData.pageCount;
	        	pageNo = resultData.pageNo;
	        	threadsObj = resultData.threads;
	        	
	        	me.pageCount = pageCount;
	        	me.pageNo = pageNo;
	        	
//	        	alert(pageNo);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNo > 0){
		        	json={"@type" : "table","replies" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :threadsObj };
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
//	alert(this.message);
		this.comp("output_subject").set({value:this.subject});
		this.comp("output_author").set({value:this.author});
		this.comp("output_views").set({value:"浏览" + this.views + "次"});
		this.comp("output_replies").set({value:this.replies + "评论"});
		this.comp("output_message").set({value:this.message});
//		this.comp("output_message").set({value:"<img src=\"http://wevapers.com.cn//mobcent//app/data/phiz/default/16.png\">"});
	}
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};

	//替换附件图片，替换顺序很重要
	Model.prototype.replace = function(str){
		var rtn = str + "";
		rtn = rtn.replace(/ /g,'&nbsp');
		rtn = rtn.replace(/\n/g,'<br>');
		rtn = rtn.replace(/\[b\]/g,'<strong>');
		rtn = rtn.replace(/\[\/b\]/g,'</strong>');
		
		rtn = rtn.replace(/\[img\]/g,'<img src=\"');
		rtn = rtn.replace(/\[\/img\]/g,'\">');
		
		rtn = rtn.replace(/\[color=/g,'<font color=');
		rtn = rtn.replace(/\[\/color\]/g,'</font>');
		
		rtn = rtn.replace(/\[align=left\]/g,'<div align=\"left\">');
		rtn = rtn.replace(/\[\/align\]/g,'</align>');
		
		
		
		rtn = rtn.replace(/\[/g,'<'); //将a里面的[字符都换成了‘呵呵’.
		rtn = rtn.replace(/\]/g,'>');
		
//		alert(rtn);
//		$("output_comment_message").attr("text").replace("[", "<");
		return rtn;
	};
	
	Model.prototype.image_commentClick = function(event){

	};

	
	Model.prototype.scrollView1PullDown = function(event){
		this.pageNo = 1;
		this.pageCount = 1;
		this.getReplies(this.tid, false);
	};

	
	Model.prototype.scrollView1PullUp = function(event){
		if (this.pageNo < this.pageCount){
			this.pageNo ++;
			this.getReplies(this.tid, true);
		}
	};

	
	return Model;
});