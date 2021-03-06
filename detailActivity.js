define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		
		this.server = "http://wevapers.gkybi.com.cn";
		this.imgserver = "http://www.wevapers.com.cn";
		
		this.pre_forum_post;
		this.pre_forum_thread;
//		this.post;
		
		this.name;
		this.fid;
		this.tid;
		this.message;
		
		this.subject;
		this.author;
		this.views;
		this.replies;
		
		this.shareimg = require.toUrl("./images/logo.png");//传给分享的img
		
		this.pageNo=1;
		this.pageCount=1;
		
		this.attachmentsObj = null; //附件列表json对象
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
	    this.name = event.params.name;
	    var data_post = event.params.data_post;
	    
//	    alert(from + data_post);
	   
	    var post = this.comp("post");
	    post.loadData([data_post]);
	    post.first();

	    this.subject = post.val("subject");
	    this.author = post.val("author");
	    this.fid = post.val("fid");
	    this.tid = post.val("tid");
		this.views = post.val("views");
		this.replies = post.val("replies");
		
		this.getMessage(this.tid);
		
//		this.getAttachPic(); //请求该tid中的图片 含回帖 顺带把主帖中的图片替换掉
		
//		this.getReplies(this.tid, false);//请求回帖
	    
		
//	    alert(this.tid);

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
	        	me.comp("output_message").set({value:me.replace(me.message)});
	        	me.updateUI();
	        	
	        	me.getAttachPic(); //请求该tid中的图片 含回帖 顺带把主帖中的图片替换掉
//	        	
//	        	me.getReplies(me.tid, false);//请求回帖
	        	
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
		var list_comment = this.comp("list_comment");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForumPostListServlet",
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
	        	var pageCount, pageNo, postsObj;
	        	
	        	pageCount = resultData.pageCount;
	        	pageNo = resultData.pageNo;
	        	postsObj = resultData.posts;
	        	
	        	me.pageCount = pageCount;
	        	me.pageNo = pageNo;
	        	
//	        	alert(pageNo);
//	        	alert(postsObj + "/" + JSON.stringify(postsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNo > 0){
		        	json={"@type" : "table","replies" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :postsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	
	//获取tid中的图片附件 含回帖
	Model.prototype.getAttachPic = function(){
		var me = this;
		var data = this.comp("attachments");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForumAttachmentListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"tid" : me.tid
	        },
	        success: function(resultData) {
//	        	alert(resultData.message);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var count;
	        	
	        	count = resultData.count;
	        	me.attachmentsObj = resultData.attachments;
	        	
//	        	alert(pageNo);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (count > 0){
	        		json={"@type" : "table","attachments" : {"idColumnName" : "aid","idColumnType" : "Integer", },"rows" :me.attachmentsObj };
		        	data.loadData(json, false);
		        	
	        		//顺带把主帖的图片替换掉
	        		var output_message = me.comp("output_message");
	        		var message = me.replaceAttach(output_message.value);
		        	output_message.set({value:message});
		        	
		        	me.getReplies(me.tid, false);//请求回帖
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	//通过附件列表，替换回帖中的附件图片
	Model.prototype.replaceAttach = function(message){
		var me = this;
		var msg = message;
//		alert(JSON.stringify(this.attachmentsObj));
		if (msg !="" && msg != null){
			var aid;
		    var attachment;
			$.each(me.attachmentsObj, function (i, item){
	//			alert(i);
				if (i ==0 ){
					me.shareimg = me.imgserver + "/data/attachment/forum/" + item.attachment;
				}
				aid = item.aid;
				attachment = item.attachment;
	//			alert( aid + "/" + attachment);
				msg = me.replaceAttachFlag(aid, attachment, msg);//替换正文中的附件图片
				}
			);
		}
		
//		alert(msg);
		return msg;
	};
	
	//替换图片附件
	Model.prototype.replaceAttachFlag = function (aid, attachment , message){
		//[attach]182[/attach] 已经转成了 <attach>182</attach>
//		rtn = rtn.replace(/\[img\]/g,'<img src=\"');
//		rtn = rtn.replace(/\[\/img\]/g,'\">');
//		var output_message = this.comp("output_message");

		if (message != "" && message != null){
			var msgOld = message; 
			var strOld = "<attach>" + aid + "</attach>";
			var strNew = "<img width=\"100%\" height=auto src=\"" + this.imgserver + "/data/attachment/forum/" + attachment + "\">";
			var msgNew = msgOld.replace(strOld, strNew);
			return msgNew;
		}else{
			return message;
		}
		
//		output_message.set({value:msgNew});
//		alert(msgNew);
	};
	
	
	Model.prototype.updateUI = function(){
//	alert(this.message);
		this.comp("output_subject").set({value:this.subject});
		this.comp("output_author").set({value:this.author});
		this.comp("output_views").set({value:"浏览" + this.views + "次"});
		this.comp("output_replies").set({value:this.replies + "评论"});
		this.comp("output_message").set({value:this.replace(this.message)});
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
		
		rtn = rtn.replace(/\[img=0,1\]/g,'<img src=\"');
		rtn = rtn.replace(/\[img\]/g,'<img src=\"');
		rtn = rtn.replace(/\[\/img\]/g,'\"/>');
		
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

	
	Model.prototype.modelUnLoad = function(event){
//		alert(this.name);
//		setTimeout(function(){
			justep.Shell.fireEvent("onRefreshList", {
				"fid" : this.fid, 
				"name" : this.name
			});
//		},5);
	};

	
	//分享
	Model.prototype.image_shareClick = function(event){
		var windowContainer1 = this.comp("windowContainer1");
		var url = require.toUrl("./share.w");
		var param = {"img" : this.shareimg,
				"title" : this.subject,
				"url" : new justep.URL(window.location.href)
				};
		windowContainer1.load(url, param);
//		alert("share");
		this.comp("popOver_share").show();

		$(".popOver_share .x-popOver-content").css("top","auto");
		$(".popOver_share .x-popOver-content").css("bottom","0");
	};

	
	return Model;
});