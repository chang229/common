/**
 * 根据id获取元素
 * @param id
 * @returns {Element}
 */
function $(id){
	return document.getElementById(id);
}

/**
 * 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement( element ){
	if( element.nextElementSibling ){
		return element.nextElementSibling;
	}else{
		var next = element.nextSibling;
		while( next && next.nodeType != 1 ){
			next = next.nextSibling;
		};
		return next;
	};
}

/**
 * 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getPreviousElement( element ){
	if( element.previousElementSibling ){
		return element.previousElementSibling;
	}else{
		var previous = element.previousSibling;
		while( previous && previous.nodeType != 1 ){
			previous = previous.previousSibling;
		};
		return previous;
	};
}

/**
 * 获取任意对象的内部文本（兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getText( element ){
	if( element.innerText ){
		return element.innerText;
	}else{
		return element.textContent;
	};
}

/**
 * 设置任意对象的内部文本 （兼容所有浏览器）
 * @param element
 * @param content
 */
 function setText( element,content ){
 	if( element.innerText ){
 		element.innerText = content;
 	}else{
 		element.textContent = content;
 	};
 }

 /**
 * 获取第一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getFirstElement( element ){
	if( element.firstElementChild ){
		return element.firstElementChild;
	}else{
		var node = element.firstChild;
		while( node && node.nodeType != 1 ){
			node = node.nextSibling;
		};
		return node;
	};
}

/**
 * 获取最后一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getLastElement( element ){
	if( element.lastElementChild ){
		return element.lastElementChild;
	}else{
		var node = element.lastChild;
		while( node && node.nodeType != 1 ){
			node = node.previousSibling;
		};
		return node;
	};
}

/**
 * 获取当前网页url链接所带的参数
 * @param element
 * @returns {*}
 */
function GetRequest(url) {
	if (url.lastIndexOf('?') == 0) {
		var str = url.substring(url.lastIndexOf('?') + 1, url.length);
		var arr = str.split('&');
		var parames = [];
		for (var i = 0; i < arr.length; i++) {
		 	parames[arr[i].split('=')[0]] = arr[i].split('=')[1];
		}
		return parames;
	}
}
var type = GetRequest(location.search);
if (type) {
	if (type['type'] == '0') {	//判断url参数值
		$(".head_nev li").eq(0).addClass("current").siblings("li").removeClass("current");
	}else if(type['type'] == '1'){
		$(".head_nev li").eq(1).addClass("current").siblings("li").removeClass("current");
	}else if(type['type'] == '2'){
		$(".head_nev li").eq(2).addClass("current").siblings("li").removeClass("current");
	}else if(type['type'] == '3'){
		$(".head_nev li").eq(3).addClass("current").siblings("li").removeClass("current");
	}
};


/**
 * 判断手机屏幕是横屏还是竖屏
 * @param element
 * @returns {*}
 */
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
	if (window.orientation === 180 || window.orientation === 0) { 
	    alert('竖屏状态！');
	} 
	if (window.orientation === 90 || window.orientation === -90 ){ 
	    alert('横屏状态！');
	}  
}, false);

/**
 * 封装自己的scroll函数 获取页面滚动的坐标
 * @param element
 * @returns {*}
 */ 
function scroll(){
	return {
		top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 ,
		left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
	};
};

/**
 * 封装自己的getStyle函数 解决计算后样式的兼容问题
 * @param element
 * @returns {*}
 */ 
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	};
};

/**
 * 封装自己的缓动函数库
 * @param element
 * @returns {*}
 */ 
function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flog = true ;
		for( k in json ){
			if( k === "zIndex" ){
				obj.style[k] = json[k];
			}else if( k === "opacity" ){
				// 调用上面的获取计算后样式函数
				var leader = getStyle(obj,k) * 100 ;
				var step = ( json[k]*100 - leader ) / 10 ;
				step = step > 0 ? Math.ceil( step ) : Math.floor( step ) ;
				leader = leader + step ;
				obj.style[k] = leader / 100 ;
			}else{
				var leader = parseInt( getStyle(obj,k) );
				var step = ( json[k] - leader ) / 10 ;
				step = step > 0 ? Math.ceil( step ) : Math.floor( step ) ;
				leader = leader + step ;
				obj.style[k] = leader + "px" ;
			};
			if( leader !== json[k] ){
				flog = false ;
			};
		};
		if( flog ){
			clearInterval(obj.timer);
			if( fn ){
				fn();
			};
		};
	},15);
};

/**
 * 获取窗口可视宽度和高度
 * @param element
 * @returns {*}
 */ 
function client(){
	return {
		width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0 ,
		height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
	};
};

/**
 * 使文字不可被选中
 * @param element
 * @returns {*}
 */ 
function getSelect(){
	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
};

/**
 * 封装 兼容所有浏览器的添加事件的函数
 * @param element
 * element要绑定事件的元素对象 eventName是字符串而且不加on listener事件处理函数
 */
function addEvent(element,eventName,listener){
	if( element.addEventListener ){
		element.addEventListener(eventName, listener, false);
	}else if( element.attachEvent ){
		element.attachEvent("on" + eventName , listener);
	}else{
		element["on" + eventName] = listener;
	}
};

/**
 * 封装 兼容所有浏览器的移除事件的函数
 * @param element
 * element要绑定事件的元素对象 eventName是字符串而且不加on listener事件处理函数
 */
function removeEvent(element,eventName,listener){
	if( element.removeEventListener ){
		element.removeEventListener(eventName, listener, false);
	}else if( event.detachEvent ){
		element.detachEvent("on" + eventName,listener);
	}else{
		element["on" + eventName] = null;
	}
};

/**
 * 封装 兼容所有浏览器的event事件对象的函数
 * @param element
 * @returns {*}
 */
var eventUtils = {
	// 获取event对象
	getEvent:function(event){
		return event || window.event;
	},
	// 获取在页面上的坐标
	getPageX:function(event){
		return event.pageX || event.clientX + document.documentElement.scrollLeft;
	},
	getPageY:function(event){
		return event.pageY || event.clientY + document.documentElement.scrollTop;
	},
	// 阻止冒泡事件
	stopPropagation:function(event){
		if( event.stopPropagation ){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		};
	},
	// 获取当前事件目标
	getTarget:function(event){
		return event.target || event.srcElement;
	}
}

/**
 * 封装 trim方法去掉字符串两端的空格
 * @param element
 * @returns {*}
 */
function trim(str){
	// 字符串的replace方法只能替换第一个，在正则后面加g(globe),开启全局模式，替换所有的空格
	return str.replace(/^\s+|\s+$/g,"");
}


/**
 * 封装 创建xhr对象方法函数
 * @param element
 * @returns {*}
 */
function xhr(){
	var xhr;
	if( window.XMLHttpRequest ){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	};
	return xhr;
};

/**
 * 封装 AJAX方法函数
 * @param element
 * @returns {*}
 */
function ajax(obj){
	// 设置默认对象
	var defares = {
		type:"get",
		url:"#",
		data:{},
		asynce:true,
		dataType:"json",
		success:function(data){console.log(data)}
	};
	// 根据传入的参数修改默认参数
	for( k in obj ){
		defares[k] = obj[k];
	};
	// 创建xhr对象
	var xhr = null;
	if( window.XMLHttpRequest ){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	};
	// 准备发送
	var parma = "";
	for( attr in defares.data ){
		parma += attr + "=" + defares.data[attr] + "&";
	};
	parma = encodeURI( parma.substring(0,parma.length -1 ) );
	if( defares.type == "get" ){
		defares.url += "?" + parma;
	};
	xhr.open(defares.type,defares.url,defares.asynce);
	// 发送请求
	var data = null;
	if( defares.type == "post" ){
		data = parma;
		xhr.setRequestHeader("Content-Type","Application/x-www-form-urlencoded");
	};
	xhr.send( data );
	// 同步请求处理
	if( !defares.asynce ){
		if( defares.dataType == "json" ){
			return JSON.parse( xhr.responseText );
		};
		return xhr.responseText;
	};
	// 异步请求处理服务器返回的数据
	xhr.onreadystatechange = function(){
		if( xhr.readyState == 4 && xhr.status == 200 ){
			var data = xhr.responseText;
			if( defares.dataType == "json" ){
				data = JSON.parse( data );
			};
			defares.success(data);
		};
	};
};