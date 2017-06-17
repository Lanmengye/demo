/***********************************切换商品图片***********************************/
function change(img)
{
	var aim1=img.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0];
	aim1.src=img.src;
}

function change1(img, src)
{
	var aim1=img.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0];
	aim1.src=src;
	var goods=document.getElementById("goods");
	goods.style.display="none";
	var jiage=document.getElementById("jiage");
	jiage.innerHTML=1499;
}

/**************************************右侧结算定位*******************************/
window.onscroll = function()
{
	if(document.documentElement.scrollTop > 144 )
	{		
		var divRight = document.getElementById("divRight");
		
		divRight.style.position="fixed";
		
		divRight.style.top = "0px";
		
		divRight.style.left ="50%" ;
		
		divRight.style.marginLeft ="317px";
	}
	else
	{		
		var divRight = document.getElementById("divRight");
		
		divRight.style.position = "static";
		
		divRight.style.marginLeft ="0px";
	}
}

/**********************************商品右侧结算*********************************/
function tianjia(radioc)
{
	var goods=document.getElementById("goods");
	var jiage=document.getElementById("jiage");
	jiage.innerHTML=1499;
	var price01=document.getElementById("price01");
	if(radioc.value=="")
	{
		goods.style.display="none";
	}
	else
	{
		goods.style.display="block";
		goods.children[0].innerHTML=radioc.value;
		jiage.innerHTML=parseInt(jiage.innerHTML)+parseInt(price01.innerHTML);
	}
}

//////////////////////////////////////删除商品

function shanchu()
{
	var goods=document.getElementById("goods");
	goods.style.display="none";
	var jiage=document.getElementById("jiage");
	jiage.innerHTML=1499;
	var cs1=document.getElementById("CS1");
	cs1.checked=false;
}

//////////////////////////////////添加商品
function tianjia2(img)
{
	var goods=document.getElementById("goods");
	goods.children[0].innerHTML="小米移动电源";
	var span=img.parentNode.parentNode.parentNode.children[0].children[0];
	goods.children[0].innerHTML+=span.innerHTML;
	goods.style.display="block";
	var jiage=document.getElementById("jiage");
	jiage.innerHTML=1499;
	jiage.innerHTML=parseInt(jiage.innerHTML)+parseInt(img.parentNode.parentNode.previousElementSibling.children[2].innerHTML);
	change(img);
	
}
