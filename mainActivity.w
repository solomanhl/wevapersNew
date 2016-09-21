<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/css" href="base.css"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="main" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:120px;left:347px;width:148px;"
    onLoad="modelLoad" onunLoad="modelUnLoad"> 
    <div component="$UI/system/components/justep/shell/shell" xid="shell1"/> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="homeList" idColumn="tid"><column label="帖子id" name="fid" type="Integer" xid="xid1"></column>
  <column label="作者" name="author" type="String" xid="xid2"></column>
  <column label="回复数量" name="replies" type="Integer" xid="xid3"></column>
  <column label="查看数量" name="views" type="Integer" xid="xid4"></column>
  <column label="标题" name="subject" type="String" xid="xid5"></column>
  <column label="最后更新" name="lastpost" type="Long" xid="xid6"></column>
  <column label="附件" name="attachment" type="String" xid="xid7"></column>
  <column label="发帖时间" name="dateline" type="Long" xid="xid8"></column>
  <column label="主题id" name="tid" type="Integer" xid="xid9"></column>
  <column label="作者id" name="authorId" type="Integer" xid="xid10"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="notify_sys" idColumn="id"><column label="用户id" name="uid" type="String" xid="xid11"></column>
  <column label="消息id" name="id" type="Integer" xid="xid12"></column>
  <column label="作者" name="author" type="String" xid="xid13"></column>
  <column name="category" type="String" xid="xid14"></column>
  <column name="from_idtype" type="String" xid="xid15"></column>
  <column name="from_id" type="String" xid="xid16"></column>
  <column label="是否新消息" name="news" type="Boolean" xid="xid17"></column>
  <column label="作者id" name="authorid" type="String" xid="xid18"></column>
  <column label="时间" name="dateline" type="Long" xid="xid19"></column>
  <column label="类型" name="type" type="String" xid="xid20"></column>
  <column name="from_num" type="String" xid="xid21"></column>
  <column label="内容" name="note" type="String" xid="xid22"></column>
  </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="notify_com" idColumn="id"><column label="用户id" name="uid" type="String" xid="xid23"></column>
  <column label="消息id" name="id" type="Integer" xid="xid24"></column>
  <column label="作者" name="author" type="String" xid="xid25"></column>
  <column name="category" type="String" xid="xid26"></column>
  <column name="from_idtype" type="String" xid="xid27"></column>
  <column name="from_id" type="String" xid="xid28"></column>
  <column label="是否新消息" name="news" type="Boolean" xid="xid29"></column>
  <column label="作者id" name="authorid" type="String" xid="xid30"></column>
  <column label="时间" name="dateline" type="Long" xid="xid31"></column>
  <column label="类型" name="type" type="String" xid="xid32"></column>
  <column name="from_num" type="String" xid="xid33"></column>
  <column label="内容" name="note" type="String" xid="xid34"></column>
  </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="notify_atme" idColumn="id"><column label="用户id" name="uid" type="String" xid="xid35"></column>
  <column label="消息id" name="id" type="Integer" xid="xid36"></column>
  <column label="作者" name="author" type="String" xid="xid37"></column>
  <column name="category" type="String" xid="xid38"></column>
  <column name="from_idtype" type="String" xid="xid39"></column>
  <column name="from_id" type="String" xid="xid40"></column>
  <column label="是否新消息" name="news" type="Boolean" xid="xid41"></column>
  <column label="作者id" name="authorid" type="String" xid="xid42"></column>
  <column label="时间" name="dateline" type="Long" xid="xid43"></column>
  <column label="类型" name="type" type="String" xid="xid44"></column>
  <column name="from_num" type="String" xid="xid45"></column>
  <column label="内容" name="note" type="String" xid="xid46"></column>
  </div>
  
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_forum_group" idColumn="fid"><column label="groupID" name="fid" type="Integer" xid="xid47"></column>
  <column name="icon" type="String" xid="xid48"></column>
  <column name="name" type="String" xid="xid49"></column>
  <column name="fup" type="String" xid="xid50"></column>
  <column label="帖子数量（含回帖）" name="count" type="Integer" xid="xid51"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_forum_forum" idColumn="fid"><column label="forumID" name="fid" type="Integer" xid="xid52"></column>
  <column name="icon" type="String" xid="xid53"></column>
  <column name="name" type="String" xid="xid54"></column>
  <column label="上级groupID" name="fup" type="String" xid="xid55"></column>
  <column label="帖子数量（含回帖)" name="count" type="Integer" xid="xid56"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-card x-full x-has-iosstatusbar header"
    xid="panel1"> 
    <div class="x-panel-top top1" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="Wevapers" style="background-color:#21b589;"> 
        <div class="x-titlebar-left" xid="left1"/>  
        <div class="x-titlebar-title" xid="title1">Wevapers</div>  
        <div class="x-titlebar-right reverse" xid="right1"> 
          <span xid="span5" class="center-block"> 
            <img src="" alt="" xid="image_publish" bind-attr-src="$model.toUrl(&quot;./images/publish.png&quot;)"
              align="middle" bind-click="image_publishClick"/> 
          </span>  
          <span xid="span4" class="center-block"> 
            <img src="" alt="" xid="image_search" bind-attr-src="$model.toUrl(&quot;./images/search_icon.png&quot;)"
              align="middle" bind-click="image_searchClick"/> 
          </span> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content x-cards" xid="content1" style="background-color:#f5f5f5;margin:0px 0px 0px 0px;padding:8px 0px 8px 0px;"
      _xid="C6F60BC124400001C16E1FBCEA631E33"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents1"> 
        <div class="x-contents-content x-scroll-view" xid="content_home" onActive="content_homeActive" onInactive="content_homeInactive"> 
          <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView"
            xid="scrollView1" onPullDown="scrollView1PullDown" onPullUp="scrollView1PullUp"> 
            <div class="x-content-center x-pull-down container" xid="div1"> 
              <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"/>  
              <span class="x-pull-down-label" xid="span2">下拉刷新...</span> 
            </div>  
            <div class="x-scroll-content" xid="div2"> 
              <div class="col-xs-6 tb-twoColList lists1"> 
                <div component="$UI/system/components/justep/list/list" class="x-list x-cards x-flex"
                  xid="list1" data="homeList" limit="5" bind-click="listClick" filter=' $row.val("tid") % 2 == 0'> 
                  <ul class="x-list-template" xid="listTemplateUl1" style="width:100%;"> 
                    <li xid="li1" class="home_list"> 
                      <div xid="div7"> 
                        <div class="big_img">
                        <img alt="" xid="image1" style="width:100%;" height="auto"
                          bind-attr-src='$model.findThumbPicBytid( val("attachment"))' class="img-responsive"/>
                          </div>
                          <div xid="media1" class="media"> 
                            <div xid="mediaLeft1" class="media-left"> 
                              <!-- <img src="" alt="" xid="image1" bind-attr-src=" "/> -->
                            </div>  
                            <div xid="mediaBody1" class="media-body"> 
                              <div component="$UI/system/components/justep/output/output"
                                class="x-output center-block user_name" xid="output10"
                                bind-ref="ref(&quot;author&quot;)"/>  
                              </div> 
                          </div>  
                        <div component="$UI/system/components/justep/output/output"
                          class="x-output title" xid="output1" bind-ref="ref(&quot;subject&quot;)"/>  
                        <div xid="div4" class="comment"> 
                          <img src="" alt="" xid="image5" class="time_icon"
                            bind-attr-src="$model.toUrl(&quot;./images/time_icon.png&quot;)"/>  
                          <div component="$UI/system/components/justep/output/output"
                            class="x-output time" xid="output1" bind-text='$model.datelineToBeforeDay(  val("lastpost"))'/>  
                          <img src="" alt="" xid="image3" bind-attr-src="$model.toUrl(&quot;./images/browse_icon.png&quot;)"
                            style="background-color:transparent;" class="comm_icon" />  
                          <div component="$UI/system/components/justep/output/output"
                            class="x-output div_AllInLine amount" xid="output9" bind-text=' val("views")'/>
                        </div>
                        
                      </div>
                    </li> 
                  </ul> 
                </div> 
              </div>
              <div class="col-xs-6 tb-twoColList lists2" xid="div12">
   <div component="$UI/system/components/justep/list/list" class="x-list x-cards x-flex" xid="list2" data="homeList" limit="5" bind-click="listClick" filter=' $row.val("tid") % 2 == 1'>
    <ul class="x-list-template" xid="listTemplateUl2" style="width:100%;">
     <li xid="li2" class="home_list">
      <div xid="div6">
        <div class="big_img">
       <img alt="" xid="image7" style="width:100%;" height="auto" bind-attr-src='$model.findThumbPicBytid( val("attachment"))' class="img-responsive"></img>
     </div>
       <div xid="media2" class="media">
        <div xid="mediaLeft2" class="media-left"></div>
        <div xid="mediaBody2" class="media-body">
         <div component="$UI/system/components/justep/output/output" class="x-output center-block user_name" xid="output4" bind-ref='ref("author")'></div></div> </div>
       <div component="$UI/system/components/justep/output/output" class="x-output title" xid="output2" bind-ref='ref("subject")'></div>
       <div xid="div8" class="comment">
        <img src="" alt="" xid="image4" class="time_icon" bind-attr-src='$model.toUrl("./images/time_icon.png")'></img>
        <div component="$UI/system/components/justep/output/output" class="x-output time" xid="output2" bind-text='$model.datelineToBeforeDay(  val("lastpost"))'></div>
        <img src="" alt="" xid="image6" bind-attr-src='$model.toUrl("./images/browse_icon.png")' style="background-color:transparent;"  class="comm_icon"></img>
        <div component="$UI/system/components/justep/output/output" class="x-output div_AllInLine amount" xid="output3" bind-text=' val("views")'></div></div> 
        </div> </li> </ul> </div> </div><div xid="div5" class="clearfix"/>
            </div>  
            <div class="x-content-center x-pull-up" xid="div3"> 
              <span class="x-pull-up-label" xid="span3">加载更多...</span> 
            </div> 
          </div> 
        </div>  
 <div class="x-contents-content x-cards content_forum" xid="content_forum" onActive="content_forumActive" onInactive="content_forumInactive"> 
    <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top more_plate" xid="top2"><div xid="div_group" align="center" class="more_btn"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="更多" xid="button_group" onClick="button_groupClick">
   <span xid="span16">更多</span>
    <img src="images/arrow4.png" alt="" /> 
  </a></div></div>
   <div class="x-panel-content plate_box" xid="content2" _xid="C739135DE7600001DAA3180E1C2C1E51"  supportpulldown="true"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView_forum">
   
   <div class="x-scroll-content" xid="div14"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list_forum" data="data_forum_forum">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li_forum" bind-click="li_forumClick"><div class="media" xid="media_forum">
   <div class="media-left" xid="mediaLeft_forum">
    <a href="#" xid="a5">
     <img class="media-object" src="" alt="" xid="image_forum" bind-attr-src='$model.getIcon( val("icon"))'></img></a> </div> 
   <div class="media-body" xid="mediaBody_forum">
    <div component="$UI/system/components/justep/output/output" class="x-output title" xid="output_forumName" bind-ref='ref("name")'></div>
  
  <div xid="div_forum_postNum" class="tip"><label xid="label_forum_postNum"><![CDATA[帖子数量：]]></label><div component="$UI/system/components/justep/output/output" class="x-output num" xid="output_forum_postNum" bind-ref='ref("count")'></div></div></div> </div></li></ul> </div></div>
   </div></div>
   </div></div>  
   <div class="x-contents-content  x-scroll-view content_msg" xid="content_msg" onActive="content_msgActive" onInactive="content_msgInactive"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView_msg" onPullDown="scrollView_msgPullDown" onPullUp="scrollView_msgPullUp">
   <div class="x-content-center x-pull-down container" xid="div9">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i7"></i>
    <span class="x-pull-down-label" xid="span11">下拉刷新...</span></div> 
   <div class="x-scroll-content msg" xid="div10"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup_msg">
    <div class="list-nav">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default this" label="系统" xid="button_msg_sys" onClick="button_msg_sysClick">   
   <span xid="span13">系统</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="评论" xid="button_msg_com" onClick="button_msg_comClick">   
   <span xid="span14">评论</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="@我" xid="button_msg_atme" onClick="button_msg_atmeClick">
   <span xid="span15">@我</span></a>
   </div>
  </div>
  <div component="$UI/system/components/justep/list/list" class="x-list list_msg_same" xid="list_msg_sys" bind-visible=" $model.show_msg_sys()" limit="3" data="notify_sys">
   <ul class="x-list-template" xid="listTemplateUl5">
    <li xid="li5"><div class="media" xid="media4">
   <div class="media-left" xid="mediaLeft5">
    <a href="#" xid="a2">
     <img class="media-object" src="" alt="" xid="image2" bind-attr-src=' $model.toUrl("./images/message_icon1.gif")'></img></a> </div> 
   <div class="media-body" xid="mediaBody5">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_time_sys" bind-text=' $model.datelineToBeforeDay( val("dateline"))'></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_msg_sys" bind-ref='ref("note")'></div>
  </div> </div></li></ul> 
  </div>
    <div component="$UI/system/components/justep/list/list" class="x-list list_msg_same" xid="list_msg_com" bind-visible=" $model.show_msg_com()" limit="-1" data="notify_com">
   <ul class="x-list-template" xid="listTemplateUl6">
    <li xid="li6"><div class="media" xid="media5">
   <div class="media-left" xid="mediaLeft6">
    <a href="#" xid="a3">
     <img class="media-object" src="" alt="" xid="image21" bind-attr-src='$model.toUrl("./images/message_icon1.gif")'></img></a> </div> 
   <div class="media-body" xid="mediaBody6">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_time_com" bind-text=' $model.datelineToBeforeDay( val("dateline"))'></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_msg_com" bind-ref='ref("note")'></div></div> </div></li></ul> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list list_msg_same" xid="list_msg_atme" limit="-1" bind-visible=" $model.show_msg_atme()" data="notify_atme">
   <ul class="x-list-template" xid="listTemplateUl7">
    <li xid="li7"><div class="media" xid="media6">
   <div class="media-left" xid="mediaLeft7">
    <a href="#" xid="a4">
     <img class="media-object" src="" alt="" xid="image22" bind-attr-src='$model.toUrl("./images/message_icon1.gif")'></img></a> </div> 
   <div class="media-body" xid="mediaBody7">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_time_atme" bind-text=' $model.datelineToBeforeDay( val("dateline"))'></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_msg_atme" bind-ref='ref("note")'></div>
  </div> </div></li></ul> </div></div>

   <div class="x-content-center x-pull-up" xid="div11">
    <span class="x-pull-up-label" xid="span12">加载更多...</span></div> </div></div>

    <div class="x-contents-content content_me" xid="content_me" onActive="content_meActive" onInactive="content_meInactive">
          <div xid="div_userinfo" class="userinfo">
            <div class="media" xid="media_me"> 
              <div class="media-left" xid="mediaLeft4"> 
                <a href="#" xid="a1"> 
                  <!-- <img class="media-object" alt="" xid="image_me" bind-attr-src="$model.toUrl(&quot;./images/user_img.png&quot;)"/> -->
                </a> 
              </div>  
              <div class="media-body" xid="mediaBody4"> 
                <div component="$UI/system/components/justep/output/output"
                  class="x-output" xid="output_username" id="output_username" bind-text="localStorage['username']"/>
              </div> 
            </div>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              label="立即登录" xid="button_login_now" id="button_login_now" onClick="loginNow" bind-visible=" ! $model.getLoginState()"> 
              <span xid="span10">立即登录</span>
            </a>
          </div>
          <div component="$UI/system/components/justep/button/buttonGroup"
            class="btn-group x-card btn-group-justified nav_group" tabbed="true" xid="buttonGroup1" bind-visible="false">
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top"
              label="我的收藏" xid="button_shoucang" icon="img:$UI/wevapers/images/user_icon1.gif|"> 
              <i xid="i2"/>  
              <img src="$UI/wevapers/images/user_icon1.gif" xid="image10"/>
              <span xid="span6">我的收藏</span>
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top"
              label="发表的帖子" xid="button_fabiao" icon="img:$UI/wevapers/images/user_icon2.gif|"> 
              <i xid="i3"/>  
              <img src="$UI/wevapers/images/user_icon2.gif" xid="image11"/>
              <span xid="span7">发表的帖子</span>
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top"
              label="我的资料" xid="button_ziiao" icon="img:$UI/wevapers/images/user_icon3.gif|"> 
              <i xid="i4"/>  
              <img src="$UI/wevapers/images/user_icon3.gif" xid="image12"/>
              <span xid="span8">我的资料</span>
            </a>
          </div>  
          <div xid="div_xiugai" class="change list_same" bind-click="div_xiugaiClick">
            <ins class="icon"><img src="" alt="" xid="image13" bind-attr-src="$model.toUrl(&quot;./images/user_icon4.gif&quot;)"/></ins>  
            <label xid="label6"><![CDATA[修改密码]]></label>  
            <ins class="arrow"><img src="" alt="" xid="image14"  bind-attr-src=" $model.toUrl(&quot;./images/arrow2.png&quot;)"/></ins>            
          </div>  
          <div xid="div_fenxiang" class="list_same" bind-click="div_fenxiangClick">
            <ins class="icon"><img src="" alt="" xid="image15" bind-attr-src=" $model.toUrl(&quot;./images/user_icon5.gif&quot;)"/></ins>
            <label xid="label7"><![CDATA[分享Wevapers]]></label>  
            <ins class="arrow"><img src="" alt="" xid="image16" bind-attr-src=" $model.toUrl(&quot;./images/arrow2.png&quot;)"/></ins>
          </div>  
          <div xid="div_guanu" class="list_same">
            <ins class="icon"><img src="" alt="" xid="image17" bind-attr-src=" $model.toUrl(&quot;./images/user_icon6.gif&quot;)"/>  </ins>
            <label xid="label8"><![CDATA[关于Wevapers]]></label>
            <ins class="arrow"><img src="" alt="" xid="image18" bind-attr-src=" $model.toUrl(&quot;./images/arrow2.png&quot;)"/> </ins>
          </div>  
          <div xid="div_gengxin" class="list_same update">
            <ins class="icon"><img src="" alt="" xid="image19" bind-attr-src=" $model.toUrl(&quot;./images/user_icon7.gif&quot;)"/> </ins> 
            <label xid="label9"><![CDATA[检查更新]]></label>
            <ins class="arrow"><img src="" alt="" xid="image20" bind-attr-src=" $model.toUrl(&quot;./images/arrow2.png&quot;)"/> </ins>
          </div>  
          <div xid="div_exit" class="exit" bind-visible="false">
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              label="退出当前账号" xid="button_exit" onClick="clearUser" style="height:100%;" bind-visible=" $model.getLoginState()"> 
              <span xid="span9">退出当前账号</span>
            </a>
          </div>
        </div>
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="bottom1"> 
      <div component="$UI/system/components/justep/button/buttonGroup" tabbed="true"
        xid="buttonGroup2" class="btn-group x-card btn-group-justified"> 
        <a component="$UI/system/components/justep/button/button" xid="button1"
          target="content_home" label="首页" class="btn btn-default btn-icon-top" icon="img:$UI/wevapersNew/images/nav_icon6.png|"> 
          <i xid="i1" class=""/>           
          <img src="$UI/wevapersNew/images/nav_icon6.png" xid="image9"></img><span xid="span1" class="this">首页</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" xid="button2"
          target="content_forum" label="社区" class="btn btn-default btn-icon-top" icon="img:$UI/wevapersNew/images/nav_icon2.png|"> 
          <i xid="i2" class=""/>          
          <img src="$UI/wevapersNew/images/nav_icon2.png" xid="image23"></img><span xid="span1">社区</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" xid="button3" target="content_msg" label="消息" class="btn btn-default btn-icon-top" icon="img:$UI/wevapersNew/images/nav_icon3.png|"> 
          <i xid="i3" class=""/>
          <img src="$UI/wevapersNew/images/nav_icon3.png" xid="image24"></img><span xid="span1">消息</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" xid="button4"
          target="content_me" label="我的" class="btn btn-default btn-icon-top" icon="img:$UI/wevapersNew/images/nav_icon4.png|"> 
          <i xid="i4" class=""/>           
          <img src="$UI/wevapersNew/images/nav_icon4.png" xid="image25"></img><span xid="span1">我的</span> 
        </a> 
      </div> 
    </div> 
  </div>  
  <resource xid="resource2">
    <require xid="require1" url="css!$UI/wevapers/base"/>  
    <require xid="require2" url="$UI/wevapers/jquery-1.10.2.min"/> 
  </resource>
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver_forum_group" anchor="titleBar1" opacity="0.2">
   <div class="x-popOver-overlay" xid="div18"></div>
   <div class="x-popOver-content" xid="div19"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list_group" data="data_forum_group">
   <ul class="x-list-template" xid="listTemplateUl4">
    <li xid="li_group" bind-click="li_groupClick"><label xid="label_group" bind-text='ref("name")'><![CDATA[]]></label></li></ul> </div></div></div></div>
