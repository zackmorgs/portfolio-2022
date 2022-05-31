var tiDevice; 
// store global element that has set desktop width
// can see if media query has changed width to 100%
var tiDesktopWidth = '960px';
//checks window width
var isMobileTI = function(){
  if( $(window).width() < 751 || $('.wl-page-wrap').css('width') != tiDesktopWidth ){
    return false;
  }else{
    return true;
  } 
};
//revert to desktop
function revertWindow(){
    //checks variable
    if ( tiDevice != 'desktop' ){
        /////////////////
        //global elements
        /////////////////
        
        //tags with variable
        tiDevice = 'desktop';
    }
}
function mobileWindow(){
    //checks variable   
    if ( tiDevice != 'mobile' ){
        /////////////////
        //global elements
        /////////////////
        // cart
        if ( !$('.mobile-remove').length && $('.wl-cart').length ){
            $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_gvItems tbody tr').each(function(){
                $(this).find(".col-quantity").append("<div class='mobile-remove mobile-only'><a href='"+$(this).find('.col-remove').find('a.remove').attr('href')+"'><strong>X</strong> Remove</a></div>");
            });
            var mobileQty = document.getElementById('ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_gvItems').getElementsByClassName('wl-text-box');
            for ( var qty=0; qty<mobileQty.length; qty++ ){
                mobileQty[qty].setAttribute('type','tel');
            }
            // copy and move above buy box
            $('#trustwaveSealImage').clone().addClass('mobile-only').appendTo('.shopping-promise');
        }
        // checkout all
        if ( !$('#tiSecureHeader').length && !$('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_gvItems').length ){
            $('.wl-page-header p.logo').append('<h6 id="tiSecureHeader" class="mobile-only">Secure Checkout</h6>');
            // progress bar
            $('.checkoutshippingaddressform-complete a').html('<span class="desktop-only">1. </span>Shipping');
            $('.checkoutpaymentform-complete a').html('<span class="desktop-only">2. </span>Billing');
            // wrap header phone number in callable link
            var phoneNumber = $('#aspnetForm > div.wl-page-wrap.wl-cf > div.wl-page-header.wl-cf > ul > li.phone').text();
            $('#aspnetForm > div.wl-page-wrap.wl-cf > div.wl-page-header.wl-cf > ul > li.phone').html('<a href="tel:' + phoneNumber + '">' + phoneNumber + '</a>');
        }
        // checkout login
        if ( !$('h1.mobile-only').length && $('.wl-checkout--login.wl-checkout').length ){
            $('.wl-checkout--login.wl-checkout .wl-grid--3-col').prepend('<h1 class="mobile-only"><strong>Checkout</strong> - Sign In</h1>');
            // email inputs change type to email
            $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_aclfLogin_lfLoginForm_lLogin_Username, #ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_acfCreate_tbUsername').addClass('ti-email-input');
            var mobileEmail = document.getElementsByClassName('ti-email-input');
            for ( var qty=0; qty<mobileEmail.length; qty++ ){
                mobileEmail[qty].setAttribute('type','email');
            }
            // move guest checkout to top
            $('#wl-page-main > div > div.wl-grid--3-col.wl-grid.wl-cf > div.col--3.col').prependTo('#wl-page-main > div > div.wl-grid--3-col.wl-grid.wl-cf');
            $('#wl-page-main > div > div.wl-grid--3-col.wl-grid.wl-cf > h1').prependTo('#wl-page-main > div > div.wl-grid--3-col.wl-grid.wl-cf');
            // tracking
            vwo_$('.wl-checkout--login input.wl-button').click(function(){
                try{
                    ga('trinityMobile.send', 'event', 'Login Page', 'CTA Click', vwo_$(this).val(), {'nonInteraction': 1});
                }catch(err){}
            });
            vwo_$('.wl-checkout--login a.wl-button').click(function(){
                try{
                    ga('trinityMobile.send', 'event', 'Login Page', 'CTA Click', vwo_$(this).text(), {'nonInteraction': 1});
                }catch(err){}
            });
        }
        // checkout shipping
        if ( $('.checkout-shipping').length ){

            if ( $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_casCustomerAddressSelector_dgAddresses').length ) {
                $(' .input-radio').closest('tr').each(function(){
                    $(this).addClass('ti-address-row');
                    $(this).children('td:eq(0)').addClass('ti-radio-cell ti-address-cell');
                    $(this).children('td:eq(1)').addClass('ti-first-cell ti-address-cell');
                    $(this).children('td:eq(2)').addClass('ti-last-cell ti-address-cell');
                    $(this).children('td:eq(3)').addClass('ti-nick-cell ti-address-cell');
                    $(this).children('td:eq(4)').addClass('ti-prim-cell ti-address-cell');
                    $(this).children('td:eq(5)').addClass('ti-zip-cell ti-address-cell');
                });
            }
            // telephone inputs change type to tel 
            $('input[id*="afAddressForm_tbPhone1Extension"], input[id*="afAddressForm_tbPhone1"]').addClass('ti-tel-input');
            // var mobileTel = document.getElementsByClassName('ti-tel-input');
            mobileTel = document.getElementsByClassName('ti-tel-input');
            for ( var qty=0; qty<mobileTel.length; qty++ ){
                mobileTel[qty].setAttribute('type','tel');
            }
            if ( $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_tbGuestEmailAddress').length ){
                document.getElementById('ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_tbGuestEmailAddress').setAttribute('type','email');
            }
            // move address elements around for zip look up
            $('.postalcode-pairing').insertBefore($('.countrysubdivision-pairing'));
            $('.country-pairing').insertBefore($('.city-pairing'));
            $('.city-pairing').insertAfter($('.countrysubdivision-pairing'));
            
            // cta text
            $('.checkout-shipping input[id*="AddressHdn"]').val('Continue to Billing');
            
            // zipcode lookup
            zipcodeHelp();
            // choose first saved address if logged in
            $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_casCustomerAddressSelector_dgAddresses_ctl02_rbAddress').attr('checked',true).change();
            // error scrolling
            $('.wl-button--large.wl-button').click(function(){
                setTimeout(function(){
                    if ( $('.validation-errors:visible').length ){
                        $('html, body').animate({
                            scrollTop: $('.validation-errors:visible').offset().top                            
                        },500);
                    }
                },500);
            });
        }
        // checkout billing 
        if ( $('.checkout-billing').length && !$('#ti-promo').length ){

            $('#wl-page-aside .wl-checkout-cart-summary .section:eq(1)').attr('id','ti-promo');
            $('<div id="ti-promo-anchor"></div>').insertBefore('#ti-promo');
            // promo open anchor
            $('<div id="tiPromoOpen" onClick="tiPromoOpen();">Have a Promo Code? Click here to apply</div>').insertAfter($('.checkout-billing .inner-address-form .wl-property-group').last());
            // cvv, and cc input to tel
            $('input[id*="tbSecurityCode"], input[id*="TenderForm_tbTenderNumber"], input[id*="afAddressForm_tbPhone1"]').addClass('ti-tel-input');
            var mobileTel = document.getElementsByClassName('ti-tel-input');
            for ( var qty=0; qty<mobileTel.length; qty++ ){
                mobileTel[qty].setAttribute('type','tel');
            }
            // cta text
            $('.checkout-billing input[type="submit"].wl-button').val('Continue to Order Review');
            // credit card layout
            $('.securitycode-pairing').parent().addClass('ti-code-wrap');
            $('.expiration-pairing').parent().addClass('ti-exp-wrap');
            // if not logged in grab first shipping address value and change
            if ( $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_tfTenderForm_afAddressForm_ddlAddresses').val() == '' && $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_tfTenderForm_afAddressForm_ddlAddresses option').length > 1){
                $('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_tfTenderForm_afAddressForm_ddlAddresses').val($('#ctl00_ctl00_ctl00_BodyContent_BodyContent_BodyContent_ctl00_tfTenderForm_afAddressForm_ddlAddresses option:eq(1)').attr('value')).change();
            }
            // move address elements around for zip look up
            $('.country-pairing').prependTo($('.country-pairing').parent());
            $('.countrysubdivision-pairing').appendTo($('.countrysubdivision-pairing').parent());
            $('.city-pairing').appendTo($('.city-pairing').parent());

            // zipcode lookup already present
            zipcodeHelp();
            // error scrolling
            $('.wl-button--large.wl-button').click(function(){
                setTimeout(function(){
                    if ( $('.validation-errors:visible').length ){
                        $('html, body').animate({
                            scrollTop: $('.validation-errors:visible').offset().top                            
                        },500);
                    }
                },500);
            });
        }
       
        //tags with variable
        tiDevice = 'mobile';
    }
}
// promo open
function tiPromoOpen() {
    $('html, body').animate({
        scrollTop: $('#ti-promo-anchor').offset().top
    }, 1500, function() {
        $('#ti-promo').slideDown();
        try{
            ga('trinityMobile.send', 'event', 'VWO-46', 'Variation', 'Promo Open', {'nonInteraction': 1});
        } catch(err){}
        
    });
}
function zippopotamerize(e){
    var state = $('.countrysubdivision-pairing select');
    var city = $('.city-pairing input');
    var client = new XMLHttpRequest();
    var zip = $(e).val();
    // for IE 8 
    if (window.XDomainRequest) {
        xdr = new XDomainRequest();
        if (xdr) {
            var ieURL = "//api.zippopotam.us/us/"+zip;
            xdr.open("get", ieURL);
            xdr.onload = function() {
            
                post = eval('('+xdr.responseText+')');
                // only populate if real location
                if ( typeof(post['places']) != 'undefined' ){
                    postState = post['places'][0]['state'];
                    postCity = post['places'][0]['place name'];
                    var allStates = state.find('option');
                    for(var i=0; i<allStates.length; i++){
                        if($(allStates[i]).html() == postState){
                            $(allStates[i])[0].setAttribute('selected','selected');
                            i=allStates.length;
                        }
                    }
                    state.val();
                    state.change();
                    city.val(postCity);
                    city.change();
                }
            
            };
            xdr.send();
        }
    } else {
        client.open("GET", "https://api.zippopotam.us/us/"+zip, true);
        client.onreadystatechange = function() {
            if(client.readyState == 4) {
                post = eval('('+client.responseText+')');
                // only populate if real location
                if ( typeof(post['places']) != 'undefined' ){
                    postState = post['places'][0]['state'];
                    postCity = post['places'][0]['place name'];
                    var allStates = state.find('option');
                    for(var i=0; i<allStates.length; i++){
                        if($(allStates[i]).html() == postState){
                            $(allStates[i])[0].setAttribute('selected','selected');
                            i=allStates.length;
                        }
                    }
    
                    // state.val(state.find('option[value="'+postState+'"]').attr('value'));
                    state.change();
                    city.val(postCity);
                    city.change();
                }
                
            };
        };
        client.send();
    }
}
function zipcodeHelp(){
  var selectedCountry = $('.country-pairing option[selected]');
  var zipcode = $('.postalcode-pairing .wl-text-box');
  if($(selectedCountry).html() == 'United States'){    
      // we can use the zipcode now
      $(zipcode).keyup(function(event) {
          /* Act on the event */
          if ( $(zipcode).val().length >=5 ) {
            zippopotamerize($(zipcode));
          }
      });
  }
}

$(document).ready(function(){
    
    // add meta tag
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
    
    if ( $(window).width() < 751 || $('.wl-page-wrap').css('width') != tiDesktopWidth ){
      // run script 
      mobileWindow();
    }
    //runs mobile script when window is resized less than 760px
    $(window).resize(function(){
      if(!isMobileTI()){
        mobileWindow();
      } else {
        revertWindow();
      }
    });
    
    try {
        ga('create', 'UA-31342247-1', {'name': 'trinityMobile'});
    } catch(err){}
});
