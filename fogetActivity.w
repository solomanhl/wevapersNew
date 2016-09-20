<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="找回密码"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">找回密码</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div xid="div1"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input_username" placeHolder="请输入用户名"></input>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input_email" placeHolder="请输入注册时的邮箱"></input></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确认" xid="button_submit" onClick="button_submitClick">
   <i xid="i1"></i>
   <span xid="span1">确认</span></a></div>
  </div> 
</div>