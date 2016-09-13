<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;width:227px;height:auto;top:172px;" onParamsReceive="modelParamsReceive"></div>  
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
        <div class="bottom_txt" xid="bottom_txt">
          <a component="$UI/system/components/justep/button/button" class=""
            xid="button_camera" icon="img:$UI/wevapers/images/publish_icon1.gif|"> 
            <i xid="i2"/>  
            <img src="$UI/wevapers/images/publish_icon1.gif" xid="image2"/>
            <span xid="span2"/>
          </a>  
          <a component="$UI/system/components/justep/button/button" class=""
            xid="button_pic" icon="img:$UI/wevapers/images/publish_icon2.gif|"> 
            <i xid="i3"/>  
            <img src="$UI/wevapers/images/publish_icon2.gif" xid="image3"/>
            <span xid="span3"/>
          </a>
        </div>
      </div>
    </div> 

    <div component="$UI/system/components/justep/popOver/popOver" class="list_staff" direction="auto" xid="popOver1" anchor="top_txtTitle" position="center">
        <div class="" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" autoLoad="true">
        <ul class="x-list-template" xid="listTemplateUl1">
        <li xid="li1" bind-click="li1Click"><label xid="label_selectForum"><![CDATA[]]></label></li></ul> </div></div>
    </div>
    <div id="blackbg"></div>

  </div> 
  <resource xid="resource2">
    <require xid="require1" url="css!$UI/wevapers/base"/>  
    <require xid="require2" url="$UI/wevapers/jquery-1.10.2.min"/> 
  </resource>
</div>
