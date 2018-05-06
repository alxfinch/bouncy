//Isotop grid
$(document).ready(function(){
	//green line under button
	$('.button').on('click', function(){
		$(this).children('.green-line').addClass('active-line');
		$(this).siblings().children('.green-line').removeClass('active-line');
	});

	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'masonry',
	  //masonry
	  masonry: {
		  columnWidth: 270,
		  gutter: 6,
		  horizontalOrder: true,
	}
	});

	// bind filter button click
	$('.container-isitope').on( 'click', '.button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $(buttonGroup);
	  $buttonGroup.on( 'click', '.button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
});

//Slider TEAM
$(document).ready(function(){
	$('.slick-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

//Slider Testimonials
$(document).ready(function(){
	$('.slick-slider-test').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3100,
	});
});

//Google Maps
$(document).ready(function(){
	var map;
	var infoWindowText = $('.adress-info').html();
	var mapCenter = {lat: 41.85, lng: -87.65};
	var mapContainer = $('#map')[0];
	map = new google.maps.Map(document.getElementById('map'), {
		center: mapCenter,
		zoom: 17,
		disableDefaultUI: true,
	});

	var marker = new google.maps.Marker({
		position: mapCenter,
		map: map,
		title: 'This',
		icon: "img/marker.png"
	});

	//center marker
	google.maps.event.addDomListener(window, "resize", function(){
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
});

//smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});
