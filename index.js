// 格式化时间
export function timeFormat(value, type) {
  if (!value) {
    return;
  }
  value = value * 1;
  let times = new Date(value);
  let timeObj = {
    YY: times.getFullYear(),
    MM: times.getMonth() + 1,
    DD: times.getDate(),
    hh: times.getHours(),
    mm: times.getMinutes(),
    ss: times.getSeconds()
  };
  timeObj.MM = timeObj.MM < 10 ? "0" + timeObj.MM : timeObj.MM;
  timeObj.DD = timeObj.DD < 10 ? "0" + timeObj.DD : timeObj.DD;
  timeObj.hh = timeObj.hh < 10 ? "0" + timeObj.hh : timeObj.hh;
  timeObj.mm = timeObj.mm < 10 ? "0" + timeObj.mm : timeObj.mm;
  timeObj.ss = timeObj.ss < 10 ? "0" + timeObj.ss : timeObj.ss;
  let typeArr = type.split(" ");
  let newArr = [];
  typeArr.forEach(v => {
    v = v + "";
    if (v.indexOf("-") !== -1) {
      v = v.split("-");
    }
    if (v.indexOf(":") !== -1) {
      v = v.split(":");
    }
    v.forEach(item => {
      newArr.push(item);
    });
  });
  let str = "";
  newArr.forEach((v, i) => {
    if (v === "DD") {
      str += timeObj[v];
    } else if (v === "hh") {
      str += " " + timeObj[v] + ":";
    } else if (v === "mm" && i !== newArr.length - 1) {
      str += timeObj[v] + ":";
    } else if (i === newArr.length - 1) {
      str += timeObj[v];
    } else {
      str += timeObj[v] + "-";
    }
  });
  return str;
}

// 格式化字符串，显示num个字符串并带省略号
export const limit = (value, num) => {
    if (value && value.length > num) {
        return value.substr(0, num) + "...";
    } else {
        return value;
    }
};

// 克隆对象方法
export const clone = obj => {
    if(typeof obj !== 'object' || obj === null){
        return obj
    };
    let newobj = Array.isArray(obj) ? [] : {};
    for(let k in obj){
        newobj[k] = typeof obj[k] === 'object' ? clone(obj[k]) : obj[k]
    };
    return newobj;
};

// 手机号码输入校验
export const mobileTest = value => {
  value = value + "";
  value = value.trim();
  let strArr = value.split("");
  if (strArr[0] === "0") {
    strArr.splice(0, 1);
  }
  strArr.forEach((v, i) => {
    if (isNaN(v * 1)) {
      strArr.splice(i, 1);
    }
  });
  return strArr.join("");
};
