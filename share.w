<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onActive="modelActive"/> 
<div xid="div1" class="share_page">
	<ul class="share1">
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon1.png" alt="" bind-click="image4Click"/>
				<span>微信</span>
			</a>
		</li>
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon2.png" alt="" bind-click="image5Click"/>
				<span>朋友圈</span>
			</a>
		</li>
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon3.png" alt="" bind-click="image3Click"/>
				<span>QQ空间</span>
			</a>
		</li>
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon4.png" alt="" bind-click="image2Click"/>
				<span>QQ</span>
			</a>
		</li>
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon5.png" alt="" bind-click="image1Click"/>
				<span>新浪微博</span>
			</a>
		</li>
	</ul>
	<ul class="share2">
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon1.png" alt=""/>
				<span>微信</span>
			</a>
		</li>
		<li>
			<a href="#">
				<img src="$UI/wevapersNew/images/share_icon2.png" alt=""/>
				<span>朋友圈</span>
			</a>
		</li>
	</ul>
	<div class="cancel">
		<a href="#">取消</a>
	</div>	
</div>
<resource xid="resource2"><require xid="require1" url="css!$UI/wevapersNew/base"></require>
  <require xid="require2" url="$UI/wevapersNew/jquery-1.10.2.min"></require></resource>
</div>