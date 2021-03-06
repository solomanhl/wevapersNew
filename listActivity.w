<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="width:390px;height:auto;top:148px;left:311px;" onParamsReceive="modelParamsReceive" onunLoad="modelUnLoad" onLoad="modelLoad" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="themeList" idColumn="tid"><column label="论坛id" name="fid" type="Integer" xid="xid1"></column>
  <column label="作者" name="author" type="String" xid="xid2"></column>
  <column label="回复数量" name="replies" type="Integer" xid="xid3"></column>
  <column label="查看数量" name="views" type="Integer" xid="xid4"></column>
  <column label="标题" name="subject" type="String" xid="xid5"></column>
  <column label="最后更新" name="lastpost" type="Long" xid="xid6"></column>
  <column label="附件" name="attachment" type="String" xid="xid7"></column>
  <column label="发帖时间" name="dateline" type="Long" xid="xid8"></column>
  <column label="主题id" name="tid" type="Integer" xid="xid9"></column>
  <column label="作者id" name="authorId" type="Integer" xid="xid10"></column>
  <column label="正文" name="message" type="String" xid="xid11"></column></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">标题</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C7293F324D500001869BBDE02D5060E0" style="bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1" onPullDown="scrollView1PullDown" onPullUp="scrollView1PullUp">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2">
  <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" limit="-1" autoLoad="true" data="themeList" bind-click="list1Click">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
      <li xid="li1" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li1">
      <div class="media" xid="media1">        
        <div class="" xid="mediaBody1">
          <div component="$UI/system/components/justep/output/output" class="x-output title" xid="output_subject" bind-ref='ref("subject")'></div>
          <div component="$UI/system/components/justep/output/output" class="x-output output_message" xid="output_message" bind-text='$model.subMessage( val("message"))'></div>
          <div class="pic" bind-visible=' $model.isShowPic( val("attachment"))'>
            <a href="#" xid="a1">
              <ins><img class="" src="" alt="" xid="image1" bind-attr-src='$model.findThumbPicBytid( val("attachment"), 1)'></img></ins>
              <ins><img class="" src="" alt="" xid="image2" bind-attr-src='$model.findThumbPicBytid( val("attachment"), 2)'></img></ins>
              <ins><img class="" src="" alt="" xid="image3" bind-attr-src='$model.findThumbPicBytid( val("attachment"), 3)'></img></ins>
              <!-- <ins><img class="" src="" alt="" xid="image4" bind-attr-src=' $model.findThumbPicBytid("23") '></img></ins> -->
            </a> 
          </div>
          
          <span component="$UI/system/components/justep/output/output" class="x-output author" xid="output_author" bind-ref='ref("author")'></span>
          <span component="$UI/system/components/justep/output/output" class="x-output dateTime" xid="output_time" bind-text='$model.datelineToBeforeDay( val("dateline"))'></span><span component="$UI/system/components/justep/output/output" class="x-output views" xid="output_views" bind-ref='ref("views")'></span>
        </div> 
      </div>
  </li>
  </ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
<resource xid="resource2"><require xid="require1" url="css!$UI/wevapersNew/base"></require>
  <require xid="require2" url="$UI/wevapersNew/jquery-1.10.2.min"></require></resource></div>