vwo_$(document).ready(function(){
	console.log('var1.');
	vwo_$('body.catalog-category-view').addClass('ti-test var-1');
	var value_messaging_html = '<div class="value-messaging row" style="opacity:0.0; height:0; "> <div id="delivery" class="col-4"> <div class="partial-border"> <span class="icon"></span> <strong>Discreet Home Delivery</strong> <a>Details</a> </div> </div> <div id="hassle-free" class="col-4"> <div class="partial-border"> <span class="icon"></span> <strong>Hassle-Free Returns</strong> <a>Details</a> </div> </div> <div id="auto-ship" class="col-4"> <div class="grip"> <span class="icon"></span> <strong>Auto-Ship Available</strong> <a>Details</a> </div> </div> </div>';
	vwo_$('.var-1.catalog-category-view .col-main').prepend(value_messaging_html);
	setup_modals();

	setTimeout(function(){ 
		jQuery('.value-messaging').animate({
			scrollTop:productsPos}, 500); 
	}, 2000);
});

var has_query_Parameter = function () {
	return window.location.href.indexOf("?&") == true;
};

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
};

