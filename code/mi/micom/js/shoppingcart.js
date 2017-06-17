/*******************************************全选、单选******************************************/
function checked(icon)
{
	var icons=document.getElementsByClassName("icon3");
	icon.className=icon.className=="iconfont icon3" ? "iconfont icon3 choose" :"iconfont icon3";
	if(icon==icons[0])
	{
		for(var i=0;i<icons.length;i++)
		{
			icons[i].className=icon.className;
		}
	}
	else
	{
		icons[0].className="iconfont icon3 choose";	
		for(var j=1;j<icons.length;j++)
		{
			if(icons[j].className=="iconfont icon3")
			{ 
				icons[0].className="iconfont icon3"; 
			}
		}	
	}
	jiesuan();
	zongji();
	Numx();
}
/******************************************减****************************************************/
function reduce(span)
{
	var num=span.nextElementSibling.value;
	if(num>1)
	{
		num--;
		span.nextElementSibling.value=num;
	}
	var price=parseInt(span.parentNode.parentNode.previousElementSibling.children[0].innerHTML);
	span.parentNode.parentNode.nextElementSibling.children[0].innerHTML=parseInt(num)*price;
	zongji();
	Num();
	Numx();
}
/******************************************加****************************************************/
function add(span)
{
	var num=span.previousElementSibling.value;
	num++;
	span.previousElementSibling.value=num;
	var price=parseInt(span.parentNode.parentNode.previousElementSibling.children[0].innerHTML);
	span.parentNode.parentNode.nextElementSibling.children[0].innerHTML=parseInt(num)*price;
	zongji();
	Num();
	Numx();
}

/*****************************************删除***************************************************/
function shanchu(icon)
{
	icon.parentNode.parentNode.innerHTML="";
	var shoppingcart=document.getElementById("shoppingcart");
	zongji();
	Num();
	Numx();
}

/****************************************总计***************************************************/
function zongji()
{
	var costs=document.getElementById("costs");	
	var num=0.00;
	var shoppingcart=document.getElementById("shoppingcart");
	for(var i=1;i<shoppingcart.children.length;i++)
	{
		if(shoppingcart.children[i].children[0]!=undefined&&shoppingcart.children[i].children[0].children[0].className=="iconfont icon3 choose")
		{
			num+=parseFloat(shoppingcart.children[i].children[4].children[0].innerHTML);
		}		
	}
	costs.innerHTML=num;	
}

/*************************************商品总量**********************************************/
function Num()
{
	var shoppingcart=document.getElementById("shoppingcart");
	var shuliang=0;
	for(var i=1;i<shoppingcart.children.length;i++)
	{
		if(shoppingcart.children[i].children[0]!=undefined)
		shuliang +=parseInt(shoppingcart.children[i].children[3].children[0].children[1].value);
	}
	var spanq=document.getElementById("spanq");
	spanq.innerHTML=shuliang;
}
/*************************************已选商品数量****************************************/
function Numx()
{
	var shoppingcart=document.getElementById("shoppingcart");
	var yixuan=0;
	for(var i=1;i<shoppingcart.children.length;i++)
	{
		if( shoppingcart.children[i].children[0]!=undefined  && shoppingcart.children[i].children[0].children[0].className=="iconfont icon3 choose")
		{
			yixuan+=parseInt(shoppingcart.children[i].children[3].children[0].children[1].value);
		}
	}
	var spanx=document.getElementById("spanx");
	spanx.innerHTML=yixuan;
}


/****************************************去结算**********************************************/
function jiesuan()
{
	var jiesuan=document.getElementById("jiesuan");
	jiesuan.style.backgroundColor="#999";
	var icons=document.getElementsByClassName("icon3");
	for(var i=0;i<icons.length;i++)
	{
		if(icons[i].className=="iconfont icon3 choose")
		{
			jiesuan.style.backgroundColor="#f60";
		}
	}
}




