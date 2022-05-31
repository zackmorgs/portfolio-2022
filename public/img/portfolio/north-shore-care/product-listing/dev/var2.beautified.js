vwo_$(document).ready(function() {
    vwo_$("body").addClass("ti-test var-2");
    var_2();
});

var var_2 = function() {
    review_mod_listeners();
};

/**
 * Sets up event listener to show reviews
 */
var review_mod_listeners = function() {
    vwo_$(".category-view .bv-stars-container").one("mouseover", function() {
        console.log("mouseover...on");
        var selected = this;
        review_tooltip_open(selected);
    });
    vwo_$(".category-view .bv-stars-container").live("mouseleave", function() {
        console.log("mouseleave...");
        var unselected = this;
        review_tooltip_close();
        /* rebind listener.. */
        vwo_$(unselected).one("mouseover", function() {
            console.log("mouseover... (after mouseleave)");
            var selected = this;
            review_tooltip_open(selected);
        });
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
        console.log("more than one .tooltip-show .bv-core-container-190 exists");
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

var review_tooltip_loading = function(selected) {
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
        var template = ' <tr class="bv-focusable" tabindex="0"> <td class="bv-popup-histogram-ratings-star" data-bv-histogram-rating-value="{{review-stars}}" role="presentation">{{review-stars}}<span class="bv-glyph">★</span> <span class="bv-off-screen">stars</span> </td><td class="bv-popup-histogram-ratings-bar" data-bv-histogram-rating-value="{{review-stars}}" role="presentation"> <span class="bv-content-secondary-ratings-container"> <span class="bv-content-secondary-ratings-value" style="width:{{review-bar-width}}% !important;"></span> </span> </td><td class="bv-popup-histogram-ratings-score" role="presentation">{{review-count}}<span class="bv-off-screen">reviews</span> </td></tr>';
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
    review_tooltip_loading(selected);
    var selected = selected;
    var sku = "";
    try {
        vwo_$.ajax({
            url: url,
            success: function(data) {
                ////console.log(vwo_$(data));
                sku = vwo_$(data).find(".sku-container input").attr("value");
                sku = sku.replace(" ", "");
                //console.log('...get_sku success:',sku);
                ajax_review_info(sku, selected);
            }
        });
    } catch (e) {
        console.log("get sku error:", e);
    }
};

/**
 * gets the json review data of a product from a sku, then fills in the tooltip with the data
 * @param {string} sku - product sku
 */
var ajax_review_info = function(sku, selected) {
    var url = "https://api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=" + BV.options.apiconfig.passkey + "&Filter=ProductId:" + sku + "&Include=Products&Stats=Reviews";
    //console.log(url);
    var data = Object.JSON;
    vwo_$.ajax({
        dataType: "json",
        url: url,
        success: function(data) {
            //console.log('get_reviews success! data:',data)
            var product = Object.JSON;
            try {
                product = data.Includes.Products.Includes[sku];
            } catch (e) {
                console.log("probably multi-product...error:", e);
                product = data.Includes.Products[data.Includes.ProductsOrder[0]];
            }
            console.log("...get_reviews success", sku, product);
            var row_html = "";
            for (var i = 0; i < product.ReviewStatistics.OverallRatingRange; i++) {
                console.log(product.ReviewStatistics);
                var rating_dist = product.ReviewStatistics.RatingDistribution[i];
                // defaults because sometimes there are no reviews
                var stars = i + 1;
                var total_review_count = product.TotalReviewCount;
                var this_review_count = 0;
                var bar_width = 0;
                if (rating_dist !== undefined) {
                    stars = rating_dist.RatingValue;
                    total_review_count = product.TotalReviewCount;
                    this_review_count = rating_dist.Count;
                    bar_width = rating_dist.Count / total_review_count * 100;
                }
                row_html += review_tooltip.row(stars, bar_width, this_review_count);
            }
            var tbody = vwo_$(".tooltip-show tbody");
            vwo_$(tbody).append(row_html);
            review_tooltip_finshed_loading(selected);
        },
        failure: function() {}
    });
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