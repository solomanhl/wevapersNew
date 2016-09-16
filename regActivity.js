define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		
		this.server = "http://wevapers.gkybi.com.cn/";
		
		this.check = false;
	};
	
	Model.prototype.reg = function(username, password, email, ip){
		var me = this;
		
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/RegisterServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"username" : username,
	        	"password" : password,
	        	"email" : email,
	        	"ip" : ip
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var status;	
	        	status = resultData.status;
	        	
//	        	alert(status);
//	        	alert(notificationsObj + "/" + JSON.stringify(notificationsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	
	        	if (status == 1){ //成功
		        	if (justep.Browser.isX5App){
		        		window.plugins.toast.show("注册成功", "long", "center");
		        	}else{
		        		alert("注册成功");
		        	}
//		        	me.saveLocal(uname, password, uid, status);
		        	justep.Shell.closePage();		        	
	        	}else if (status == 0){ //用户已存在
		        	if (justep.Browser.isX5App){
		        		window.plugins.toast.show("用户已存在，请更换用户名", "long", "center");
		        	}
	        	}else if (status == -1){ //失败
		        	if (justep.Browser.isX5App){
		        		window.plugins.toast.show("注册失败，请稍后再试", "long", "center");
		        	}
	        	}
	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};

	Model.prototype.button_submitClick = function(event){
		var username = this.comp("input_username").val();
		var email = this.comp("input_email").val();
		var pass1 = this.comp("password1").val();
		var pass2 = this.comp("password2").val();
		var password;
		var ip = "127.0.0.1";
		if (pass1 == pass2 && pass1 != null && pass1 != ""){
			password = pass1;
			if (this.check){
				this.reg(username, password, email, ip);
			}else{
				if (justep.Browser.isX5App){
			        window.plugins.toast.show("注册前必须同意使用协议", "long", "center");
			    }
			}
		}else{
			if (justep.Browser.isX5App){
		        window.plugins.toast.show("两次输入密码不一致", "long", "center");
		    }
		}
		
	};

	Model.prototype.checkbox1Change = function(event){
		this.check = !this.check;
//		alert(this.check);
	};

	return Model;
});