jQuery(".b-tooltip").tooltip();jQuery(".b-popover").popover();jQuery(document).ready(function(){ function stickySideBar() {
        var stickyOffset = $('#sidebarAds').offset().top;
        height_dv = $(".maincnt").height();
        if (jQuery("#hdh").val() != "0") {
            height_dv = jQuery("#hdh").val();
        }
        jQuery(window).scroll(function() {
            var sticky = jQuery('#sidebarAds');
            var iscroll = jQuery(window).scrollTop();
            var maxHeight = height_dv - jQuery('#sidebarAds').height();
            if (iscroll >= stickyOffset && iscroll <= maxHeight) {
                sticky.addClass('fix-block');
            } else {
                sticky.removeClass('fix-block');
            }
        });
    }

    stickySideBar(); var hidden=true;jQuery(".b-dropdown").click(function(e){e.preventDefault();if(hidden){jQuery(this).next('.b-dropdown-block').slideToggle(400,function(){hidden=false;});}});jQuery('html').click(function(){if(!hidden){jQuery('.b-dropdown-block').slideUp();hidden=true;}});jQuery('.b-dropdown-block').click(function(event){event.stopPropagation();});});jQuery(document).ready(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>200){jQuery('.totop').fadeIn();}else{jQuery('.totop').fadeOut();}});jQuery(".totop a").click(function(e){e.preventDefault();jQuery("html, body").animate({scrollTop:0},"slow");return false;});});jQuery(document).ready(function(){jQuery.fn.menumaker=function(options){var cssmenu=jQuery(this),settings=jQuery.extend({title:"Menu",format:"dropdown",sticky:false},options);return this.each(function(){jQuery(this).find("#menu-button").on('click',function(){jQuery(this).toggleClass('menu-opened');var mainmenu=jQuery(this).next('ul');if(mainmenu.hasClass('open')){mainmenu.slideUp().removeClass('open');}
else{mainmenu.slideDown().addClass('open');if(settings.format==="dropdown"){mainmenu.find('ul').slideDown();}}});cssmenu.find('li ul').parent().addClass('has-sub');multiTg=function(){cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');cssmenu.find('.submenu-button').on('click',function(){jQuery(this).toggleClass('submenu-opened');if(jQuery(this).siblings('ul').hasClass('open')){jQuery(this).siblings('ul').removeClass('open').slideUp();}
else{jQuery(this).siblings('ul').addClass('open').slideDown();}});};if(settings.format==='multitoggle')multiTg();else cssmenu.addClass('dropdown');});};jQuery(".navy").menumaker({title:"Menu",format:"multitoggle"});});


