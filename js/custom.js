// Custom Function Start Here

$(function () {

    //  Sticky Header Jquery Code Start Here
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100) {
            $('.header').addClass('header-bg');
        }else {
            $('.header').removeClass('header-bg');
        }
    });
    //  Sticky Header Jquery Code End Here

    //  Banner Typed Js Jquery Code Start Here
    $(".typed").typed({
		strings: ["STRICT", "Design", "Develop"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 500000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    //  Banner Typed Js Jquery Code End Here

    //  Common Jquery Code Start Here

    //  Common Jquery Code End Here

});
// Custom Function End Here