<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;width:227px;height:auto;top:172px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="attachData" idColumn="ownerID" autoNew="false"><column name="ownerID" type="Integer" xid="xid1"></column>
  <column name="realFileName" type="String" xid="xid2"></column>
  <column name="storeFileName" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;ownerID&quot;:1,&quot;realFileName&quot;:&quot;&quot;,&quot;storeFileName&quot;:&quot;&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">
          <div xid="div_title" bind-click="div_titleClick">
            <label xid="label_title"><![CDATA[选择版块]]></label>
          </div>
        </div>  
        <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" class=""
            label="发帖" xid="button1" onClick="button1Click"> 
            <span xid="span1">发帖</span>
          </a>
        </div> 
      </div> 
    </div>     

    <div class="x-panel-content" xid="content1">
      <div component="$UI/system/components/justep/panel/panel" class="panel_txt"
        xid="panel_txt">
        <div class="txtTitle" xid="top_txtTitle">
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="input_title" placeHolder="标题"/>
        </div>  
        <div class="txt" xid="content_txt">
          <textarea component="$UI/system/components/justep/input/input" class="form-control"
            xid="input_txt" placeHolder="说点什么吧......"></textarea>
        </div>  
        <div class="bottom_txt" xid="bottom_txt" bind-visible="false">
          <a component="$UI/system/components/justep/button/button" class=""
            xid="button_camera" icon="img:$UI/wevapersNew/images/publish_icon1.gif|"> 
            <i xid="i2"/>  
            <img src="$UI/wevapersNew/images/publish_icon1.gif" xid="image2"/>
            <span xid="span2"/>
          </a>  
          <a component="$UI/system/components/justep/button/button" class=""
            xid="button_pic" icon="img:$UI/wevapersNew/images/publish_icon2.gif|"> 
            <i xid="i3"/>  
            <img src="$UI/wevapersNew/images/publish_icon2.gif" xid="image3"/>
            <span xid="span3"/>
          </a>
        </div>
      <div xid="attach" class="bottom_txt">
      <div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="$UI/system/service/doc/common/simpleFileStore_forum.j" xid="attachmentSimple2" accept="image/*" bind-ref='$model.attachData.ref("realFileName")'>
   <div class="x-attachment" xid="div13">
    <div class="x-attachment-content x-card-border" xid="div14">
     <div class="x-doc-process" xid="div15">
      <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar2"></div></div> 
     <div data-bind="foreach:$attachmentItems" xid="div16">
      <div class="x-attachment-cell" xid="div17">
       <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div18">
        <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a2"></a></div> </div> </div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div19">
      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'" xid="div20"></div></div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div21">
      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')" xid="div22"></div></div> 
     <div style="clear:both;" xid="div23"></div></div> </div> </div></div></div>
    </div> 

    <div component="$UI/system/components/justep/popOver/popOver" class="list_staff" direction="auto" xid="popOver1" anchor="top_txtTitle" position="center">
        <div class="" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" autoLoad="true">
        <ul class="x-list-template" xid="listTemplateUl1">
        <li xid="li1" bind-click="li1Click"><label xid="label_selectForum"><![CDATA[]]></label></li></ul> </div></div>
    </div>
    <div id="blackbg"></div>

  </div> 
  <resource xid="resource2">
    <require xid="require1" url="css!$UI/wevapersNew/base"/>  
    <require xid="require2" url="$UI/wevapersNew/jquery-1.10.2.min"/> 
  </resource>
</div>
