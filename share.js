define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	/**
  导入相关插件
**/
    require("cordova!com.justep.cordova.plugin.qq");
    require("cordova!com.justep.cordova.plugin.weibo");
    require("cordova!com.justep.cordova.plugin.weixin.v3");
	
	var Model = function(){
		this.callParent();
		
		this.title;
		this.img = require.toUrl("./images/logo.png");
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
//	    alert(data);
	};
	
	Model.prototype.modelLoad = function(event){
//		alert("1.load");
	};

	//微博分享
	Model.prototype.image1Click = function(event){
		 function success(result) {
            alert(JSON.stringify(result));
        }
        function error(result) {
            alert(JSON.stringify(result));
        }
        navigator.Weibo.shareToWeibo(success, error, {
            "title" : this.title,
            "url" : new justep.URL(window.location.href),
            "imageUrl" : this.img
        });
	};

	//QQ联系人
	Model.prototype.image2Click = function(event){
		function success(result) {
	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	        alert(JSON.stringify(result));
	    }
	    var args = {};
	    args.url = new justep.URL(window.location.href);
	    alert(args.url);
	    args.title =  this.title;
	    args.description = "分享到qq";
	    args.imageUrl = this.img;
	    args.appName = "wevapers"; 
	    navigator.QQ.shareToQQ(success, error, args);
		};

	//QQ空间
	Model.prototype.image3Click = function(event){
		function success(result) {
	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	        alert(JSON.stringify(result));
	    }
	    var args = {};
	    args.url = location.href.split('#')[0];
	    args.title =  this.title;
	    args.description = "desc";
	    args.imageUrl = [this.img];
	    args.appName = "wevapers";
	 
	    navigator.QQ.shareToQzone(success, error, args);
	};

	//微信联系人
	Model.prototype.image4Click = function(event){
		function success(result) {
	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	        alert(JSON.stringify(result));
	    }
	    navigator.weixin.share({
	        message : {
	            title : this.title,
	            description : "分享到微信",
	            mediaTagName : "wevapers",
	            thumb : this.img,
	            media : {
	                // type: weixin.Type.WEBPAGE, // webpage
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
	        alert(JSON.stringify(result));
	    }
	    function error(result) {
	        alert(JSON.stringify(result));
	    }
	    navigator.weixin.share({
	        message : {
	            title : this.title,
	            description : "分享到微信",
	            mediaTagName : "wevapers",
	            thumb : this.img,
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