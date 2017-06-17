/******************************Beta现实与隐藏*******************************/
function ShowLogin()
{  
	var div2=document.getElementById("div2");
   
   div2.style.display="block"
}
function yingcang()
{  
	var div2=document.getElementById("div2");
   
   div2.style.display="none"
}

/*******************************订单详情显示与隐藏****************************/
function xqshow()
{
	var dizhi=document.getElementById("dizhi");
	var xiangqing=document.getElementById("xiangqing");
	dizhi.className=dizhi.className==""?"yc":"";
	xiangqing.className=dizhi.className==""?"yc":"";
}

/************************************倒计时************************************/
var t=120;
function showtime()
{
	document.getElementById("div1").innerHTML=t;
	t=--t;
	if(t==0){
		location.href="";
		
	}
	setTimeout("showtime()",1000);
}

