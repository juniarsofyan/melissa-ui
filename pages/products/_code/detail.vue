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
              <img
                id="img_zoom"
                :data-zoom-image="`${$axios.defaults.baseURL}assets/img/products/16008.jpg`"
                :src="`${$axios.defaults.baseURL}assets/img/products/16008.jpg`"
                alt
              />
            </div>
            <div class="product_preview image-small"></div>
          </div>
          <div class="details-infor">
            <h1 class="product-title">SERUM ANTI FLEK</h1>
            <div class="availability" style="margin-left:0px;">
              Product Code:
              <a href="#">16008</a>
            </div>
            <div class="price">
              <span>IDR. 85.000</span>
            </div>
            <div class="product-details-description">
              <p
                class="desc"
              >3Pack Tshirt is Crew-neck T-shirts in soft organic cotton jersey. Regular fit.</p>
              <ul>
                <li>100% cotton. Machine wash warm</li>
                <li>Imported</li>
                <li>Art.No. 06-7680</li>
              </ul>
            </div>
            <div class="group-button">
              <div class="yith-wcwl-add-to-wishlist">
                <div class="yith-wcwl-add-button">
                  <a href="#">Add to Wishlist</a>
                </div>
              </div>
              <div class="quantity-add-to-cart">
                <div class="quantity">
                  <div class="control">
                    <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                    <input
                      type="text"
                      data-step="1"
                      data-min="0"
                      value="1"
                      title="Qty"
                      class="input-qty qty"
                      size="4"
                    />
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
            <li class="active">
              <a data-toggle="tab" aria-expanded="true" href="#product-descriptions">Descriptions</a>
            </li>
            <li class>
              <a data-toggle="tab" aria-expanded="true" href="#product-guide ">How to use</a>
            </li>
          </ul>
          <div class="tab-container">
            <div id="product-descriptions" class="tab-panel active">
              <p>Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit.</p>
              <p>Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.</p>
            </div>
            <div id="product-guide" class="tab-panel">
              <table class="table table-bordered">
                <tr>
                  <td>Size</td>
                  <td>XS / S / M / L</td>
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

        <RelatedProducts />
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
    RelatedProducts: () => import('~/components/RelatedProducts')
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
    $route(to, from) {
      // this.pagination.offset = (this.$route.query.page * 20) - 20
      // this.category = this.$route.params.category
      // this.getProducts()
    }
  },
  computed: {
    //   productTitle: function() {
    //     return this.category.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace(" ", "");
    //   }
  },
  methods: {
    getProductDetail(product_code) {
      axios
        .post(
          this.$store.getters.api_url + `promo/product/${product_code}/detail`
        )
        .then((response) => {
          if (response.data.data != 0) {
            // this.product = response.data.data
            // this.getRelatedProducts()
            // this.getRelatedPromoItems()
            // this.getDiscountedItem()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  created() {
    // this.getProducts()
  }
}
</script>

<style>
.custom_blog_title {
  text-transform: captialize;
}
</style>