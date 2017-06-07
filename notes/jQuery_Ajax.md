## 目录
- [ajax方法](#title1)

## load 
概述：load() 方法通过 AJAX 请求从服务器加载数据，并把返回的数据放置到指定的元素中。    
语法：load(url,data,function(response,status,xhr))    
参数描述：
- url	规定要将请求发送到哪个 URL。
- data	可选。规定连同请求发送到服务器的数据。
- function(response,status,xhr)	可选。规定当请求完成时运行的函数。
     - response - 包含来自请求的结果数据
     - status - 包含请求的状态（"success", "notmodified", "error", "timeout" 或 "parsererror"）
     - xhr - 包含 XMLHttpRequest 对象     
     
## $.get()
概述：通过远程 HTTP GET请求载入信息。请求成功时可调用回调函数。如果需要在出错时执行函数，请使用 $.ajax。    
语法：jQuery.get(url, [data], [callback], [type])
参数描述：
- url -待载入页面的URL地址
- data -待发送 Key/value 参数。
- callback -载入成功时回调函数。
- type -返回内容格式，xml, html, script, json, text, _default。   
 
## $.post()
概述：通过远程 HTTP POST 请求载入信息。
请求成功时可调用回调函数。如果需要在出错时执行函数，请使用 $.ajax。    
语法：jQuery.post(url, [data], [callback], [type])    
参数描述：
- url -发送请求地址。
- data -待发送 Key/value 参数。
- callback -发送成功时回调函数。
- type -返回内容格式，xml, html, script, json, text, _default。

## $.ajax()<a name="title1"></a>
概述：ajax() 方法通过 HTTP 请求加载远程数据。
语法：jQuery.ajax([settings])
参数描述：
[settings]：可选。用于配置 Ajax 请求的键值对集合。可以通过 $.ajaxSetup() 设置任何选项的默认值。
- url: 请求的地址。
- type: 请求的方式（get/post）
- data: 发送到服务器的数据
- dataType: 预期服务器返回的数据类型
- async: 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
- timeout: 设置请求超时时间（毫秒）
- beforeSend: 发送请求前调用的函数
- success: 请求成功后调用的函数
- error: 请求失败时调用的函数

## $.getJSON()
概述：通过 HTTP GET 请求载入 JSON 数据。在 jQuery 1.2 中，您可以通过使用JSONP形式的回调函数来加载其他网域的JSON数据（跨域请求）
语法：jQuery.getJSON(url, [data], [callback])    
参数描述：
- url -发送请求地址。
- data -待发送 Key/value 参数。
- callback -载入成功时回调函数。    

## $.getScript()
概述：通过 HTTP GET 请求载入并执行一个 JavaScript 文件。    
语法：$.getScript(url,[callback])    
参数描述：
- url -待载入 JS 文件地址。
- callback -成功载入后回调函数。

## serialize()
序列表单、表格内容为查询字符串。