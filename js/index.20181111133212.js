(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', 'images/logo-232.png');
$('.js-2').attr('src', 'images/nav1-93.png');
$('.js-3').attr('src', 'images/nav3-77.png');
$('.js-4').attr('src', 'images/nav2-77.png');
$('.js-5').attr('src', 'images/top-img-left-444-1.png');
$('.js-6').attr('src', 'images/top-img-right-169.png');
$('.js-7').attr('src', 'images/title-528-1.png');
$('.js-8').attr('src', 'images/con-t-960-4.jpg');
$('.js-9').attr('src', 'images/icon-1-27.png');
$('.js-10').attr('src', 'images/icon-2-21-1.png');
$('.js-11').attr('src', 'images/icon-3-23.png');
$('.js-12').attr('src', 'images/con-2-300-3.jpg');
$('.js-13').attr('src', 'images/con-3-300-3.jpg');
$('.js-14').attr('src', 'images/con-4-300-3.jpg');
$('.js-15').attr('src', 'images/con-5-300-3.jpg');
$('.js-16').attr('src', 'images/con-6-300-3.jpg');
$('.js-17').attr('src', 'images/con-7-300-3.jpg');
$('.js-18').attr('src', 'images/title-2-314-1.png');
$('.js-19').attr('src', (dpi>1) ? 'images/2007jie-yi-shu-she-ji-xi-620-1.jpg' : 'images/2007jie-yi-shu-she-ji-xi-310-3.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2008jie-bi-ye-sheng-he-ying-598-1.jpg' : 'images/2008jie-bi-ye-sheng-he-ying-299-1.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/2009jie-bi-ye-sheng-he-ying-614.jpg' : 'images/2009jie-bi-ye-sheng-he-ying-307.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/2010yi-she-620-1.jpg' : 'images/2010yi-she-310-3.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/2011jie-yi-she-620-1.jpg' : 'images/2011jie-yi-she-310-3.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/2011jie-dong-hua-620-1.jpg' : 'images/2011jie-dong-hua-310-4.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/2012jie-yi-she-582-1.jpg' : 'images/2012jie-yi-she-291-1.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/2012jie-dong-hua-608-1.jpg' : 'images/2012jie-dong-hua-304-3.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/2013jie-yi-she-590-1.jpg' : 'images/2013jie-yi-she-295-1.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/2013jie-dong-hua-620-1.jpg' : 'images/2013jie-dong-hua-310-4.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/2014jie-yi-she-620-1.jpg' : 'images/2014jie-yi-she-310-3.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/2014jie-dong-hua-600-1.jpg' : 'images/2014jie-dong-hua-300-4.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/2015jie-yi-she-620-1.jpg' : 'images/2015jie-yi-she-310-3.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/2015jie-dong-hua-608-1.jpg' : 'images/2015jie-dong-hua-304-3.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/2016jie-yi-shu-she-ji-620-1.jpg' : 'images/2016jie-yi-shu-she-ji-310-4.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/2016jie-dong-hua-620-1.jpg' : 'images/2016jie-dong-hua-310-3.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/2017jie-shi-jue-chuan-da-zhuan-ye-594-1.jpg' : 'images/2017jie-shi-jue-chuan-da-zhuan-ye-297-1.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/2017jie-huan-jing-she-ji-zhuan-ye-620-1.jpg' : 'images/2017jie-huan-jing-she-ji-zhuan-ye-310-3.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/2017jie-dong-hua-zhuan-ye-618-1.jpg' : 'images/2017jie-dong-hua-zhuan-ye-309-1.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/2017jie-chan-pin-she-ji-zhuan-ye-600-1.jpg' : 'images/2017jie-chan-pin-she-ji-zhuan-ye-300-4.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/2018jie-shi-jue-chuan-da-he-zhao-564-1.jpg' : 'images/2018jie-shi-jue-chuan-da-he-zhao-282-3.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/2018jie-huan-jing-she-ji-he-zhao-620-1.jpg' : 'images/2018jie-huan-jing-she-ji-he-zhao-310-3.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/2018jie-dong-hua-he-zhao-610-1.jpg' : 'images/2018jie-dong-hua-he-zhao-305-1.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/2018jie-chan-pin-he-zhao-618-1.jpg' : 'images/2018jie-chan-pin-he-zhao-309-1.jpg');
$('.js-43').attr('src', 'images/bt-logo-226.png');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/logo-232-1.png' : 'images/logo-116.png');
$('.js-2').attr('src', (dpi>1) ? 'images/nav1-92.png' : 'images/nav1-46.png');
$('.js-3').attr('src', (dpi>1) ? 'images/nav3-74.png' : 'images/nav3-37.png');
$('.js-4').attr('src', (dpi>1) ? 'images/nav2-74.png' : 'images/nav2-37.png');
$('.js-5').attr('src', (dpi>1) ? 'images/top-img-left-406.png' : 'images/top-img-left-203.png');
$('.js-6').attr('src', (dpi>1) ? 'images/top-img-right-168.png' : 'images/top-img-right-84.png');
$('.js-7').attr('src', (dpi>1) ? 'images/title-514.png' : 'images/title-257.png');
$('.js-8').attr('src', (dpi>1) ? 'images/con-t-960-3.jpg' : 'images/con-t-480-2.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/icon-1-28-1.png' : 'images/icon-1-14-1.png');
$('.js-10').attr('src', (dpi>1) ? 'images/icon-2-22.png' : 'images/icon-2-11.png');
$('.js-11').attr('src', (dpi>1) ? 'images/icon-3-22.png' : 'images/icon-3-11.png');
$('.js-12').attr('src', (dpi>1) ? 'images/con-2-300-2.jpg' : 'images/con-2-150-1.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/con-3-300-2.jpg' : 'images/con-3-150-1.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/con-4-300-2.jpg' : 'images/con-4-150-1.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/con-5-300-2.jpg' : 'images/con-5-150-1.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/con-6-300-2.jpg' : 'images/con-6-150-1.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/con-7-300-2.jpg' : 'images/con-7-150-1.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/title-2-314.png' : 'images/title-2-157.png');
$('.js-19').attr('src', (dpi>1) ? 'images/2007jie-yi-shu-she-ji-xi-310-2.jpg' : 'images/2007jie-yi-shu-she-ji-xi-155-1.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2008jie-bi-ye-sheng-he-ying-298-1.jpg' : 'images/2008jie-bi-ye-sheng-he-ying-149-1.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/2009jie-bi-ye-sheng-he-ying-308-1.jpg' : 'images/2009jie-bi-ye-sheng-he-ying-154-1.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/2010yi-she-310-2.jpg' : 'images/2010yi-she-155-1.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/2011jie-yi-she-310-2.jpg' : 'images/2011jie-yi-she-155-1.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/2011jie-dong-hua-310-3.jpg' : 'images/2011jie-dong-hua-155-2.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/2012jie-yi-she-290.jpg' : 'images/2012jie-yi-she-145.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/2012jie-dong-hua-304-2.jpg' : 'images/2012jie-dong-hua-152-1.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/2013jie-yi-she-296-1.jpg' : 'images/2013jie-yi-she-148-1.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/2013jie-dong-hua-310-3.jpg' : 'images/2013jie-dong-hua-155-2.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/2014jie-yi-she-310-2.jpg' : 'images/2014jie-yi-she-155-1.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/2014jie-dong-hua-300-3.jpg' : 'images/2014jie-dong-hua-150-2.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/2015jie-yi-she-310-2.jpg' : 'images/2015jie-yi-she-155-1.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/2015jie-dong-hua-304-2.jpg' : 'images/2015jie-dong-hua-152-1.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/2016jie-yi-shu-she-ji-310-3.jpg' : 'images/2016jie-yi-shu-she-ji-155-2.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/2016jie-dong-hua-310-2.jpg' : 'images/2016jie-dong-hua-155-1.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/2017jie-shi-jue-chuan-da-zhuan-ye-298-1.jpg' : 'images/2017jie-shi-jue-chuan-da-zhuan-ye-149-1.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/2017jie-huan-jing-she-ji-zhuan-ye-310-2.jpg' : 'images/2017jie-huan-jing-she-ji-zhuan-ye-155-1.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/2017jie-dong-hua-zhuan-ye-310-1.jpg' : 'images/2017jie-dong-hua-zhuan-ye-155-1.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/2017jie-chan-pin-she-ji-zhuan-ye-300-3.jpg' : 'images/2017jie-chan-pin-she-ji-zhuan-ye-150-2.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/2018jie-shi-jue-chuan-da-he-zhao-282-2.jpg' : 'images/2018jie-shi-jue-chuan-da-he-zhao-141-1.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/2018jie-huan-jing-she-ji-he-zhao-310-2.jpg' : 'images/2018jie-huan-jing-she-ji-he-zhao-155-1.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/2018jie-dong-hua-he-zhao-304-1.jpg' : 'images/2018jie-dong-hua-he-zhao-152-1.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/2018jie-chan-pin-he-zhao-310-1.jpg' : 'images/2018jie-chan-pin-he-zhao-155-1.jpg');
$('.js-43').attr('src', (dpi>1) ? 'images/bt-logo-226-1.png' : 'images/bt-logo-113.png');}else{$('.js').attr('src', (dpi>1) ? 'images/logo-154.png' : 'images/logo-77.png');
$('.js-2').attr('src', (dpi>1) ? 'images/nav1-62.png' : 'images/nav1-31.png');
$('.js-3').attr('src', (dpi>1) ? 'images/nav3-46.png' : 'images/nav3-23.png');
$('.js-4').attr('src', (dpi>1) ? 'images/nav2-50.png' : 'images/nav2-25.png');
$('.js-5').attr('src', (dpi>1) ? 'images/top-img-left-270.png' : 'images/top-img-left-135.png');
$('.js-6').attr('src', (dpi>1) ? 'images/top-img-right-112.png' : 'images/top-img-right-56.png');
$('.js-7').attr('src', (dpi>1) ? 'images/title-332.png' : 'images/title-166.png');
$('.js-8').attr('src', (dpi>1) ? 'images/con-t-640-2.jpg' : 'images/con-t-320-2.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/icon-1-18.png' : 'images/icon-1-9.png');
$('.js-10').attr('src', (dpi>1) ? 'images/icon-2-14.png' : 'images/icon-2-7.png');
$('.js-11').attr('src', (dpi>1) ? 'images/icon-3-14.png' : 'images/icon-3-7.png');
$('.js-12').attr('src', (dpi>1) ? 'images/con-2-200-1.jpg' : 'images/con-2-100-1.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/con-3-200-1.jpg' : 'images/con-3-100-1.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/con-4-200-1.jpg' : 'images/con-4-100-1.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/con-5-200-1.jpg' : 'images/con-5-100-1.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/con-6-200-1.jpg' : 'images/con-6-100-1.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/con-7-200-1.jpg' : 'images/con-7-100-1.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/title-2-206.png' : 'images/title-2-103.png');
$('.js-19').attr('src', (dpi>1) ? 'images/2007jie-yi-shu-she-ji-xi-206-1.jpg' : 'images/2007jie-yi-shu-she-ji-xi-103-1.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2008jie-bi-ye-sheng-he-ying-198-1.jpg' : 'images/2008jie-bi-ye-sheng-he-ying-99-1.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/2009jie-bi-ye-sheng-he-ying-206-1.jpg' : 'images/2009jie-bi-ye-sheng-he-ying-103-1.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/2010yi-she-206-1.jpg' : 'images/2010yi-she-103-1.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/2011jie-yi-she-206.jpg' : 'images/2011jie-yi-she-103.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/2011jie-dong-hua-206-1.jpg' : 'images/2011jie-dong-hua-103-1.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/2012jie-yi-she-194-1.jpg' : 'images/2012jie-yi-she-97-1.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/2012jie-dong-hua-202-1.jpg' : 'images/2012jie-dong-hua-101-1.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/2013jie-yi-she-196-1.jpg' : 'images/2013jie-yi-she-98-1.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/2013jie-dong-hua-206-1.jpg' : 'images/2013jie-dong-hua-103-1.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/2014jie-yi-she-206-1.jpg' : 'images/2014jie-yi-she-103-1.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/2014jie-dong-hua-200-1.jpg' : 'images/2014jie-dong-hua-100-1.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/2015jie-yi-she-206-1.jpg' : 'images/2015jie-yi-she-103-1.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/2015jie-dong-hua-202-1.jpg' : 'images/2015jie-dong-hua-101-1.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/2016jie-yi-shu-she-ji-206-1.jpg' : 'images/2016jie-yi-shu-she-ji-103-1.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/2016jie-dong-hua-206-1.jpg' : 'images/2016jie-dong-hua-103-1.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/2017jie-shi-jue-chuan-da-zhuan-ye-200-1.jpg' : 'images/2017jie-shi-jue-chuan-da-zhuan-ye-100-1.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/2017jie-huan-jing-she-ji-zhuan-ye-206-1.jpg' : 'images/2017jie-huan-jing-she-ji-zhuan-ye-103-1.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/2017jie-dong-hua-zhuan-ye-206-1.jpg' : 'images/2017jie-dong-hua-zhuan-ye-103-1.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/2017jie-chan-pin-she-ji-zhuan-ye-200-1.jpg' : 'images/2017jie-chan-pin-she-ji-zhuan-ye-100-1.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/2018jie-shi-jue-chuan-da-he-zhao-188.jpg' : 'images/2018jie-shi-jue-chuan-da-he-zhao-94.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/2018jie-huan-jing-she-ji-he-zhao-206-1.jpg' : 'images/2018jie-huan-jing-she-ji-he-zhao-103-1.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/2018jie-dong-hua-he-zhao-202-1.jpg' : 'images/2018jie-dong-hua-he-zhao-101-1.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/2018jie-chan-pin-he-zhao-206.jpg' : 'images/2018jie-chan-pin-he-zhao-103.jpg');
$('.js-43').attr('src', (dpi>1) ? 'images/bt-logo-150.png' : 'images/bt-logo-75.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-130').mouseenter(function() { $.loadImages('images/2007jie-yi-shu-she-ji-xi-2272-1.jpg', function() { }) });
$('.js-130').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-130-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2007jie-yi-shu-she-ji-xi-2272-1.jpg'; } } });
$('.js-131').mouseenter(function() { $.loadImages('images/2008jie-bi-ye-sheng-he-ying-1000-1.jpg', function() { }) });
$('.js-131').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-131-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2008jie-bi-ye-sheng-he-ying-1000-1.jpg'; } } });
$('.js-132').mouseenter(function() { $.loadImages('images/2009jie-bi-ye-sheng-he-ying-1296-1.jpg', function() { }) });
$('.js-132').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-132-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2009jie-bi-ye-sheng-he-ying-1296-1.jpg'; } } });
$('.js-133').mouseenter(function() { $.loadImages('images/2010yi-she-1584-1.jpg', function() { }) });
$('.js-133').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-133-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2010yi-she-1584-1.jpg'; } } });
$('.js-134').mouseenter(function() { $.loadImages('images/2011jie-yi-she-1584-1.jpg', function() { }) });
$('.js-134').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-134-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2011jie-yi-she-1584-1.jpg'; } } });
$('.js-135').mouseenter(function() { $.loadImages('images/2011jie-dong-hua-1296-1.jpg', function() { }) });
$('.js-135').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-135-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2011jie-dong-hua-1296-1.jpg'; } } });
$('.js-136').mouseenter(function() { $.loadImages('images/2012jie-yi-she-1584-1.jpg', function() { }) });
$('.js-136').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-136-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2012jie-yi-she-1584-1.jpg'; } } });
$('.js-137').mouseenter(function() { $.loadImages('images/2012jie-dong-hua-1296-1.jpg', function() { }) });
$('.js-137').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-137-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2012jie-dong-hua-1296-1.jpg'; } } });
$('.js-138').mouseenter(function() { $.loadImages('images/2013jie-yi-she-1584-1.jpg', function() { }) });
$('.js-138').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-138-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2013jie-yi-she-1584-1.jpg'; } } });
$('.js-139').mouseenter(function() { $.loadImages('images/2013jie-dong-hua-1296-1.jpg', function() { }) });
$('.js-139').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-139-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2013jie-dong-hua-1296-1.jpg'; } } });
$('.js-140').mouseenter(function() { $.loadImages('images/2014jie-yi-she-1701-1.jpg', function() { }) });
$('.js-140').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-140-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2014jie-yi-she-1701-1.jpg'; } } });
$('.js-141').mouseenter(function() { $.loadImages('images/2014jie-dong-hua-1191-1.jpg', function() { }) });
$('.js-141').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-141-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2014jie-dong-hua-1191-1.jpg'; } } });
$('.js-142').mouseenter(function() { $.loadImages('images/2015jie-yi-she-1701-1.jpg', function() { }) });
$('.js-142').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-142-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2015jie-yi-she-1701-1.jpg'; } } });
$('.js-143').mouseenter(function() { $.loadImages('images/2015jie-dong-hua-1176-1.jpg', function() { }) });
$('.js-143').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-143-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2015jie-dong-hua-1176-1.jpg'; } } });
$('.js-144').mouseenter(function() { $.loadImages('images/2016jie-yi-shu-she-ji-1984-1.jpg', function() { }) });
$('.js-144').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-144-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2016jie-yi-shu-she-ji-1984-1.jpg'; } } });
$('.js-145').mouseenter(function() { $.loadImages('images/2016jie-dong-hua-1162-1.jpg', function() { }) });
$('.js-145').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-145-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2016jie-dong-hua-1162-1.jpg'; } } });
$('.js-146').mouseenter(function() { $.loadImages('images/2017jie-shi-jue-chuan-da-zhuan-ye-2000-1.jpg', function() { }) });
$('.js-146').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-146-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-shi-jue-chuan-da-zhuan-ye-2000-1.jpg'; } } });
$('.js-147').mouseenter(function() { $.loadImages('images/2017jie-huan-jing-she-ji-zhuan-ye-2000-1.jpg', function() { }) });
$('.js-147').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-147-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-huan-jing-she-ji-zhuan-ye-2000-1.jpg'; } } });
$('.js-148').mouseenter(function() { $.loadImages('images/2017jie-dong-hua-zhuan-ye-1151-1.jpg', function() { }) });
$('.js-148').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-148-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-dong-hua-zhuan-ye-1151-1.jpg'; } } });
$('.js-149').mouseenter(function() { $.loadImages('images/2017jie-chan-pin-she-ji-zhuan-ye-1151-1.jpg', function() { }) });
$('.js-149').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-149-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-chan-pin-she-ji-zhuan-ye-1151-1.jpg'; } } });
$('.js-150').mouseenter(function() { $.loadImages('images/2018jie-shi-jue-chuan-da-he-zhao-2000-1.jpg', function() { }) });
$('.js-150').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-150-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-shi-jue-chuan-da-he-zhao-2000-1.jpg'; } } });
$('.js-151').mouseenter(function() { $.loadImages('images/2018jie-huan-jing-she-ji-he-zhao-2000-1.jpg', function() { }) });
$('.js-151').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-151-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-huan-jing-she-ji-he-zhao-2000-1.jpg'; } } });
$('.js-152').mouseenter(function() { $.loadImages('images/2018jie-dong-hua-he-zhao-2000-1.jpg', function() { }) });
$('.js-152').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-152-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-dong-hua-he-zhao-2000-1.jpg'; } } });
$('.js-153').mouseenter(function() { $.loadImages('images/2018jie-chan-pin-he-zhao-2000-1.jpg', function() { }) });
$('.js-153').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-153-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-chan-pin-he-zhao-2000-1.jpg'; } } });

});