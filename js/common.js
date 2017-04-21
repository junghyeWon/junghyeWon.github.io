$(function(){
	$('#container').fullpage({
		scrollBar: true,
		scrollOverflow: true,
		navigation: true
	});

	chart();

	$(window).resize(function(){
		var win_w = $(window).width();

		$('.work_list').css({'width':($(window).width())/2})
		$(".close").stop().fadeOut();
		$('#wrap').stop().animate({'left':0});
		$('.work_list').stop().animate({'left':win_w},function(){
			$('.work_list div ul').hide();
			$('.work_list').removeClass('on');
		});

		$("#work li a").click(function(e){
			$(".close").stop().fadeIn();

			e.preventDefault();
			var viewList = $(this).attr('date-list');
			$('.work_list div ul').hide();
			$('.work_list').addClass('on');
			$('#wrap').stop().animate({'left':-(win_w/2)});
			$('.work_list div').find('.'+viewList).show()
			$('.work_list').stop().animate({'left':win_w/2});
		})
		
		/*
		$(".work_list div > a").click(function(e){
			e.preventDefault();
			$('#wrap').stop().animate({'left':0});
			$('.work_list').stop().animate({'left':win_w},function(){
				$('.work_list div ul').hide();
				$('.work_list').removeClass('on');
			});
		})
		*/
		$(".close").click(function(e){
			e.preventDefault();
			$(".close").stop().fadeOut();

			$('#wrap').stop().animate({'left':0});
			$('.work_list').stop().animate({'left':win_w},function(){
				$('.work_list div ul').hide();
				$('.work_list').removeClass('on');
			});
		})
	}).resize()
})


function chart() {
	// skills chart
	$(document).ready(function(e) {
		var index=0;
		$(document).scroll(function(){
			var top = $('#skill').height()-$(window).scrollTop();
			//console.log(top);
			if(top<-150){
				if(index==0){
					$('.chart').easyPieChart({
						//barColor: '#ed6563',
						barColor: '#fe5548',
						trackColor: '#f0f0f0',
						lineWidth: 8,
						animate: 1500,
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});
				}
				index++;
			}
		})
		//console.log(nagativeValue)
	});
}