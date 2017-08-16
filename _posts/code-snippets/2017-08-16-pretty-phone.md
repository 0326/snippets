---
layout: post
title:  "手机号码格式美化"
date:   2017-08-04 13:50:39
categories: code-snippets
---

> 手机号码字符串格式化：18888888888 => 188 8888 8888

<!--more-->

编写一个手机号码字符串处理函数，实现以下效果：

```javascript
formatPhoneNumber('18658128888') // 186 5812 8888
formatPhoneNumber('18658128888', '-') // 186-5812-8888
formatPhoneNumber('186 5812 8888', '-') // 186-5812-8888
formatPhoneNumber('18658128888', '__') // 186__5812__8888
```

参考代码：

```javascript
/**
 * 手机号码格式化
 * @param {string} numStr 手机号码
 * @param {string} deli 分割符，默认一个空格
 */
function formatPhoneNumber (numStr = '', deli = ' ') {
  numStr = numStr.replace(/\s/g, '')
  return /^\d{11}$/.test(numStr) ? numStr.replace(/(\d{3})(\d{4})/g, `$1${deli}$2${deli}`) : numStr
}
```

## 拓展
有时候需要处理的号码并不是11位手机号，实现一个通用的字符串处理方法，达到以下效果：

```javascript
formatStr('123456789') // 返回原字符串 123456789
formatStr('123456789', '-') // 返回原字符串 123456789
formatStr('123456789', '-', 3) // 返回前3个字符 123
formatStr('123456789', '-', 3, 4) // 返回 123-4567
formatStr('12345678901234', ' ', 3, 4, 4) // 返回 123 4567 8901
formatStr('12345678901234', '-', 3, 4, 4, 5) // 返回 123-4567-8901-234
```

参考代码：
```javascript
/**
 * 往字符串多个指定位置插入指定分割符并进行截取
 * 利用字符串 replace 方法，eg: formatStr('123456789', '-', 3, 4) => replace(/(.{3})(.{4})/g, '$1-$2-')
 * @param {string} str 需要格式化的原始字符串
 * @param {string} deli 需要插入的字符
 * @param {array} pos 需要插入的位置数组
 */
function formatStr (str = '', deli = ' ', ...pos) {
  let sumPos = 0, regStr = ''
  const strLen = str.length
  const replaceStr = pos.map((p,i) => {
    sumPos += p
    if (strLen >= sumPos) {
      regStr += `(.{${p}})`
      return `$${i+1}${deli}`
    } else {
      sumPos -= p
      regStr += `(.{${strLen - sumPos}})`
      return ''
    }
  }).join('')

  str = str.slice(0, sumPos).replace(new RegExp(regStr, 'g'), replaceStr)
  return str.slice(0, 0 - deli.length)
}
```

另外一个方法，将原字符串str.split('')为数组，然后循环在指定位置插入 deli 分隔符。
```javascript
function formatStr2(originStr = '', splitStr = ' ', ...splits) {
  let strArr = originStr.split('')
  let count = 0
  let strLen = originStr.length
  for(let i = 0, splitLen = splits.length; i < splits.length; i++) {
    count += splits[i]
    if (count < strLen) {
      strArr.splice(count++, 0, splitStr)
    } else {
      break
    }
  }
  count = count <= strLen ? count-1 : count
  return strArr.slice(0,count).join('')
}

```

Chrome 下测试该方法要比正则方法效率高。测试代码：
```javascript
function testSpeed(times = 100000) {
  var t1 = performance.now(), i =0
  while(i++ < times) {
    formatStr('12345678901234', ' ', 3,4,4,2,2)
  }
  return performance.now() - t1
}
```