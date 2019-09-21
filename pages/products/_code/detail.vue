<template>
  <!-- main content -->
			<div class="row">

				<!-- sidemain -->
				<div class="content-area content-details full-width col-lg-9 col-md-8 col-sm-12 col-xs-12">
					<div class="site-main">

						<!-- media box -->
						<div class="details-product single-product-galery">
							<div class="details-thumd">
								<div class="image-preview-container image-thick-box image_preview_container">
                                    <img id="img_zoom" :data-zoom-image="`${$axios.defaults.baseURL}assets/img/products/16008.jpg`" :src="`${$axios.defaults.baseURL}assets/img/products/16008.jpg`" alt="">
                                    <a href="#" class="btn-zoom open_qv"><i class="fa fa-search" aria-hidden="true"></i></a>
                                </div>
                                <div class="product_preview image-small">
                                    <div id="thumbnails" class="thumbnails_carousel owl-carousel" data-nav="true" data-autoplay="false" data-dots="false" data-loop="false" data-margin="25" data-responsive='{"0":{"items":3},"480":{"items":3},"600":{"items":3},"1000":{"items":3}}' >
                                        <a href="#" data-image="assets/images/details-item-1.jpg" :data-zoom-image="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" class="active">
                                            <img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" data-large-image="assets/images/details-item-1.jpg" alt="">
                                        </a>
                                        <a href="#" data-image="assets/images/details-item-2.jpg" :data-zoom-image="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`">
                                            <img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" data-large-image="assets/images/details-item-2.jpg" alt="">
                                        </a>
                                        <a href="#" data-image="assets/images/details-item-3.jpg" :data-zoom-image="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`">
                                            <img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" data-large-image="assets/images/details-item-3.jpg" alt="">
                                        </a>
                                        <a href="#" data-image="assets/images/details-item-4.jpg" :data-zoom-image="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`">
                                            <img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" data-large-image="assets/images/details-item-4.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
							</div>
							<div class="details-infor">
								<h1 class="product-title">SERUM ANTI FLEK</h1>
								<!-- <div class="stars-rating">
									<div class="star-rating">
										<span class="star-5"></span>
									</div>
									<div class="count-star">
										(7)
									</div>
								</div> -->
								<div class="availability" style="margin-left:0px;">Product Code:<a href="#">16008</a></div>
								<div class="price">
									<span>IDR. 85.000</span>
								</div>
								<div class="product-details-description">
									<p class="desc">3Pack Tshirt is Crew-neck T-shirts in soft organic cotton jersey. Regular fit.</p>
									<ul>
										<li>100% cotton. Machine wash warm</li>
										<li>Imported</li>
										<li>Art.No. 06-7680</li>
									</ul>
								</div>
								<!-- <div class="variations">
									<div class="attribute attribute_color">
										<div class="color-text text-attribute">
											Color: <span>White/Black/Teal/Brown</span>
										</div>
										<div class="list-color list-item">
											<a href="#" class="color1"></a>
											<a href="#" class="color2"></a>
											<a href="#" class="color3 active"></a>
											<a href="#" class="color4"></a>
										</div>
									</div>
									<div class="attribute attribute_size">
										<div class="size-text text-attribute">
											Size: <span>Please select the size below</span> 
										</div>
										<div class="list-size list-item">
											<a href="#" class="">xs</a>
											<a href="#" class="">s</a>
											<a href="#" class="active">m</a>
											<a href="#" class="">l</a>
											<a href="#" class="">xl</a>
											<a href="#" class="">xxl</a>
										</div>
									</div>
								</div> -->
								<div class="group-button">
									<div class="yith-wcwl-add-to-wishlist">
										<div class="yith-wcwl-add-button">
											<a href="#">Add to Wishlist</a>
										</div>
									</div>
									<!-- <div class="size-chart-wrapp">
										<div class="btn-size-chart">
											<a id="size_chart" href="assets/images/size-chart.jpg" class="fancybox">View Size Chart</a>
										</div>
									</div> -->
									<div class="quantity-add-to-cart">
										<div class="quantity">
											<div class="control">
												<a class="btn-number qtyminus quantity-minus" href="#">-</a>
												<input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4">
												<a href="#" class="btn-number qtyplus quantity-plus">+</a>
											</div>
										</div>
										<button class="single_add_to_cart_button button">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
						
						<!-- details atbs -->
						<div class="tab-details-product">
							<ul class="tab-link">
								<li class="active"><a data-toggle="tab" aria-expanded="true" href="#product-descriptions">Descriptions</a></li>
								<li class=""><a data-toggle="tab" aria-expanded="true" href="#product-guide ">How to use </a></li>
							</ul>
							<div class="tab-container">
								<div id="product-descriptions" class="tab-panel active">
									<p>
										Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit.
									</p>
									<p>
										Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.
									</p>
								</div>
								<div id="product-guide" class="tab-panel">
									<table class="table table-bordered">
                                        <tr>
                                            <td>Size</td>
                                            <td> XS / S / M / L </td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>White/ Black/ Teal/ Brown</td>
                                        </tr>
                                        <tr>
                                            <td>Properties</td>
                                            <td>Colorful Dress</td>
                                        </tr>
                                    </table>
								</div>
							</div>
						</div>

						<!-- reset floading -->
						<div class="reset-floatding"></div>

						<!-- realated product -->
						<div class="related products product-grid">
							<h2 class="product-grid-title">#You may also like</h2>

							<div class="owl-products owl-slick equal-container nav-center"  
							data-slick ='{"autoplay":false, "autoplaySpeed":1000, "arrows":true, "dots":false, "infinite":true, "speed":800, "rows":1}' data-responsive='[{"breakpoint":"2000","settings":{"slidesToShow":4}},{"breakpoint":"1200","settings":{"slidesToShow":3}},{"breakpoint":"992","settings":{"slidesToShow":2}},{"breakpoint":"400","settings":{"slidesToShow":1}}]'>
								
								<div class="product-item default-layout product-type-variable">
									<div class="product-inner equal-element">
										<div class="product-top">
											<div class="flash">
												<span class="onnew">
													<span class="text">
														new
													</span>
												</span>
											</div>
											<div class="yith-wcwl-add-to-wishlist">
												<div class="yith-wcwl-add-button">
													<a href="#">Add to Wishlist</a>
												</div>
											</div>
										</div>
										<div class="product-thumb">
											<div class="thumb-inner">
												<a href="#">
													<img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" alt="">
												</a>
											</div>
											<a href="#" class="button quick-wiew-button">Quick View</a>
										</div>
										<div class="product-info">
											<h5 class="product-name product_title">
												<a href="#">Beard Tumbleweed Oil</a>
											</h5>
											<div class="group-info">
												<div class="stars-rating">
													<div class="star-rating">
														<span class="star-3"></span>
													</div>
													<div class="count-star">
														(3)
													</div>
												</div>
												<div class="price">
													<del>
														€65
													</del>
													<ins>
														€45
													</ins>
												</div>
											</div>
										</div>
										<div class="loop-form-add-to-cart">
											<form class="cart">
												<div class="single_variation_wrap">
													<div class="quantity">
														<div class="control">
															<a class="btn-number qtyminus quantity-minus" href="#">-</a>
															<input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4">
															<a href="#" class="btn-number qtyplus quantity-plus">+</a>
														</div>
													</div>
													<button class="single_add_to_cart_button button">Add to cart</button>
												</div>
												<div class="variations">
													<div class="variation">
														<label class="variation-label">
															Capacity:
														</label>
														<div class="variation-value">
															<a href="#" class="change-value text">
																<span>10ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>20ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>50ml</span>
															</a>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="product-item default-layout product-type-variable">
									<div class="product-inner equal-element">
										<div class="product-top">
											<div class="flash">
												<span class="onnew">
													<span class="text">
														new
													</span>
												</span>
											</div>
											<div class="yith-wcwl-add-to-wishlist">
												<div class="yith-wcwl-add-button">
													<a href="#">Add to Wishlist</a>
												</div>
											</div>
										</div>
										<div class="product-thumb">
											<div class="thumb-inner">
												<a href="#">
													<img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" alt="">
												</a>
											</div>
											<a href="#" class="button quick-wiew-button">Quick View</a>
										</div>
										<div class="product-info">
											<h5 class="product-name product_title">
												<a href="#">Beard Tumbleweed Oil</a>
											</h5>
											<div class="group-info">
												<div class="stars-rating">
													<div class="star-rating">
														<span class="star-3"></span>
													</div>
													<div class="count-star">
														(3)
													</div>
												</div>
												<div class="price">
													<del>
														€65
													</del>
													<ins>
														€45
													</ins>
												</div>
											</div>
										</div>
										<div class="loop-form-add-to-cart">
											<form class="cart">
												<div class="single_variation_wrap">
													<div class="quantity">
														<div class="control">
															<a class="btn-number qtyminus quantity-minus" href="#">-</a>
															<input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4">
															<a href="#" class="btn-number qtyplus quantity-plus">+</a>
														</div>
													</div>
													<button class="single_add_to_cart_button button">Add to cart</button>
												</div>
												<div class="variations">
													<div class="variation">
														<label class="variation-label">
															Capacity:
														</label>
														<div class="variation-value">
															<a href="#" class="change-value text">
																<span>10ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>20ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>50ml</span>
															</a>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="product-item default-layout product-type-variable">
									<div class="product-inner equal-element">
										<div class="product-top">
											<div class="flash">
												<span class="onnew">
													<span class="text">
														new
													</span>
												</span>
											</div>
											<div class="yith-wcwl-add-to-wishlist">
												<div class="yith-wcwl-add-button">
													<a href="#">Add to Wishlist</a>
												</div>
											</div>
										</div>
										<div class="product-thumb">
											<div class="thumb-inner">
												<a href="#">
													<img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" alt="">
												</a>
											</div>
											<a href="#" class="button quick-wiew-button">Quick View</a>
										</div>
										<div class="product-info">
											<h5 class="product-name product_title">
												<a href="#">Beard Tumbleweed Oil</a>
											</h5>
											<div class="group-info">
												<div class="stars-rating">
													<div class="star-rating">
														<span class="star-3"></span>
													</div>
													<div class="count-star">
														(3)
													</div>
												</div>
												<div class="price">
													<del>
														€65
													</del>
													<ins>
														€45
													</ins>
												</div>
											</div>
										</div>
										<div class="loop-form-add-to-cart">
											<form class="cart">
												<div class="single_variation_wrap">
													<div class="quantity">
														<div class="control">
															<a class="btn-number qtyminus quantity-minus" href="#">-</a>
															<input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4">
															<a href="#" class="btn-number qtyplus quantity-plus">+</a>
														</div>
													</div>
													<button class="single_add_to_cart_button button">Add to cart</button>
												</div>
												<div class="variations">
													<div class="variation">
														<label class="variation-label">
															Capacity:
														</label>
														<div class="variation-value">
															<a href="#" class="change-value text">
																<span>10ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>20ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>50ml</span>
															</a>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="product-item default-layout product-type-variable">
									<div class="product-inner equal-element">
										<div class="product-top">
											<div class="flash">
												<span class="onnew">
													<span class="text">
														new
													</span>
												</span>
											</div>
											<div class="yith-wcwl-add-to-wishlist">
												<div class="yith-wcwl-add-button">
													<a href="#">Add to Wishlist</a>
												</div>
											</div>
										</div>
										<div class="product-thumb">
											<div class="thumb-inner">
												<a href="#">
													<img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/16008.jpg`" alt="">
												</a>
											</div>
											<a href="#" class="button quick-wiew-button">Quick View</a>
										</div>
										<div class="product-info">
											<h5 class="product-name product_title">
												<a href="#">Beard Tumbleweed Oil</a>
											</h5>
											<div class="group-info">
												<div class="stars-rating">
													<div class="star-rating">
														<span class="star-3"></span>
													</div>
													<div class="count-star">
														(3)
													</div>
												</div>
												<div class="price">
													<del>
														€65
													</del>
													<ins>
														€45
													</ins>
												</div>
											</div>
										</div>
										<div class="loop-form-add-to-cart">
											<form class="cart">
												<div class="single_variation_wrap">
													<div class="quantity">
														<div class="control">
															<a class="btn-number qtyminus quantity-minus" href="#">-</a>
															<input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4">
															<a href="#" class="btn-number qtyplus quantity-plus">+</a>
														</div>
													</div>
													<button class="single_add_to_cart_button button">Add to cart</button>
												</div>
												<div class="variations">
													<div class="variation">
														<label class="variation-label">
															Capacity:
														</label>
														<div class="variation-value">
															<a href="#" class="change-value text">
																<span>10ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>20ml</span>
															</a>
															<a href="#" class="change-value text">
																<span>50ml</span>
															</a>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<!-- full width layout have no sidebar-->

			</div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'product',
    components: {
        // SlideBanner: () => import('~/components/SlideBanner'),
        // Product: () => import('~/components/Product'),
        // Paginate: () => import('vuejs-paginate')
    },
    data() {
        return {
            dataLoaded: false,
            code: this.$route.params.code,
            publicPath: process.env.BASE_URL
        }
    },
    head() {
        return {
            bodyAttrs: {
                class: this.dataLoaded
                    ? 'home-page home page page-id-4 page-template page-template-template-homepage page-template-template-homepage-php'
                    : ''
            }
        }
    },
    watch: {
      $route (to, from){
        // this.pagination.offset = (this.$route.query.page * 20) - 20
        // this.category = this.$route.params.category

        // this.getProducts()
      }
    },
    computed : {
    //   productTitle: function() {
    //     return this.category.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace(" ", "");
    //   }
    },
    methods: {
        // getProducts: function() {
        //     this.$axios
        //       .get(`/products/${this.category}/${this.pagination.offset}/${this.pagination.limit}`)
        //       .then((response) => {
        //           if (response.data.data != 0) {
        //               this.pagination.pageCount = response.data.rowcount / 20
        //               this.products = response.data.data
        //           }
        //       })
        // },
        // redirectPageNumber : function(pageNum) {
        //     this.$router.push(
        //     {
        //       path: `/products/${this.category}?page=${this.pagination.currentPage}`, 
        //       query: {
        //         page: pageNum
        //       }
        //     }
        //   )
        // }
    },
    created() {
        // this.getProducts()
    }
}
</script>

<style>
  .custom_blog_title {
    text-transform:captialize;
  }
</style>