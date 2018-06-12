var SHOULD = {};

var $ = jQuery;

SHOULD.initial = {
	init: function(){
		$unlessLink = $('.unless-link');
		$initial = $('.initial');
		$main = $('.main');
		
		$unlessLink.click(function(e){
			e.preventDefault();
			$initial.toggle();
			$main.toggle();
		})
	},

	choice: function(){
		var count = -1;
		var noCount = 0;
		$yes = $('#yes');
		$no = $('#no');
		$question = $('.question');
		$saidYesTemplate= $('.said-yes');
		$saidYesUnique= $('.said-yes-'+noCount);
		$main = $('.main');
		$back = $('.back');

		

		$no.click(function(e){
			e.preventDefault();
			count = count + 1;
			noCount = noCount + 1;
			console.log('nooo');
			console.log('count: ', count);
			$question.text(SHOULD.initial.questions[count]);
		});

		$yes.click(function(e){
			e.preventDefault();
			console.log('yess');

			$saidYesTemplate.show();
			$saidYesUnique.show();
			$main.toggle();
		});

		$back.click(function(e){
			e.preventDefault();
			console.log('back');
			$saidYesTemplate.hide();
			$saidYesUnique.hide();
			$main.toggle();
			noCount = noCount - 1;
		});

	}, 

	questions: [
	"Did you get in a horrific accident?",
	"This is question 2",
	"this is question 3",
	"this is question 4",
	"this is question 5",
	"this is question 6",
	],
	
	slider: function(){
		var self = this;
		
		$slider = $('.slider');
		$output = $('.slider-output');
		$output.innerHTML = $slider.val(); // Display the default slider value
		console.log($slider.val());
		// Update the current slider value (each time you drag the slider handle)
		// $slider.oninput = function() {
		    
		//     console.log('slider+++')
		// }

		$('.slider').on('input', function () {
		    $output.text( $slider.val() ) ;

		});
	},
	back: function(){
		$back = $('.back');
		$back.click( function(){

		})
	}

}


$(window).scroll(function() {

});

$(window).load(function(){
	
});
$(document).ready(function() {
	SHOULD.initial.init();
	SHOULD.initial.choice();
	SHOULD.initial.slider();
});