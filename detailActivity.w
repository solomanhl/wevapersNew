<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="width:229px;height:auto;top:186px;left:391px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="post" idColumn="pid"><column name="pid" type="Integer" xid="xid1"></column>
  <column name="fid" type="Integer" xid="xid2"></column>
  <column name="tid" type="Integer" xid="xid3"></column>
  <column name="first" type="Integer" xid="xid4"></column>
  <column name="author" type="String" xid="xid5"></column>
  <column name="authorid" type="Integer" xid="xid6"></column>
  <column name="subject" type="String" xid="xid7"></column>
  <column name="message" type="String" xid="xid8"></column>
  <column name="attachment" type="Integer" xid="xid9"></column>
  <column name="position" type="Integer" xid="xid10"></column></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="详情"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">详情</div>  
          <div class="x-titlebar-right reverse"> 
          <img alt="" xid="image_share" bind-attr-src='$model.toUrl("./images/share1.png")'></img>
  <img alt="" xid="image_favor" bind-attr-src='$model.toUrl("./images/collect.png")'></img></div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C7284A94D7E00001EE921BD0EF207B00" style="bottom: 0px;">
  
  
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div4"><div xid="div6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_subject"></div><div class="media" xid="media1">
   <div class="media-left" xid="mediaLeft1">
    <a href="#" xid="a1">
     <img class="media-object" src="" alt="" xid="image3" bind-attr-src='$model.toUrl("./images/user_img.png")'></img></a> </div> 
   <div class="media-body" xid="mediaBody1">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_author"></div><div xid="div2"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_views"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_replies"></div>
  </div>
  </div> </div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_message"></div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list_comment">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><img src="" alt="" xid="image_comment_head" bind-attr-src='$model.toUrl("./images/user_img.png")'></img>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_comment_author"></div><img src="" alt="" xid="image_comment" bind-attr-src=' $model.toUrl("./images/comment_icon.png")' bind-click="image_commentClick"></img><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_comment_message" id="output_comment_message"></div>
  </li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div5">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div>
  </div>
  <div class="x-panel-bottom" xid="bottom1"><div xid="div7" class="div-inline"><img src="" alt="" xid="image5" bind-attr-src=' $model.toUrl("./images/share2.png")' class="div-inline"></img>
  <input component="$UI/system/components/justep/input/input" class="form-control div-inline" xid="input_comment" placeHolder="回复楼主……"></input></div></div></div> 
</div>