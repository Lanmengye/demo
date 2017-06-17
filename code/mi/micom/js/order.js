function change01(lablec)
{
	var radioc=lablec.previousElementSibling;
	var radios=document.getElementsByName(radioc.name);
	var divs=lablec.parentNode.nextElementSibling.children;
	var index=0;
	for(var i=0;i<radios.length;i++)
	{
		if(radios[i]==radioc)
		{
			index=i;
		}
		radios[i].checked="no";
		divs[i].style.display="none";		
	}
	radioc.checked="checked";
	divs[index].style.display="block";
}
////////////////////////////////////////////
//确认地址
function xuanyong()
{
	var queren=document.getElementById("changyong");
	queren.style.borderColor="#ff6700";
}


///////////////////////////////////////////优惠券

function dakai()
{
	var quan=document.getElementById("youhui");
	quan.style.display="block";
}


function span_click(spana)
{
	index=0;
	
	var div=spana.parentNode;
	
	spans=div.children;
	
	for(var i=0;i<spans.length;i++)
	{
		spans[i].className="";
		if(spana==spans[i])
		{
			index=i;
		}
	}
	
	spana.className="span1";
	
	var divs=spana.parentNode.nextElementSibling.children;
	

	
	for(var i=0;i<divs.length;i++)
	{
		divs[i].style.display="none";
	}
	
	divs[index].style.display="block";
}

function yhq()
{
	var exp=/\d{6}$/;
	if(exp.test(order.tex.value))
	{
		
		var dikou=document.getElementById("dikou");
		dikou.innerHTML="30";
		var huafei=document.getElementById("huafei");
		huafei.innerHTML="1469";
		closea();
	}
	else
	{
		var err=document.getElementById("err");
		err.innerHTML="优惠券码错误！";
	}
}

function closea()
{
	var youhui=document.getElementById("youhui");
	youhui.style.display="none";
}



//////////////////////////////////////地址弹框
var a=document.getElementsByClassName("zong");
function tianjia()
{
	
	for(var i=0;i<a.length;i++)
	{
		a[i].style.display="block";
	}
	
}
var b=document.getElementsByClassName("zong");
function guanbi()
{
	for(var i=0;i<b.length;i++)
	{
		b[i].style.display="none";
	}	
}


function baocun()
{
	guanbi();
	var changyong=document.getElementById("changyong");
	changyong.style.display="inline-block";
}


/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//三级联动

var  shengArray  = [ "省份/自治区",  "上海" ,"安徽省", "湖北", "湖南" ];
var  shiArray  = [ 
					["城市/地区"] ,
					["上海市"] ,
					["安庆市", "蚌埠市","巢湖", "池州", "滁州", "阜阳"] ,
					["黄冈", "黄石", "荆门", "荆州"] , 
					["常德", "长沙", "郴州", "衡阳", "怀化", "娄底", "邵阳", "湘潭"] 
				] ;
var xianArray  = [ 
					[
						["区/县"]
					],
					
					[
						["长宁区", "黄浦区", "闵行区", "普陀区", "浦东新区", "松江区", "杨浦区"]
					
					],
					
					[
						["安庆市", "怀宁县", "潜山县", "宿松县", "太湖县", "桐城市", "望江县", "岳西县", "枞阳县"],
						["蚌埠市", "固镇县", "怀远县", "五河县"],
						["巢湖市", "含山县", "和县", "庐江县", "无为县"],
						["池州市", "东至县", "青阳县", "石台县"],
						["滁州市", "定远县", "凤阳县", "来安县", "明光市", "全椒县", "天长市"],
						["阜南县", "阜阳市", "界首市", "临泉县", "太和县", "颖上县"]
					] ,
					
					[ 
						["黄冈市", "红安县", "黄梅县", "罗田县", "麻城市", "团风县", "武穴市", "英山县", "蕲春县", "浠水县"],
						["大冶市", "黄石市", "阳新县"],
						["荆门市", "京山县", "沙洋县", "钟祥市"] ,
						["公安县", "洪湖市", "监利县", "江陵县", "荆州市", "石首市", "松滋市"],
						
					] ,
					
					[ 
						["常德市", "安乡县", "汉寿县", "津市市", "临澧县", "石门县", "桃源县", "澧县"],
						["长沙市", "长沙县", "宁乡县", "望城县", "浏阳市"],
						["安仁县", "郴州市", "桂东县", "桂阳县", "嘉禾县", "临武县", "汝城县", "宜章县", "永兴县", "资兴市"],
						["常宁市", "衡东县", "衡南县", "衡山县", "衡阳市", "衡阳县", "祁东县", "耒阳市"],
						["辰溪县", "洪江市", "怀化市", "会同县", "靖州苗族侗族自治县", "麻阳苗族自治县", "通道侗族自治县", "新晃侗族自治县", "中方县", "芷江侗族自治县", "沅陵县", "溆浦县"],
						["冷水江市", "涟源市", "娄底市", "双峰县", "新化县"],
						["城步苗族自治县", "洞口县", "隆回县", "邵东县", "邵阳市", "邵阳县", "绥宁县", "武冈市", "新宁县", "新邵县"],
						["韶山市", "湘潭市", "湘潭县", "湘乡市"]
					] 
					
				] ;

function   AddSheng()
{
	var  selSheng = document.getElementById("sheng");
	for( var  i=0; i< shengArray.length ; i++)
	{
		var  op   =  new Option( shengArray[i] , i );
		selSheng.options.add( op  );
	}
	
}

function  AddShi()
{	
	var  selSheng = document.getElementById("sheng");
	var  selShi = document.getElementById("shi");
	selShi.innerHTML = "";
	var  i = parseInt( selSheng.value );
	
	for( var j= 0 ; j < shiArray[ i ].length  ; j++ )
	{
		var  op = new  Option( shiArray[i][j]   , j );
	
		selShi.options.add( op );
	}
	
}

function  AddXian()
{	
	var  selSheng = document.getElementById("sheng");
	var  selShi = document.getElementById("shi");
	var  selXian = document.getElementById("xian");

	selXian.innerHTML = "";
	
	var  i = parseInt( selSheng.value );
	
	var  j = parseInt( selShi.value );
	
	for( var k= 0 ; k <  xianArray[i][j].length ; k++ )
	{
		var  op = new  Option( xianArray[i][j][k]   , k );
		
		selXian.options.add( op );
	}
	
}

window.onload = function()
{
  	AddSheng();	
  	AddShi();
  	AddXian();
}
