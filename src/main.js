function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

var dv = document.querySelector('.page2 .so-2');
var page2 = document.querySelector('.page2')
var page3 = document.querySelector('.page3')
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
//鼠标按下事件

dv.ontouchstart = function(e) {
  e = e.touches[0]
    //获取x坐标和y坐标
    x = e.clientX / autoScaleInfo.scale;
    y = e.clientY / autoScaleInfo.scale;

    //获取左部和顶部的偏移量
    l = dv.offsetLeft;
    t = dv.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    dv.style.cursor = 'move';
    // e.preventDefault()
}
//鼠标移动
var showIndex = 0
window.ontouchmove = function(e) {
  // console.log(e)
  e = e.touches[0]
    if (isDown == false) {
        return;
    }
    //获取x和y
    var nx = e.pageX / autoScaleInfo.scale;
    var ny = e.pageY / autoScaleInfo.scale;
    //计算移动后的左偏移量和顶部的偏移量
    if ((nx / 750) < 0.33 ) {
      page2.setAttribute("show", "1")
      page3.setAttribute("show", "1")
      showIndex = 1
      document.querySelector('.page5').style.backgroundImage = "url('./static/resource/show-1.png')"
    } else if ((nx / 750) < 0.66 ) {
      page2.setAttribute("show", "2")
      page3.setAttribute("show", "2")
      showIndex = 2
      document.querySelector('.page5').style.backgroundImage = "url('./static/resource/show-2.png')"
    } else if ((nx / 750) < 1 ) {
      page2.setAttribute("show", "3")
      page3.setAttribute("show", "3")
      showIndex = 3
      document.querySelector('.page5').style.backgroundImage = "url('./static/resource/show-3.png')"
    }
    // console.log(ny)
    var nl = nx - (x - l);
    var nt = ny - (y - t);

    dv.style.left = nl + 'px';
    dv.style.top = nt + 'px';
    // e.preventDefault()
}
//鼠标抬起事件
dv.ontouchend = function() {
  owo.go('page3//scaleDown/scaleUpDown/true/scaleDown/scaleUp')
    //开关关闭
    isDown = false;
    dv.style.cursor = 'default';
}