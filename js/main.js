function LoadOnce() 
{ 
window.location.reload(); 
} 
//add.reload();
$(function () { // wait for document ready
// init
var wh = window.innerHeight,
$bag = $('.bag'),
$cat = $('.cat'),
$human = $('.human'),	
$bow = $('.bow'),
$yellowc = $('#yellow-container'),
$yello=$('#yellow-container').height(),
bh=$('.panel.human').height(),
$fthirtypc = (1 * bh) - 20 ,
$bthirtypc = (1 * bh) - 40;

// for bag
var height = $('.panel.human').height(),
thirtypc = (1 * height) - 38;
kthirtypc = (1 * height) + 110;
$thirtypc = parseInt(thirtypc) + 'px';
$kthirtypc = '550px';

// for bow
var bheight = $('.panel.human').height(),
bbthirtypc = (1 * height) - 50;
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
	 .fromTo($bag, 1, 
	     {  'z-index': 4, position: 'absolute', bottom: $thirtypc, xPercent: 1, yPercent: 0 },
	     {  position: 'absolute', bottom: $kthirtypc, xPercent: 1, yPercent: 0},
	     { ease: Power4.easeOut}, '1')
	 .fromTo($cat, 0.4, 
	     { 'z-index': 2, xPercent: 2, yPercent: '0', scale: 0.4, blur: 0, position: 'absolute', bottom: $fthirtypc},
	     { xPercent: 2 , yPercent: '0', scale: 0.7,bottom: $bthirtypc, onStart: onStart},
	     { ease: Power4.easeOut}, '0.3')
	 .fromTo($human, 1, 
	     { 'z-index': 1, position: 'absolute', xPercent: 0, yPercent: '0'},
	     { xPercent: 0, yPercent: '0%', onStart: onStart},
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