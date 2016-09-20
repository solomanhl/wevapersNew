<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="width:229px;height:auto;top:186px;left:391px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onunLoad="modelUnLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="post" idColumn="tid"><column label="帖子id" name="fid" type="Integer" xid="xid1"></column>
  <column label="作者" name="author" type="String" xid="xid2"></column>
  <column label="回复数量" name="replies" type="Integer" xid="xid3"></column>
  <column label="查看数量" name="views" type="Integer" xid="xid4"></column>
  <column label="标题" name="subject" type="String" xid="xid5"></column>
  <column label="最后更新" name="lastpost" type="Long" xid="xid6"></column>
  <column label="附件" name="attachment" type="String" xid="xid7"></column>
  <column label="发帖时间" name="dateline" type="Long" xid="xid8"></column>
  <column label="主题id" name="tid" type="Integer" xid="xid9"></column>
  <column label="作者id" name="authorId" type="Integer" xid="xid10"></column></div>
  
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="replies" idColumn="tid"><column label="帖子id" name="fid" type="Integer" xid="xid1"></column>
  <column label="作者" name="author" type="String" xid="xid92"></column>
  <column label="回复数量" name="replies" type="Integer" xid="xid93"></column>
  <column label="查看数量" name="views" type="Integer" xid="xid94"></column>
  <column label="标题" name="subject" type="String" xid="xid95"></column>
  <column label="最后更新" name="lastpost" type="Long" xid="xid96"></column>
  <column label="附件" name="attachment" type="String" xid="xid97"></column>
  <column label="发帖时间" name="dateline" type="Long" xid="xid98"></column>
  <column label="主题id" name="tid" type="Integer" xid="xid99"></column>
  <column label="作者id" name="authorId" type="Integer" xid="xid100"></column>
  <column label="回帖内容" name="message" type="String" xid="xid101"></column></div>
  
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full details" xid="panel1"> 
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
          <img alt="" xid="image_share" bind-attr-src='$model.toUrl("./images/share3.png")' bind-click="image_shareClick"></img></div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C7284A94D7E00001EE921BD0EF207B00" style="bottom: 0px;">
  
  
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1" onPullDown="scrollView1PullDown" onPullUp="scrollView1PullUp">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div4"><div xid="div6" class="article"><div component="$UI/system/components/justep/output/output" class="x-output subject" xid="output_subject"></div><div class="media" xid="media1">
   <div class="media-left" xid="mediaLeft1">
    <!-- <a href="#" xid="a1">
     <img class="media-object" src="" alt="" xid="image3" bind-attr-src='$model.toUrl("./images/user_img.png")'></img>
     </a>  -->
     </div> 
   <div class="media-body" xid="mediaBody1">
    <div component="$UI/system/components/justep/output/output" class="x-output author" xid="output_author"></div><div xid="div2" class="div2"><div component="$UI/system/components/justep/output/output" class="x-output views" xid="output_views"></div>|
  <div component="$UI/system/components/justep/output/output" class="x-output replies" xid="output_replies"></div>
  </div>
  </div> </div><div component="$UI/system/components/justep/output/output" class="x-output message" xid="output_message"></div>
</div>
  <div component="$UI/system/components/justep/list/list" class="x-list x-cards comm_list" xid="list_comment" data="replies">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
    <!-- <img src="" alt="" xid="image_comment_head" bind-attr-src='$model.toUrl("./images/user_img.png")'></img> -->
    <div class="list_top">
  <div component="$UI/system/components/justep/output/output" class="x-output author" xid="output_comment_author" bind-ref='ref("author")'></div><img src="" alt="" xid="image_comment" bind-attr-src=' $model.toUrl("./images/comment_icon1.png")' bind-click="image_commentClick"></img>
  </div>
  <div component="$UI/system/components/justep/output/output" class="x-output message" xid="output_comment_message" id="output_comment_message" bind-ref='ref("subject")'></div>
  </li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div5">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div>
  </div>
  <div class="x-panel-bottom" xid="bottom1"><div xid="div7" class="div-inline">
  <input type="text" component="$UI/system/components/justep/input/input" class="form-control div-inline" xid="input_comment" placeHolder="回复楼主……"></input>
  <span class="send">发送</span>
</div></div></div> 
  <resource xid="resource2">
    <require xid="require1" url="css!$UI/wevapers/base"/>  
    <require xid="require2" url="$UI/wevapers/jquery-1.10.2.min"/> 
  </resource>
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver_share" opacity="0.2" anchor="top1" style="width:100%;">
   <div class="x-popOver-overlay" xid="div8"></div>
   <div class="x-popOver-content" xid="div9"><iframe src="./share.w" xid="iframe_share" width="100%"></iframe></div></div></div>
