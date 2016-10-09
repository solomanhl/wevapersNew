define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	
	/**
  导入相关插件
**/
    require("cordova!com.justep.cordova.plugin.qq");
    require("cordova!com.justep.cordova.plugin.weibo");
    require("cordova!com.justep.cordova.plugin.weixin.v3");
    
    require("cordova!cordova-plugin-x-toast");
    
    var utils = require("$UI/system/components/justep/common/utils");
	
	var Model = function(){
		this.callParent();
		
		this.title;
		this.img = require.toUrl("./images/logo.png");
		this.url;
	};

	
	Model.prototype.modelActive = function(event){
//		alert("modelActive");
	};
	
	
	Model.prototype.modelParamsReceive = function(event){
//		alert("2.modelParamsReceive");
		var context = this.getContext();
		 var me = this;
	   this.img = event.params.img;
	    this.title = event.params.title;
	    this.url = event.params.url;
//	    alert(data);
	};
	
	Model.prototype.modelLoad = function(event){
//		alert("1.load");
	};

	//微博分享
	Model.prototype.image1Click = function(event){
		var me = this;
		 function success(result) {
//            alert(JSON.stringify(result));
        }
        function error(result) {
//            alert(JSON.stringify(result));
        }
		var args = {};
/**		//这里是旧插件的逻辑 分享图片+网页
		args.url = "http://www.wex5.com";
		args.title = "这是title";
		args.description = "这是description";
		args.defaultText = "欢迎来到起步科技！";
		args.imageUrl = "http://bbs.wex5.com/data/attachment/block/c4/c448e8db99060f6f28ded2bcfdcc89d8.jpg";
**/
		//这里是新插件的写法 分享图片+网页
		args.url = this.url;
		args.defaultText = "wevapers";
		args.media = {
				type : "image",
				description : "来自wevapers",
				title : "这里是title",
				url : "http://bbs.wex5.com/data/attachment/block/c4/c448e8db99060f6f28ded2bcfdcc89d8.jpg"
		};

		navigator.Weibo.shareToWeibo(success, error,args);
	};

	//QQ联系人
	Model.prototype.image2Click = function(event){
		function success(result) {
			if ( justep.Browser.isX5App ){
				window.plugins.toast.show("QQ分享成功！", "long", "center");
			}else{
				justep.Util.hint("QQ分享成功！");
			}
//	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	    	if ( justep.Browser.isX5App ){
				window.plugins.toast.show("QQ分享失败！" + JSON.stringify(result), "long", "center");
			}else{
				justep.Util.hint("QQ分享失败！" + JSON.stringify(result));
			}
//	        alert(JSON.stringify(result));
	    }
//	    var me = this;
	    var args = {};
	    args.url = utils.getShareUrl(window.location.href);
//	    alert(args.url);
	    args.title =  this.title;
	    args.description = "来自wevapers";
	    args.imageUrl = this.img;
	    args.appName = "wevapers"; 
	    navigator.QQ.shareToQQ(success, error, args);
		};

	//QQ空间
	Model.prototype.image3Click = function(event){
		function success(result) {
			if ( justep.Browser.isX5App ){
				window.plugins.toast.show("QQ空间分享成功！" , "long", "center");
			}else{
				justep.Util.hint("QQ空间分享成功！");
			}
//	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	    	if ( justep.Browser.isX5App ){
				window.plugins.toast.show("QQ空间分享失败！" + JSON.stringify(result), "long", "center");
			}else{
				justep.Util.hint("QQ空间分享失败！" + JSON.stringify(result));
			}
//	        alert(JSON.stringify(result));
	    }
//	    var me = this;
	    var args = {};
	    args.url = location.href.split('#')[0];
	    args.title =  this.title;
	    args.description = "来自wevapers";
	    args.imageUrl = [this.img];
	    args.appName = "wevapers";
	 
	    navigator.QQ.shareToQzone(success, error, args);
	};

	//微信联系人
	Model.prototype.image4Click = function(event){
		function success(result) {
			if ( justep.Browser.isX5App ){
				window.plugins.toast.show("微信分享成功！", "long", "center");
			}else{
				justep.Util.hint("微信分享成功！");
			}
//	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	    	if ( justep.Browser.isX5App ){
				window.plugins.toast.show("微信分享失败！" + JSON.stringify(result), "long", "center");
			}else{
				justep.Util.hint("微信分享失败！" + JSON.stringify(result));
			}
//	        alert(JSON.stringify(result));
	    }
//	    var me = this;
//	    alert(this.img);
	    
	    navigator.weixin.share({
	        message : {
	            title : this.title,
	            description : "来自wevapers",
	            mediaTagName : "wevapers",
	            thumb : require.toUrl("./images/logo.png"),
	            media : {
//	                 type: weixin.Type.WEBPAGE, // webpage
	                webpageUrl : window.location.href
	            // webpage
	            }
	        },
	        scene : navigator.weixin.Scene.SESSION
	    }, success, error);
	};

	//微信朋友圈
	Model.prototype.image5Click = function(event){
		function success(result) {
			if ( justep.Browser.isX5App ){
				window.plugins.toast.show("朋友圈分享成功！", "long", "center");
			}else{
				justep.Util.hint("朋友圈分享成功！");
			}
//	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	    	if ( justep.Browser.isX5App ){
				window.plugins.toast.show("朋友圈分享失败！" + JSON.stringify(result), "long", "center");
			}else{
				justep.Util.hint("朋友圈分享失败！" + JSON.stringify(result));
			}
//	        alert(JSON.stringify(result));
	    }
//	    var me = this;
//	    alert(me.url);
	    navigator.weixin.share({
	        message : {
	            title : this.title,
	            description : "来自wevapers",
	            mediaTagName : "wevapers",
	            thumb : require.toUrl("./images/logo.png"),
	            media : {
	                // type: weixin.Type.WEBPAGE, // webpage
	                webpageUrl : window.location.href
	            // webpage
	            }
	        },
	        scene : navigator.weixin.Scene.TIMELINE
	    }, success, error);
	};


	return Model;
});