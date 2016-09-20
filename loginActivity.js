define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-x-toast");
	
	var Model = function(){
		this.callParent();
		
		this.onSuccess = function(msg) {
//			justep.Util.hint("Toast shown: "+msg);
		}
		this.onError = function(msg) {
//			justep.Util.hint("Toast error: "+msg);
		}
		
		this.server = "http://wevapers.gkybi.com.cn";
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};



	Model.prototype.button_loginClick = function(event){
//		justep.Shell.closePage();

		var uname = this.comp("input_username").val();
		var password = this.comp("password1").val();
		
		if (uname == "" || password == ""){
			window.plugins.toast.show("请输入用户名或密码", "long", "center");
		}else{
			this.login(uname, password);
		}
	};

	Model.prototype.login = function(uname, password){
		var me = this;
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/LoginServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"username" : uname,
	        	"password" : password
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var status, uid;	
	        	status = resultData.status;
	        	uid = resultData.uid;
	        	
//	        	alert(status);
//	        	alert(notificationsObj + "/" + JSON.stringify(notificationsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (status == 1){ //成功
		        	if (justep.Browser.isX5App){
		        		window.plugins.toast.show("登录成功", "long", "center");
		        	}
		        	me.saveLocal(uname, password, uid, status);
		        	justep.Shell.closePage();		        	
	        	}else if (status == 0){ //用户不存在
		        	if (justep.Browser.isX5App){
		        		window.plugins.toast.show("用户不存在", "long", "center");
		        	}
	        	}else if (status == -1){ //密码错误
		        	if (justep.Browser.isX5App){
		        		window.plugins.toast.show("登录失败", "long", "center");
		        	}
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};

	//保存到本地
	Model.prototype.saveLocal = function (uname, password, uid, status){
		localStorage.setItem('uname',uname); 
		localStorage.setItem('password',password); 
		localStorage.setItem('uid',uid); 
		localStorage.setItem('status',status);
	};
	
	Model.prototype.image_closeClick = function(event){
		justep.Shell.closePage();
	};



	Model.prototype.modelUnLoad = function(event){
		setTimeout(function(){
			justep.Shell.fireEvent("onRefreshUser", {});
		},5);
	};


	//注册账号
	Model.prototype.label_regClick = function(event){
		var url = require.toUrl("./regActivity.w");
		var params = {
	        from : "loginActivity",
	        data : {
	            // 将data中的一行数据传给对话框
//	            data_forum : this.comp("pre_forum_forum").getCurrentRow().toJson()
	        }
	    };
	    justep.Shell.showPage(url, params);
	};


	//忘记密码
	Model.prototype.label_fogetClick = function(event){
		var url = require.toUrl("./fogetActivity.w");
		var params = {
	        from : "loginActivity",
	        data : {
	            // 将data中的一行数据传给对话框
//	            data_forum : this.comp("pre_forum_forum").getCurrentRow().toJson()
	        }
	    };
	    justep.Shell.showPage(url, params);
	};



	return Model;
});

$(function(){
	var oHeight = $(document).height(); //浏览器当前的高度
   
	$(window).resize(function(){
	 
	    if($(document).height() < oHeight){
	        $(".wrapper .software").css("position","static");
	        $(".wrapper .software_bg").css("position","static");

	    }else{
	        $(".wrapper .software").css("position","absolute");
	        $(".wrapper .software_bg").css("position","absolute");
	    }
	        
	   });

	// 登录底部固定
})

