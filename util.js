// js 深拷贝
export function deepClone(obj) {
    let result
    if (typeof obj !== 'object') {
      return obj
    }
    if (obj instanceof RegExp) {
      return obj
    }
    if (obj instanceof Date) {
      return obj
    }
    if (obj instanceof Array) {
      result = []
      for (let i = 0, len = obj.length; i < len; i++) {
        result.push(deepClone(obj[i]))
      }
      return result
    }
    if (obj instanceof Object) {
      result = {}
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = deepClone(obj[key])
        }
      }
      return result
    }
  }

// 判断是否微信浏览器
export function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }
  // 判断是否手机端
  export function isMobile() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/iphone|ipod|ipad|android|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire|sonyericsson|meizu|opera m(ob|in)i|huawei|nexus|dopod|blazer|avantgo|os(series)([^;]+)up.browser|360(mb)[^;]{5,}|huawei|nokian|xoom|yupa|zte|j2me|samsung|lenovo|motorola|symbian|smartphone|midp|wap|windows (ce|phone)|playbook|silk/i) != null) {
      return true;
    } else {
      return false;
    }
  }
  
  // 判断是否安卓
  export function isAndroid() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/android/i) == 'android') {
      return true;
    } else {
      return false;
    }
  }
  
  // 判断是否ios
  export function isIos() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/iphone|ipod|ipad/i) == 'iphone') {
      return true;
    } else {
      return false;
    }
  }

  // 数组去重
export function unique(arr) {
    return Array.from(new Set(arr))
  }

  // 复制
export function copy(text) {
    var oInput = document.createElement('input');
    oInput.value = text;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
}

  // 粘贴
  export function paste() {
    var oInput = document.getElementsByClassName('oInput')[0];
    if (oInput) {
      oInput.select(); // 选择对象
      document.execCommand("Paste"); // 执行浏览器粘贴命令
      oInput.className = 'oInput';
      oInput.style.display = 'none';
    }
  }
  
  // 日期解析
export function parseDate(date) {
    if (date) {
      return new Date(date).format('yyyy-MM-dd hh:mm:ss')
    }
    return ''
  }
  // URL 參數解析
  export function parseUrl(url) {
    if (url) {
      const urlObj = new URL(url)
      const params = {}
      urlObj.searchParams.forEach((value, key) => {
        params[key] = value
      })
      return params
    }
    return {}
  }
  
  // 计算字节长度
  export function getByteLen(val) {
    let len = 0
    for (let i = 0; i < val.length; i++) {
      if (val[i].match(/[^\x00-\xff]/ig) != null) {
        len += 1
      } else {
        len += 0.5
      }
    }
    return Math.floor(len)
  }
  
  // 计算 日差
  export function getDateDiff(date) {
    const now = new Date()
    const diff = now.getTime() - new Date(date).getTime()
    const day = Math.floor(diff / (24 * 3600 * 1000))
    return day
  }
  // 计算 时差
  export function getTimeDiff(date) {
    const now = new Date()
    const diff = now.getTime() - new Date(date).getTime()
    const hour = Math.floor(diff / (3600 * 1000))
    return hour
  }
  
  // 清空数组
  export function clearArray(arr) {
    while (arr.length > 0) {
      arr.pop()
    }
  }
  
  // html转字文本
  export function htmlToText(val) {
    const div = document.createElement('div')
    div.innerHTML = val
    return div.textContent || div.innerText
  }
  
  // 对象合并
  export function merge(target, source) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key]
      }
    }
    return target
  }
  // 类名切换
  export function toggleClass(el, className) {
    if (!el || !className) {
      return
    }
    let classString = el.className
    const nameIndex = classString.indexOf(className)
    if (nameIndex === -1) {
      classString += '' + className
    } else {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
    }
    el.className = classString
  }
  // 获取当前时间
  export function getNowFormatDate() {
    const date = new Date()
    const seperator1 = '-'
    const seperator2 = ':'
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    let strHours = date.getHours()
    let strMinutes = date.getMinutes()
    let strSeconds = date.getSeconds()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    if (strHours >= 0 && strHours <= 9) {
      strHours = '0' + strHours
    }
    if (strMinutes >= 0 && strMinutes <= 9) {
      strMinutes = '0' + strMinutes
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
      strSeconds = '0' + strSeconds
    }
    const currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + strHours + seperator2 + strMinutes + seperator2 + strSeconds
    return currentdate
  }
  // 防抖
  export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result
    const later = function() {
      // 据上一次触发时间间隔
      const last = +new Date() - timestamp
      // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }
    return function(...args) {
      context = this
      timestamp = +new Date()
      const callNow = immediate && !timeout
      // 如果延时不存在，重新设定延时
      if (!timeout) timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(context, args)
        context = args = null
      }
      return result
    }
  }
  // 节流
  export function throttle(func, wait, options) {
    let context, args, result
    let timeout = null
    let previous = 0
    if (!options) options = {}
    const later = function() {
      previous = options.leading === false ? 0 : +new Date()
      timeout = null
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }
    return function(...args) {
      const now = +new Date()
      if (!previous && options.leading === false) previous = now
      const remaining = wait - (now - previous)
      context = this
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        result = func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
      return result
    }
  }
  // 数组去重
  export function unique(arr) {
    const res = []
    const json = {}
    for (let i = 0; i < arr.length; i++) {
      if (!json[arr[i]]) {
        res.push(arr[i])
        json[arr[i]] = 1
      }
    }
    return res
  }
  // 数组排序
  export function sort(arr) {
    return arr.sort((a, b) => {
      return a - b
    })
  }
  
  // 获取指定范围内的随机数
  export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  // 判断是否为空对象
  export function isEmptyObject(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false
      }
    }
    return true
  }
  // 判断类名是否存在
  export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
  }
  // 添加类名
  export function addClass(el, className) {
    if (hasClass(el, className)) {
      return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
  }
  // 删除类名
  export function removeClass(el, className) {
    if (!hasClass(el, className)) {
      return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, '')
  }
  // 判断是否过期
  export function isExpired(date) {
    const now = new Date()
    const expired = new Date(date)
    return now.getTime() > expired.getTime()
  }
  // 判断localStorage数据是否存在
  export function isLocalStorageExist(key) {
    return localStorage.getItem(key) ? true : false
  }
  

  // 登录
export function login(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }
  // 封装请求
  export function request(options) {
    return new Promise((resolve, reject) => {
      const instance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 5000
      })
      instance.interceptors.request.use(config => {
        return config
      }, err => {
        reject(err)
      })
      instance.interceptors.response.use(res => {
        return res.data
      }, err => {
        reject(err)
      })
      instance(options)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  // 请求验证码
  export function getCaptcha(phone) {
    return request({
      url: '/captcha',
      method: 'get',
      params: {
        phone
      }
    })
  }
  // 注册
  export function register(data) {
    return request({
      url: '/register',
      method: 'post',
      data
    })
  }
  // 找回密码
  export function retrievePassword(data) {
    return request({
      url: '/retrievePassword',
      method: 'post',
      data
    })
  }
  // 获取用户信息
  export function getUserInfo() {
    return request({
      url: '/userInfo'
    })
  }
  // 修改用户信息
  export function updateUserInfo(data) {
    return request({
      url: '/userInfo',
      method: 'put',
      data
    })
  }
  // 修改密码
  export function updatePassword(data) {
    return request({
      url: '/password',
      method: 'put',
      data
    })
  }
  // 修改手机号
  export function updatePhone(data) {
    return request({
      url: '/phone',
      method: 'put',
      data
    })
  }
  // 修改头像
  export function updateAvatar(data) {
    return request({
      url: '/avatar',
      method: 'put',
      data
    })
  }
  // 修改昵称
  export function updateNickname(data) {
    return request({
      url: '/nickname',
      method: 'put',
      data
    })
  }
  // 修改性别
  export function updateGender(data) {
    return request({
      url: '/updateGender',
      method: 'put',
      data
    })
  }
  // 修改地区
  export function updateDistrict(data) {
    return request({
      url: '/updateDistrict',
      method: 'put',
      data
    })
  }
  // 修改签名
  export function updateSignature(data) {
    return request({
      url: '/updateSignature',
      method: 'put',
      data
    })
  }
  // 修改组
  export function updateGroup(data) {
    return request({
      url: '/updateGroup',
      method: 'put',
      data
    })
  }
  // 修改自定义组
  export function updateDefinedGroup(data) {
    return request({
      url: '/updateDefinedGroup',
      method: 'put',
      data
    })
  }
  
  // vue更新数组
  export function updateArray(array, newItem, key) {
    const index = _.findIndex(array, o => {
      return o[key] === newItem[key]
    })
    if (index !== -1) {
      array.splice(index, 1, newItem)
    } else {
      array.push(newItem)
    }
  }
