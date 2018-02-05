$(function(){
	//googleMap API
	initialize();

	//visual slide
	$('.visu_s').bxSlider({
		mode:'fade',
		auto: true,
		pause: 5000,
		pager: false
	})

	//scroll Event
	var section1_t = $('.section1').offset().top - 200;
	var section2_t = $('.section2').offset().top - 200;
	var section3_t = $('.section3').offset().top - 200;
	var section4_t = $('.section4').offset().top - 200;

	$(window).on('load scroll',function(){
		var st = $(window).scrollTop();

		if(st >= 0 && st < section1_t){
			$('#container > div').removeClass('motion');
			$('#m_content > div').removeClass('motion');
			$('#visual').addClass('motion');
		}

		if(st >= section1_t && st < section2_t){
			$('#container > div').removeClass('motion');
			$('#m_content > div').removeClass('motion');
			$('.section1').addClass('motion');
		}

		if(st >= section2_t && st < section3_t){
			$('#container > div').removeClass('motion');
			$('#m_content > div').removeClass('motion');
			$('.section2').addClass('motion');
		}

		if(st >= section3_t && st < section4_t){
			$('#container > div').removeClass('motion');
			$('#m_content > div').removeClass('motion');
			$('.section3').addClass('motion');
		}
	})
})


function initialize(){
	var zoomLevel= 17;
	var myLatlng = new google.maps.LatLng(37.5521447,126.9156943);
	var mapOptions = {
		zoom: zoomLevel,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var myIcon = new google.maps.MarkerImage("http://alloferon.easel.asia/maker.png", null, null, null, new google.maps.Size(77,94));
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: myIcon
	});
}