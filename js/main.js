$(function () {

	// display 너비 측정
	var display=0;
	var browser_01;
	$.displaySet=function(){
		display = $( window ).width();
		if(display>839){
			browser_01 = 'pc';
		}else{
			browser_01 = 'mo';
		}
	}

	// 전체 스크롤 이벤트 
	$(window).scroll(function(){
		$.scollSA();
	})
	
	$.scollSA = function(){
		var saTriggerMargin = 200;
		var saElementList = $('.sa');

		if($('html,body').scrollTop()>0){
			$('.header').addClass('headerAct');
		}else{
			$('.header').removeClass('headerAct');
		}

		$(saElementList).each(function(index,item){
			if(!$(item).hasClass('show')){
				if(window.innerHeight > item.getBoundingClientRect().top+saTriggerMargin){
					$(item).addClass('show');
				}
			}
		})
	}


	$.moIcon = function(){
		$('.moIcon').on('click',function(){
			$('.headerInner').toggleClass('moAct')
			$('.headerMenuBox').slideToggle(200);

		})
	}

	$.nonHead = function(){
		$('.nonHead').on('click',function(e){
			e.preventDefault();
			alert('준비중입니다.');
		})
	}

	$.mainHeadAni = function(){

		var speed = 100;
		console.log('1');
		$('.mainHeadAni:eq(0)').delay(speed/2*0).animate({'margin-top':"-20px"},speed);
		$('.mainHeadAni:eq(1)').delay(speed/2*1).animate({'margin-top':"-20px"},speed);
		$('.mainHeadAni:eq(2)').delay(speed/2*2).animate({'margin-top':"-20px"},speed);
		$('.mainHeadAni:eq(3)').delay(speed/2*3).animate({'margin-top':"-20px"},speed);
		$('.mainHeadAni:eq(4)').delay(speed/2*4).animate({'margin-top':"-20px"},speed);

		$('.mainHeadAni:eq(0)').delay(speed/2*0).animate({'margin-top':"0"},speed);
		$('.mainHeadAni:eq(1)').delay(speed/2*1).animate({'margin-top':"0"},speed);
		$('.mainHeadAni:eq(2)').delay(speed/2*2).animate({'margin-top':"0"},speed);
		$('.mainHeadAni:eq(3)').delay(speed/2*3).animate({'margin-top':"0"},speed);
		$('.mainHeadAni:eq(4)').delay(speed/2*4).animate({'margin-top':"0"},speed);
	}

	$.mainBannerUnit = function(){
		$('.mainBannerUnit').find('img').animate({'height':'106%'},10000);
		$('.mainBannerUnit').find('img').animate({'height':'100%'},10000);
	}

	$.mainBannerBtn = function(){
		$('.mainBannerBtn, .lastContactBtn').on('click',function(){
			window.location.href="/contact/contact";
		})
	}

	$.portImgBox = function(){
		$('.portImgBox').on('click',function(){
			var type = $(this).attr('data-type');
			var value = $(this).attr('data-val');

			$('.portDetailInner').html('');
			if(type == 'img'){
				$('.portDetailInner').append('<img class="comImg" src="'+value+'">');
			}else if(type=='vod'){

				var appendUnit = '<div class="subLinkBox">\n' +
					'<iframe width="800px" src="'+value+'" frameborder="0" allowfullscreen></iframe>\n' +
					'</div>';

				$('.portDetailInner').append(appendUnit);
			}

			$('.portPopBox').show();

		})
	}

	$.portClose = function(){
		$('.portClose').on('click',function(){
			$('.portPopBox').hide();
		})
	}



	$.init = function(){
		$.moIcon();
		$.nonHead();
		$.portImgBox();
		$.portClose();

	
	}
	$.init();
})