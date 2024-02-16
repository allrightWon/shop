(function($){
    

    const just = {
        init(){
            this.header();
            this.section1();
            this.section2();
        },

    
        header(){
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideDown(300);
                },
                focus(){
                    $('.sub').stop().slideDown(300);
                /* foucs == foucsin / blur == focusout */
                }
            })
            // 서브메뉴를 벗어나면 부드럽게 다시 올라간다
            $('.sub').on({
                mouseleave(){
                    $('.sub').stop().slideUp(300);
                }
            })
           
        },

        section1(){

            let count = 0

            function mainSlide(){
                $('.slide-wrap').stop().animate({top:`${-300 * count}`}, 600, function(){
                    if(count > 2) count = 0;
                    $('.slide-wrap').stop().animate({top:`${-300 * count}`}, 0)
                })
            }

            function nextCount(){
                count ++;
                mainSlide();
            }

            function autoTimer(){
                setInterval(nextCount, 3000);
            }

            autoTimer();

        },
        
        section2(){

            $('.gallery-box').hide();
            $('.notice-box').show();

            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.gallery-box').show();
                    $('.notice-box').hide();
                }
            })

            
            $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.gallery-box').hide();
                    $('.notice-box').show();
                }
            })


        
            $('.popup-btn').on({
                click(){
                    $('.popup').show();
                    $('.popup').css({display:'flex'});
                    // $('.popup').addClass('on');
                }
            })

            $('.close-btn').on({
                click(){
                    // $('.popup').removeClass('on')
                    $('.popup').hide();
                }
            })
        }
    }
    just.init();

})(jQuery)