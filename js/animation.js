var wh = window.innerHeight,
	$teaser = $('.teaser'),
	$textrapper = $('.textrapper'),
	$bag = $('.bagcontainer'),
	$cat = $('.catcontainer');

// for cat
var bheight = $('.humancontanier img').height(),
$catposition = (1 * bheight) - 40 ;
$catpositionend = (1 * bheight) + 150 ;

$(".bagcontainer").css({"z-index":"3","position": "absolute","left": 0, "right": 0 , "opacity": 0.2 });

$("img.bag").css({"width": "auto" });

$(".catcontainer").css({"z-index":"2","position": "absolute","left": 0, "right": 0, "bottom" : $catposition });

$("img.cat").css({"width": "200px", 'transform': 'rotate(-2deg)'});

$("#textcontainer").css({"height": "auto"});

	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

		// main container animation
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat
    .fromTo($bag, wh*0.2,
      {"bottom" : $catposition, xPercent: 6},
      { "bottom" : $catpositionend, ease: Power4.easeOut}, '1')
    .fromTo($cat, wh*0.2, {xPercent: 4, yPercent: 10, autoAlpha: 1, scale: 0.4}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '1.2');

  new ScrollMagic.Scene({
    offset: '1%',
    triggerElement: $('body')[0],
    duration: wh*0.25
  })
  .setTween(iphoneContentHat)
  .addIndicators({name: "bag animation", colorEnd: "green"})
  .addTo(ctrl);

// main container move
	var iphoneIntroTl = new TimelineMax();
	iphoneIntroTl
			.from($teaser, 3, {yPercent: 0,xPercent: 0, ease: Power4.easeInOut})
      .to($teaser, 3, {yPercent: 0,xPercent: -100, ease: Power4.easeInOut})
  .from($bag, 3, {opacity: 1})
      .to($bag, 3, {opacity: 0, ease: Power4.easeInOut})
 .from($textrapper, 1, { xPercent: 00, yPercent: -50, ease: Power4.easeInOut})
    .to($textrapper, 1, { xPercent: 00, yPercent: 0, left: '00%'}, '1');
	new ScrollMagic.Scene({
		offset: wh*0.3,
    triggerElement: $('body')[0],
    duration: '70%'
	})
	.setTween(iphoneIntroTl)
 .setPin("#textcontainer")
	.addIndicators({name: "move to left", colorEnd: "green"})
	.addTo(ctrl);

// about content move
