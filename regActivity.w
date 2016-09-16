<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="注册"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">注册</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div xid="div_username"><img src="$UI/wevapersNew/images/user_img.png" alt="" xid="image_userame"></img><input component="$UI/system/components/justep/input/input" class="form-control" xid="input_username" placeHolder="请输入用户名"></input>
  </div>
  <div xid="div_pass"><img src="$UI/wevapersNew/images/user_img.png" alt="" xid="image2"></img><input component="$UI/system/components/justep/input/password" class="form-control" xid="password1" placeHolder="请输入密码"></input>
  </div>
  <div xid="div_pass2"><img src="$UI/wevapersNew/images/user_img.png" alt="" xid="image3"></img>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="password2" placeHolder="请再次输入密码"></input></div>
  <div xid="div_email"><img src="$UI/wevapersNew/images/user_img.png" alt="" xid="image_email"></img>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input_email" placeHolder="请输入邮箱"></input></div>
  <div xid="div_check"><span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="checkbox1" label="已阅读并同意《使用协议》" onChange="checkbox1Change"></span></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="注册" xid="button_submit" onClick="button_submitClick">
   <i xid="i1"></i>
   <span xid="span1">注册</span></a></div>
  </div> 
</div>