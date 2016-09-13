define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		justep.Shell.setIsSinglePage(true);
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : require.toUrl('$UI/wevapersNew/mainActivity.w')
				},
				"login" : {
					url : require.toUrl('$UI/wevapersNew/loginActivity.w')
				},
				"search" : {
					url : require.toUrl('$UI/wevapersNew/searchActivity.w')
				},
				"detail" : {
					url : require.toUrl('$UI/wevapersNew/detailActivity.w')
				}
			}
		})

	};

	Model.prototype.modelLoad = function(event){
		justep.Shell.showPage("main");
	};

	return Model;
});