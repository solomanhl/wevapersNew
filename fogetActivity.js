define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button_submitClick = function(event){
		var username = this.comp("input_username").val();
		var email = this.comp("input_email").val();
		
		var me = this;
		$.ajax({
	        type: "get",
	        "async" : false,
	        url: me.server + "/servlet/ForgetPwdServlet",
	        contentType: "application/json; charset=utf-8",
	        dataType: "jsonp",
	        jsonp: "CallBack",
	        data: {
	        	"email" : email,
	        	"username" : username
	        },
	        success: function(resultData) {
//	        	alert(resultData.result);
//	        	alert(resultData + "/" + JSON.stringify(resultData));
	        	var uid = resultData.uid;
	        	var status = resultData.status;

//	        	alert(me.totalPage_study);
//	        	alert(notificationsObj + "/" + JSON.stringify(notificationsObj));
	        	        	
//	        	$.each(resultData,function(name,value) { 
//	        		alert(name); 
//	        		alert(value); 
//	        		}
//	        	);
	        	

		        	
		        if (status == 1){
		        	if (justep.Browser.isX5App){
						this.jumpToChangePwd(uid, username);
					}
		        	justep.Shell.closePage();
		        }else if (status == -1){ //找不到用户
		        	if (justep.Browser.isX5App){
						window.plugins.toast.show("找不到用户", "long", "center");
					}
		        }else if (status == 0){	//修改失败
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
	
	Model.prototype.jumpToChangePwd = function (uid, username){
		var url = require.toUrl("./chagePassActivity.w");
		var params = {
	        from : "fogetActivity",
	        uid : uid,
	        name: username,
	        password : "",
	        data : {
	            // 将data中的一行数据传给对话框
//	            data_forum : this.comp("pre_forum_forum").getCurrentRow().toJson()
	        }
	    };
	    justep.Shell.showPage(url, params);
	};

	return Model;
});