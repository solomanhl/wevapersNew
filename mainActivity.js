define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-x-toast");
	require("cordova!cordova-plugin-x-socialsharing");
	
	
	var Model = function(){
		this.callParent();
		
		this.server = "http://wevapers.gkybi.com.cn";
		this.imgserver = "http://www.wevapers.com.cn";
		
		this.deviceIsReady = false;
		
		this.localUserLoaded = false;
		this.username;
		this.password;
		this.uid;
		this.status;
		this.login;
		
		this.pageNo_homelist=1;
		this.pageCount_homelist=1;
		
		//显示或隐藏 消息 下的系统  评论 @我
		this.showMsgSys = justep.Bind.observable(true);
		this.showMsgCom = justep.Bind.observable(false);
		this.showMsgAtMe = justep.Bind.observable(false);
		this.pageNo_msg_sys = 1;
		this.pageCount_msg_sys = 1;
		this.pageNo_msg_com = 1;
		this.pageCount_msg_com = 1;
		this.pageNo_msg_atme = 1;
		this.pageCount_msg_atme = 1;
		
	};
	
	
	Model.prototype.modelLoad = function(event) {
		var self = this;
//		localStorage.setItem('username','测试用户');
		this.deviceIsReady = true;
		//添加事件
		justep.Shell.on("onRefreshUser", this.onRefreshUser, this);
		
		this.getUserStatus();
		
		justep.Shell.setIsSinglePage(true);
		this.getHomeList(false);
		this.getForum("data_forum_forum", "forum", 54);//database, type，fup，获取游记group下的论坛
		this.getForum("data_forum_group", "group", 0);//database, type，fup，获取group
	}
	
		
	Model.prototype.modelUnLoad = function(event){
		//卸载事件
		justep.Shell.off("onRefreshUser", this.onRefreshUser);
	};
	
	Model.prototype.onRefreshUser = function(event){
		this.getUserStatus();
		
	};
	
	//获取用户信息
	Model.prototype.getUserStatus = function(){
		this.username = localStorage.getItem('uname');
		this.password = localStorage.getItem('password');
		this.uid = localStorage.getItem('uid');
		this.status = localStorage.getItem('status');
		
		//刷新用户
		if (this.username == "" || this.username == null){
			$("#button_login_now").text("请登录");
			$("#output_username").text("还没有登录哦");
		}else{
			$("#button_login_now").text("退出账号");
			$("#output_username").text(this.username);
		}
		
	};
	
		
	//清除登录用户信息
	Model.prototype.clearUser = function(){

		this.username = "";
		localStorage.setItem('uname', '');
		this.password = "";
		localStorage.setItem('password', '');
		this.login = 0;
		localStorage.setItem('status', 0);
		this.uid = "";
		localStorage.setItem("uid", "");
		
		this.loginNow();
	};
	
		
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};
	
	
	//首页帖子上拉刷新
	Model.prototype.scrollView1PullDown = function(event){
		this.pageNo_homelist = 1;
		this.pageCount_homelist = 1;
		this.getHomeList(false);
	};
	
	//首页帖子下拉加载更多
	Model.prototype.scrollView1PullUp = function(event){
		if (this.pageNo_homelist < this.pageCount_homelist){
			this.pageNo_homelist ++;
			this.getHomeList(true);
		}
	};
	
	//获取首页列表
	Model.prototype.getHomeList = function(isApend){
		var me = this;
		var data = this.comp("homeList");
		
		$.ajax({
	        type: "get",
	        "async" : false,
//	        url: me.server + "/servlet/ForumPostListServlet",
	        url: me.server + "/servlet/ForumThreadListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"pageNo" : me.pageNo_homelist,
//	        	"first" : 1,
//	        	"tid" : 2
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var pageCountObj, threadsObj, pageNoObj;	
	        	threadsObj = resultData.threads;
	        	pageNoObj = resultData.pageNo;
	        	pageCountObj = resultData.pageCount;
	        	
	        	me.pageNo_homelist = pageNoObj;
	        	me.pageCount_homelist = pageCountObj;
//	        	alert(me.totalPage_study);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNoObj > 0){
		        	json={"@type" : "table","homeList" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :threadsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	//获取论坛group   forum
	Model.prototype.getForum = function(database, type, fup){
		var me = this;
		var data = this.comp(database);
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForumForumListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"type" : type,
	        	"fup" : fup
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
//	        	alert(me.totalPage_study);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
		        json={"@type" : "table",database : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :resultData };
		        data.loadData(json, false);
		        	
//		        alert(data.count());
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
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
	
	
	//找附件图片
	Model.prototype.findThumbPicBytid = function(attachment){
		var rtn = this.toUrl("./images/default_img.png" );
		if (attachment !="" && attachment!= null){
			rtn = this.imgserver + "/data/attachment/forum/" + attachment;
		}
		
		return rtn;
	};

	Model.prototype.image_searchClick = function(event){
		
		
	};
	
	Model.prototype.loginNow = function(){
		var url = require.toUrl('./loginActivity.w');
//		window.open(url);
//		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
//			window.open(url,"_system");
//	    } else {
//	        window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
//	    }
		if (this.status == 1){
			this.status = 0;
			this.clearUser();
		}
	   justep.Shell.showPage(url);
	};
	
	//找论坛的icon
	Model.prototype.getIcon = function(icon) {
//		alert(icon);
		var rtn;
		rtn = this.imgserver + "/data/attachment/common/" + icon;
//		alert(rtn);
		if (icon == "") {
			rtn  = this.toUrl("./images/logo.png" );
		}
		return rtn;
	}
	
	
	Model.prototype.listClick = function(event){
		
		var current = event.bindingContext.$object;//获得当前行
//		var url = require.toUrl("./detailActivity.w?p1=p1Value&p2=p2Value");
		var url = require.toUrl("./detailActivity.w");
//		var tid = this.comp("homeList").getCurrentRow().val("tid");
//		alert(tid);
	    var params = {
	        from : "mainActivity",
	        // 将data中的一行数据传给对话框
	        data_post : this.comp("homeList").getCurrentRow().toJson(),
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
	
	
	//根据论坛fid打开相应的论坛帖子列表
	Model.prototype.li4Click = function(event){
		var current = event.bindingContext.$object;//获得当前行
		var url = require.toUrl("./listActivity.w");
		var params = {
	        from : "mainActivity",
	        fid : current.val("fid"),
//	        name: current.val("name"),
	        data : {
	            // 将data中的一行数据传给对话框
//	            data_forum : this.comp("pre_forum_forum").getCurrentRow().toJson()
	        }
	    }
		justep.Shell.showPage(url, params);
	};
	
	//获取登录状态
	Model.prototype.getLoginState = function() {
//		alert(JSON.stringify(this.login) );
//		alert(this.login);

		if (!this.localUserLoaded){//没有读取本地用户
			this.username = localStorage.getItem('username');
			this.password = localStorage.getItem('password');
			this.uid = localStorage.getItem('uid');
			this.login = localStorage.getItem('login');
			this.localUserLoaded = true;
			
//			alert("localUserLoaded");
		}
		
//		alert("登录状态：" + this.login);
		
		var rtn ;
		var latestValue = this.login;
//		alert(latestValue);
//        $.each(this.login, function(i, item) {
//        	latestValue = item.latestValue ;
//        	alert(latestValue);
//        });
        
        
        if (latestValue == 1){
        	rtn = true;
        }else if (latestValue == 0){
        	rtn = false;
        }else{
        	rtn = false;
        	this.localUserLoaded = false;
        }
		return rtn;
	}
	
	

	
	//获取系统消息
	Model.prototype.getMsg_sys = function(isApend){
	var me = this;
		var data = this.comp("notify_sys");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/HomeNotificationListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"pageNo" : me.pageNo_msg_sys,
	        	"uid" : me.uid,
	        	"types" : "system"
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var pageCountObj, notificationsObj, pageNoObj;	
	        	notificationsObj = resultData.notifications;
	        	pageNoObj = resultData.pageNo;
	        	pageCountObj = resultData.pageCount;
	        	
	        	me.pageNo_msg_sys = pageNoObj;
	        	me.pageCount_msg_sys = pageCountObj;
//	        	alert(me.totalPage_study);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNoObj > 0){
		        	json={"@type" : "table","notify_sys" : {"idColumnName" : "id","idColumnType" : "Integer", },"rows" :notificationsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	//获取交流消息
	Model.prototype.getMsg_com = function(isApend){
	var me = this;
		var data = this.comp("notify_com");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/HomeNotificationListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"pageNo" : me.pageNo_msg_com,
	        	"uid" : me.uid,
	        	"types" : "post"
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var pageCountObj, notificationsObj, pageNoObj;	
	        	notificationsObj = resultData.notifications;
	        	pageNoObj = resultData.pageNo;
	        	pageCountObj = resultData.pageCount;
	        	
	        	me.pageNo_msg_com = pageNoObj;
	        	me.pageCount_msg_com = pageCountObj;
//	        	alert(me.totalPage_study);
//	        	alert(threadsObj + "/" + JSON.stringify(threadsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNoObj > 0){
		        	json={"@type" : "table","notify_com" : {"idColumnName" : "id","idColumnType" : "Integer", },"rows" :notificationsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	//获取atme消息
	Model.prototype.getMsg_atme = function(isApend){
		var me = this;
		var data = this.comp("notify_atme");
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/HomeNotificationListServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"pageNo" : me.pageNo_msg_atme,
	        	"uid" : me.uid,
	        	"types" : "follower,friend"
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var pageCountObj, notificationsObj, pageNoObj;	
	        	notificationsObj = resultData.notifications;
	        	pageNoObj = resultData.pageNo;
	        	pageCountObj = resultData.pageCount;
	        	
	        	me.pageNo_msg_atme = pageNoObj;
	        	me.pageCount_msg_atme = pageCountObj;
//	        	alert(me.totalPage_study);
//	        	alert(notificationsObj + "/" + JSON.stringify(notificationsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (pageNoObj > 0){
		        	json={"@type" : "table","notify_atme" : {"idColumnName" : "id","idColumnType" : "Integer", },"rows" :notificationsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	//消息页
	Model.prototype.content_msgActive = function(event){
		this.comp("button3").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon7.png")
		});
		
		this.getMsg_sys(false);
		this.getMsg_com(false);
		this.getMsg_atme(false);
	};
	
	//点击消息-系统
	Model.prototype.button_msg_sysClick = function(event){
		this.showMsgSys.set(true);
		this.showMsgCom.set(false);
		this.showMsgAtMe.set(false);
	};
	
	//点击消息-评论
	Model.prototype.button_msg_comClick = function(event){
		this.showMsgSys.set(false);
		this.showMsgCom.set(true);
		this.showMsgAtMe.set(false);
	};
	
	//点击消息-@我
	Model.prototype.button_msg_atmeClick = function(event){
		this.showMsgSys.set(false);
		this.showMsgCom.set(false);
		this.showMsgAtMe.set(true);
	};
	
	Model.prototype.show_msg_sys = function(){
		return this.showMsgSys;
	};
	
	Model.prototype.show_msg_com = function(){
		return this.showMsgCom;
	};
	
	Model.prototype.show_msg_atme = function(){
		return this.showMsgAtMe;
	};
	
	
	//发帖
	Model.prototype.image_publishClick = function(event){
		var url = require.toUrl('./newPostActivity.w');
	   justep.Shell.showPage(url);
	};
	
	//消息页下拉
	Model.prototype.scrollView_msgPullDown = function(event){

		if (this.show_msg_sys()){
			this.pageNo_msg_sys = 1 ;
			this.pageCount_msg_sys = 1;
			this.getMsg_sys(false);	
		}else if (this.show_msg_com()){
			this.pageNo_msg_com = 1 ;
			this.pageCount_msg_com = 1;
			this.getMsg_com(false);	
		}else if (this.show_msg_atme()){
			this.pageNo_msg_atme = 1 ;
			this.pageCount_msg_atme = 1;
			this.getMsg_atme(false);	
		}
	};
	
	//消息页上拉
	Model.prototype.scrollView_msgPullUp = function(event){
		if (this.show_msg_sys()){
			if ( this.pageNo_msg_sys < this.pageCount_msg_sys){
				this.getMsg_sys(true);	
			}
		}else if (this.show_msg_com()){
			if ( this.pageNo_msg_com < this.pageCount_msg_com){
				this.getMsg_com(true);	
			}
		}else if (this.show_msg_atme()){
			if ( this.pageNo_msg_atme < this.pageCount_msg_atme){
				this.getMsg_atme(true);	
			}
		}
	};
	

	
	Model.prototype.button_groupClick = function(event){
		var popOver_forum_group = this.comp("popOver_forum_group");
		popOver_forum_group.show();
	};
	

	
	Model.prototype.li_groupClick = function(event){
		var current = event.bindingContext.$object;//获得当前行
		var fup = current.val("fid");	//type=group的fid，就是forum的fup
		this.getForum("data_forum_forum", "forum", fup);	//更新该分类下的论坛	
		this.comp("popOver_forum_group").hide();
	};
	

	//点论坛，跳转到论坛帖子列表
	Model.prototype.li_forumClick = function(event){
		var current = event.bindingContext.$object;//获得当前行
		var url = require.toUrl("./listActivity.w");
		var params = {
	        from : "mainActivity",
	        fid : current.val("fid"),
	        name: current.val("name"),
	        data : {
	            // 将data中的一行数据传给对话框
//	            data_forum : this.comp("pre_forum_forum").getCurrentRow().toJson()
	        }
	    };
	    justep.Shell.showPage(url, params);
	};
	

	//修改密码
	Model.prototype.div_xiugaiClick = function(event){
		if (this.status == 1){
			var url = require.toUrl("./chagePassActivity.w");
			var params = {
		        from : "mainActivity",
		        uid : this.uid,
		        name: this.username,
		        password : this.password,
		        data : {
		            // 将data中的一行数据传给对话框
	//	            data_forum : this.comp("pre_forum_forum").getCurrentRow().toJson()
		        }
		    };
		    justep.Shell.showPage(url, params);
		}else {
			if (justep.Browser.isX5App){
				window.plugins.toast.show("请先登录", "long", "center");
			}
		}
		
	};
	

	//分享wevapers，通用分享
	Model.prototype.div_fenxiangClick = function(event){
		if (justep.Browser.isX5App){
//			var url = window.location.href;
			var url = "<a href=\"http://www.wevapers.com\">Wevapers论坛</a>";
//			 plugins.socialsharing.share(message, subject, fileOrFileArray, url, successCallback, errorCallback);
	        plugins.socialsharing.share("Wevapers，万人迷的游记。\r\nMillion people in the travel notes.\r\n<a href=\"http://59.173.242.37:10000/wevapersNew/app.apk\">下载安卓版本 Android Version</a>\r\n<a href=\"http://59.173.242.37:10000/wevapersNew/app.ipa\">下载IOS版本 IOS Version</a>\r\n", 
	        		"Wevapers", 
	        		null,
	        		url,
	        		null,
	        		null);
	       
		}
		
	};
	

	
	Model.prototype.content_homeActive = function(event){
		if (this.deviceIsReady){
			this.comp("button1").set({
			  "icon": "img:" + this.toUrl("./images/nav_icon5.png")
			});
		}
	};
	

	
	Model.prototype.content_homeInactive = function(event){
		this.comp("button1").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon1.png")
		});
	};
	

	
	Model.prototype.content_forumActive = function(event){
//		alert("forum act");
		this.comp("button2").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon6.png")
		});
	};
	

	
	Model.prototype.content_forumInactive = function(event){
//		alert("forum Inact");
		this.comp("button2").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon2.png")
		});
	};
	

	
	Model.prototype.content_msgInactive = function(event){
		this.comp("button3").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon3.png")
		});
	};
	

	
	Model.prototype.content_meActive = function(event){
		this.comp("button4").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon8.png")
		});
	};
	

	
	Model.prototype.content_meInactive = function(event){
		this.comp("button4").set({
		  "icon": "img:" + this.toUrl("./images/nav_icon4.png")
		});
	};
	

	
	return Model;
});

//$(function(){
////	$(".x-panel-bottom a").click(function(){
////		$(".x-panel-bottom a .this").removeClass("this")
////		$(this).find("span").addClass("this");
////	})
//
//	// 底部导航切换
//
//	$(".content_forum .col3 ul li").click(function(){
//		$(".content_forum .col3 ul li h5").css("color","#444444");
//		$(".content_forum .col3 ul li h5").css("background","#f5f5f5");
//		$(this).find("h5").css("color","#21b589");
//		$(this).find("h5").css("background","#ffffff");
//	});
//
//	// 社区栏目切换
//
//	$(".content_msg .msg .x-card .list-nav a").click(function(){
//		$(this).addClass("this").siblings(".this").removeClass("this");
//	})
//
//	// 消息顶部导航切换
//	
//})
