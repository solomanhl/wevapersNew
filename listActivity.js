define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		
		this.imgserver = "http://www.wevapers.com.cn";
		
		this.fid;
		this.name;
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		var me = this;
		var data_forum = event.params.data.data_forum;
		this.fid = event.params.fid;
		this.name = event.params.name;
		
		this.updateUI();
		
	};
	
	Model.prototype.updateUI = function(){
		this.comp("title").set({"title" : this.name});
	}
	
	Model.prototype.getFid = function(){
		return this.fid;
	}
	
	Model.prototype.subMessage = function(str){
		var out = str;
		var len = 20
		if (str.length > len){
			out = str.substring(0,len);
		}
		return out;
	}
	
	Model.prototype.dateTime = function(dateline){
		var timestampPost = dateline * 1000; //帖子时间转成毫秒级
		var time = new Date(timestampPost)//发帖标准时间
		return time.toLocaleDateString();
	}
	
	//获取浏览数
	Model.prototype.getViews = function (tid){
		
	}
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";	
	};
	
	//找附件图片
	Model.prototype.findThumbPicBytid = function(attachment){
		var rtn = this.toUrl("./images/forum_default.jpg" );
		
		if (attachment !== ""){
			rtn = this.imgserver + "/data/attachment/forum/" + rtn;
		}
//		alert(rtn); 
		return rtn;
	};

	return Model;
});

$(function(){
	$(".x-list #undefined_listTemplateUl1 .pic a ins").height($(".x-list #undefined_listTemplateUl1 .pic a ins").width());
	$(".x-list #undefined_listTemplateUl1 .pic a ins img").height($(".x-list #undefined_listTemplateUl1 .pic a ins").height());

	// 帖子列表图片排列

})