vwo_$(document).ready(function(){
  if (vwo_$('div.col-left.sidebar span:contains("Narrow By")').length) {
	//vwo_$('body.catalog-category-view').addClass('ti-test var-1');
	var value_messaging_html = '<div class="value-messaging row"> <div id="delivery" class="col-4"> <div class="partial-border"> <span class="icon"></span> <strong>Discreet Home Delivery</strong> <a>Details</a> </div> </div> <div id="hassle-free" class="col-4"> <div class="partial-border"> <span class="icon"></span> <strong>Hassle-Free Returns</strong> <a>Details</a> </div> </div> <div id="auto-ship" class="col-4"> <div class="grip"> <span class="icon"></span> <strong>Auto-Ship Available</strong> <a>Details</a> </div> </div> </div>';
	vwo_$('div.main.col2-left-layout.centering > div.col-main').prepend(value_messaging_html);
	setup_modals();
	vwo_$("body > div.wrapper > div").addClass("ti-test var-2");
    var_2();
}
});

var setup_modals = function(){
	vwo_$('#delivery a').click(function(){
		var url = '/customer-service/shipping-policy';
		var modal_html = '<div class="modal-bg"> <div class="modal shipping"> <a class="modal-close"></a> <div class="col-main"> <div class="std"> <h1 style="width:100%;text-transform:uppercase">Shipping Policy</h1> <img src="/media/wysiwyg/shipping_policy/boxes.jpg"> <div class="col-content"><a name="discreet"></a> <p>NorthShore Care is dedicated to getting your order to you as quickly and discreetly as possible. Order by 5 PM Central time Monday - Friday and your package will ship same day. </p> <h3>Discreet Home Delivery</h3> <p>All orders from NorthShore Care Supply ship in plain, unmarked boxes or envelopes to maintain your privacy. Even the shipping label does not mention medical supplies. The return address states our parent company name of "Samela, Inc./NorthShore".</p> <h3>Fast, Reliable Shipping</h3> <p>Shipping Time -- Most orders received before 5:00PM Central will ship the same day, provided the product ordered is in-stock. In the rare occurrence that an item is not in-stock, we will make every attempt to have the item shipped directly from the manufacturer to avoid any delay for our customers. Even though orders may be processed and tracking numbers assigned on weekends and holidays, orders will not physically ship until the next business day.</p> <a href="/customer-service/shipping-policy" class="button darkblue"> <span> <span> Learn More </span> </span> </a> </div> </div> </div> </div> </div>';
		vwo_$('body').append(modal_html);
	});	
	vwo_$('#hassle-free a').click(function(){
		var url = '/customer-service/return-policy';
		var modal_html ='<div class="modal-bg"> <div class="modal returns"> <a class="modal-close"></a> <div class="col-main"> <div class="page-title"> <h1>Return Policy</h1> </div> <div class="std">We are committed to ensuring that all of our products and services meet the highest of quality standards. If any incorrect items are received or items are received in a damaged condition, please contact us immediately (within 5 days of delivery) to receive an RMA number. We will replace any damaged merchandise or refund the damaged portion of your order.<p></p> <p>If you would like to return or exchange any unopened items, we will gladly exchange them for any other size needed or refund your money, less shipping costs, as long as the item is not discontinued by the manufacturer. We are unable to accept returns of any opened items due to sanitary reasons. However, if you order multiple bags together, often referred to as a Case, then we can accept returns for all the unopened bags and will refund a prorated amount of the case price accordingly.</p> <p>Please follow <span style="font-weight:700">Easy Return Instructions</span> below or call <span style="display:inline-block;font-weight:700">(800) 563-0161</span> for an RMA number and to discuss the return/ exchange. Returned items must be in their original packaging, unopened, and in good condition in order to be replaced or refunded. Customer pays for returned shipping.</p> <div style="margin-left:30px"> <h3>Easy Return Instructions:</h3> <ol style="line-height:1.2!important"> <li>Box up any unopened items needing to be returned.</li> <li>Include copy of receipt or packing list and circle items needing to be returned.</li> <li>Ship to our Buffalo Grove, IL address at top of receipt or packing list.</li> <li>Refund will be processed once received back and inspected.</li> </ol> </div> <p>We encourage you to contact us with any feedback on our goods and services. Please feel free to phone our customer service representatives at any time at <span style="display:inline-block;font-weight:700">(800) 563-0161</span>.</p> </div> </div> </div> </div>';
		vwo_$('body').append(modal_html);
		vwo_$('.modal').addClass('returns');
	});	
	vwo_$('#auto-ship a').click(function(){
		var url = '/auto-ship';
		var modal_html = '<div class="modal-bg"> <div class="modal returns"> <a class="modal-close"></a> <div class="col-main"> <div class="page-title"> <h1>No more worries with Auto-Ship</h1> </div> <div class="std"> <div class="widget widget-static-block"> <style>div.container-3{padding:10px;width:720px;margin:0 auto;text-align:center;margin-top:-55px}div.container-1{display:inline-block;-webkit-box-sizing:border-box;vertical-align:top;-moz-box-sizing:border-box;box-sizing:border-box;width:200px;height:250px;background:#efefef;text-align:center;padding:10px;margin:10px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;border:1px #efefef outset}p.container-1{text-align:center;font-family:inherit;margin:10px 10px;font-size:13px;padding:4px}.container-1-img{padding:5px;padding-left:0}.nsc-button{background:#24558e;color:#fff;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;border:hidden;padding:10px;font-size:12px}.nsc-button:hover{background:#2e6cb4}#translate{float:right;margin-right:85px;margin-top:-45px}</style></div><p>Don’t run out of supplies.&nbsp; Sign up for Auto-Ship now, so your order is delivered on your schedule, worry free.</p> <p>&nbsp;</p> <div class="container-3"><br> <div class="container-1"> <p class="container-1"><strong>SHOP</strong> <img class="container-1-img" src="/media/wysiwyg/AutoShip/AutoShipPage3.jpg" alt="" width="100%"> Select the items you use regularly.</p> </div> <div class="container-1"> <p class="container-1"><strong>SCHEDULE</strong> <img class="container-1-img" src="/media/wysiwyg/AutoShip/AutoShipPage2.jpg" alt="" width="100%"> Choose a delivery schedule.</p> </div> <div class="container-1"> <p class="container-1"><strong>SMILE</strong> <img class="container-1-img" src="/media/wysiwyg/AutoShip/AutoShipPage1.jpg" alt="" width="100%"> Your package will arrive on time. As planned.</p> </div> <div id="contentD"><br>Future changes? No problem. You can add products to upcoming orders or cancel at any time. <br><br>Just give us a call at <strong><span style="display:inline-block;font-weight:700">(800) 563-0161</span></strong> or send an email to <a href="mailto:info@northshorecare.com">info@northshorecare.com</a> <br><br>  </div> </div> </div> </div> </div> </div>';
		vwo_$('body').append(modal_html);
		vwo_$('.modal').addClass('auto-ship');
	});	
	vwo_$('.modal .modal-close, .modal-bg').live('click',function(){
		vwo_$('.modal-bg').hide();
	});

var var_2 = function() {
        no_reviews_mod();
        review_mod_listeners();
    };

    var no_reviews_mod = function () {
        var max_queries = 20;
        var no_reviews_timeout = setInterval(function(){
            try{
                // var label = vwo_$(".bv-rating-label");
                // for(var i=0; i < vwo_$(label).length; i++){
                //     has_reviews = vwo_$(".bv-rating-label").html().indexOf("(0)") === -1;
                //     if (has_reviews == false && $(label).hasClass(no-reviews) == false) {
                //         $(label).addClass('no-reviews');
                //     } 
                // }
                vwo_$('.bv-rating-label:contains("(0)")').addClass('no-reviews');
                if(max_queries == 20){
                    clearInterval(no_reviews_timeout);
                }
            } catch (error) {
                //console.log('no_reviews_error:',error)
            }
        },400);
    };

    /**
     * Sets up event listener to show reviews
     */
     var review_mod_listeners = function() {
        vwo_$(".category-view .stats").one("mouseover", function() {
            //console.log("mouseover initial...one");
            var selected = vwo_$(this).find('.bv-stars-container');
            var has_reviews = selected.find('.bv-rating-label').html() !== "   (0)  ";
            /* check if there are reviews first. */
            if(selected.length !== 0 && has_reviews === true){
                review_tooltip_open(selected);
            }
        });
        vwo_$(".category-view .stats").on("mouseleave", function() {
            //console.log("mouseleave...");
            var unselected = vwo_$(this).find('.bv-stars-container');
            review_tooltip_close();
            /* rebind listener.. */
            var has_reviews = unselected.find('.bv-rating-label').html() !== "   (0)  ";
            if(unselected.length !== 0 && has_reviews === true){
                vwo_$(unselected).one("mouseover", function() {
                    //console.log("mouseover... (after mouseleave)");
                    var selected = this;
                    review_tooltip_open(selected);
                });
            }
        });
    };

    /*
     * shows the review statistics in a pop-in.
     */
     var review_tooltip_open = function(selected) {
        vwo_$(selected).addClass("tooltip-show");
        //var table = vwo_$(selected).find('.bv-core-container-190 table');
        if (vwo_$(".bv-core-container-190 table").length == 0) {
            /* if there are any, we dont want there to be duplicates*/
            last_selected = vwo_$(selected);
            var url = vwo_$(selected).find("a").attr("href");
            setup_review_gui(vwo_$(selected));
            //update_review_gui();
            ajax_sku(url, selected);
        } else {
            //////console.log("more than one .tooltip-show .bv-core-container-190 exists");
            review_tooltip_close();
        }
    };

    var review_tooltip_close = function() {
        vwo_$(".tooltip-show .bv-core-container-190").remove();
        vwo_$(".tooltip-show").removeClass("tooltip-show");
        vwo_$(".var-2 .bv-loading").removeClass("bv-loading");
        vwo_$(".var-2 .bv-loaded").removeClass("bv-loaded");
    };

    var setup_review_gui = function(star_container) {
        var review_count_label = star_container.find(".bv-ratio-count");
        var review_html = review_tooltip.container();
        vwo_$(".tooltip-show").append(review_html);
    };

    var review_tooltip_loading = function(/*selected*/) {
        // figured there'd be more to do in here. at one point there was. ::shrug::
        vwo_$(".tooltip-show .bv-rating-label").addClass("bv-loading");
    };

    var review_tooltip_finshed_loading = function(selected) {
        vwo_$(".tooltip-show").find(".bv-popup-histogram tbody");
        var hist = vwo_$(selected).find(".bv-popup.bv-popup-histogram");
        vwo_$(hist).addClass("bv-loaded");
        var caret = vwo_$(selected).find(".bv-rating-label.bv-text-link");
        vwo_$(caret).removeClass("bv-loading");
        vwo_$(caret).addClass("bv-loaded");
    };

    /**
     * makes various templated elements of the tooltip table 
     */
     var review_tooltip = {
        start_html: '<div class="bv-core-container-190"><div data-bv-v="histogramPopup:3" class="bv-popup bv-popup-histogram bv-shared bv-popup-container" aria-expanded="true"><strong class="bv-popup-caption">Review Snapshot</strong> <div class="bv-compat"> <div class="bv-popup-histogram-ratings" role="tooltip" aria-expanded="false"> <table role="presentation"> <tbody>',
        end_html: "</tbody></table></div></div></div></div>",
        container: function() {
            return review_tooltip.start_html + review_tooltip.end_html;
        },
        /**
         * gives you a row 
         * @param {string} stars - amount of stars
         * @param {string} bar_width - width of bar in percentage. no '%' needed
         * @param {string} review_count - total reviews
         */
         row: function(stars, bar_width, review_count) {
            var template = ' <tr class="bv-focusable" tabindex="0" data-stars="{{review-stars}}"> <td class="bv-popup-histogram-ratings-star" data-bv-histogram-rating-value="{{review-stars}}" role="presentation">{{review-stars}}<span class="bv-glyph">★</span> <span class="bv-off-screen">stars</span> </td><td class="bv-popup-histogram-ratings-bar" data-bv-histogram-rating-value="{{review-stars}}" role="presentation"> <span class="bv-content-secondary-ratings-container"> <span class="bv-content-secondary-ratings-value" style="width:{{review-bar-width}}% !important;"></span> </span> </td><td class="bv-popup-histogram-ratings-score" role="presentation">{{review-count}}<span class="bv-off-screen">reviews</span> </td></tr>';
            template = template.replaceAll("{{review-stars}}", stars);
            template = template.replaceAll("{{review-count}}", review_count);
            template = template.replaceAll("{{review-bar-width}}", bar_width);
            return template;
        },
        action_bar: function(total_review_count) {
            var template = ' <div class="bv-action-bar"> <ul class="bv-toplevel-actions" role="presentation"> <li class="bv-histogram-action"> <button type="button" class="bv-read-review bv-focusable" onclick="return false;">Read{{total_review-count}}Reviews</button> </li></ul> </div>';
            template = template.replaceAll("{{total_review-count}}", " " + total_review_count + " ");
            return template;
        }
    };

    /**
     * gets the sku of a product from a link to a product page.
     * @param {string} url : url of product page
     * @pram {jquery element} selected : this from the mouseover
     */
     var ajax_sku = function(url, selected) {
        review_tooltip_loading(/*selected*/);
        var selected = selected;
        var sku = "";
        try {
            vwo_$.ajax({
                url: url,
                success: function(data) {
                    ////////console.log(vwo_$(data));
                    sku = vwo_$(data).find(".sku-container input").attr("value");
                    sku = sku.replace(" ", "");
                    //////console.log('...get_sku success:',sku);
                    ajax_review_info(sku, selected);
                },
                // timeout: 4000,
                failure: function(data) {
                    review_tooltip_close()
                }
            });
        } catch (e) {
            ////console.log("get sku error:", e);
        }
    };

    /**
     * gets the json review data of a product from a sku, then fills in the tooltip with the data
     * @param {string} sku - product sku
     */
     var ajax_review_info = function(sku, selected) {
        if(vwo_$('.tooltip-show tr').length == 0){
            var url = "https://api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=" + BV.options.apiconfig.passkey + "&Filter=ProductId:" + sku + "&Include=Products&Stats=Reviews";
            //////console.log(url);
            var data = Object.JSON;
            vwo_$.ajax({
                dataType: "json",
                url: url,
                // timeout: 4000,
                success: function(data) {

                    var product = Object.JSON;
                    try {
                        product = data.Includes.Products.Includes[sku];
                    } catch (e) {
                        ////console.log("probably multi-product...error:", e);
                        product = data.Includes.Products[data.Includes.ProductsOrder[0]];
                    }
                    ////console.log("...get_reviews success", sku, product);
                    var row_html = "";
                    var row_html_arr = [];
                    //console.log(product);
                    var used_rating = [false,false,false,false,false];
                    for (var i = 0; i < product.ReviewStatistics.OverallRatingRange; i++) {
                        ////console.log(product.ReviewStatistics);
                        var rating_dist = product.ReviewStatistics.RatingDistribution[i];
                        // defaults because sometimes there are no reviews
                        var stars;
                        var total_review_count = product.TotalReviewCount;
                        var this_review_count = 0;
                        var bar_width = 0;
                        if (rating_dist !== undefined) {
                            stars = rating_dist.RatingValue;
                            total_review_count = product.TotalReviewCount;
                            this_review_count = rating_dist.Count;
                            bar_width = rating_dist.Count / total_review_count * 100;
                            row_html_arr.push(review_tooltip.row(stars, bar_width, this_review_count));
                            used_rating[stars-1] = true;
                        } else {
                            // used_rating[] = false;
                        }
                        //console.log(used_rating);
                    }
                    var tbody = vwo_$(".tooltip-show tbody");
                    if(vwo_$('.tooltip-show tr').length == 0){
                        //vwo_$(tbody).append(row_html);
                        for(var i=0; i < product.ReviewStatistics.OverallRatingRange; i++){
                            if(used_rating[i] == false){
                                row_html_arr.push(review_tooltip.row(i+1, 0, 0));
                            }
                        }
                        row_html_arr.sort().reverse();
                        row_html_arr.forEach(function(element){
                            row_html += element;
                        });
                        vwo_$(tbody).append(row_html)
                    }
                    review_tooltip_finshed_loading(selected);
                },
                failure: function() {
                    //console.log('tooltip ajax failure');
                    review_tooltip_close();
                }
            });
        } else {
            console.log('already rows error',vwo_$('.tooltip-show tr'));
        }
    };
    /**
     * Replaces ALL instances of substring in string
     * @param {string} search : substring you want to replace
     * @param {string} replacement : replacement string
     */
     String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, "g"), replacement);
    };
	
};
