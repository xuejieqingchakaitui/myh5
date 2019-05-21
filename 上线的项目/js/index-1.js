let $btn = $('.music_icon'),
    $audio = $('#audio'),
    $page = $('.swiper-slide');

let isRunning = false;//判断按钮是否在旋转

let z = 20;
    $btn.on('touchend', function () {
//用什么依据判断 是否在旋转
    if (isRunning) {
        //点击时，若按钮再旋转 则让他停止
        $(this).css({animationPlayState: 'paused'});
        isRunning = false;
        $audio[0].pause();
    } else {
        $(this).css({animationPlayState: 'running'});
        isRunning = true;
        $audio[0].play();

    }
});


let index = 0;//用来记录显示是第几张   获得到当前显示的是第几张   （这样才可以知道上一张是谁，下一张是谁）
document.body.addEventListener('touchstart', function (e) {//给body绑定按下的事件
//判断上下移动
    this.sy = e.changedTouches[0].pageY;//手指按下的Y的位置

});
document.body.addEventListener('touchend', function (e) {//给body绑定撒手的事件touchend
    this.ey = e.changedTouches[0].pageY;//手指撒开的Y的位置
    let my = this.ey - this.sy;//用手指撒开的Y的为位置-手指按下Y的位置

    if (my < -10) {//如果当前点击的大于一定的值就证明他是向上滑动的
        // debugger
        let prev = index;
        index++;//计数的工具
        if (index == 3) {
            index = 0
        }
        //下面是以display  none
        //display   block    的形式展现出来的。虽然可hi上下滑动，但是样式不够好看
        //和页面生硬
        // $page.hide();
        // $page.eq(index).show();

        $page.eq(index).css({
            display:'none',
            transform:'translateY(1000px)',//让你需要显示的那张先跑到下面去
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
                transform:'translateY(0)'
            })
        },100);


        //    下一步 要实现动效  通过translateY和 transit

    } else if (my > 10) {//如果当前点击的小于某一个值就证明他是下滑的
        index--;
        if (index == -1) {
            index = 3
        }
        //下面是以display  none
        //display   block    的形式展现出来的。虽然可hi上下滑动，但是样式不够好看
        //和页面生硬
        // $page.hide();
        // $page.eq(index).show()
        $page.eq(index).css({
            display:'none',
            transform:'translateY(0)',//让你需要显示的那张先跑到下面去
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
                transform:'translateY(0)'
            })
        },100);

    }
});




