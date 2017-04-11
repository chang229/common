/**
 * 工具库版本号
 */
var edition = "1.1.1";
/**
 * 根据id获取元素
 * @param id
 * @returns {Element}
 */
function $(id) {
	return document.getElementById(id);
}

/**
 * 数组的拼接方法join()的方法原型
 * @param element
 * @returns {*}
 */
function join(arr, ele) {
	var temp = arr[0];
	for (i = 1; i < arr.length; i++) {
		temp += ele + arr[i];
	}
	return temp;
}

/**
 * 数组的倒序reverse()方法原型
 * @param element
 * @returns {*}
 */
function reverse(arr) {
	for (i = 0; i < arr.length / 2; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	};
	return arr;
}

/**
 * 数组的冒泡排序(升序)
 * @param element
 * @returns {*}
 */
function ascending(arr) {
	for (i = 0; i < arr.length - 1; i++) {
		var flog = true;
		for (j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				flog = false;
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		};
		if (flog) {
			break;
		};
	};
	return arr;
}

/**
 * 数组的去重
 * @param element
 * @returns {*}
 */
function remdup(arr) {
	for (i = 0; i < arr.length - 1; i++) {
		for (j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j, 1);
			};
		};
	};
	return arr;
};

/**
 * 查找数组中每一项出现的次数
 * @param element
 * @returns {*}
 */
function cishu(arr) {
	var obj = {};
	for (i = 0; i < arr.length; i++) {
		if (obj[arr[i]]) {
			obj[arr[i]]++;
		} else {
			obj[arr[i]] = 1;
		}
	}
	return obj;
}

/**
 * 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
	if (element.nextElementSibling) {
		return element.nextElementSibling;
	} else {
		var next = element.nextSibling;
		while (next && next.nodeType != 1) {
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
function getPreviousElement(element) {
	if (element.previousElementSibling) {
		return element.previousElementSibling;
	} else {
		var previous = element.previousSibling;
		while (previous && previous.nodeType != 1) {
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
function getText(element) {
	if (element.innerText) {
		return element.innerText;
	} else {
		return element.textContent;
	};
}

/**
 * 设置任意对象的内部文本 （兼容所有浏览器）
 * @param element
 * @param content
 */
function setText(element, content) {
	if (element.innerText) {
		element.innerText = content;
	} else {
		element.textContent = content;
	};
}

 /**
 * 获取第一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
	if (element.firstElementChild) {
		return element.firstElementChild;
	} else {
		var node = element.firstChild;
		while (node && node.nodeType != 1) {
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
function getLastElement(element) {
	if (element.lastElementChild) {
		return element.lastElementChild;
	} else {
		var node = element.lastChild;
		while (node && node.nodeType != 1) {
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
	if (type['type'] == '0') { //判断url参数值
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
	if (window.orientation === 90 || window.orientation === -90) {
		alert('横屏状态！');
	}
}, false);

/**
 * 判断是安卓手机还是苹果手机
 * @param element
 * @returns {*}
 */
function IsIos() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
		return console.log('android终端');
	};
	if (isiOS) {
		return console.log('ios终端');
	}
}

/**
 * 判断是手机端还是PC端
 * @param element
 * @returns {*}
 */
function browserRedirect(moubleUrl,pcUrl) {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		window.location.href = moubleUrl; //请在此处填写移动端的网址
	}else{
		window.location.href = pcUrl; //请在此处填写PC端的网址
	};
}

/**
 * 判断是否已经安装了APP
 * @param element
 * @returns {*}
 */
function IsApp() {
	if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
		window.location.href = "com.baidu.tieba://"; //ios app协议(如：com.baidu.tieba://)
		window.setTimeout(function() {
			window.location.href = "https://itunes.apple.com/cn/app/id477927812"; //跳转到App store
		}, 2000)
	};
	if (navigator.userAgent.match(/android/i)) {
		window.location.href = "com.baidu.tieba://app"; //android app协议(如：com.baidu.tieba://app)
		window.setTimeout(function() {
			window.location.href = "https://****.apk"; //android 下载地址
		}, 2000)
	};
};

/**
 * 封装自己的scroll函数 获取页面滚动的坐标
 * @param element
 * @returns {*}
 */ 
function scroll() {
	return {
		top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
	};
};

/**
 * 封装自己的getStyle函数 解决计算后样式的兼容问题
 * @param element
 * @returns {*}
 */ 
function getStyle(obj, attr) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(obj, null)[attr];
	} else {
		return obj.currentStyle[attr];
	};
};

/**
 * 封装自己的缓动函数库
 * @param element
 * @returns {*}
 */ 
function animate(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flog = true;
		for (k in json) {
			if (k === "zIndex") {
				obj.style[k] = json[k];
			} else if (k === "opacity") {
				// 调用上面的获取计算后样式函数
				var leader = getStyle(obj, k) * 100;
				var target = json[k] * 100;
				var step = (target - leader) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				leader = leader + step;
				obj.style[k] = leader / 100;
			} else {
				var leader = parseInt(getStyle(obj, k));
				var target = json[k];
				var step = (target - leader) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				leader = leader + step;
				obj.style[k] = leader + "px";
			};
			if (leader !== target) {
				flog = false;
			};
		};
		if (flog) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			};
		};
	}, 15);
};

/**
 * 获取窗口可视宽度和高度
 * @param element
 * @returns {*}
 */ 
function client() {
	return {
		width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
		height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
	};
};

/**
 * 使文字不可被选中
 * @param element
 * @returns {*}
 */ 
function getSelect() {
	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
};

/**
 * 封装 兼容所有浏览器的添加事件的函数
 * @param element
 * element要绑定事件的元素对象 eventName是字符串而且不加on listener事件处理函数
 */
function addEvent(element, eventName, listener) {
	if (element.addEventListener) {
		element.addEventListener(eventName, listener, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + eventName, listener);
	} else {
		element["on" + eventName] = listener;
	}
};

/**
 * 封装 兼容所有浏览器的移除事件的函数
 * @param element
 * element要绑定事件的元素对象 eventName是字符串而且不加on listener事件处理函数
 */
function removeEvent(element, eventName, listener) {
	if (element.removeEventListener) {
		element.removeEventListener(eventName, listener, false);
	} else if (event.detachEvent) {
		element.detachEvent("on" + eventName, listener);
	} else {
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
	getEvent: function(event) {
		return event || window.event;
	},
	// 获取在页面上的坐标
	getPageX: function(event) {
		return event.pageX || event.clientX + document.documentElement.scrollLeft;
	},
	getPageY: function(event) {
		return event.pageY || event.clientY + document.documentElement.scrollTop;
	},
	// 阻止冒泡事件
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		};
	},
	// 获取当前事件目标
	getTarget: function(event) {
		return event.target || event.srcElement;
	}
}

/**
 * 封装 trim方法去掉字符串两端的空格
 * @param element
 * @returns {*}
 */
function trim(str) {
	// 字符串的replace方法只能替换第一个，在正则后面加g(globe),开启全局模式，替换所有的空格
	return str.replace(/^\s+|\s+$/g, "");
}

/**
 * 封装 找到字符串中某一字符串出现的所有位置
 * @param element
 * @returns {*}
 */
function index(src,attr){
	var index = -1, arr = [];
	do{
		index = src.indexOf(attr,index+1);
		arr.push(index);
	}while(index != -1);
	return arr.slice(0,arr.length-1);
}

/**
 * 封装 替换所有的字符
 * @param element
 * @returns {*}
 */
function repl(src,attr,el){
	while(src.indexOf(attr) != -1){
		src = src.replace(attr,el);
	};
	return src;
}


/**
 * 封装 创建xhr对象方法函数
 * @param element
 * @returns {*}
 */
function xhr() {
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	};
	return xhr;
};

/**
 * 封装 AJAX方法函数 支持jsonp跨域
 * @param element
 * @returns {*}
 */
function ajax(obj) {
	// 设置默认参数
	var defauls = {
		type: "get",
		url: "#",
		data: {},
		dataType: "json",
		asynce: true,
		jsonp: "callback",
		success: function(data) {
			console.log(data);
		}
	};
	// 根据传入参数修改默认参数
	for (k in obj) {
		defauls[k] = obj[k];
	};
	// data对象处理
	var param = ""
	for (attr in defauls.data) {
		param += attr + "=" + defauls.data[attr] + "&";
	};
	param = encodeURI(param.substring(0, param.length - 1));
	// 判断是jsonp跨域还是ajax异步请求
	if (defauls.dataType == "jsonp") {
		// 设置自定义函数名 模仿jquery设置函数名
		var cd = "commonjs" + (edition + Math.random()).replace(/\D/g, "") + "_" + (new Date().getTime());
		if (defauls.jsonpcallback) {
			cd = defauls.jsonpcallback;
		};
		// 自定义函数供后台调用
		window[cd] = function(data) {
			defauls.success(data);
		}
		var script = document.createElement("script");
		script.src = defauls.url + "?" + defauls.jsonp + "=" + cd + "&" + param;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(script);
	} else {
		// ajax异步请求
		// 创建对象
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		};
		// 准备发送
		if (defauls.type == "get") {
			defauls.url += "?" + param;
		};
		xhr.open(defauls.type, defauls.url, defauls.asynce);
		// 发送请求
		var data = null;
		if (defauls.type == "post") {
			data = param;
			xhr.setRequestHeader("Content-Type", "Application/x-www-form-urlencoded");
		};
		xhr.send(data);
		// 判断是否是同步请求处理
		if (!defauls.asynce) {
			if (defauls.dataType == "json") {
				return JSON.parse(xhr.responseText);
			};
			return xhr.responseText;
		};
		// 异步请求处理返回的数据
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = xhr.responseText;
				if (defauls.dataType == "json") {
					data = JSON.parse(data);
				};
				defauls.success(data);
			};
		}
	}
}