/*******************************切换图片********************************/
function changeimage(dot)
{
	var index=0;
	var dots=dot.parentNode.children;
	var imgsArray=new Array("img/product/a.png","img/product/b.png","img/product/c.png");
	var img=dot.parentNode.previousElementSibling;
	for(var i=0;i<dots.length;i++)
	{
		dots[i].className="";
		if(dot==dots[i])
		{
			index=i;
		}
	}
	dot.className="spanc";
	img.src=imgsArray[index];	
}

/*****************************************购买浮动框**************************************/
window.onscroll=function()
{
	var mai=document.getElementById("mai");
	if(document.documentElement.scrollTop>=140)
	{
		mai.className="list pmai";
	}
	else
	{
		mai.className="list";
	}
}




/*

function qiehuan()
{
	var jixing=document.getElementById("zongjixing");
	jixing.style.display="block";
}
function guanbi()
{
	var jixing=document.getElementById("zongjixing");
	jixing.style.display="none";
}
function xuanze(span)
{
	
	var spans=document.getElementsByClassName("xinghao");
	for(var i=0;i<spans.length;i++)
	{
		spans[i].style.color="#696969";
	}

	span.style.color="#ff6700";
		
}

*/
