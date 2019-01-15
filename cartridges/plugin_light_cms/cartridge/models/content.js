'use strict'

var base = module.superModule;

module.exports = function content(contentValue, renderingTemplate) {
    var content = base.call(this, contentValue, renderingTemplate);
    
    if (contentValue.custom.desktopImage) {
    	content.desktopImage= contentValue.custom.desktopImage.getURL();
    	content.mobileImage= contentValue.custom.mobileImage ? contentValue.custom.mobileImage.getURL() : contentValue.custom.desktopImage.getImageURL({scaleWidth: 480});    
		content.tabletImage= contentValue.custom.tabletImage ? contentValue.custom.tabletImage.getURL() : contentValue.custom.desktopImage.getImageURL({scaleWidth: 896});
    }
    
    if( contentValue.custom.componentType.value){
    	content.template = contentValue.custom.componentType;
    }
    
    content.alt = contentValue.custom.altImage || "";
    content.categoryLink = contentValue.custom.categoryLink || "";
	content.copyText = contentValue.custom.copyText || "";
	content.productLink = contentValue.custom.productLink || "";
	content.videoID = contentValue.custom.videoID || "";
	content.videoService = contentValue.custom.videoService || "";
	
    return content;

}