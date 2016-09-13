define(function(require){
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