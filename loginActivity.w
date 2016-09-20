<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/css" href="base.css"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="main" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="width:189px;height:auto;top:33px;left:21px;" onunLoad="modelUnLoad">
    </div>  
  <div xid="div1" class="wrapper"> 
    <img src="$UI/wevapers/images/login_close.png" alt="" xid="image_close" class="close"
      align="middle" bind-click="image_closeClick"/>
    <div xid="div2" align="center" class="logo">
      <img alt="" xid="image_logo" align="middle" src="$UI/wevapers/images/login_logo.png"/>
      <input component="$UI/system/components/justep/input/input" class=""
        xid="input_username" placeHolder="用户名" valueUpdateMode="input" style="color:#FFFFFF;"/>
      <input component="$UI/system/components/justep/input/password" class="pass"
        xid="password1" placeHolder="密码"/>
      <a component="$UI/system/components/justep/button/button" class="btn btn-default"
        label="登录" xid="button_login" onClick="button_loginClick"> 
        <i xid="i2"/>  
        <span xid="span2">登录</span> 
      </a> 
    </div>  
    <div xid="div7" align="center" class="tip">
      <label xid="label_foget" bind-click="label_fogetClick"><![CDATA[忘记密码]]></label>  
      <!-- <img src="$UI/wevapers/images/login_line.png" alt="" xid="image5"/> -->
      <label xid="label_reg" bind-click="label_regClick"><![CDATA[立即注册]]></label> 
    </div>
    <div xid="div3" align="center" class="software">
      <img src="$UI/wevapers/images/login_icon1.png" alt="" xid="image_wechat"/>  
      <img src="$UI/wevapers/images/login_icon2.png" alt="" xid="image_weibo"/>  
      <img src="$UI/wevapers/images/login_icon3.png" alt="" xid="image_qq"/>
    </div>  
    <div xid="div5" style="width:100%;" class="software_bg">
      <img src="$UI/wevapers/images/login_title.png" alt="" xid="image4" />
    </div> 
  </div> 
<resource xid="resource4"><require xid="require2" url="css!$UI/wevapers/base"></require></resource></div>
