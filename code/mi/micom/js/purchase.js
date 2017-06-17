//////////////////////////////////////////////////////////////
//换图
function Change( img  ,  sPath )
{
	img.src = sPath ;	
}
//////////////////////////////////////////////////////////////

var  imgs = new  Array ( "img/purchase/lunbo-1.jpg","img/purchase/lunbo-2.jpg","img/purchase/lunbo-3.jpg","img/purchase/lunbo-4.jpg" );

var  index  = 0 ;	

//////////////////////////////////////////////////////////////
// 显示上一张图片
function  Previous( imgL )
{
	var  img  =  imgL.nextElementSibling ;
	
	if( index > 0)
	{
		index--;
	}
	
	img.src = imgs[index];
}

//////////////////////////////////////////////////////////////
// 显示 下一张图片
function  Next( imgR )
{
	var  img  =  imgR.previousElementSibling ;
	
	if( index < imgs.length -1 )
	{
		index++;		
	}
	
	img.src = imgs[index];	
}

function chao()
{
	window.location.href="#";
}


//////////////////////////////////////////////////////////////
//详细参数

var trid=document.getElementById("jieshao")
function changes()
{
	if(jieshao.style.display=="block")
	{
        jieshao.style.display="none";
    }
	else
	{
        jieshao.style.display="block";
	}
}

/////////////////////////////////////////切换产品图片

function changeimage(img)
{
	var aim1=img.parentNode.parentNode.previousElementSibling.previousElementSibling;
	aim1.src=img.src;
}



//////////////////////////////////选择版本
function xzbanben(labelb)
{
	var indexb=0;
	var banben=document.getElementById("banben");
	var jiage=document.getElementById("jiage");
	banben.innerHTML=labelb.innerHTML;
	var labels=document.getElementsByClassName("lbb");
	for(var i=0;i<labels.length;i++)
	{
		if(labelb==labels[i])
		{
			index=i;
		}
	}
	jiage.innerHTML=1499+500*index;	
}


//////////////////////////////////选择颜色
function xzyanse(labely,src)
{
	var img01=document.getElementById("img01");
	img01.src=src;
	var yanse=document.getElementById("yanse");
	yanse.innerHTML=labely.children[1].innerHTML;
	
	var taozhuang=document.getElementById("taozhuang");
	taozhuang.style.display="block";
	taozhuang.children[2].style.display="none";
}

//////////////////////////////////选择套餐
function xztaozhuang(labelt)
{
	var indext=0;
	var labelts=labelt.parentNode.getElementsByTagName("label");
	var uls=labelt.parentNode.nextElementSibling.children;
	var taozhuang=document.getElementById("taozhuang");
	taozhuang.children[2].style.display="block";
	for( var i=0;i<labelts.length;i++)
	{
		if(labelts[i]==labelt)
		{
			indext=i;
		}
		uls[i].style.display="none";
	}
	uls[indext].style.display="flex";
	var next=document.getElementById("next");
	var lijigoumai=document.getElementById("lijigoumai");
	next.style.display="none";
	lijigoumai.style.display="block";
}


//////////////////////////////////悬浮框
window.onscroll=function()
{
	var daogou=document.getElementById("daogou");
	if(document.documentElement.scrollTop>=850)
	{
		daogou.className="daogou";
	}
	else
	{
		daogou.className="";
	}
}
