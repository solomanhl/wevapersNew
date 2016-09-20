define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-x-toast");

	var Model = function(){
		this.callParent();
		
		this.uid;
		this.username;
		this.password_local;
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		var me = this;
		
		this.uid = event.params.uid;
		this.username = event.params.username;
		this.password_local = event.params.password;
		
//		alert(this.uid);
	};

	Model.prototype.button_submitClick = function(event){
	
		var passwd ,passwd1, passwd2, passwd_old;
		passwd1 = this.comp("password_new").val();
		passwd2 = this.comp("password_new2").val();
		passwd_old = this.comp("password_old").val();

		if (passwd1 == passwd2 && passwd1 != "" && passwd1 != null){
			
			passwd = passwd1;
			this.changePassword(passwd_old ,passwd)
			
		}else{
			if (justep.Browser.isX5App){
				window.plugins.toast.show("两次输入的密码不一样", "long", "center");
			}
		}
	};

	Model.prototype.changePassword = function (passwdOld, passwdNew){
		var me = this;
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/UpdatePwdServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"uid" : me.uid,
	        	"password" : passwdNew,
	        	"password_old" : passwdOld
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var count = resultData.count;

//	        	alert(me.totalPage_study);
//	        	alert(notificationsObj + "/" + JSON.stringify(notificationsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	

		        if (count == 1){
		        	localStorage.setItem('password',passwdNew); 
		        	justep.Shell.closePage();
		        }else if (count == -1){ //找不到用户
		        	if (justep.Browser.isX5App){
						window.plugins.toast.show("找不到用户", "long", "center");
					}
		        }else if (count == 0){	//修改失败
		        	if (justep.Browser.isX5App){
						window.plugins.toast.show("修改失败，请重试", "long", "center");
					}
		        }

	        	
	        },
	         error:function (){  
	        	 alert("服务器数据错误");
	         }
	    });
	};
	
	Model.prototype.modelUnLoad = function(event){
		setTimeout(function(){
			justep.Shell.fireEvent("onRefreshUser", {});
		},5);
	};
	
	return Model;
});