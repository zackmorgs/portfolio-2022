BV.define("hbs!histogramPopup", ["hbs", "vendor/handlebars/runtime", "template/helpers/view", "template/helpers/withIf", "template/helpers/reverseEach", "template/helpers/ratingIconChar", "template/helpers/extmsg", "template/helpers/percentage"], function(e, t) {
     var n = t.template(function(e, t, n, r, i) {
         function p(e, t, r) {
             var i = "", s, o, u;
             i += ' <!--[if lt IE 7]> <div class="bv-compat bvie6 bvie-lt8 bvie"> <![endif]--> <!--[if IE 7]> <div class="bv-compat bvie7 bvie-lt8 bvie"> <![endif]--> <!--[if IE 8]> <div class="bv-compat bvie8 bvie"> <![endif]--> <!--[if IE 9]> <div class="bv-compat bvie9 bvie"> <![endif]--> <!--[if gt IE 9]> <!--><div class="bv-compat"> <!--<![endif]--> ',
             u = {
                 hash: {},
                 inverse: h.noop,
                 fn: h.programWithDepth(d, t, e, r)
             },
             o = (s = n.withIf,
             s ? s.call(e, (s = (s = e.Product,
             s == null  || s === !1 ? s : s.Reviews),
             s == null  || s === !1 ? s : s.Statistics), u) : c.call(e, "withIf", (s = (s = e.Product,
             s == null  || s === !1 ? s : s.Reviews),
             s == null  || s === !1 ? s : s.Statistics), u));
             if (o || o === 0)
                 i += o;
             return i += " </div> ",
             i
         }
         function d(e, t, r, i) {
             var s = "", o, u, a;
             s += ' <div class="bv-popup-histogram-ratings" role="tooltip" aria-expanded="false"> <table role="presentation"> ',
             a = {
                 hash: {},
                 inverse: h.noop,
                 fn: h.programWithDepth(v, t, e, r)
             },
             u = (o = n.reverseEach,
             o ? o.call(e, e.RatingDistribution, a) : c.call(e, "reverseEach", e.RatingDistribution, a));
             if (u || u === 0)
                 s += u;
             return s += ' </table> <div class="bv-action-bar"> <ul class="bv-toplevel-actions" role="presentation"> <li class="bv-histogram-action"><button type="button" class="bv-read-review bv-focusable">',
             a = {
                 hash: {}
             },
             s += l((o = n.extmsg,
             o ? o.call(e, "histogram_readReviews", i.msgpack, e, a) : c.call(e, "extmsg", "histogram_readReviews", i.msgpack, e, a))) + "</button></li> </ul> </div> </div> ",
             s
         }
         function v(e, t, r, i) {
             var s = "", o, u, a;
             return s += ' <tr class="bv-focusable" tabindex="0"> <td class="bv-popup-histogram-ratings-star" data-bv-histogram-rating-value="',
             (o = n.RatingValue) ? o = o.call(e, {
                 hash: {}
             }) : (o = e.RatingValue,
             o = typeof o === f ? o.apply(e) : o),
             s += l(o) + '" role="presentation"> ',
             (o = n.RatingValue) ? o = o.call(e, {
                 hash: {}
             }) : (o = e.RatingValue,
             o = typeof o === f ? o.apply(e) : o),
             s += l(o) + '<span class="bv-glyph">',
             a = {
                 hash: {}
             },
             s += l((o = n.ratingIconChar,
             o ? o.call(e, "prs-rating-stars-on", a) : c.call(e, "ratingIconChar", "prs-rating-stars-on", a))) + '</span> <span class="bv-off-screen">',
             a = {
                 hash: {}
             },
             s += l((o = n.extmsg,
             o ? o.call(e, "offscreen_histogram_stars", i.msgpack, e, a) : c.call(e, "extmsg", "offscreen_histogram_stars", i.msgpack, e, a))) + '</span> </td> <td class="bv-popup-histogram-ratings-bar" data-bv-histogram-rating-value="',
             (u = n.RatingValue) ? u = u.call(e, {
                 hash: {}
             }) : (u = e.RatingValue,
             u = typeof u === f ? u.apply(e) : u),
             s += l(u) + '" role="presentation"> <span class="bv-content-secondary-ratings-container"> <span class="bv-content-secondary-ratings-value" style="width:',
             a = {
                 hash: {}
             },
             s += l((o = n.percentage,
             o ? o.call(e, e.Count, r.TotalCount, 1, a) : c.call(e, "percentage", e.Count, r.TotalCount, 1, a))) + '% !important;"></span> </span> </td> <td class="bv-popup-histogram-ratings-score" role="presentation"> ',
             (u = n.Count) ? u = u.call(e, {
                 hash: {}
             }) : (u = e.Count,
             u = typeof u === f ? u.apply(e) : u),
             s += l(u) + ' <span class="bv-off-screen">',
             a = {
                 hash: {}
             },
             s += l((o = n.extmsg,
             o ? o.call(e, "offscreen_histogram_count", i.msgpack, e, a) : c.call(e, "extmsg", "offscreen_histogram_count", i.msgpack, e, a))) + "</span> </td> </tr> ",
             s
         }
         this.compilerInfo = [2, ">= 1.0.0-rc.3"],
         n = n || e.helpers;
         var s = "", o, u, a, f = "function", l = this.escapeExpression, c = n.helperMissing, h = this;
         s += ' <div class="bv-core-container-',
         (o = n.version) ? o = o.call(t, {
             hash: {}
         }) : (o = t.version,
         o = typeof o === f ? o.apply(t) : o),
         s += l(o) + '"> ',
         a = {
             hash: {
                 tag: "div",
                 classList: "popup popup-histogram"
             },
             inverse: h.noop,
             fn: h.programWithDepth(p, i, t)
         },
         u = (o = n.view,
         o ? o.call(t, t, a) : c.call(t, "view", t, a));
         if (u || u === 0)
             s += u;
         return s += " </div> ",
         s
     });
     return t.registerPartial("histogramPopup", n),
     n.deps = [],
     n.tplMountedViews = [],
     n
 });