/*global jQuery, document, window, navigator, WOW*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {

    'use strict';

    var onMobile, wow;

    /* ==========================================================================
    Modify Copied Text
    ========================================================================== */
    function addLink() {
        var body_element, selection, pagelink, copytext, newdiv;
        body_element = document.getElementsByTagName('body')[0];
        selection = window.getSelection();
        pagelink = " Read more at: <a href='" + document.location.href + "'>" + document.location.href + "</a>";
        copytext = selection + pagelink;
        newdiv = document.createElement('div');
        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function () {
            body_element.removeChild(newdiv);
        }, 0);
    }
    document.oncopy = addLink;


    /* ==========================================================================
    Placeholder
    ========================================================================== */
    jQuery('input, textarea').placeholder();


    /* ==========================================================================
    on mobile?
    ========================================================================== */
	onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

	if (onMobile === true) {
        /* ==========================================================================
        ScrollTo
        ========================================================================== */
        jQuery('a.scrollto').click(function (event) {
            jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -60}, animation:  {easing: 'easeInOutCubic', duration: 0}});
            event.preventDefault();
        });
    } else {
        /* ==========================================================================
        ScrollTo
        ========================================================================== */
        jQuery('a.scrollto').click(function (event) {
            jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -60}, animation:  {easing: 'easeInOutCubic', duration: 1500}});
            event.preventDefault();
        });
    }

    /* ==========================================================================
    Data Spy
    ========================================================================== */
    jQuery('body').attr('data-spy', 'scroll').attr('data-target', '#nav-wrapper').attr('data-offset', '61');


    /* ==========================================================================
    Sidebar Menu Button
    ========================================================================== */
    jQuery('.navbar-toggle').click(function (event) {
        jQuery('#main-wrapper').toggleClass('nav-visable');
        jQuery('.navbar-collapse').toggleClass('nav-visable');
    });
    jQuery('#main-wrapper').click(function (event) {
        jQuery('#main-wrapper').removeClass('nav-visable');
        jQuery('.navbar-collapse').removeClass('nav-visable');
    });
    jQuery('.navbar-collapse').click(function (event) {
        jQuery('#main-wrapper').removeClass('nav-visable');
        jQuery('.navbar-collapse').removeClass('nav-visable');
        jQuery('.navbar-collapse').removeClass('in').addClass('collapse');
    });


    /* ==========================================================================
    Home Slider
    ========================================================================== */
    jQuery('.owl-home').owlCarousel({
        lazyLoad: true,
        autoPlay: false,
        slideSpeed: 1000,
        singleItem: true,
        mouseDrag: false,
        stopOnHover: true,
        navigation: false,
        pagination: false
    });

    jQuery('a.home-next').click(function () {
        jQuery('.owl-home').trigger('owl.next');
    });
    jQuery('a.home-prev').click(function () {
        jQuery('.owl-home').trigger('owl.prev');
    });


    /* ==========================================================================
    Screenshots Slider
    ========================================================================== */
    jQuery('.owl-shots').owlCarousel({
        items: 3,
        lazyLoad: true,
        autoPlay: false,
        stopOnHover: true,
        pagination: false,
        navigation: false,
        itemsTablet: [568, 1],
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [768, 1]
    });

    jQuery('a.shots-next').click(function () {
        jQuery('.owl-shots').trigger('owl.next');
    });
    jQuery('a.shots-prev').click(function () {
        jQuery('.owl-shots').trigger('owl.prev');
    });


    /* ==========================================================================
    Clients Slider
    ========================================================================== */
    jQuery('.owl-clients').owlCarousel({
        lazyLoad: true,
        autoPlay: false,
        singleItem: true,
        stopOnHover: true,
        pagination: true,
        navigation: false,
        transitionStyle: 'goDown'
    });


    /* ==========================================================================
    Accordion
    ========================================================================== */
    jQuery('.panel-heading a').on('click', function (e) {
        if (jQuery(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
            e.stopPropagation();
            e.preventDefault();
        }
    });


    /* ==========================================================================
    FitVids
    ========================================================================== */
    jQuery('.fit').fitVids();


    /* ==========================================================================
    MailChimp
    ========================================================================== */
    function mailchimpCallback(response) {
        jQuery('form#newsletter-form .nesto-response').show();
        if (response.result === 'success') {
            jQuery('form#newsletter-form input').val('');
            jQuery('.nesto-response').html('Please check your e-mail to complete the subscription');
        } else if (response.result === 'error') {
            jQuery('.nesto-response').html('Please enter valid e-mail address');
        }
    }
    jQuery('form#newsletter-form input').focus(function () {
        jQuery('form#newsletter-form .nesto-response').hide();
    });
    jQuery('#newsletter-form').ajaxChimp({
        callback: mailchimpCallback,
        url: 'http://nestolab.us8.list-manage1.com/subscribe/post?u=1bb0930eeb3f8c90f187eb8ac&id=52e0f44deb'
    });

    /* ==========================================================================
    WOW Animation
    ========================================================================== */
    wow = new WOW({
        offset: 20,
        mobile: false
    });
    wow.init();


}); // JavaScript Document




/* ==========================================================================
Window Resize
========================================================================== */
jQuery(window).resize(function () {

    'use strict';

    var windowWidth;

    windowWidth = jQuery(window).width();
    if (windowWidth >= 1200) {
        jQuery('#main-wrapper').removeClass('nav-visable');
        jQuery('.navbar-collapse').removeClass('nav-visable');
    }

    jQuery('[data-spy="scroll"]').each(function () {
        var $spy = jQuery(this).scrollspy('refresh');
    });

});




/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function () {

    'use strict';

    var LoaderDelay, LoaderFadeOutTime;

    /* ==========================================================================
    Loader
    ========================================================================== */
    LoaderDelay = 350;
    LoaderFadeOutTime = 800;

    function hideLoader() {
        var loadingLoader = jQuery('#Loader');
        loadingLoader.fadeOut();
    }
    hideLoader();


    /* ==========================================================================
    Nivo LighBox
    ========================================================================== */
    jQuery('a').nivoLightbox({
        effect: 'slideDown',
        afterShowLightbox: function (lightbox) {
            document.body.style.overflow = 'hidden';
        },
        beforeHideLightbox: function () {
            document.body.style.overflow = 'visible';
        }
    });

});