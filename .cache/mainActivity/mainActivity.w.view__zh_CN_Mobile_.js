window.__justep.__ResourceEngine.loadCss([{url: '/v_4a0199ba93524e7cb0caf2b14ed60fd4l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_360dfc95d1754e219348f692695f4706l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_bac5d9f31f234d2a835b9fd25e28f35el_zh_CNs_d_m/system/core.min.js','/v_323a4dbb69b9436b9c156a3c85479d94l_zh_CNs_d_m/system/common.min.js','/v_c51519fd992f4ee09dcac73a230a72abl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/shell/shell');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/wevapersNew/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cUBbQny';
	this._flag_='d7f26aa4404fd210f0b43633c00e4deb';
	this.callParent(contextUrl);
 require('css!$UI/wevapers/base').load();
 require('$UI/wevapers/jquery-1.10.2.min');
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"attachment":{"define":"attachment","label":"附件","name":"attachment","relation":"attachment","type":"String"},"author":{"define":"author","label":"作者","name":"author","relation":"author","type":"String"},"authorId":{"define":"authorId","label":"作者id","name":"authorId","relation":"authorId","rules":{"integer":true},"type":"Integer"},"dateline":{"define":"dateline","label":"发帖时间","name":"dateline","relation":"dateline","rules":{"integer":true},"type":"Long"},"fid":{"define":"fid","label":"帖子id","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"lastpost":{"define":"lastpost","label":"最后更新","name":"lastpost","relation":"lastpost","rules":{"integer":true},"type":"Long"},"replies":{"define":"replies","label":"回复数量","name":"replies","relation":"replies","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","label":"标题","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","label":"主题id","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"views":{"define":"views","label":"查看数量","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"tid","limit":20,"xid":"homeList"});
}}); 
return __result;});
