$(window).on("load",function(){    
  	var paragraphs = $("p"); 
    paragraphs.each(function(){   
        var items = $(this);
        items.addClass('move');  
  });      
});   