<template>
  <li class="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 style-1">
    <div class="product-inner equal-element">
      <!-- <div class="product-top">
        <div class="flash">
          <span class="onnew">
            <span class="text">{{product.promo_caption}}</span>
          </span>
        </div>
        <div class="yith-wcwl-add-to-wishlist">
          <div class="yith-wcwl-add-button">
            <a href="#">Add to Wishlist</a>
          </div>
        </div>
      </div>-->
      <div class="product-thumb">
        <div class="thumb-inner">
          <a href="#">
            <img :src="`${$axios.defaults.baseURL}assets/img/products/${product.pic}.jpg`" alt />
          </a>
        </div>
        <a href="#" class="button quick-wiew-button"></a>
      </div>
      <div class="product-info">
        <h5 class="product-name product_title">
          <a href="#">{{ product.nama }}</a>
        </h5>
        <div class="group-info">
          <!-- <div class="stars-rating">
            <div class="star-rating">
              <span class="star-4"></span>
            </div>
            <div class="count-star">(7)</div>
          </div>-->
          <div class="price" v-if="product.harga_diskon > 0">
            <del>IDR. {{ product.harga }}</del>
            <ins>IDR. {{ product.harga_diskon }}</ins>
          </div>
          <div class="price" v-else>IDR. {{ product.harga }}</div>
        </div>
      </div>
      <div class="loop-form-add-to-cart">
        <form class="cart">
          <div class="single_variation_wrap">
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
          <!-- <div class="variations">
            <div class="variation">
              <label class="variation-label">Capacity:</label>
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
          </div>-->
        </form>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    props: ['product']
}
</script>
