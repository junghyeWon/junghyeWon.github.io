$(function(){
	$('#container').fullpage({
		scrollBar: true,
		scrollOverflow: true,
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('#fp-nav,#footer').hide();
			}else if(index== 2){
				$('#fp-nav,#footer').fadeIn();
				$('.chart').easyPieChart({
					barColor: '#fe5548',
					trackColor: '#f0f0f0',
					lineWidth: 8,
					animate: 1500,
					onStep: function(from, to, percent){
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

		//reset
		$('.work_list').css({'width':win_w/2})
		$(".empty").stop().fadeOut();
		$('#wrap').stop().animate({'left':0});
		$('.work_list').stop().animate({'left':win_w},function(){
			$('.work_list div ul').hide();
			$('.work_list').removeClass('on');
		});

		$("#work li a").click(function(e){
			e.preventDefault();
			var viewList = $(this).data('list');
			$(".empty").stop().fadeIn();
			$(this).addClass('on');
			$('.work_list div ul').hide();
			$('.work_list').addClass('on');
			$('#wrap').stop().animate({'left':-(win_w/2)});
			$('.work_list div').find('.'+viewList).show()
			$('.work_list').stop().animate({'left':win_w/2});
		})
		$(".empty").click(function(){
			$(".empty").stop().fadeOut();
			$("#work li a").removeClass('on');
			$('#wrap').stop().animate({'left':0});
			$('.work_list').stop().animate({'left':win_w},function(){
				$('.work_list div ul').hide();
				$('.work_list').removeClass('on');
			});
		})
	}).resize()
})