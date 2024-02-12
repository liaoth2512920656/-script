
    // 设备检测。依赖前述mobile-detect项目。
    var md = new MobileDetect(window.navigator.userAgent);
 
    // PC生效，手机/平板不生效
    // md.mobile(); md.phone(); 
    if(!md.phone() && !md.tablet()){
        window.pjaxLoaded = function(){
            // 正文卡片
            VanillaTilt.init(document.querySelectorAll("article.post:not(.post-full), .shuoshuo-preview-container"),{
                reverse:false,  // 是否反转倾斜方向
                max:2,     // 最大的倾斜角度(度)
                startX:0,      // X轴上的起始倾斜，单位为度。
                startY:0,      // Y轴上的起始倾斜，单位为度。
                perspective:1000,   // 转换角度，越低倾斜越极端
                scale:1.02,      // 缩放比例,2 = 200%, 1.5 = 150%, 等等..
                speed:300,    // 进入/退出 过渡的速度
                transition:true,   // 是否在进入/退出的时候设置过渡效果
                axis:"y",   // 设置禁用哪个轴的反转,值为"x"或者"y"或者null
                reset:true,   // 设置在退出时清除倾斜效果
                easing:"cubic-bezier(.03,.98,.52,.99)",    // 设置进入退出时过渡的贝塞尔曲线
                glare:true,// 设置是否拥有炫光效果,即透明度渐变效果
                "max-glare":0.7,      // 设置最大的透明效果,1=100%,0.5=50%
                "glare-prerender":false,  // false, VanillaTilt为你创建透明炫光元素,否则你需要自己在.jstilt-glare>.js-tilt-glare-inner中自己添加render函数
                "mouse-event-element":null,   // css选择器或者链接到HTML的元素,他将监听该元素上的鼠标事件
                "full-page-listening":false,  // 是否监听整个页面的鼠标移动事件,若为true,他将监听这个页面,而非选中元素
                gyroscope:false,   // 是否开启陀螺仪的方向检测
                gyroscopeMinAngleX: 0,  //陀螺仪最小角度X
                gyroscopeMaxAngleX: 0,  //陀螺仪最大角度X
                gyroscopeMinAngleY: 0,  //陀螺仪最小角度
                gyroscopeMaxAngleY: 0,  //陀螺仪最大角度
                gyroscopeSamples: 10  //陀螺仪样品
            })
        }
        $(window.pjaxLoaded);
        $(document).on('pjax:end', window.pjaxLoaded); 
    }


