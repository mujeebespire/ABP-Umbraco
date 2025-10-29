// Main initialization
$(document).ready(function() {
  // Initialize modules
  navigationActiveClass.init();
  announcementCookie.init();
  newsletterModule.init();
  downloadModule.init();
  deviceDetection.init();
  equalHeights.init();
  betaToggle.init();
  sliderModule.init();
  homeArrowScroll.init();
  videoModule.init();
  mapModule.init();
  tabsModule.init();
  peopleWidget.init();
  imageResize.init();
  articleFilters.init();
  mapLocations.init();
  videoGalleryPagination.init();
  searchWildcards.init();
  downloadsFilters.init();
  searchAutocomplete.init();
  mapInfoList.init();
  generalHelpers.init();
  stickyElements.init();
  headerNavigation.init();
  accordionModule.init();
  popupModule.init();
  interactiveMap.init();
  iframeVideoModule.init();
  
  // Scroll to top on page load
  document.documentElement.scrollTop = 0;
});

// Resize handlers
$(window).on('resize', function() {
  imageResize.init();
  equalHeights.init();
});

// Navigation Active Class Module
const navigationActiveClass = {
  init: function() {
    this.addActiveClass();
  },
  
  addActiveClass: function() {
    setTimeout(function() {
      $(document).ready(function() {
        const pathname = location.pathname;
        
        if (pathname.length === 1) return;
        
        const pathSegment = pathname.split('/')[1];
        let link = $(`.nav__submenu-link[href*="${pathSegment}"]`);
        
        if (!link || link.length === 0) {
          link = $(`.js-nav-link[href="${pathname}"]`);
          if (!link || link.length === 0) return;
          link.addClass('nav__link--current');
        }
        
        link.closest('li.has-children')
          .find('a.js-nav-link')
          .addClass('nav__link--current');
      });
    }, 50);
  }
};

// Announcement Cookie Module
const announcementCookie = {
  $announcement: $('.urgent__btn-wrapper'),
  
  init: function() {
    this.acceptCookie();
  },
  
  acceptCookie: function() {
    const cookieUrl = this.$announcement.data('accept-cookie-url');
    
    if (cookieUrl) {
      this.$announcement.on('click', '[announcement-cookie-close]', function() {
        $.post(cookieUrl, {});
      });
    }
  }
};

// Scroll Utility Module
const scrollUtility = {
  topScroll: 0,
  isScrollDisabled: false,
  
  disableScroll: function() {
    if (!this.isScrollDisabled) {
      this.topScroll = $(window).scrollTop();
      $('body')
        .css('top', -this.topScroll + 'px')
        .addClass('scroll-disabled');
      this.isScrollDisabled = true;
    }
  },
  
  enableScroll: function() {
    $('body').removeAttr('style').removeClass('scroll-disabled');
    $(window).scrollTop(this.topScroll);
    this.isScrollDisabled = false;
  }
};

// Download Form Module
const downloadModule = {
  $downloadBtn: $('.js-download-btn'),
  
  init: function() {
    this.downloadButtonClick();
    this.handleLabelShow();
    this.closePopup();
  },
  
  downloadButtonClick: function() {
    this.$downloadBtn.on('click', function() {
      const $btn = $(this);
      const fileGuid = $btn.data('file-guid');
      const recipientGuid = $btn.data('recipient-guid');
      const controllerUrl = $btn.data('controller-url');
      
      $('.js-download-popup').addClass('download-form__popup--show');
      
      $.ajax({
        url: controllerUrl,
        type: 'GET',
        success: function(response) {
          scrollUtility.disableScroll();
          $('#response-container').html(response);
        },
        error: function(error) {
          scrollUtility.enableScroll();
          $('.js-download-popup').removeClass('download-form__popup--show');
          console.error('Error:', error);
        }
      });
    });
  },
  
  handleLabelShow: function() {
    $(document).on('input', '.js-download-input', function(event) {
      const $input = $(event.currentTarget);
      const $label = $input.parent().find('.js-download-label');
      
      if ($input.val() !== '') {
        $label.addClass('download-form__input-label--show');
      } else {
        $label.removeClass('download-form__input-label--show');
      }
    });
    
    $(document).on('change', '.js-download-consent', function(event) {
      const $checkbox = $(event.currentTarget);
      const $parent = $('.js-download-consent-label').parent();
      
      if ($checkbox.is(':checked')) {
        $parent.removeClass('download-form__input-holder--invalid');
      } else {
        $parent.addClass('download-form__input-holder--invalid');
      }
    });
  },
  
  closePopup: function() {
    $(document).on('click', '.js-download-close', function() {
      scrollUtility.enableScroll();
      $('.js-download-popup').removeClass('download-form__popup--show');
      $('#response-container').html('');
    });
  }
};

// Device Detection Module
const deviceDetection = {
  init: function() {
    const $html = $('html');
    const isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
    const isMobile = window.matchMedia('screen and (max-width: 1024px)').matches;
    
    if (isTouchDevice && isMobile) {
      $html.addClass('touch');
    } else {
      $html.addClass('no-touch');
    }
  }
};

// Equal Heights Module
const equalHeights = {
  $parentElement: $('.js-equal-heights'),
  itemsClass: '.js-equal-heights-item',
  
  init: function() {
    this.setHeights();
  },
  
  setHeights: function() {
    const self = this;
    
    this.$parentElement.each(function(index, element) {
      const $container = $(element);
      const windowWidth = $(window).width();
      let columnsCount = 0;
      
      // Determine columns based on screen width
      if (windowWidth > 1024) {
        columnsCount = parseInt($container.attr('data-equal-desk'));
      } else if (windowWidth > 768 && windowWidth <= 1024) {
        columnsCount = parseInt($container.attr('data-equal-tablet'));
      } else if (windowWidth <= 768) {
        columnsCount = parseInt($container.attr('data-equal-phone'));
      } else {
        columnsCount = parseInt($container.attr('data-equal-desk'));
      }
      
      const $items = $container.find(self.itemsClass);
      
      if ($items.length === 0) return;
      
      // Reset heights
      $items.height('');
      
      let maxHeight = 0;
      
      if (columnsCount) {
        // Group items into rows
        const rows = [];
        const itemsArray = $items.toArray();
        
        while (itemsArray.length > 0) {
          rows.push(itemsArray.splice(0, columnsCount));
        }
        
        // Set equal height for each row
        rows.forEach(function(row) {
          maxHeight = 0;
          
          row.forEach(function(item) {
            const height = $(item).outerHeight(true);
            if (height > maxHeight) maxHeight = height;
          });
          
          row.forEach(function(item) {
            $(item).css('height', maxHeight);
          });
        });
      } else {
        // No columns - set all items to same height
        $items.each(function() {
          const height = $(this).outerHeight(true);
          if (height > maxHeight) maxHeight = height;
        });
        
        $items.css('height', maxHeight);
      }
    });
  }
};

// Beta Content Toggle Module
const betaToggle = {
  $betaButton: $('.js-is-beta-button'),
  $betaContent: $('.js-is-beta-content'),
  
  init: function() {
    this.$betaButton.on('click', this.toggleContent.bind(this));
  },
  
  toggleContent: function() {
    this.$betaContent.fadeToggle();
  }
};

// Slider Module
const sliderModule = {
  selector: $('.js-slider'),
  sliderMap: $('.js-slider-map'),
  sliderReport: $('.js-report-slider'),
  sliderHome: $('.js-home-slider'),
  status: '.slider-counter',
  sum: '.slider-sum',
  
  init: function() {
    this.initRegularSlider();
    this.initMapSlider();
    this.initReportSlider();
    this.homeSlider();
  },
  
  initRegularSlider: function() {
    const self = this;
    
    this.selector.each(function() {
      const $slider = $(this);
      const $parent = $slider.parent().parent();
      let $arrowContainer;
      
      // Determine arrow container based on slider type
      if ($slider.hasClass('hero__slider')) {
        $arrowContainer = $slider.closest('.hero__slider');
      } else if ($slider.parent().hasClass('promoted-article__slider')) {
        $arrowContainer = $slider.closest('.promoted-article__container');
      } else if ($slider.parent().hasClass('gallery__slider')) {
        $arrowContainer = $slider.closest('.gallery__container');
      }
      
      // Initialize counter on slider init
      $slider.on('init', function(event, slick, currentSlide) {
        const slideNumber = (currentSlide || 0) + 1;
        $parent.find(self.status).text(self.addZeros(slideNumber));
        $parent.find(self.sum).text(self.addZeros(slick.slideCount));
      });
      
      // Initialize slick slider
      $slider.slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev slider__arrow" aria-label="Previous" type="button"><span class="icon font-ico-arrow-left"></span></button>',
        nextArrow: '<button class="slick-next slider__arrow" aria-label="Next" type="button"><span class="icon font-ico-arrow-right"></span></button>',
        infinite: false,
        appendArrows: $arrowContainer
      });
      
      // Update counter after slide change
      $slider.on('afterChange', function(event, slick, currentSlide) {
        const slideNumber = (currentSlide || 0) + 1;
        $parent.find(self.status).text(self.addZeros(slideNumber));
        $parent.find(self.sum).text(self.addZeros(slick.slideCount));
      });
    });
  },
  
  initMapSlider: function() {
    this.sliderMap.slick({
      slidesToShow: 1,
      arrows: false,
      dots: true
    });
  },
  
  homeSlider: function() {
    this.sliderHome.slick({
      slidesToShow: 1,
      dots: true,
      infinite: false,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span class="icon font-ico-arrow-back"></span></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span class="icon font-ico-arrow-short-right2"></span></button>'
    });
  },
  
  addZeros: function(number) {
    return number < 10 ? '0' + number : '' + number;
  },
  
  initReportSlider: function() {
    this.sliderReport.slick();
    
    const slideCount = $('.slick-slide').length;
    const $sum = $('.slider-sum');
    const $counter = $('.slider-counter');
    const $report = $('.report');
    
    if (slideCount <= 1) {
      $sum.hide();
      $counter.hide();
      $report.addClass('hide-after');
    }
  }
};

// Home Arrow Scroll Module
const homeArrowScroll = {
  init: function() {
    const $body = $('body');
    const $htmlBody = $('html, body');
    const $header = $('.header');
    
    $body.find('.hero').on('click', '.js-home-arrow-down', function() {
      const headerHeight = $header.outerHeight();
      const $nextSection = $(this).closest('.hero').next('div');
      const nextSectionTop = $nextSection.offset().top;
      
      if ($header.hasClass('show')) {
        $htmlBody.stop().animate({ scrollTop: nextSectionTop }, 600);
      } else {
        $htmlBody.stop().animate({ scrollTop: nextSectionTop - headerHeight - 10 }, 600);
      }
    });
  }
};

// Video Module
const videoModule = {
  $doc: $(document),
  $win: $(window),
  $playBtn: $('.js-btn-play'),
  $videoPopup: $('.has-video-popup'),
  $videoWrap: $('.js-video-parent'),
  $videoOverlay: $('.video__overlay'),
  playBtn: '.js-btn-play',
  video: '.js-video',
  videoPlaying: 'collaborate__video--playing',
  videoPopup: '.has-video-popup',
  videoOverlay: '.video__overlay',
  videoClsBtn: '.video__close-btn',
  speed: '500',
  videoUrl: 'video-url',
  iframe: 'iframe',
  
  init: function() {
    this.bindVideoEvents();
  },
  
  bindVideoEvents: function() {
    const self = this;
    let intervalId;
    
    // Play button click
    $(document).on('click', self.playBtn, function() {
      const $btn = $(this);
      const $overlay = $btn.closest(self.videoPopup).find(self.videoOverlay);
      const videoUrl = $btn.data(self.videoUrl);
      
      $overlay.find(self.iframe).attr('src', videoUrl + '?autoplay=1');
      
      setTimeout(function() {
        $overlay.fadeIn(self.speed);
      }, self.speed);
    });
    
    // Close button click
    this.$videoPopup.find(self.videoClsBtn).on('click', function() {
      const $overlay = $(this).closest(self.videoOverlay);
      const $iframe = $overlay.find(self.iframe);
      
      $overlay.fadeOut(self.speed, function() {
        $iframe.attr('src', '');
      });
    });
    
    // Desktop-only features
    if (this.$win.width() > 1024) {
      // ESC key to close
      self.$doc.keydown(function(event) {
        if (event.keyCode === 27) {
          const $iframe = self.$videoOverlay.find(self.iframe);
          self.$videoOverlay.fadeOut(self.speed, function() {
            $iframe.attr('src', '');
          });
        }
      });
      
      // Video hover preview
      self.$videoWrap.hover(
        function() {
          const $video = $(this).find(self.video);
          $video.addClass(self.videoPlaying);
          $video.get(0).play();
          
          intervalId = setInterval(function() {
            $video.get(0).currentTime = 0;
          }, 4000);
        },
        function() {
          const $video = $(this).find(self.video);
          $video.removeClass(self.videoPlaying);
          $video.get(0).currentTime = 0;
          $video.get(0).pause();
          clearInterval(intervalId);
        }
      );
    }
  }
};

// Newsletter Module
const newsletterModule = {
  $newsletterWrapper: $('.newsletter__container'),
  $newsletterBtn: $('.newsletter__btn'),
  $newsletterForm: $('.newsletter__form'),
  
  init: function() {
    this.initValidation();
    this.subscribe();
  },
  
  initValidation: function() {
    if ($.validator && $.validator.unobtrusive) {
      $.validator.unobtrusive.parse(this.$newsletterForm);
    }
  },
  
  subscribe: function() {
    const self = this;
    
    self.$newsletterForm.on('submit', function(event) {
      event.preventDefault();
      
      if (!$(this).valid()) {
        return false;
      }
      
      if ($('span[generated=true]').length === 1) {
        return;
      }
      
      const $btn = self.$newsletterBtn;
      const controllerUrl = $btn.data('controller-url');
      const email = $('#EmailAddress').val();
      const $form = $(this);
      const token = $form.find('input[name="__RequestVerificationToken"]').val();
      
      if (email) {
        $.ajax({
          url: controllerUrl,
          type: 'POST',
          data: {
            EmailAddress: email,
            __RequestVerificationToken: token
          },
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          success: function(response) {
            self.$newsletterWrapper.empty();
            self.$newsletterWrapper.addClass('newsletter__container--success');
            self.$newsletterWrapper.append(
              '<span class="newsletter__success">' + response.message + '</span>'
            );
          },
          error: function(xhr, status, error) {
            console.error('Subscription error:', error);
            self.$newsletterWrapper.append(
              '<span class="newsletter__error">An error occurred. Please try again.</span>'
            );
          }
        });
      }
    });
  }
};

// Continue with remaining modules in similar fashion...
// (Map Module, Tabs Module, People Widget, etc.)