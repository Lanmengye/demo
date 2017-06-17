/******************************倒计时*******************************/ 
var t=1000;
function showtime()
{
	document.getElementById("span1").innerHTML=t;
	t--;
	if(t==0){
		return;		
	}
	setTimeout("showtime()",1000);
}

/*****************************提示*********************************/
function tishi()
{
	var wen=document.getElementById("wen");
	wen.style.display=wen.style.display=="block"?"none":"block";
}


/*****************************详情显示与隐藏*********************************/
function xsycxq()
{
	var div=document.getElementById("xiangqing").parentElement;
	div.style.display= div.style.display=="none"?"block":"none";
	document.getElementById("jiage").style.top= div.style.display=="none"?"32px":"102px";
	document.getElementById("shoukuan").style.display=div.style.display=="none"?"inline-block":"none";
}
/*******************************换图**********************************/
function huantu(div)
{
	var divs=div.parentNode.children;
	for(var i=0;i<divs.length;i++)
	{
		divs[i].style.display="block";
	}
	div.style.display="none"
}

/*********************************切换登录*********************************/
function Denglu()
{
	var fkfs=document.getElementById("fkfs");
	gundong1();
}
function Saoyisao()
{
	var fkfs=document.getElementById("fkfs");
	gundong2();
}
var clock1=null;
function gundong1()
{
	window.clearTimeout(clock2);
	var fkfs=document.getElementById("fkfs");
	if(fkfs.scrollLeft<=950)
	{
		fkfs.scrollLeft+=(950/50);
		clock1=	window.setTimeout("gundong1()",10)
	}
	
}
var clock2=null;
function gundong2()
{
	window.clearTimeout(clock1);
	var fkfs=document.getElementById("fkfs");
	if(fkfs.scrollLeft>=0)
	{
		fkfs.scrollLeft-=(950/50);
		clock2=window.setTimeout("gundong2()",10)
	}
	
}

/************************************验证登录**********************************/
function yzdl()
{
	
	var username=document.getElementById("username");

var password1=document.getElementById("password");

	var err=document.getElementById("err");
	
	var exp1=/^1[34578]\d{9}$/;
	var exp2=/\w+@\w+[.]\w+/;


	if(exp1.test(username.value)||exp2.test(username.value))
	{
		if(password1.value.length>16||password1.value.length<8)
		{
			password1.style.borderColor="#f30";
			err.innerHTML="支付密码错误，请输入8--16位的支付密码！";
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{
		username.style.borderColor="#f30";
		err.innerHTML="用户名错误，请输入正确的用户名";
		return false;
	}
}

function cleare(input)
{
	input.style.borderColor="#ccc";
	var err=document.getElementById("err");
	err.innerHTML="";
}

