$(function(){
	$('#container').fullpage({
		loopTop: true,
		loopBottom: true
	});

	$('#filters a').on( 'click', function() {
		var filterValue = $( this ).attr('data-filter');
		$grid.isotope({ filter: filterValue });

		$grid.imagesLoaded().progress(function() {
			$grid.isotope('layout');
		});
	});

	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'a', function() {
		$buttonGroup.find('.current').removeClass('current');
		$( this ).addClass('current');
		});
	});

	var $grid = $('.grid').isotope({
		temSelector: '.grid-item',
		percentPosition: true,
		catecory02Duration:"0.6s",
		layoutMode: 'masonry'
	});

	$grid.isotope('shuffle');

	// layout Masonry after each image loads
	$grid.imagesLoaded().progress(function() {
		$grid.isotope('layout');
	});

	/*
	function chart() {
		// skills chart
		$(document).ready(function(e) {
			var index=0;
			$(document).scroll(function(){
				var top = $('#skill').height()-$(window).scrollTop();
				//console.log(top)
				if(top<-150){
					if(index==0){
						$('.chart').easyPieChart({
							barColor: '#ed6563',
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
	chart();
	*/
})