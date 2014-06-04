// page init
jQuery(function(){
      
       initBlocksHeight();
      
       
       });

function initBlocksHeight(){
	var scrollAreas = jQuery('.chat-box .scrollable-area, .coachs .scrollable-area, .messages .scrollable-area')
    
    var ele;
	var page;
	
	if(window.location.href.indexOf("coach-box") > -1) {
        page=".coach-box-page";
    }
	else if(window.location.href.indexOf("coach-details") > -1) {
        page=".coach-details-page";
    }
    else if(window.location.href.indexOf("chatD2-B") > -1) {
        page=".live-chatb-page";
    }
	else if(window.location.href.indexOf("chatD2-A") > -1) {
        page=".live-chata-page";
    }
    else if(window.location.href.indexOf("chatD2") > -1) {
        page=".live-chat-page";
    }
    else if(window.location.href.indexOf("coachmessages") > -1) {
        page=".coachmessages-page";
    }
	else if(window.location.href.indexOf("messages") > -1) {
        page=".messages-page";
    }
   
    else if(window.location.href.indexOf("purchase-history") > -1) {
        page=".purchase-page";
    }
	else if(window.location.href.indexOf("archive-details-text") > -1) {
        page=".archive-detailtext-page";
    }
    else if(window.location.href.indexOf("archive-details-call") > -1) {
        page=".archive-detailcall-page";
    }
    else if(window.location.href.indexOf("archive-details-chat") > -1) {
        page=".archive-detailchat-page";
    }
    else if(window.location.href.indexOf("textD1-A") > -1) {
        page=".live-texta-page";
    }
    else if(window.location.href.indexOf("textD1") > -1) {
        page=".live-text-page";
    }
    else if(window.location.href.indexOf("callD3-A") > -1) {
        page=".live-calla-page";
    }
    else if(window.location.href.indexOf("callD3-B") > -1) {
        page=".live-callb-page";
    }
    
    
	
	//ele=jQuery(page +' #nav');
    // alert(page);
    
	var header = jQuery(page +' #header');
	var footer = jQuery(page +' #footer');
	var win = jQuery(window);
	var elems = jQuery(page +' .add-height-elem');
	//alert(page+""+elems);
	var timer;
	
	function setHeight(initial){
		scrollAreas.css({
                        width: '',
                        height: ''
                        });
		
		var addHeight = 0;
		elems.each(function(){
                   addHeight += jQuery(this).outerHeight(true)+10;
                   });
		
        //alert(addHeight);
        if(page==".coach-details-page" || page==".messages-page" || page==".coachmessages-page")
            addHeight=0;
        
        if(page==".archive-detailtext-page" || page==".archive-detailchat-page" || page==".archive-detailcall-page")
            addHeight=addHeight+10;
        
        if(page==".coach-box-page")
        scrollAreas=jQuery('.coach-box-page .coachs .scrollable-area');
       
        scrollAreas.each(function(){
                         var scrollArea = jQuery(this);
                        
                         var top;
                         
                         top=scrollArea.offset().top;
                         
                         
                         
                         scrollArea.height(win.height() - top - footer.outerHeight() - addHeight );
                         
                         
                         });
		
		if(!initial) {
			scrollAreas.parent().css({
                                     width: '',
                                     height: ''
                                     });
			jcf.customForms.refreshAll();
		}
	}
	
	setHeight(true);
	win.on('load resize orientationchange', function(){
           clearTimeout(timer);
           timer = setTimeout(setHeight, 50);
           });
}