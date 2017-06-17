
var index=0;
var clock=null;
var imgArray=new Array("img02/section12/move/move01.jpg","img02/section12/move/move02.jpg","img02/section12/move/move03.jpg","img02/section12/move/move04.jpg","img02/section12/move/move05.jpg");
/**********************图片轮播**************************/

function imghuan()
{
	changspan();
	var img=document.getElementById("img01");
	var dots=document.getElementById("dotfu").children;	
	img.src=imgArray[index];
	index++;
	if(index==5)
	{
		index=0;
	}
	clock=window.setTimeout("imghuan()",3000);
}
/**********************点击换图************************/
function span_click(num)
{
	window.clearTimeout(clock);
	index=num;
	imghuan();
}
/**********************修改圆点样式***********************/
function changspan()
{
	var spans=document.getElementById("dotfu").children;
	for(var i=0;i<spans.length;i++)
	{
		spans[i].className="";
	}
	spans[index].className="spanc";
}
/************************点击剪剪头切换***********************/
function change(spanc)
{
	var index=0;
	var spans=spanc.parentNode.children;
	
	var divs=spanc.parentNode.nextElementSibling.nextElementSibling.children;
	
	for(var i=0;i<spans.length;i++)
	{
		if(spans[i]==spanc)
		{
			index=i;	
		}
		spans[i].className="";
		divs[i].style.display="none";
	}
	spanc.className="checked";
	divs[index].style.display="flex";	
}



/***************************搭配配件周边模块内容切换******************************/
function xuanze(spanx)
{
	var spans=spanx.parentNode.children;
	var divs=spanx.parentNode.parentNode.nextElementSibling.children;
	var indexs=0;
	for( var i=0; i<spans.length;i++)
	{
		
		spans[i].className="";
		divs[i].style.display="none";
		if(spanx==spans[i])
		{
			indexs=i;
		}
	}
	spans[indexs].className="xuanze";
	divs[indexs].style.display="flex";
}


/***************************内容模块内容切换*************************************/
function xuanxiangka(dot)
{
	var num=0
	var spans=dot.parentNode.children;	
	var divs=dot.parentNode.nextElementSibling.children;
	for(var i=0;i<spans.length;i++)
	{
		if(spans[i]==dot)
			{
				num=i;
			}
		spans[i].className="";
		divs[i].style.display="none";
	}
	dot.className="spanc";
	divs[num].style.display="block";
}

