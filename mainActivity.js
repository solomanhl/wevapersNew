define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	
	var Model = function(){
		this.callParent();
		
		this.server = "http://wevapers.gkybi.com.cn/";
		this.imgserver = "http://www.wevapers.com.cn";
		
		this.localUserLoaded = false;
		this.username;
		this.password;
		this.uid;
		this.login;
		
		this.pageNo_homelist=1;
		this.pageCount_homelist=1;
		
		//显示或隐藏 消息 下的系统  评论 @我
		this.showMsgSys = justep.Bind.observable(true);
		this.showMsgCom = justep.Bind.observable(false);
		this.showMsgAtMe = justep.Bind.observable(false);
		
		
	};
	
	
	Model.prototype.modelLoad = function(event) {
		var self = this;
//		localStorage.setItem('username','测试用户');
		this.loadUser();
		
		justep.Shell.setIsSinglePage(true);
		this.getHomeList(false);
	}
		
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
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
		        	json={"@type" : "table","homeList" : {"idColumnName" : "fid","idColumnType" : "Integer", },"rows" :threadsObj };
		        	data.loadData(json, isApend);
		        	
//		        	alert(data.count());
	        	}
	        	
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
	}
	
	
	//找附件图片
	Model.prototype.findThumbPicBytid = function(attachment){
		var rtn = this.toUrl("./images/forum_default.jpg" );
		if (attachment !="" || attachment!= null){
			rtn = this.imgserver + "/data/attachment/forum/" + attachment;
		}
		
		return rtn;
	};

	Model.prototype.image_searchClick = function(event){
		
		
	};
	Model.prototype.loginNow = function(event){
		var url = require.toUrl('./loginActivity.w');
//		window.open(url);
//		if (justep.Browser.isX5App && justep.Browser.isAndroid) {
//			window.open(url,"_system");
//	    } else {
//	        window.open(url, '_blank', 'toolbarposition=top,location=no,enableViewportScale=yes');
//	    }
	   justep.Shell.showPage(url);
	};
	
	//找论坛的icon
	Model.prototype.getIcon = function(icon) {
//		alert(fid);
		var rtn;
		rtn = this.imgserver + "/data/attachment/common/" + icon;
		if (rtn == "") {
			rtn  = this.toUrl("./images/common_default.png" );
		}
		return rtn;
	}
	
	
	Model.prototype.listClick = function(event){
		
		var current = event.bindingContext.$object;//获得当前行
//		var url = require.toUrl("./detailActivity.w?p1=p1Value&p2=p2Value");
		var url = require.toUrl("./detailActivity.w");
//		var tid = this.comp("homeList").getCurrentRow().val("tid");
	    var params = {
	        from : "mainActivity",
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
	
	//调取登录用户信息
	Model.prototype.loadUser = function(){

		
		if (this.username){
//			alert("localStorage.getItem:username,value:" + localStorage.getItem('author'));
//			this.comp("output_username").set({"value": this.username});
			return this.username;
		}else{
			return "";
		}
	};
	
	//清除登录用户信息
	Model.prototype.clearUser = function(event){

		this.username = "";
		localStorage.setItem('username', '');
		this.password = "";
		localStorage.setItem('password', '');
		this.login = 0;
		localStorage.setItem('login', 0);
		this.uid = "";
		localStorage.setItem("uid", "");
		
		this.loginNow(event);
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
	
	
	return Model;
});

$(function(){
//	$(".x-panel-bottom a").click(function(){
//		$(".x-panel-bottom a .this").removeClass("this")
//		$(this).find("span").addClass("this");
//	})

	// 底部导航切换

	$(".content_forum .col3 ul li").click(function(){
		$(".content_forum .col3 ul li h5").css("color","#444444");
		$(".content_forum .col3 ul li h5").css("background","#f5f5f5");
		$(this).find("h5").css("color","#21b589");
		$(this).find("h5").css("background","#ffffff");
	});

	// 社区栏目切换

	$(".content_msg .msg .x-card .list-nav a").click(function(){
		$(this).addClass("this").siblings(".this").removeClass("this");
	})

	// 消息顶部导航切换
	
})
