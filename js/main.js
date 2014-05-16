$(function(){
    
    // prevent the page scroll and bounce
	//document.ontouchmove = function(e) {e.preventDefault()};

    
    $("#buttonToOpen").on('click', function(event){
        event.preventDefault();
        
         Lightbox.open();
    });
    
    $('#lightboxCancel, #overlay, #lightboxClose').on('click', function(event){
        event.preventDefault();
        
        Lightbox.close();    
    });
    
});


var Lightbox = {
    
    overlayElementId : 'overlay',
    lightboxElementId : 'lightboxContainer',
    
    open:function()
    {
        $('#'+this.overlayElementId).show();
             
       // show lightbox on visible part of screen
       var currentTopPosition = $(document).scrollTop();
       $('#'+this.lightboxElementId).show();
       //$('#'+this.signInLightboxElementId).css('top', currentTopPosition+20).show();
    },
    
    close : function()
    {
       $('#'+this.overlayElementId).hide();
       $('#'+this.lightboxElementId).hide();
       
    }  
};
