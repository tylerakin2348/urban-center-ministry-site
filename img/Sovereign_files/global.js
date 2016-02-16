// generic tab builder
jQuery.fn.IX_tabs = function(tab) {	
	return this.each(function() {
		var $container = jQuery(this), 
			$tabs = jQuery("a", this),
	 		panes = new Array();

		$tabs.each(function () {
			var $this = jQuery(this);

			// using the href to make the collection of panes			
			var pane = $this.attr('href');
			if (pane.indexOf("#") != 0) {
				return true;
			}
		 	panes.push(pane);

			$this.bind("click", function(){
				//build the jq selector. cheap.
				jQuery(panes.join(",")).hide();

				//do some class switching
				$container.find('.active').removeClass('active');
				$this.parent("li").addClass("active");

				jQuery(pane).show();
				return false;
			});
		});
		
		// set which tab to show
		// if .default is available, get its index and set it. else, check for a tab index passed in or set to 0
		var show = jQuery('a.default',$container).length ? $tabs.index(jQuery('a.default')) : tab || 0;
		
		// optionally, use this to make tabs hashable. Note: doesn't make clicking the tabs hashable, only provides for linking directly to them
		// urltab = the hash in the url
		// show = if urltab isn't empty or a default link is checked, decide which of those two is true: if urltab, set it, otherwise set to a.default. If neither, set to tab or  0
		// this means the url hash is more important than the default class set in the html
		// 
		var urltab = window.location.hash;
		var show = urltab != "" || jQuery('a.default',$container).length ? urltab != "" ? $tabs.index(jQuery('a[href='+urltab+']')) : $tabs.index(jQuery('a.default')) : tab || 0;
		
		// this line is pretty gross, but cheap
		// make sure the tab we think we can show is actually there. if so, click it. else click the first tab
		$tabs.eq(show).length ? $tabs.eq(show).click() : $tabs.eq(0).click();
	});
};

jQuery.fn.IX_dynamictabs = function(targetSelector, loadingSelector, postLoadAction)
{
	return this.each(function()
	{
		var $container = jQuery(this);

		jQuery("li a", $container).click(function()
		{
			// set appropriate active class
			jQuery("li", $container).removeClass("active");
			jQuery(this).parent().addClass("active");

			// show a loading message after 500ms
			var loadingTimeout = window.setTimeout(function () { jQuery(loadingSelector).show(); }, 500);

			// load the tab
			jQuery(targetSelector).load(this.href, function () {
				window.clearTimeout(loadingTimeout); // prevent loading message from showing if we finished in < 500ms
				jQuery(loadingSelector).hide();
				postLoadAction();
			});

			return false;
		});
	});
};

// wrap it up with jQuery passed in as $ for name collision safety
(function ($) {
	$.fn.ajaxForm = function(successMethod, failMethod)
	{
		this.submit(function () {
			var $form = $(this);
			$.ajax({
				type: "POST",
				url: this.action,
				data: $(this).serializeArray(),
				success: function (html) {
					if(successMethod)
						successMethod(html);
					
					$(".success", $form).effect("highlight", {}, 2500);
				},
				error: (failMethod) ? failMethod:function(request, status, exception) { alert(request.responseText); }
			});
			return false;
		});
	};

	$.fn.colorboxForm = function(onCompleteMethod, onClosedMethod)
	{
		this.submit(function () {
			var $form = $(this);
			$.colorbox({
				href: $form.attr('action'),
				data: $form.serializeArray(),
				onComplete: onCompleteMethod,
				onClosed: onClosedMethod,
				onLoadError: function(request, status, xhr) { alert(xhr.responseText); }
			});
			return false;
		});
	};

})(jQuery);

jQuery.fn.SoundSamplePlayButton = function (jPlayerSelector) {
	var $buttons = jQuery(this);

	$buttons.live("click", function () {
	 	var $player = jQuery(jPlayerSelector);

		$player.bind($.jPlayer.event.ended, function() 
		{
			this.playing = false;
			this.paused = false;
			$buttons.removeClass("pause").attr("title", $(".play-text").text());
			initializeTooltips(jQuery);
		});

	 	var url = this.href;
	 	var playing = this.playing;

	 	if (!this.playing) {
	 		if (!this.paused)
	 			$player.jPlayer("setMedia", { mp3: url });

	 		$player.jPlayer("play");

	 		$buttons.each(function () { this.playing = false; this.paused = false; });
	 		this.playing = true;
	 		$buttons.removeClass("pause").attr("title", $(".play-text").text());
	 		jQuery(this).addClass("pause").attr("title", $(".pause-text").text());
			initializeTooltips(jQuery);
	 	}
	 	else {
	 		this.playing = false;
	 		this.paused = true;
	 		$buttons.removeClass("pause").attr("title", $(".play-text").text());
			initializeTooltips(jQuery);
	 		$player.jPlayer("pause");
	 	}

	 	return false;
	});
};


(function ($) {
    $.fn.folding = function (alwaysShow, offset) {

        return this.each(function() {
            var $this = $(this);

            if ($this.children().length <= alwaysShow) {
                return;
            }

            var origHeight = $this.height();
            var foldHeight = 0;

            if (alwaysShow && alwaysShow > 0) {
                $this.children(':lt(' + alwaysShow + ')').each(function () { foldHeight += $(this).outerHeight(true); });
            }

            if (offset && offset > 0) {
                foldHeight -= 10;
            }

            $this.addClass('fold close')
                .css('overflow', 'hidden')
                .height(foldHeight);

			var moreText = $(".more-text").text();
			var lessText = $(".less-text").text();
            var link = $('<a href="#" class="fold-children open">' + moreText + '</a>');
            link.bind('click', function (e) {
                if ($this.height() == origHeight) {
					$this.next("a.fold-children").text(moreText);
                    $this.removeClass('open').addClass('closed').animate({
                        height: foldHeight
                    }, 300);
                }
                else {
					$this.next("a.fold-children").text(lessText);
                    $this.removeClass('closed').addClass('open').animate({
                        height: origHeight
                    }, 300);
                }

                return false;
            });

            $this.after(link);
        });

    };
})(jQuery);


// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
	console.log( Array.prototype.slice.call(arguments) );
  }
};


// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
	log('document.write(): ',arguments); 
	if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);

$(window).load(function() {
    $('.flexslider').flexslider();
  });

// remap jQuery to $
(function ($) {
	
	$("form.ajax").ajaxForm();

	$('.pagination a').addClass('button');

	$("a[rel=external]").click(function() { window.open(this.href); return false; });
	
	// tabs
	$(".tabs-dynamicload").IX_dynamictabs(".tab", ".tab-loading", function() { initializeTooltips($); initializeColorboxes($); });

	// sound samples (song list page)
	$(".song-listing a.play").SoundSamplePlayButton("#jquery_jplayer_1");
	
	$("div.clipboard").hover(
  		function () {
    	$(this).find('#copy-button').addClass('hover');
  	}, 
  		function () {
    	$(this).find('#copy-button').removeClass("hover");
  	});
	
	//$('.flexslider').flexslider({
		//controlsContainer: ".flex-container"
	//});
	
	// Track "Load More" clicks
    $('section.primary section.pagination a.button').bind('click', function (e) {
        if (typeof(ga) != "undefined") {
        	ga('send', 
                'event',
                'buttons',
                'load more results',
                'records loaded',
                $("#search-results > li").length
            );
        }
    });
	
	$("#search-results").infinitescroll({
		navSelector: ".pagination a.button:last",
		nextSelector: ".pagination a.button:last",
		itemSelector: "#search-results > .result",
		//pathParse: function (pathStr, nextPage) { return pathStr.replace(/page=[0-9]+/, "page=" + nextPage); },
		//dataType: 'html',
		behavior		: 'twitter',
		loading : {
			msgText: $(".loading-search-results").html(),
			finishedMsg: $(".no-more-search-results").html()
		}
		//bufferPx: 200}
	}, function(newElements){
	
		//USE FOR PREPENDING
		// $(newElements).css('background-color','#ffef00');
		// $(this).prepend(newElements);
		//
		//END OF PREPENDING
		
		window.console && console.log('context: ',this);
		window.console && console.log('returned: ', newElements);
	});

    $('aside ol.options').slice(1).folding(5, 10);

	initializeTooltips($);

	initializeColorboxes($);

    // Fix IE7 z-index problems
    if ($('html').hasClass('ie7') || $('html').hasClass('ie8')) {
        var z = 0, f = function(i, e) { $(e).css('z-index', z--); };
        z = 1000; $('[role="navigation"] .sub').each(f).parents().each(f);

        z = 900;  $('.search-form .search-wrap button.reset').each(f);
        z = 899;  $('.search-form .search-wrap input').each(f).parents().each(f);
        
        z = 800;  $('.hero .group').each(f).parents().each(f);
        z = 799;  $('.hero .rotator-item .content').each(f).parents().each(f);
    }


})(this.jQuery);

function initializeTooltips($)
{
 var $tooltips = $('.icon a, a.icon');
	
	if($tooltips.tooltip)
		$tooltips.tooltip({
			showURL: false,
			elementRelative: true,
			positionLeft: true,
			top: -46,
			left: 15
		});
}

function initializeColorboxes($)
{
    $(".song-listing .lyrics a.deny").colorbox({inline: true, href:".lyrics-message-deny", fixed: $('html').hasClass('ie8')});
    $(".song-listing .chord a.deny").colorbox({inline: true, href:".chord-message-deny", fixed: $('html').hasClass('ie8')});
    $(".song-listing .lead a.deny").colorbox({inline: true, href:".lead-message-deny", fixed: $('html').hasClass('ie8')});
    $(".song-listing .hymn a.deny").colorbox({inline: true, href:".vocal-message-deny", fixed: $('html').hasClass('ie8')});
    $(".icon.favorite.deny").colorbox({inline: true, href:".favorites-message-login", fixed: $('html').hasClass('ie8')});
    $('a.lightbox').colorbox();
    $('.colorboxes div').click(function() { $.colorbox.close(); }); // clicking anywhere in the colorbox other than a link closes it
}

// Pull the label, make lowercase, set as default value and hide it
jQuery(function ($) {	
	$(".input-setter input").inputSetter(1);
});// document ready

// pull label and insert as field. clear with click
// optional lower param if == 1, string toLowerCase
jQuery.fn.inputSetter = function(lower) {	
	return this.each(function() {
		var $input = jQuery(this);
		var $label = jQuery("label[for='"+$input.attr("id")+"']");
		var labeltext = <!-- lower && lower==1 ? $label.text().toLowerCase() : --> 
		$label.text();
		$label.hide();	
		$input.val(labeltext);		
		$input.focus(function() { if (this.value == labeltext) { this.value = ""; }	})
			  .blur(function() { if (!this.value.length) { this.value = labeltext; } });		
	});
};