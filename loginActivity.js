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
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};



	Model.prototype.button_loginClick = function(event){
//		justep.Shell.closePage();

		var uname = this.comp("input_username").val();
	};



	Model.prototype.image_closeClick = function(event){
		justep.Shell.closePage();
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

