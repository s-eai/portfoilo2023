$(document).ready(function(){
    const winW = $(window).width();
    // < 타이틀 하단 버튼 호버 >
    $("#M > a").hover(
        function(){
            $("#M > a span").css({"width" : "100px" , "background" : "none" , "transform" : "translateY(-20px)"}).text(">> Click <<");
        }, function(){
            $("#M > a span").css({"width" : "10px" , "background" : "slateblue" , "transform" : "translateY(0px)"}).text("");
    });// hover END

    // < 팝업 메뉴 버튼 이미지 변환 & mouseenter / mouseleave >
    const seaBefore = $("#sea-btn img").attr("src");
    const seaAfter = seaBefore.replace(".png","-click.png");
    const seaReChange = seaBefore.replace("-click.png" , ".png");

    $("#sea-btn").click(function(){
        if ( $(this).children().attr("src") == "./img/fix-menu.png" ){
            $(this).children().attr("src", seaAfter );
            $("#sea-menu").stop().slideDown();
        }
        else {
            $(this).children().attr("src", seaReChange );
            $("#sea-menu").stop().slideUp();
        }
    });

    $("#sea-btn").on("mouseenter focus" , function(){
        $(this).children().attr("src", seaAfter );
        $("#sea-menu").stop().slideDown();
    })
    $("#sea").mouseleave(function(){
        $(this).children().children().attr("src", seaReChange );
        $("#sea-menu").stop().slideUp();
    });
    $("#sea").blur(function(){
        $(this).children().children().attr("src", seaReChange );
        $("#sea-menu").stop().slideUp();
    });
    $("#sea-menu li a").click(function(){
        $("#sea-menu").stop().slideUp();
    });

    // < 스크롤 높이 값에 반응하는 스크립트>
    const mTop = $("#M").offset().top;
    const aTop = $("#A").offset().top;
    const wTop = $("#W1").offset().top;
    const wwTop = $("#W2").offset().top;
    const dTop = $("#D").offset().top;
    const eTop = $("#E").offset().top;
    let scrollTop = 0;

    $("#layout").scroll(function(){
        scrollTop = $("#layout").scrollTop();

        if( scrollTop == mTop ){
            $("#side").hide();
            $("#sea").hide();

            $("#W1 img").css({ "left" : "-1000px" , "opacity" : "0" });
            $("#W1 .web-info").css({ "right" : "-500px" , "opacity" : "0" });
            $("#W2 img").css({ "top" : "-800px" , "opacity" : "0" });
            $("#W2 .web-info").css({ "bottom" : "-800px" , "opacity" : "0" });
        }

        if( scrollTop == aTop ){
            $("#sea").show();

            if( winW > 750 ){
                $("#side").show().css( "display" , "flex" );
                $("#side li p").hide();
                $("#side li:nth-child(2) p").show();
                $("#side li a").removeClass("click");
                $("#side li:nth-child(2) a").addClass("click");
            }

            $("#photoshop").delay(300).animate({ value : 93 });
            $("#illustrator").delay(400).animate({ value : 85 });
            $("#prototype").delay(500).animate({ value : 70 });
            $("#html").delay(600).animate({ value : 90 });
            $("#css").delay(700).animate({ value : 88 });
            $("#jquery").delay(800).animate({ value : 96 });

            $("#W1 img").css({ "left" : "-1000px" , "opacity" : "0" });
            $("#W1 .web-info").css({ "right" : "-1000px" , "opacity" : "0" });
            $("#W2 img").css({ "top" : "-800px" , "opacity" : "0" });
            $("#W2 .web-info").css({ "bottom" : "-800px" , "opacity" : "0" });
        }

        if ( scrollTop == wTop ){
            $("#sea").show();

            if( winW > 750 ){
                $("#side li p").hide();
                $("#side li:nth-child(3) p").show();
                $("#side li a").removeClass("click");
                $("#side li:nth-child(3) a").addClass("click");
            }

            $("#W1 img").css({ "left" : "0" , "opacity" : "1" });
            $("#W1 .web-info").css({ "right" : "0" , "opacity" : "1" });

            $("#W2 img").css({ "top" : "-800px" , "opacity" : "0" });
            $("#W2 .web-info").css({ "bottom" : "-800px" , "opacity" : "0" });
        }
        
        if ( scrollTop == wwTop ){
            $("#sea").show();

            if( winW > 750 ){
                $("#side li p").hide();
                $("#side li:nth-child(3) p").show();
                $("#side li a").removeClass("click");
                $("#side li:nth-child(3) a").addClass("click");
            }

            $("#W2 img").css({ "top" : "0" , "opacity" : "1" });
            $("#W2 .web-info").css({ "bottom" : "0" , "opacity" : "1" });

            $("#W1 img").css({ "left" : "-1000px" , "opacity" : "0" });
            $("#W1 .web-info").css({ "right" : "-1000px" , "opacity" : "0" });
        }

        if ( scrollTop == dTop ){
            $("#sea").show();

            if( winW > 750 ){
                $("#side li p").hide();
                $("#side li:nth-child(4) p").show();
                $("#side li a").removeClass("click");
                $("#side li:nth-child(4) a").addClass("click");
            }

            $("#W1 img").css({ "left" : "-1000px" , "opacity" : "0" });
            $("#W1 .web-info").css({ "right" : "-1000px" , "opacity" : "0" });
            $("#W2 img").css({ "top" : "-800px" , "opacity" : "0" });
            $("#W2 .web-info").css({ "bottom" : "-800px" , "opacity" : "0" });
        }

        if ( scrollTop == eTop ){
            $("#sea").show();

            if( winW > 750 ){
                $("#side li p").hide();
                $("#side li:nth-child(5) p").show();
                $("#side li a").removeClass("click");
                $("#side li:nth-child(5) a").addClass("click");
            }

            $("#W1 img").css({ "left" : "-1000px" , "opacity" : "0" });
            $("#W1 .web-info").css({ "right" : "-1000px" , "opacity" : "0" });
            $("#W2 img").css({ "top" : "-800px" , "opacity" : "0" });
            $("#W2 .web-info").css({ "bottom" : "-800px" , "opacity" : "0" });
        }
    });

    // < 사이드 버튼을 클릭 할 때 해당 버튼 색이 바뀌고 이름이 보인다 >
    $("#side a").click(function(){
        $("#side .side-txt").stop().fadeOut(300);
        $(this).prev().stop().fadeIn(300);
        $("#side a").removeClass("click");
        $(this).addClass("click");
    });
    
    // < About에서 resume a에 hover하면 검은색으로 바뀐다 >
    const aboutImgFirst = $("#resume a:first-child img").attr("src");
    const aboutImgFirstChan =aboutImgFirst.replace(".png","-click.png");
    const aboutImgFirstReChan = aboutImgFirstChan.replace("-click.png" , ".png");
    
    const aboutImgLast = $("#resume a:last-child img").attr("src");
    const aboutImgLastChan = aboutImgLast.replace(".png","-click.png");
    const aboutImgLastReChan = aboutImgLastChan.replace("-click.png" , ".png");
    // < 1 >
    $("#resume a:first-child").on("mouseenter focus" , function(){
        $(this).children("img").attr("src", aboutImgFirstChan );
    })
    $("#resume a:first-child").mouseleave(function(){
        $(this).children("img").attr("src", aboutImgFirstReChan );
    });
    $("#resume a:first-child").mouseleave(function(){
        $(this).children("img").attr("src", aboutImgFirstReChan );
    });
    // < 2 >
    $("#resume a:last-child").on("mouseenter focus" , function(){
        $(this).children("img").attr("src", aboutImgLastChan );
    })
    $("#resume a:last-child").mouseleave(function(){
        $(this).children("img").attr("src",aboutImgLastReChan );
    });
    $("#resume a:last-child").mouseleave(function(){
        $(this).children("img").attr("src", aboutImgLastReChan );
    });

    // < 디테일 디자인에서 작은 이미지에 마우스를 올리면 큰 이미지에 뜬다 >
    $("#D #small button").on("mouseenter focus", function(){
        const smallSrc = $(this).children().attr("src");
        const smallAlt = $(this).children().attr("alt");
        $("#D #big img").attr({ src : smallSrc , alt : smallAlt });
        $("#D #small button").css( "filter" , "grayscale(0%)");
        $(this).css( "filter" , "grayscale(100%)");
    });
    $("#D .background").mouseleave(function(){
        $("#D #small button").css( "filter" , "grayscale(0%)");
    });
    $("#D .background").blur(function(){
        $("#D #small button").css( "filter" , "grayscale(0%)");
    });
    $("#D #big img").on("mouseenter focus" , function(){
        $(this).parent().next().fadeIn();
    });
    $("#D #big").mouseleave(function(){
        $("#d-info").fadeOut();
    });
    $("#D #big").blur(function(){
        $("#d-info").fadeOut();
    });

    // < 이벤트 디자인 슬라이드 > 
    // < 이벤트-웹 / 위에서 아래 >
    // < 마우스 올리면 슬라이드 멈춤 >
    if ( winW > 950 ){
        let ewSlide = setInterval ( ewSlideDown , 3500 );

        function ewSlideDown(){
            $("#e-web-slide").stop().animate( { top : "-175px" }, 3400, function(){
                $("#e-web-slide").prepend( $("#e-web-slide").children().last() );
                $("#e-web-slide").css( "top" , "-555px" );
            });
        }
        $(".e-web-slide-img img").on("mouseenter focus" , function(){
            $(".e-web-slide-img .event-info").fadeOut();
            $(this).next().fadeIn();

            clearInterval( ewSlide );
        });
        $("#e-web-slider").mouseleave(function(){
            $(".e-web-slide-img .event-info").fadeOut();
            ewSlide = setInterval ( ewSlideDown , 3500 );
        });
        $("#e-web-slider").blur(function(){
            $(".e-web-slide-img .event-info").fadeOut();
            ewSlide = setInterval ( ewSlideDown , 3500 );
        });

        // < 이벤트 디자인 슬라이드 > 
        // < 이벤트-웹 / 위에서 아래 >
        // < 마우스 올리면 슬라이드 멈춤 >
        let esSlide = setInterval( esSlideUp , 3500 );

        function esSlideUp(){
            $("#e-sns-slide").stop().animate( { top : "-585px" }, 3400, function(){
                $("#e-sns-slide").append( $("#e-sns-slide").children().first() );
                $("#e-sns-slide").css( "top" , "-205px" );
            });
        }
        $(".e-sns-slide-img img").on("mouseenter focus" , function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            $(this).next().fadeIn();
            clearInterval( esSlide );
        });
        $("#e-sns-slider").mouseleave(function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            esSlide = setInterval( esSlideUp , 3500 );
        });
        $("#e-sns-slider").blur(function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            esSlide = setInterval( esSlideUp , 3500 );
        });
    

        $("#E .event-info").click(function(){
            const eventImgSrc = $(this).prev().attr("src");
            const eventImgAlt = $(this).prev().attr("alt");
            const eventImgSrcChan = eventImgSrc.replace( ".jpg" , "-big.jpg" );
        
            clearInterval( ewSlide );
            clearInterval( esSlide );
            $("#sea").hide();
            $("#B").fadeIn();
            $("#B h4").text( eventImgAlt );
            $("#B img").attr({ "src" : eventImgSrcChan , "alt" : eventImgAlt });
            $("#b-img").css( "width","100vw" );
            $("#layout").css( "overflow-y" , "hidden" );
            $("#B").css( "overflow-y" , "auto" );

            const seaHeight = $("#sea").position().top;

            $("#B").css("top" , seaHeight );
            $("#b-img").css("top" , seaHeight + 100 );
        });

        $("#d-info").click(function(){
            const detailBigImgSrc = $(this).prev().children().attr("src");
            const detailBigImgSrcChan = detailBigImgSrc.replace( ".jpg" , "-big.jpg" );
            const detailBigImgAlt = $(this).prev().children().attr("alt");
        
            $("#side").hide();
            $("#sea").hide();
            $("#B").fadeIn();
            $("#B h4").text( detailBigImgAlt );
            $("#B img").attr({ "src" : detailBigImgSrcChan , "alt" : detailBigImgAlt });
            $("#layout").css( "overflow-y" , "hidden" );
            $("#B").css("overflow-y" , "auto" );
    
            const seaHeight = $("#sea").position().top;
            $("#B").css("top" , seaHeight );
            $("#b-img").css("top" , seaHeight + 100 );
        });
    } // < ~ 951 까지 
    // < width가 950 ~ 750 일때 > && < 이벤트 디자인 슬라이드 > 
    if( 750 <= winW && winW <= 950 ){
        // < 이벤트-웹 / 위에서 아래 >
        // < 마우스 올리면 슬라이드 멈춤 >
        let ewSlideT = setInterval ( ewSlideDownT , 3500 );
        
        function ewSlideDownT(){
            $("#e-web-slide").stop().animate( { top : "-200px" }, 3400, function(){
                $("#e-web-slide").prepend( $("#e-web-slide").children().last() );
                $("#e-web-slide").css( "top" , "-570px" );
            });
        }
        $(".e-web-slide-img img").on("mouseenter focus" , function(){
            $(".e-web-slide-img .event-info").fadeOut();
            $(this).next().fadeIn();

            clearInterval( ewSlideT );
        });
        $("#e-web-slider").mouseleave(function(){
            $(".e-web-slide-img .event-info").fadeOut();
            ewSlideT = setInterval ( ewSlideDownT , 3500 );
        });
        $("#e-web-slider").blur(function(){
            $(".e-web-slide-img .event-info").fadeOut();
            ewSlideT = setInterval ( ewSlideDownT , 3500 );
        });

        // < 이벤트-sns / 아래에서 위 >
        // < 마우스 올리면 슬라이드 멈춤 >
        let esSlideT = setInterval( esSlideUpT , 3500 );

        function esSlideUpT(){
            $("#e-sns-slide").stop().animate( { top : "-570px" }, 3400, function(){
                $("#e-sns-slide").append( $("#e-sns-slide").children().first() );
                $("#e-sns-slide").css( "top" , "-200px" );
            });
        }
        $(".e-sns-slide-img img").on("mouseenter focus" , function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            $(this).next().fadeIn();
            clearInterval( esSlideT );
        });
        $("#e-sns-slider").mouseleave(function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            esSlideT = setInterval( esSlideUpT , 3500 );
        });
        $("#e-sns-slider").blur(function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            esSlideT = setInterval( esSlideUpT , 3500 );
        });

        
       
         // < 이벤트 디자인에서 자세히 보기를 누르면 #B가 뜬다  웹용 > 
        $("#E .event-info").click(function(){
            const eventImgSrc = $(this).prev().attr("src");
            const eventImgAlt = $(this).prev().attr("alt");
            const eventImgSrcChan = eventImgSrc.replace( ".jpg" , "-big.jpg" );

            clearInterval( ewSlideT );
            clearInterval( esSlideT );
            $("#side").hide();
            $("#sea").hide();
            $("#B").fadeIn();
            $("#B h4").text( eventImgAlt );
            $("#B img").attr({ "src" : eventImgSrcChan , "alt" : eventImgAlt });
            $("#b-img").css("width","100vw");
            $("#layout").css( "overflow-y" , "hidden" );
            $("#B").css("overflow-y" , "auto" );

            const seaHeight = $("#sea").position().top;

            $("#B").css("top" , seaHeight );
            $("#b-img").css("top" , seaHeight + 100 );
        });

        $("#d-info").click(function(){
            const detailBigImgSrc = $(this).prev().children().attr("src");
            const detailBigImgSrcChan = detailBigImgSrc.replace( ".jpg" , "-big.jpg" );
            const detailBigImgAlt = $(this).prev().children().attr("alt");
        
            $("#side").hide();
            $("#sea").hide();
            $("#B").fadeIn();
            $("#B h4").text( detailBigImgAlt );
            $("#B img").attr({ "src" : detailBigImgSrcChan , "alt" : detailBigImgAlt });
            $("#layout").css( "overflow-y" , "hidden" );
            $("#B").css("overflow-y" , "auto" );
    
            const seaHeight = $("#sea").position().top;
            $("#B").css("top" , seaHeight );
            $("#b-img").css("top" , seaHeight + 100 );
        });
    } //< width가 950 ~ 750 일때 >

  

    if( 360 <= winW && winW < 740 ){
        $("#D #big img").click( function(){
            $(this).parent().next().fadeIn();
        });
        $("#d-info").click(function(){
            const detailBigImgSrc = $(this).prev().children().attr("src");
            const detailBigImgSrcChan = detailBigImgSrc.replace( ".jpg" , "-big.jpg" );
            const detailBigImgAlt = $(this).prev().children().attr("alt");
    
            $("#side").hide();
            $("#sea").hide();
            $("#B").fadeIn();
            $("#B h4").text( detailBigImgAlt );
            $("#B img").attr({ "src" : detailBigImgSrcChan , "alt" : detailBigImgAlt });
            $("#layout").css( "overflow-y" , "hidden" );
            $("#B").css("overflow-y" , "auto" );

            const seaHeight = $("#sea").position().top;
            $("#B").css("top" , seaHeight );
            $("#b-img").css("top" , seaHeight + 50 );
        });
        // < 이벤트-웹 / 위에서 아래 >
        // < 마우스 올리면 슬라이드 멈춤 >
        let ewSlideM= setInterval ( ewSlideDownM , 3500 );
        
        function ewSlideDownM(){
            $("#e-web-slide").stop().animate( { left : "-95px" }, 3400, function(){
                $("#e-web-slide").prepend( $("#e-web-slide").children().last() );
                $("#e-web-slide").css( "left" , "-265px" );
            });
        }
        $(".e-web-slide-img img").on("mouseenter focus" , function(){
            $(".e-web-slide-img .event-info").fadeOut();
            $(this).next().fadeIn();

            clearInterval( ewSlideM );
        });
        $("#e-web-slide-img img").click(function(){
            $(".e-web-slide-img .event-info").fadeOut();
            ewSlideM = setInterval ( ewSlideDownM , 3500 );
            $(this).next().fadeIn();
        });
        $("#e-web-slider").mouseleave(function(){
            $(".e-web-slide-img .event-info").fadeOut();
            ewSlideM = setInterval ( ewSlideDownM , 3500 );
        });

        // < 이벤트-sns / 아래에서 위 >
        // < 마우스 올리면 슬라이드 멈춤 >
        let esSlideM = setInterval( esSlideUpM , 3500 );

        function esSlideUpM(){
            $("#e-sns-slide").stop().animate( { left : "-435px" }, 3400, function(){
                $("#e-sns-slide").append( $("#e-sns-slide").children().first() );
                $("#e-sns-slide").css( "left" , "-265px" );
            });
        }
        $(".e-sns-slide-img img").on("mouseenter focus" , function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            $(this).next().fadeIn();
            clearInterval( esSlideM );
        });
        $("#e-sns-slide-img img").click(function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            esSlideM = setInterval ( esSlideUpM , 3500 );
            $(this).next().fadeIn();
        });
        $("#e-sns-slider").mouseleave(function(){
            $(".e-sns-slide-img .event-info").fadeOut();
            esSlideM = setInterval( esSlideUpM , 3500 );
        });

        // 스와이프 기능 < web >
        $("#e-web-slide").swipeleft(function(){
            ewSwipeLeft();
        }); 
        $("#e-web-slide").swiperight(function(){
            ewSwipeRight();
        });
        let ewSwipeL = setInterval( ewSwipeLeft , 100 );
        let ewSwipeR = setInterval( ewSwipeLeft , 100 );

        function ewSwipeLeft(){
            clearInterval ( ewSwipeL );
            clearInterval ( ewSwipeR );
            clearInterval( ewSlideM );
            $("#e-web-slide").stop().animate( { left : "-435px"} , 50, function(){
                $("#e-web-slide").append( $("#e-web-slide").children().first() );
                $("#e-web-slide").css( "left" , "-265px" );
                ewSlideM = setInterval ( ewSlideDownM , 3500 );
            });
        } // web left swipe

        function ewSwipeRight(){
            clearInterval ( ewSwipeR );
            clearInterval ( ewSwipeL );
            clearInterval( ewSlideM );
            $("#e-web-slide").stop().animate( { left : "-95px" }, 50, function(){
                $("#e-web-slide").prepend( $("#e-web-slide").children().last() );
                $("#e-web-slide").css( "left" , "-265px" );
                ewSlideM = setInterval ( ewSlideDownM , 3500 );
            });
        }

        // 스와이프 기능 < sns >
        $("#e-sns-slide").swipeleft(function(){
            esSwipeLeft();
        }); 
        $("#e-sns-slide").swiperight(function(){
            esSwipeRight();
        });
        let esSwipeL = setInterval( esSwipeLeft , 100 );
        let esSwipeR = setInterval( esSwipeLeft , 100 );

        function esSwipeLeft(){
            clearInterval ( esSwipeL );
            clearInterval ( esSwipeR );
            clearInterval( esSlideM );
            $("#e-sns-slide").stop().animate( { left : "-265px"} , 50, function(){
                $("#e-sns-slide").append( $("#e-sns-slide").children().first() );
                $("#e-sns-slide").css( "left" , "-95px" );
                esSlideM = setInterval ( esSlideUpM , 3500 );
            });
        } // web left swipe

        function esSwipeRight(){
            clearInterval ( esSwipeR );
            clearInterval ( esSwipeL );
            clearInterval( esSlideM );
            $("#e-sns-slide").stop().animate( { left : "-95px" }, 50, function(){
                $("#e-sns-slide").prepend( $("#e-sns-slide").children().last() );
                $("#e-sns-slide").css( "left" , "-265px" );
                esSlideM = setInterval ( esSlideUpM , 3500 );
            });
        }
        
        $("#E .event-info").click(function(){       
            const eventImgSrc = $(this).prev().attr("src");
            const eventImgAlt = $(this).prev().attr("alt");
            const eventImgSrcChan = eventImgSrc.replace( ".jpg" , "-big.jpg" );

            clearInterval( ewSlideM );
            clearInterval( esSlideM );
            $("#sea").hide();
            $("#B").fadeIn();
            $("#B h4").text( eventImgAlt );
            $("#B img").attr({ "src" : eventImgSrcChan , "alt" : eventImgAlt });
            $("#b-img").css( "width","100vw" );
            $("#layout").css( "overflow-y" , "hidden" );
            $("#B").css( "overflow-y" , "auto" );
    
            const seaHeight = $("#sea").position().top;
    
            $("#B").css("top" , seaHeight );
            $("#b-img").css("top" , seaHeight + 50 );
        });
        // ************

        $("#b-btn").click(function(){
            $("#B").fadeOut();
            $("#B").scrollTop(0);
            $("#layout").css("overflow-y" , "auto" );
            $("#sea").show();
            $("#E .event-info").hide();
            ewSlideM = setInterval ( ewSlideDownM , 3500 );
            esSlideM = setInterval ( esSlideUpM , 3500 );
        });

        $(document).keydown(function(e){
            if ( e.key == "Escape" ){
            $("#B").fadeOut();
            $("#B").scrollTop(0);
            $("#layout").css("overflow-y" , "auto" );
            $("#sea").show();
            $("#E .event-info").hide();
            ewSlideM = setInterval ( ewSlideDownM , 3500 );
            esSlideM = setInterval ( esSlideUpM , 3500 );
            }
        });
    } // 360 ~ 750

    // < 팝업 창 >
    $("#b-btn").click(function(){
        $("#B").fadeOut();
        $("#B").scrollTop(0);
        $("#layout").css("overflow-y" , "auto" );
        $("#sea").show();
        if ( winW >= 750 ){
            $("#side").show().css( "display","flex" );
        }
        if ( winW <= 750 ){
            $("#D .d-info").hide();
            $("#E .event-info").hide();
        }
    });
}); //END ALL

$(document).keydown(function(e){
    if ( e.key == "Escape" ){
        const winW = $(window).width();

        $("#B").fadeOut();
        $("#B").scrollTop(0);
        $("#layout").css("overflow-y" , "auto" );
        $("#sea").show();
        if( winW >= 750 ){
            $("#side").show().css( "display","flex" ); 
        }
        if ( winW <= 750 ){
            $("#E .event-info").hide();
        }
    }
});