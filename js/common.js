$(function(){
	$('#container').fullpage({
		scrollBar: true,
		scrollOverflow: true,
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('#fp-nav,#footer').hide();
			}else if(index== 2){
				$('.chart').easyPieChart({
					barColor: '#fe5548',
					trackColor: '#f0f0f0',
					lineWidth: 8,
					animate: 1500,
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			}else{
				$('#fp-nav,#footer').fadeIn();
			}
		}
	});

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
			e.preventDefault();

			$(".close").stop().fadeIn();
			$(this).addClass('on');

			var viewList = $(this).attr('date-list');
			$('.work_list div ul').hide();
			$('.work_list').addClass('on');
			$('#wrap').stop().animate({'left':-(win_w/2)});
			$('.work_list div').find('.'+viewList).show()
			$('.work_list').stop().animate({'left':win_w/2});
		})

		$(".close").click(function(e){
			e.preventDefault();
			$(".close").stop().fadeOut();
			$("#work li a").removeClass('on');

			$('#wrap').stop().animate({'left':0});
			$('.work_list').stop().animate({'left':win_w},function(){
				$('.work_list div ul').hide();
				$('.work_list').removeClass('on');
			});
		})
	}).resize()
})