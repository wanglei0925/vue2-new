// 设置共用的js  用来匹配不同的手机
var pixclPatio = 1 / window.devicePixelRatio
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixclPatio + ',minimum-scale=' + pixclPatio + ',maximum-scale=' + pixclPatio + ',user-scalable=no" />');
setsize()
window.addEventListener('resize', setsize, false)
window.addEventListener('orientationchange', setsize, false)
function setsize () {
var html = document.getElementsByTagName('html')[0]
var pageWidth = html.getBoundingClientRect().width
  html.style.fontSize = pageWidth / 16 + 'px'
	}
