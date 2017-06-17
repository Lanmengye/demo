/****************************************注册第一个页面****************************************/
/************显示地区************/
function displayarea()
{
	var area=document.getElementById("area");
	area.style.display=area.style.display=="none"?"block":"none";
}
/************选择地区************/
function xzarea(li)
{
	var zzdq=document.getElementById("zzdq");
	zzdq.innerHTML=li.children[0].innerHTML+"("+li.children[1].innerHTML+")";
	var area=document.getElementById("area");
	area.style.display="none";
}
/***********产生随机数************/
function getrandom(min, max)
{
	return Math.floor(Math.random()*(max-min)+min);
}
/***********显示验证码***********/
var yzm="";
function displayyzm()
{
	var canvas=document.getElementById("canvas1");
	var huabi=canvas.getContext("2d");
	huabi.fillStyle="#e3e3e3";
	huabi.fillRect(0,0,120,40);
	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	 yzm="";
	for(var i=0;i<4;i++)
	{
		huabi.font = getrandom(28,36)+"px  黑体";
		huabi.fillStyle="rgb("+getrandom(0,120)+","+getrandom(0,120)+","+getrandom(0,120)+")";
		var zifu=str[getrandom(0,str.length)];
		yzm+=zifu;
		
		huabi.save();
		huabi.rotate(Math.PI/180*5*( i%2 ==0 ? 1:-1));
		huabi.fillText(zifu,20+20*i,30);
		huabi.restore();
	}	
		
	for(var j=0;j<6;j++)
	{
		huabi.strokeStyle="rgb("+getrandom(192,255)+","+getrandom(192,255)+","+getrandom(192,255)+")";
		huabi.beginPath();		
		huabi.moveTo(getrandom(0,30),getrandom(0,40));
		huabi.lineTo(getrandom(30,80),getrandom(0,40));
		huabi.closePath();
		huabi.stroke();
	}
	for(var j=0;j<6;j++)
	{
		huabi.strokeStyle="rgb("+getrandom(192,255)+","+getrandom(192,255)+","+getrandom(192,255)+")";
		huabi.beginPath();		
		huabi.moveTo(getrandom(60,90),getrandom(5,35));
		huabi.lineTo(getrandom(90,120),getrandom(5,35));
		huabi.closePath();
		huabi.stroke();
	}	
}

/***********验证表单************/
function chkreg()
{
	var shjerr=document.getElementById("sjherr");
	var yzmerr=document.getElementById("yzmerr");
	if(reg01.phone.value=="")
	{
		shjerr.children[1].innerHTML="请输入手机号";
		shjerr.style.display="block";
		reg01.phone.style.borderColor="#f30";
		return false;
	}
	else if(reg01.yzm.value=="")
	{
		yzmerr.children[1].innerHTML="请输入图形验证码";
		yzmerr.style.display="block";
		reg01.yzm.style.borderColor="#f30";
		return false;
	}
	var sjhm=/^1[34578]\d{9}$/;
	if(sjhm.test(reg01.phone.value)==false)
	{
		shjerr.children[1].innerHTML="手机号码格式错误";
		shjerr.style.display="block";
		reg01.phone.style.borderColor="#f30";
		return false;
	}
	else if (reg01.yzm.value.toUpperCase()!=yzm.toUpperCase())
	{
		yzmerr.children[1].innerHTML="验证码错误";
		yzmerr.style.display="block";
		reg01.yzm.style.borderColor="#f30";
		return false;
	}
	else
	{
		return true;
	}
}

/*****************************清除错误提示**************************/
function clearl (inputc)
{
	inputc.style.borderColor="#ccc";
	inputc.parentNode.nextElementSibling.style.display="none";
}


/****************************************注册第二个页面****************************************/

var t=3;
var count=1;
var clock=null;
/**********************短信验证码倒计时显示************************/
function showtime()
{
	var a=document.getElementById("daojishi");
	a.parentNode.className="";
	a.innerHTML="("+t+"s)";
	
	if(t==0)
	{
		a.parentNode.className="black";
		a.style.display="none";	
		return;
	}
	t--;
	clock=setTimeout("showtime()",1000);
}		
/************************重新发送重置倒计时***********************/
function time()
{
	var sbd=document.getElementById("sbd");
	sbd.innerHTML="一直收不到短信？<a href='#'>查看可能原因</a> ";
	sbd.style.display="block";
	window.clearTimeout(clock);
	if(t==0)
	{	
		count++;
		t=3*count;
		var a=document.getElementById("daojishi");
		a.style.display="inline";
		showtime();
	}
}
/******************************短信验证****************************/
function dxyz()
{
	var dxyzexp=/^\d{6}$/;
	var dxyzerr=document.getElementById("dxyzerr");
	if(reg02.txtdx.value=="")
	{
		reg02.txtdx.style.borderColor="#f30";
		dxyzerr.children[1].innerHTML="请输入短信验证码";
		dxyzerr.style.display="block";
		return false;
	}
	else if (dxyzexp.test(reg02.txtdx.value))
	{
		return true;
	}
	else
	{
		reg02.txtdx.style.borderColor="#f30";
		dxyzerr.children[1].innerHTML="短信验证码格式错误，请重新输入";
		dxyzerr.style.display="block";
		return false;
	}
}
/*****************************清除错误提示**************************/
function cleard (inputc)
{
	inputc.style.borderColor="#ccc";
	document.getElementById("dxyzerr").style.display="none";
}
/****************************************注册第三个页面****************************************/

/****************************密码验证************************/
function mmyz()
{
	var mima=reg03.txtPwd1.value;
	var mmerr=document.getElementById("mmerr");
	var tishi=document.getElementById("tishi");
	var mmexp1=/\d/;
	var mmexp2=/[A-z]/;
	var mmexp3=/[~!@#$%^&*()_+.]/;
	var num=0;
	num+=mmexp1.test(mima)?1:0;
	num+=mmexp2.test(mima)?1:0;
	num+=mmexp3.test(mima)?1:0;
	if(mima=="")
	{
		reg03.txtPwd1.style.borderColor="#f30";
		reg03.txtPwd2.style.borderColor="#f30";
		tishi.style.display="none";
		mmerr.children[1].innerHTML="请输入密码";
		mmerr.style.display="block";	
		return false;
	}
	else if(num<2||mima.length<8||mima.length>16)
	{
		reg03.txtPwd1.style.borderColor="#f30";
		tishi.style.color="#f30"
		tishi.style.display="block";
		mmerr.style.display="none";	
		return false;
	}
	else
	{
		if(mima!=reg03.txtPwd2.value)
		{
			reg03.txtPwd2.style.borderColor="#f30";
			tishi.style.display="none";
			mmerr.children[1].innerHTML="密码输入不一致";
			mmerr.style.display="block";	
			return false;			
		}
		else
		{
			return true;
		}
	}
}

/*****************************清除错误提示**************************/
function clearmm(inputm)
{
	if(inputm==reg03.txtPwd1)
	{
		inputm.style.borderColor="#ccc";
		if(reg03.txtPwd1.value==reg03.txtPwd2.value&&reg03.txtPwd2.value!="")
		{
			reg03.txtPwd2.style.borderColor="#ccc";
			document.getElementById("mmerr").style.display="none";
		}
	}
	else
	{
		inputm.style.borderColor="#ccc";
		document.getElementById("mmerr").style.display="none";
	}
}

