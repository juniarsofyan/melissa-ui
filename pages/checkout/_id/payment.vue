<template>
  <!--wrap main content-->
	<div class="main-content main-content-checkout">

		<div class="container">

            <!--breadcrumb-->
			<!-- <div class="row">
				<div class="col-lg-12">
					<div class="breadcrumb-trail breadcrumbs">
						<ul class="trail-items breadcrumb">
							<li class="trail-item trail-begin"><a href="index.html">Home</a></li>
							<li class="trail-item trail-end ">Checkout</li>
                            <li class="trail-item trail-end active">Payment</li>
						</ul>
					</div>
				</div>
			</div> -->

            <!--page title-->
			<!-- <h3 class="custom_blog_title">#Payment</h3> -->

            <!--checkout input form-->
			<div class="checkout-wrapp">

              

                <!--payment method-->
				<div class="payment-method-wrapp">

					<div class="payment-method-form checkout-form">
						<div class="row-col-1 row-col">
							<div class="payment-method">
								<h3 class="title-form">Payment Method</h3>
								<div class="group-button-payment">
									<a href="#" class="button btn-credit-card">CREDIT CARD</a>
									<a href="#" class="button btn-paypal">paypal</a>
								</div>
								<p class="form-row form-row-card-number">
									<label class="text">Card number</label>
									<input type="text" class="input-text" placeholder="xxx - xxx - xxx - xxx">
								</p>
								<p class="form-row forn-row-col forn-row-col-1">
									<label class="text">Month</label>
									<select data-placeholder="01" class="chosen-select" tabindex="1">
							            <option value="thang01">01</option>
							            <option value="thang02">02</option>
							            <option value="thang03">03</option>
							            <option value="thang04">04</option>
							            <option value="thang05">05</option>
							            <option value="thang06">06</option>
							            <option value="thang07">07</option>
							            <option value="thang08">08</option>
							            <option value="thang09">09</option>
							            <option value="thang10">10</option>
							            <option value="thang11">11</option>
							            <option value="thang12">12</option>
							        </select>
								</p>
								<p class="form-row forn-row-col forn-row-col-2">
									<label class="text">Year</label>
									<select data-placeholder="2017" class="chosen-select" tabindex="1">
							            <option value="nam2010">2010</option>
							            <option value="nam2011">2011</option>
							            <option value="nam2012">2012</option>
							            <option value="nam2013">2013</option>
							            <option value="nam2014">2014</option>
							            <option value="nam2015">2015</option>
							            <option value="nam2016">2016</option>
							            <option value="nam2017">2017</option>
							            <option value="nam2018">2018</option>
							        </select>
								</p>
								<p class="form-row forn-row-col forn-row-col-3">
									<label class="text">CVV</label>
									<select data-placeholder="238" class="chosen-select" tabindex="1">
							            <option value="cvv1">238</option>
							            <option value="cvv2">354</option>
							            <option value="cvv3">681</option>
							            <option value="cvv4">254</option>
							            <option value="cvv5">687</option>
							            <option value="cvv6">123</option>
							            <option value="cvv7">951</option>
							            <option value="cvv8">852</option>
							            <option value="cvv9">753</option>
							            <option value="vcc10">963</option>
							        </select>
							    </p>
							</div>
						</div>
						<div class="row-col-2 row-col">
							<div class="your-order">
								<h3 class="title-form">
									Your Order
								</h3>
								<ul class="list-product-order">
									<li class="product-item-order">
										<div class="product-thumb">
											<a href="#">
                                                <img src="assets/images/products/product_0078-100x100.jpg" width="100" height="100" alt="">
											</a>
										</div>
										<div class="product-order-inner">
											<h5 class="product-name">
												<a href="#">Cotton T-shirt Regular fit</a>
											</h5>
											<span class="attributes-select attributes-color">Black,</span>
											<span class="attributes-select attributes-size">XXL</span>
											<div class="price">€45 <span class="count">x 1</span></div>
										</div>
									</li>
									<li class="product-item-order">
										<div class="product-thumb">
											<a href="#">
                                                <img src="assets/images/products/product_0003-100x100.jpg" width="100" height="100" alt="">
											</a>
										</div>
										<div class="product-order-inner">
											<h5 class="product-name">
												<a href="#">Cotton T-shirt Regular fit</a>
											</h5>
											<span class="attributes-select attributes-color">Black,</span>
											<span class="attributes-select attributes-size">XXL</span>
											<div class="price">€45 <span class="count">x 1</span></div>
										</div>
									</li>
								</ul>
								<div class="order-total">
									<span class="title">Total Price:</span><span class="total-price">€95</span>
								</div>
							</div>
						</div>
					</div>

					<div class="button-control">
						<a href="#" class="button btn-back-to-shipping">BACK TO SHIPPING</a>
					 <nuxt-link :to="`status`" class="button btn-pay-now">PAY NOW</nuxt-link>
                         
					</div>

				</div>

               

			</div>

		</div>

	</div>
</template>