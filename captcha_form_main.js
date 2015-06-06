jQuery(document).ready(function(){
	jQuery('.fc-form').each(function(){
		form = jQuery(this);
		var width = form.find('.captcha-placeholder').first().parents('.form-element-html').innerWidth();
		var padding = form.find('.captcha-placeholder').first().parents('.form-element-html').css('padding-right');
		width = width - parseInt(padding);
		if ( width == parseInt(width) && width > 50 && width<304 )
		{
			var ratio = width/304;
			form.find('.captcha-placeholder').first().css('transform','scale('+ratio+')');
		}
		var key = form.find('.captcha-placeholder').first().attr('data-sitekey');
		form.find('.captcha-placeholder').first().html("<div class='g-recaptcha' data-sitekey='"+key+"'></div>");
	});
});