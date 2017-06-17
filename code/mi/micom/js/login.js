/*******************************登录验证***********************************/
function dlyz()
{
	var result=false;
	var zhanghao=document.getElementById("zhanghao");
	var mima=document.getElementById("mima");
	var wrong=document.getElementById("wrong");
	
	var expname=/(^1[34578]\d{9}$)|(^\w+@\w+[.]\w+$)|(^[0-9]{10}$)/;
	var mmexp1=/\d/;
	var mmexp2=/[A-z]/;
	var mmexp3=/[~!@#$%^&*()_+.]/;
	var num=0;
	num+=mmexp1.test(mima.value)?1:0;
	num+=mmexp2.test(mima.value)?1:0;
	num+=mmexp3.test(mima.value)?1:0;
	if(expname.test(zhanghao.value)){
		if(num<2||mima.value.length<8||mima.value.length>16)
		{
			wrong.children[1].innerHTML="密码错误,请重新输入";
			mima.style.borderColor="#f30";
			wrong.style.display="block";

		}	
		else
		{
			result=true;
		}		
	}
	else{
		wrong.children[1].innerHTML="用户名格式错误，请重新输入";
		wrong.style.display="block";
		zhanghao.style.borderColor="#f30";

	}	
	return result;
}

/******************************清除错误提示*********************************/
function clearl (inputc)
{
	inputc.style.borderColor="#ccc";
	var wrong=document.getElementById("wrong");
	wrong.style.display="none";
}
