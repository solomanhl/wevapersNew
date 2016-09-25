define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/wevapersNew/detailActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfqeAZj';
	this._flag_='5e1d536a7a293a7a95bec6d057ea0a29';
	this.callParent(contextUrl);
 require('css!$UI/wevapers/base').load();
 require('$UI/wevapers/jquery-1.10.2.min');
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"attachment":{"define":"attachment","label":"附件","name":"attachment","relation":"attachment","type":"String"},"author":{"define":"author","label":"作者","name":"author","relation":"author","type":"String"},"authorId":{"define":"authorId","label":"作者id","name":"authorId","relation":"authorId","rules":{"integer":true},"type":"Integer"},"dateline":{"define":"dateline","label":"发帖时间","name":"dateline","relation":"dateline","rules":{"integer":true},"type":"Long"},"fid":{"define":"fid","label":"帖子id","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"lastpost":{"define":"lastpost","label":"最后更新","name":"lastpost","relation":"lastpost","rules":{"integer":true},"type":"Long"},"replies":{"define":"replies","label":"回复数量","name":"replies","relation":"replies","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","label":"标题","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","label":"主题id","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"views":{"define":"views","label":"查看数量","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"tid","limit":20,"xid":"post"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"author":{"define":"author","label":"回复人","name":"author","relation":"author","rules":{"integer":true},"type":"Integer"},"authorId":{"define":"authorId","label":"作者id","name":"authorId","relation":"authorId","rules":{"integer":true},"type":"Integer"},"dateline":{"define":"dateline","label":"回帖时间","name":"dateline","relation":"dateline","rules":{"integer":true},"type":"Long"},"fid":{"define":"fid","label":"论坛id","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"message":{"define":"message","label":"回帖内容","name":"message","relation":"message","type":"String"},"pid":{"define":"pid","label":"回复id","name":"pid","relation":"pid","rules":{"integer":true},"type":"Integer"},"position":{"define":"position","label":"楼层","name":"position","relation":"position","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","label":"标题","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","label":"主题id","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"pid","limit":20,"xid":"replies"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"aid":{"define":"aid","label":"附件id","name":"aid","relation":"aid","rules":{"integer":true},"type":"Integer"},"attachment":{"define":"attachment","label":"图片路径","name":"attachment","relation":"attachment","type":"String"}},"directDelete":false,"events":{},"idColumn":"aid","limit":20,"xid":"attachments"});
}}); 
return __result;});