//TODO 
	//> add.reload();

$(function () { // wait for document ready
// init
var wh = window.innerHeight,
$bag = $('.bag'),
$cat = $('.cat'),
$human = $('.human'),	
$bow = $('.bow'),
$yellowc = $('#yellow-container'),
$yellowh=$('#yellow-container').height(),

//cat
ph=$('.panel.human').height(),
$catstart = (1 * ph) - 73 ,
$catend = (1 * ph) - 57;

// for bag
$bagstart = (1 * ph) - 48;
$bagend = (1 * ph) + 140;

// for bow
var bheight = $('.panel.human').height(),
bbthirtypc = (1 * ph) - 50;
$btthirtypc = parseInt(bbthirtypc) + 'px';

$("#yellow-container").css("height", wh);
$(".bow").css("bottom", $btthirtypc);

 // init
 var ctrl = new ScrollMagic.Controller({
     globalSceneOptions: {
         triggerHook: 'onLeave'
     }
 });
  var coverAll = new TimelineMax();
	coverAll
	 .fromTo($bag, 1.0, 
	     { 'z-index': 4, position: 'absolute', bottom: $bagstart, xPercent: 1, yPercent: 0 },
	     { 'z-index': 4, position: 'absolute', bottom: $bagend, xPercent: 1, yPercent: 0, onStart: onStart},
	     { ease: Power4.easeOut}, '1')
	 .fromTo($cat, 1, 
	     { 'z-index': 2, xPercent: 0, yPercent: '0', scale: 0.4, blur: 0,rotate: 0,skew:0, position: 'absolute', translateZ:0, bottom: $catstart},
	     { 'z-index': 2, xPercent: 0, yPercent: '0', scale: 1.0, blur: 0,rotate: 0,skew:0, position: 'absolute', translateZ:0, bottom: $catend, onUpdate: onUpdate},
	     { ease: Power4.easeOut}, '0.3')
	 .fromTo($human, 1, 
	     { 'z-index': 1, position: 'absolute', xPercent: 0, yPercent: '0'},
	     { xPercent: 0, yPercent: '0%', onComplete: onComplete},
	     { ease: Power4.easeOut}, '0.3')
	 .fromTo($bow, 1, 
	     {'z-index': 3, position: 'absolute', xPercent: 0.5},
	     {'z-index': 3, position: 'absolute', xPercent: 0.5}, '1');                

scene = new ScrollMagic.Scene({
  offset: -10,
  triggerElement: $('body')[0],
  ///duration: '60%',
  //duration: $(window).height()
  duration: wh
})
.setTween(coverAll)
.setPin("#yellow-container") 
//.addIndicators({name: "yellow-container", colorEnd: "green"})
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