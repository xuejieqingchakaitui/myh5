// 获取元素
let $btn = $('.music_icon'),
    $audio = $('#audio'),
    $page = $('.swiper-slide')

let isRunning = true // 判断按钮是否在旋转
let timer = null;
let z = 20;

$btn.on('touchend', function () {
    // 用什么依据判断 是否在转
    if (isRunning) {
        // 点击时 若按钮在旋转;则让他停止
        $(this).css({ animationPlayState: 'paused' })
        isRunning = false
        $audio[0].pause()
    } else {
        $(this).css({ animationPlayState: 'running' })
        isRunning = true
        $audio[0].play()
    }
})

let index = 0;
document.body.addEventListener('touchstart', function (e) {
    this.sx = e.changedTouches[0].pageX;


});
document.body.addEventListener('touchend', function (e) {
    this.ex = e.changedTouches[0].pageX;
    let mx = this.ex - this.sx;
    if (mx < -10) {
        // debugger
        let prev = index;
        index++;
        if (index == 3) {
            index = 0
        }
         // $page.hide();
         // $page.eq(index).show();
        $page.eq(index).css({
            display:'none',
            transform:'translateX(1000px)',
        });
        setTimeout(()=>{
            $page.eq(index).css({
                display:'block',
                zIndex:100+z
            })
        },50);
        setTimeout(()=>{
            $page.eq(prev).css({
                zIndex:z++
            });
            $page.eq(index).css({
                transform:'translateX(0)'
            })
        },100);


    } else if (mx > 10) {
        index--;
        if (index == -1) {
            index = 3
        }
         // $page.hide();
         // $page.eq(index).show();
        $page.eq(index).css({
            display:'none',
            transform:'translateX(0)',
        });
        setTimeout(()=>{
            $page.eq(index).css({
                display:'block',
                zIndex:100+z
            })
        },50);
        setTimeout(()=>{
            $page.eq().css({
                zIndex:z++
            });
            $page.eq(index).css({
                transform:'translateX(0)'
            })
        },100);

    }
});
