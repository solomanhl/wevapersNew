define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		
		this.uid;
		this.username;
		
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		var me = this;
		
		this.uid = event.params.uid;
		this.username = event.params.username;
	};

	return Model;
});