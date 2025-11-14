/*/////// UPDATED SECUITY TO WHITELIST DOMAIN //////// */


function safeLoad(url) {
    const allowedDomains = ["https://3deepmedia.com", "https://www.bristol.ac.uk", "https://www.youtube.com", "https://use.typekit.net", "http://localhost:*", "https://region1.analytics.google.com", "https://www.google.co.uk/ads" ];
    const urlObj = new URL(url);
    if (allowedDomains.includes(urlObj.hostname)) {
        return url; // Load only if domain is trusted
    } else {
        console.warn("Blocked untrusted domain:", urlObj.hostname);
        return "about:blank"; // Load a blank or safe page instead
    }
}


/* ///////////////////////////////// DOCUMENT READY FUNCTIONS ///////////////////////////////////////// */

$(document).ready(function() {

  $('#intro').hide().css("display", "flex").delay(1000).fadeIn();
  $('.ui').hide(); // Hide all UI elements on page load

  $('.lightbox').hide();
  $('.toggleMap.close2').hide();

  $('.nav-inner').load('./inline/nav/navigation.html');
  
  $('.close-intro').click(function() {
     $('.pano-info').hide();
     $('header').show();
     $('.cta').show();
     $('#commands-optional').show();
     $('.sidebar').hide();
  });

 
  /* Toggle Google Map */
  $('.toggle-map.open').click(function() {
    getTourPlayer().call('panotourmapsOpentourmap()');
    $('.toggleMap.close').delay(4000).show();
    $('.toggleMap.close2').delay(4000).show();
    $("#wrapper").removeClass("shift-left");
    $(".sidebar").removeClass('open');
    //$("#commands-optional").hide();
    $('.back-button').hide();
    $('.pano-info').hide();
    $('.toggleMap.close').show();
    $(".kolorArea").addClass('wide');
    //$(".cta").hide();
    $("#intro-container").fadeOut();
    $("#intro-bkg").fadeOut();
    $(".nav-main").show();
    $(".nav-main a.map").addClass('active');
    $(".nav-main a.sites").removeClass('active');
  });
  
  $('.toggle-map.close').click(function() {
    getTourPlayer().call('panotourmapsClosetourmap()');
    $(this).hide();
    $('.toggleMap.close2').hide();
    $('.toggleMap.open').show();
    $('.nav-inner a').removeClass('active');
    $(".cta").show();
    $("#commands-optional").show();
    $("#intro-container").fadeOut();
    $("#intro-bkg").fadeOut();
    $(".nav-main a.map").removeClass('active');
  });

  $('.toggleMap.close').click(function() {
    getTourPlayer().call('panotourmapsClosetourmap()');
    $(this).hide();
    $('.nav-inner a').removeClass('active');
    $(".cta").show();
    $("#commands-optional").show();
    $("#intro-container").fadeOut();
    $("#intro-bkg").fadeOut();
    $('.pano-info').show();
    $(".nav-main a.map").removeClass('active');
  });
  
  /* Toggle Hotspots */
  $('.toggleHotspots.off').click(function() {
    getTourPlayer().call('hideHotspots()');
    $(this).hide();
    $('.toggleHotspots.on').show();
    $('.toggleHotspots.on').css("display", "inline-block");
  });
  
  /* Toggle Hotspots */
  $('.toggleHotspots.on').click(function() {
    getTourPlayer().call('showHotspots()');
    $(this).hide();
    $('.toggleHotspots.off').show();
  }); 

  /* jQuery Fulscreen */
  jQuery('a.fullscreen').on('click', function(e){
      e.preventDefault();
      if(jQuery(this).hasClass('enter')){
        // requestFullScreen();
        jQuery('body').fullscreen();
        jQuery(this).removeClass('enter').addClass('exit');
      }else{
        // requestFullScreen('exit');
        $.fullscreen.exit();
        jQuery(this).removeClass('exit').addClass('enter');
      }
  });

  // Toggle autorotation on/off

  var startWithAutorotation = '{% if project.startWithAutorotation %}yes{% endif %}';
  var startWithAutotour = '{% if project.startWithAutotour %}yes{% endif %}';

  var autorotation = function(cmd){
    if(cmd=='off'){
      getTourPlayer().call('stopautorotation()');
      jQuery('.autorotation').removeClass('on');
      jQuery('.autorotation').addClass('off');
    }else if(cmd=='on'){
      getTourPlayer().call('startautorotation()');
      jQuery('.autorotation').removeClass('off');
      jQuery('.autorotation').addClass('on');
    }else{
      if(startWithAutorotation || startWithAutotour == 'yes'){
        jQuery('.autorotation').removeClass('none').addClass('on');
      };
    }
  }

  //Toggle autorotation
  jQuery('a.autorotation').on('click', function(e){
    e.preventDefault();
    if(jQuery(this).hasClass('on')){
        autorotation('off');
    }else{
      if(startWithAutotour=='yes'){
        autorotation('on');
        displayPano();
      }else{
        autorotation('on');
      }
    }
  });

  /* Social Share Lightbox */
  
  $('a.share').click(function() {
      $('.lightbox').hide();
      $('.sidebar').hide();
      $('.share-box-wrapper').show();
      $('.share-box .url-result').val(window.location.href);
      $('.sponsor').css('opacity', '0');
  });
  
  
  $('.share-box a.close-btn').click(function() {
      $('.share-box-wrapper').hide();
      //$('.share-box').hide();
      $('.copy-btn').removeClass('copied');
      $('.copy-btn').text('Copy');
      $('.sponsor').css('opacity', '1');
  });
  
  new ClipboardJS('.share-box .copy-btn', {
      text: function(trigger) {
          return $('.share-box .url-result').val()
      }
  });
  
  $('.copy-btn').click(function(){
    $(this).addClass('copied');
    $(this).text('copied');
  });

  /* Pano Info */
  
  $('.pano-title').click(function(e) { 
      $('.pano-info').addClass('expand');
      $('.cta').hide();
      $('.sponsor').css('opacity', '0');
      $('.status').addClass('hidden');
      $(this).hide();
  });

  
  $('.close-info').click(function(e) { 
      $('.pano-info').removeClass('expand');
      $('.pano-title').show();
      $('.expand-info').show();
      $('.status').removeClass('hidden');
      $('.cta').show();
      $('.sponsor').css('opacity', '1');
      $('.scroll-down').hide();
  });

});

$(document).ready(function() {
    function checkScrollPosition() {
        var scrollDiv = $('.pano-desc-scroll');
        var scrollHeight = scrollDiv.prop('scrollHeight');
        var divHeight = scrollDiv.height();
        var currentScrollTop = scrollDiv.scrollTop();
        
        if (currentScrollTop + divHeight >= scrollHeight || scrollHeight <= divHeight) {
            $('.scroll-down').hide();
        } else {
            $('.scroll-down').show();
        }
    }

    $('.scroll-down').on('click', function() {
        var scrollDiv = $('.pano-desc-scroll');
        var currentScrollTop = scrollDiv.scrollTop();
        
        scrollDiv.animate({
            scrollTop: currentScrollTop + 200
        }, 400, function() {
            checkScrollPosition();
        });
    });

    $('.pano-desc-scroll').on('scroll', function() {
        checkScrollPosition();
    });

    // Initial check in case the content is already scrolled or doesn't need scrolling
    checkScrollPosition();

    $('.expand-info').click(function(e) {
        $('.pano-info').addClass('expand');
        $('.cta').hide();
        $('.gwr').css('opacity', '0');
        $('.status').addClass('hidden');
        $(this).hide();

        // Ensure the description box is scrolled to the top
        $('.pano-desc-scroll').scrollTop(0);

        // Check scroll position to show or hide the scroll-down button
        checkScrollPosition();
    });

        $('.pano-title').click(function(e) {
        $('.pano-info').addClass('expand');
        $('.cta').hide();
        $('.gwr').css('opacity', '0');
        $('.status').addClass('hidden');
        $(this).hide();

        // Ensure the description box is scrolled to the top
        $('.pano-desc-scroll').scrollTop(0);

        // Check scroll position to show or hide the scroll-down button
        checkScrollPosition();
    });

});






/* ///////////////////////////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////// GENERAL FUNCTIONS ///////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////////////////////////// */

$(".nav-icon").click(function () {

  $(this).toggleClass('cross');

  if ( $(".sidebar").is( ".open" ) ) {
      $('.sidebar').hide();
      $('.nav-main').toggleClass('open');
      $('.nav-main').show();
  }

  else {
      $('.nav-main').toggleClass('open');
      $('.nav-main').show();
  }

});

function toggleSidebar() {

  var myLink = $(this).attr('data-link');
  getTourPlayer().call('panotourmapsClosetourmap()');
  $('.toggleMap.close').hide();
  $('.lightbox').hide();
  $('.back-button').show();
  $('.status').addClass('hidden');

  if ( $(".sidebar").is( ".open" ) ) {
      $('.sidebar').load('./inline/sidebar/' + myLink );
  }

  else {
      $('.sidebar').load('./inline/sidebar/' + myLink );
      $("#wrapper").toggleClass("shift-right");
      $(".sidebar").toggleClass('open');
  }
}

/* header Actions */

$('.nav-main a').click(function(){
  $('.nav-main').removeClass('open');
  $('.nav-icon').removeClass('cross');
  $('.nav-main').fadeOut();
});

// SIDEBAR

function toggleSidebar2() {
  $("#wrapper").toggleClass("shift-left");
  $(".sidebar").toggleClass('open');
}

$('.nav-inner').on('click', '.toggle-sidebar-standard', function() {
    var myLink = $(this).attr('data-link');
    $('.toggleMap.close').hide();
    $('#sidebar-standard').load('./inline/sidebar/' + myLink );
    $('#sidebar-views').hide();
    $('#sidebar-quiz').hide();
    $('#sidebar-standard').delay(200).fadeIn();
    $('.lightbox').hide();
    $('.nav-main').hide();
    $('.back-button').show();
    $('.status').addClass('hidden');
    $('.nav-main').removeClass('open');
    $('.nav-icon').removeClass('cross');
});

$('body').on('click', '.toggle-sidebar-standard', function() {
    var myLink = $(this).attr('data-link');
    $('.toggleMap.close').hide();
    $('#sidebar-standard').load('./inline/sidebar/' + myLink );
    $('#sidebar-views').hide();
    $('#sidebar-quiz').hide();
    $('#sidebar-standard').delay(200).fadeIn();
    $('.lightbox').hide();
    $('.nav-main').hide();
    $('.back-button').show();
    $('.status').addClass('hidden');
});

$('body').on('click', '.toggle-sidebar-quiz', function() {
    $('#sidebar-standard').hide();
    $('#sidebar-views').hide();
    $('#sidebar-quiz').delay(200).fadeIn();
    $('.lightbox').hide();
    $('.nav-main').hide();
    $('.back-button').show();
    $('.status').addClass('hidden');
});

$('body').on('click', '.quiz-reload', function() {
    $('#sidebar-standard').hide();
    $('#sidebar-views').hide();
    $('#sidebar-quiz').hide();
    $('#sidebar-quiz').load('./inline/sidebar/sidebar-quiz.html');
    $('#sidebar-quiz').delay(200).fadeIn();
});

$('.sidebar').on('click', '.close-sidebar', function() {
    $('.sidebar').hide();
    $('.nav-main').show();
    $("#wrapper").removeClass("shift-right");
    $(".sidebar").removeClass('open');
    $("header .nav-icon").removeClass('cross');
    $('.status').delay(2000).removeClass('hidden');
});

$('.sidebar').on('click', 'a.thumbnail', function() {
    $('#intro-container').fadeOut();
    $('.ui').show();
    $('.sidebar').hide();
    $('.nav-main').show();
    $("#wrapper").removeClass("shift-right");
    $(".sidebar").removeClass('open');
    $('.status').delay(2000).removeClass('hidden');
    $("#intro-container").fadeOut();
    $("#intro-bkg").fadeOut();
    $('header').show();
    $('.cta').show();
    $('.commands-optional').show();
    $(".nav-main a.sites").addClass('active');
    $(".nav-main a.map").removeClass('active');
    $('#commands-optional').show();
});

/* Tabs in Sidebar */

$('.sidebar').on('click', '.switch a', function() {
  var tab_id = $(this).attr('data-tab');

  $('.switch a').removeClass('current');
  $('.tab-content').hide();

  $(this).addClass('current');
  $("#"+tab_id).fadeIn(300);
});

/* Lightbox from link */

/*$('.sidebar').on('click', 'a.toggle-link', function() {
    var myLink = $(this).attr('data-link');
    $('.lightbox-container').load('./inline/info/' + myLink );
    $('.lightbox').show();
    $("#wrapper").removeClass("shift-left");
    $(".sidebar").removeClass('open');
});*/

/*$('.toggle-link').click(function() {
    var myLink = $(this).attr('data-link');
    $('.sidebar').hide();
    $('.nav-main').show();
    $(".sidebar").removeClass('open');
    $('.lightbox').removeClass('video');
    $('.lightbox-overlay').fadeIn();
    $('.lightbox').delay(500).fadeToggle();
    $('.lightbox-container').load('./inline/info/' + myLink );
});*/

/* Open Lightbox from sidebar */

function showLightbox(delay = 1000) {
    $('.lightbox').hide().css({
        'display': 'flex',
        'opacity': '0'
    }).delay(delay).animate({
        'opacity': '1'
    }, 500);
}

function closeLightbox() {
    $('.lightbox').animate({
        'opacity': '0'
    }, 400, function() {
        $(this).hide();
        $('.lightbox-container').html('');
        $('.lightbox').removeClass('simple');
        $('.lightbox-overlay').hide();
        $('.sponsor').css('opacity', '1');
    });
}

function lightbox(page) {
    $('.sidebar').hide();
    $('.nav-main').show();
    $("#wrapper").removeClass("shift-left");
    $(".sidebar").removeClass('open');
    $('.lightbox').removeClass('video');
    $('.lightbox').removeClass('simple');
    $('.lightbox-overlay').fadeIn();
    showLightbox();
    $('.lightbox-container').load('./inline/info/' + page);
    $('.sponsor').css('opacity', '0');
}

function lightboxVideo(page) {
    $('.sidebar').hide();
    $('.nav-main').show();
    $("#wrapper").removeClass("shift-left");
    $(".sidebar").removeClass('open');
    $('.lightbox').removeClass('simple');
    $('.lightbox').addClass('video');
    $('.lightbox-overlay').fadeIn();
    showLightbox();
    $('.lightbox-container').load('./inline/info/' + page);
    $('.sponsor').css('opacity', '0');
}

function lightboxSimple(page) {
    $('.sidebar').hide();
    $('.splash-outer').hide();
    $('.nav-main').show();
    $("#wrapper").removeClass("shift-left");
    $(".sidebar").removeClass('open');
    $('.lightbox').removeClass('video');
    $('.lightbox').removeClass('art');
    $('.lightbox').addClass('simple');
    $('.lightbox-overlay').fadeIn();
    showLightbox();
    $('.lightbox-container').load('./inline/info/' + page);
    $('.lightbox').attr('tabindex', '0');
    $('#krpanoSWFObject').attr('tabindex', '-1');
    $('.sponsor').css('opacity', '0');
}


/*$('.lightbox .header').each(function(){
    if($(this).hasClass('white')) {
        $(this).closest('.lightbox').sibling('.close-btn').toggleClass("white");
    } 
});*/

function sidebarOpen(page) {
  getTourPlayer().call('panotourmapsClosetourmap()');
  $('.toggleMap.close').hide();
  //$('#sidebar-quiz').hide();
  $('#sidebar-standard').load('./inline/sidebar/' + page);
  $('#sidebar-standard').delay(200).fadeIn();
  $('.lightbox').hide();
  $('.nav-main').hide();
  $('.back-button').show();
  $('.status').addClass('hidden');
  toggleSidebar();   
}

/*function mapClose(page) {
    getTourPlayer().call('panotourmapsClosetourmap()');
    $('.toggleMap.close').hide();
    $('.toggleMap.close').addClass('hidden');
}*/

function mapClose() {
    getTourPlayer().call('panotourmapsClosetourmap()');
    $('.toggleMap.close').hide();
    $('.toggleMap.close').addClass('hidden');
    $(".sidebar").hide();
}

$('.lightbox').on('click', 'a.close-btn', function() {
    closeLightbox();
});

$('.lightbox-overlay').click(function() {
    closeLightbox();
});


/* Social Share Lightbox */

/*$('.share').click(function() {
    $('.lightbox').hide();
    $('.sidebar').hide();
    $('.share-box').fadeToggle();
});

$('.share-box a.close-btn').click(function() {
    $('.share-box').hide();
});*/


/* Prevent # on nav links */

$('header .nav-main a').click(function(event){
    event.preventDefault();
});
$('.switch').on('click', 'a', function() {
    event.preventDefault();
});
$('.lightbox-container').on('click', 'a.close-btn', function() {
    event.preventDefault();
});


/* Hide department boxes and status for links in main navigation */

$('.nav-main a').click(function() {
  $('.ajax-lightbox').hide();
  $('.nav-icon').removeClass('cross');
  $('.nav-main a').removeClass('active');
  $(this).addClass('active');
});

/* Hide Dropdown Menu after clicking link in department box */

/*var mq = window.matchMedia( "(max-width: 768px)" );

$('.department-box').on('click', 'a', function() {

  if (mq.matches) {
      $('.nav-main').hide(); 
  }

  else {
      return false;
  }

});*/

/* Back to previous pano - DISABLED to prevent browser back button navigation */

$('.back-button').click(function() {
  var current = window.location.hash;

    // window.history.back(); // DISABLED
    // Phistory.pop(); // DISABLED

    // setTimeout(function(){
    //   if(current != window.location.hash){
    //     var hash = window.location.hash.replace('#s=', '');
    //     if(hash){
    //       getTourPlayer().call('loadscene("' + hash + '")');
    //     }
    //   }
    // }, 10);

    $('.department-box').hide();
    $('.status').hide();
    $('.ajax-lightbox').hide();

    return false;
});

$('.back-button').click(function() {
    $('.department-box').hide();
    $('.ajax-lightbox').hide();
});

/* Pano Info */

$('.expand-info').click(function(e) { 
    $('.pano-info').addClass('expand');
    $('.cta').hide();
    $('.status').addClass('hidden');
    $(this).hide();
});

$('.close-info').click(function(e) { 
    $('.pano-info').removeClass('expand');
    $('.expand-info').show();
    $('.status').removeClass('hidden');
    $('.cta').show();
});

/* Trauncate */
/*
var shortText = $(".paragraph").text()    
    .trim()   
    .substring(0, 600)  
    .split(" ") 
    .slice(0, -1)  
    .join(" ") + "..."; */

/* Open Lightbox from sidebar */

$('body').on('click', 'a.toggle-link', function() {
    $('#intro-container').fadeOut();
    $('.ui').show();
    var myLink = $(this).attr('data-link');
    $(".sidebar").removeClass('open');
    $(".sidebar").hide();
    $('.nav-main').show();
    $('.lightbox').removeClass('video');
    $('.lightbox').removeClass('simple');
    // Use the new lightbox function that includes image loading fix
    openInfoPopup(myLink);
});

$('body').on('click', 'a.toggle-link-simple', function() {
    $('#intro-container').fadeOut();
    $('.ui').show();
    var myLink = $(this).attr('data-link');
    $(".sidebar").removeClass('open');
    $(".sidebar").hide();
    $('.nav-main').show();
    $('.lightbox').removeClass('video');
    $('.lightbox').addClass('simple');
    // Use the new simple lightbox function that includes image loading fix
    openInfoPopupSimple(myLink);
});

$('.sidebar').on('click', 'a.toggle-link-video', function() {
    var myLink = $(this).attr('data-link');
    $('.lightbox-container').load('./inline/info/' + myLink );
    $(".sidebar").removeClass('open');
    $(".sidebar").hide();
    $('.nav-main').show();
    $('.lightbox').addClass('video');
    $('.lightbox').removeClass('simple');
    $('.lightbox-overlay').fadeIn();
    showLightbox(300);
});

$('.lightbox .close-btn').click(function() {
    $('.lightbox').css('opacity', '0');
    setTimeout(function() {
        $('.lightbox').hide();
        $('.lightbox-container').html('');
        $('.lightbox').removeClass('simple');
    }, 300);
});

/* Function to open external websites safely */
function openWebsite(url) {
    // Check if the URL is in the allowed domains list
    const allowedDomains = ["https://3deepmedia.com", "https://www.bristol.ac.uk", "https://www.youtube.com", "https://use.typekit.net", "http://localhost:*", "https://region1.analytics.google.com", "https://www.google.co.uk/ads"];
    
    try {
        const urlObj = new URL(url);
        const isAllowed = allowedDomains.some(domain => {
            if (domain.includes('*')) {
                // Handle wildcard domains like localhost:*
                const baseDomain = domain.replace('*', '');
                return urlObj.href.startsWith(baseDomain);
            }
            return urlObj.href.startsWith(domain);
        });
        
        if (isAllowed) {
            // Open in new tab/window
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            console.warn("Blocked untrusted domain:", urlObj.hostname);
            alert("This website is not in the allowed domains list.");
        }
    } catch (error) {
        console.error("Invalid URL:", url);
        alert("Invalid URL provided.");
    }
}

/* Search functionality for sidebar lists */
function myFunction() {
  // Get the search input value
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  
  // Get the list container
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  
  // Get the no results elements
  var noResults = document.getElementById("noresults");
  var noLocations = document.getElementById("nolocations");
  
  var foundResults = false;
  
  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      foundResults = true;
    } else {
      li[i].style.display = "none";
    }
  }
  
  // Show/hide no results messages
  if (filter.length > 0) {
    if (!foundResults) {
      if (noResults) noResults.style.display = "block";
      if (noLocations) noLocations.style.display = "none";
    } else {
      if (noResults) noResults.style.display = "none";
      if (noLocations) noLocations.style.display = "none";
    }
  } else {
    // If search is empty, hide both messages
    if (noResults) noResults.style.display = "none";
    if (noLocations) noLocations.style.display = "none";
  }
}
