function testNode() {
	var degree = 360;
	$('#image').animate({  transform: degree }, {
    	step: function(now,fx) {
        	$(this).css({
            	'-webkit-transform':'rotate('+now+'deg)', 
            	'-moz-transform':'rotate('+now+'deg)',
            	'transform':'rotate('+now+'deg)'
       		});
    	}
    });;
}