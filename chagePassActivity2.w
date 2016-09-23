<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive" onunLoad="modelUnLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full changePass" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="输入新密码"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">输入新密码</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
      <div class="edit_box">
      <input component="$UI/system/components/justep/input/password" class="form-control" xid="password_new" placeHolder="请输入新密码"></input>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="password_new2" placeHolder="请再输入一次新密码"></input>
  </div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确认" xid="button_submit" onClick="button_submitClick">
   <i xid="i1"></i>
   <span xid="span1">确认</span></a></div>
  </div> 
</div>