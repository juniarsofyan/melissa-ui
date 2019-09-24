<template>
    <div class="main-content main-content-checkout">

		<div class="container">

            <!--breadcrumb-->
			<div class="row">
				<div class="col-lg-12">
					<!--<div class="breadcrumb-trail breadcrumbs">
						<ul class="trail-items breadcrumb">
							<li class="trail-item trail-begin"><a href="index.html">Home</a></li>
							<li class="trail-item trail-end active">Checkout</li>
						</ul>
					</div>-->
                    <Breadcrumb :slugs="slug" />
				</div>
			</div>

            <!--page title-->
			<h3 class="custom_blog_title">#Checkout</h3>

            <!--checkout input form-->
			<div class="checkout-wrapp">

                <!--shipping address-->
				<div class="shipping-address-form-wrapp">

					<div class="shipping-address-form  checkout-form">

						<div class="row-col-1 row-col">
							<div class="shipping-address">
								<h3 class="title-form">Shipping Address</h3>
								<p class="form-row form-row-first">
									<label class="text">First name</label>
									<input type="text" class="input-text">
								</p>
								<p class="form-row form-row-last">
									<label class="text">Last name</label>
									<input type="text" class="input-text">
								</p>
								<p class="form-row forn-row-col forn-row-col-1">
									<label class="text">Country</label>
									<select data-placeholder="United Kingdom" class="chosen-select" tabindex="1">
							            <option value="United States">United States</option>
							            <option value="United Kingdom">United Kingdom</option>
							            <option value="Afghanistan">Afghanistan</option>
							            <option value="Aland Islands">Aland Islands</option>
							            <option value="Albania">Albania</option>
							            <option value="Algeria">Algeria</option>
							            <option value="American Samoa">American Samoa</option>
							            <option value="Andorra">Andorra</option>
							            <option value="Angola">Angola</option>
							            <option value="Anguilla">Anguilla</option>
							            <option value="Antarctica">Antarctica</option>
							            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
							            <option value="Argentina">Argentina</option>
							            <option value="Armenia">Armenia</option>
							            <option value="Aruba">Aruba</option>
							            <option value="Australia">Australia</option>
							            <option value="Austria">Austria</option>
							            <option value="Azerbaijan">Azerbaijan</option>
							            <option value="Bahamas">Bahamas</option>
							            <option value="Bahrain">Bahrain</option>
							            <option value="Bangladesh">Bangladesh</option>
							            <option value="Barbados">Barbados</option>
							            <option value="Belarus">Belarus</option>
							            <option value="Belgium">Belgium</option>
							            <option value="Belize">Belize</option>
							            <option value="Benin">Benin</option>
							            <option value="Bermuda">Bermuda</option>
							            <option value="Bhutan">Bhutan</option>
							        </select>
								</p>
								<p class="form-row forn-row-col forn-row-col-2">
									<label class="text">State</label>
									<select data-placeholder="London" class="chosen-select" tabindex="1">
							            <option value="United States">London</option>
							            <option value="United Kingdom">tokyo</option>
							            <option value="Afghanistan">Seoul</option>
							            <option value="Aland Islands">Mexico city</option>
							            <option value="Albania">Mumbai</option>
							            <option value="Algeria">Delhi</option>
							            <option value="American Samoa">New York</option>
							            <option value="Andorra">Jakarta</option>
							            <option value="Angola">Sao Paulo</option>
							            <option value="Anguilla">Osaka</option>
							            <option value="Antarctica">Karachi </option>
							            <option value="Antigua and Barbuda">Matx-cơ-va</option>
							            <option value="Argentina">Toronto </option>
							            <option value="Armenia">Boston </option> 
							        </select>
								</p>
								<p class="form-row forn-row-col forn-row-col-3">
									<label class="text">City</label>
									<select data-placeholder="London" class="chosen-select" tabindex="1">
							            <option value="United States">London</option>
							            <option value="United Kingdom">tokyo</option>
							            <option value="Afghanistan">Seoul</option>
							            <option value="Aland Islands">Mexico city</option>
							            <option value="Albania">Mumbai</option>
							            <option value="Algeria">Delhi</option>
							            <option value="American Samoa">New York</option>
							            <option value="Andorra">Jakarta</option>
							            <option value="Angola">Sao Paulo</option>
							            <option value="Anguilla">Osaka</option>
							            <option value="Antarctica">Karachi </option>
							            <option value="Antigua and Barbuda">Matx-cơ-va</option>
							            <option value="Argentina">Toronto </option>
							            <option value="Armenia">Boston </option> 
							        </select>
							    </p>
								<p class="form-row form-row-first">
									<label class="text">Zip code</label>
									<input type="text" class="input-text">
								</p>
								<p class="form-row form-row-last">
									<label class="text">Address</label>
									<input type="text" class="input-text">
								</p>
							</div>
						</div>

						<div class="row-col-2 row-col">
							<div class="your-order">
								<h3 class="title-form">Your Order</h3>
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

					<a href="#" class="button button-payment">PAYMENT</a>

				</div>

			</div>

		</div>

	</div>
</template>

<script>
import CartItem from '~/components/CartItem.vue'

export default {
    layout: 'products',
    components: {
        CartItem
    },
    data() {
        return {
            slugs: [
                { title: 'Home', url:'/' },
                { title: 'My Cart', url:'/cart' },
                { title: 'Check Out', url:'/checkout', active: true }
            ]
        }
    },
    computed: {
        items: function() {
            return this.$store.getters['cart/items']
        },
        subtotal: function() {
            return this.$store.getters['cart/subtotal']
        }
    }
}
</script>

<style>
</style>