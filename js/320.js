//TODO 

// all function 
$(function () { // wait for document ready
// init
var wh = window.innerHeight,
$bag = $('.bag'),
$cat = $('.cat'),
$human = $('.human'),	
$bow = $('.bow'),
$yellowc = $('#yellow-container'),
$yellowh= (1 * wh) + 50;

ph=$('.panel.human').height(),
$catstart = (1 * ph) - 100 ,
$catend = (1 * ph) - 70;

// for bag
var height = $('.panel.human').height(),
$thirtypc = (1 * height) - 38;
$kthirtypc = (1 * height) + 110;


// for bow
var bheight = $('.panel.human').height(),
bbthirtypc = (1 * height) - 50;
$btthirtypc = parseInt(bbthirtypc) + 'px';

$("#yellow-container").css({"height": $yellowh});
$(".humman-trigger").css({"height": $yellowh, "margin": "20px 0 0 "});
$(".bow").css("bottom", $btthirtypc);

 // init
 var ctrl = new ScrollMagic.Controller({
     globalSceneOptions: {
         triggerHook: 'onLeave'
     }
 });
  var coverAll = new TimelineMax();
	coverAll
	 .fromTo($bag, 1.2, 
	     { 'z-index': 4, position: 'absolute', bottom: $thirtypc, xPercent: 1, yPercent: 0 },
	     { 'z-index': 4, position: 'absolute', bottom: $kthirtypc, xPercent: 1, yPercent: 0, onStart: onStart},
	     { ease: Power4.easeOut}, '1')
	 .fromTo($cat, 1, 
	     { 'z-index': 2, xPercent: 0, yPercent: '0', scale: 0.2, blur: 0,rotate: 0,skew:0, position: 'absolute', translateZ:0, bottom: $catstart},
	     { 'z-index': 2, xPercent: 0, yPercent: '0', scale: 0.6, blur: 0,rotate: 0,skew:0, position: 'absolute', translateZ:0, bottom: $catend, onUpdate: onUpdate},
	     { ease: Power4.easeOut}, '0.3')
	 .fromTo($human, 1, 
	     { 'z-index': 1, position: 'absolute', xPercent: 0, yPercent: '0'},
	     { xPercent: 0, yPercent: '0%', onComplete: onComplete},
	     { ease: Power4.easeOut}, '0.3')
	 .fromTo($bow, 1, 
	     {'z-index': 3, position: 'absolute', xPercent: 0.5},
	     {'z-index': 3, position: 'absolute', xPercent: 0.5}, '1');                

scene = new ScrollMagic.Scene({
  offset: 40,
  triggerElement: $('.zero')[0],
  ///duration: '60%',
  //duration: $(window).height()
  duration: wh
})
.setTween(coverAll)
.setPin(".humman-trigger") 
.addIndicators({name: "yellow-container", colorEnd: "green"})
.addTo(ctrl);

//console log
function onStart(){
	console.log('animation started');
}

function onUpdate(){
	console.log('animation is in progress');
}

function onComplete(){
	console.log('animation completed');
}	

});


// jQuery(document).ready(function($){
//  /**
//   * function to load a given css file 
//   */ 
//  loadCSS = function(href) {
//      var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
//      $("head").append(cssLink); 
//  };

//  // load the css file 
//  loadCSS("test.css");
// });

 // $('body').load('sd.html');