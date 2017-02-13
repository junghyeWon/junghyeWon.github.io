$(function(){
	$('#container').fullpage({
		scrollBar: true,
		scrollOverflow: true,
		navigation: true
	});

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
})