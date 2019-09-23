<template>
    <div>
        <header class="header style1">
            <div class="container">

                <!-- main header -->
                <div class="main-header">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6 col-md-6 col-xs-7 col-ts-12 header-element">
                            <div class="turan-socials social-header">
                                <div class="socials">
                                    <a href="https://www.facebook.com/bellezkincare.natural/" class="social-item">
                                        <i class="fa fa-facebook-square"></i>
                                    </a>
                                    <a href="https://www.instagram.com/bellezkin/" class="social-item">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCE0Hte0fUMeWhGrVn5zgwRQ" class="social-item">
                                        <i class="fa fa-youtube-square"></i>
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="header-language">
                                <div class="turan-language turan-dropdown">
                                    <a href="#" class="active language-toggle" data-turan="turan-dropdown">
                                        <span>French (EUR)</span>
                                    </a>
                                    <ul class="turan-submenu">
                                        <li class="switcher-option">
                                            <a href="#"><span>English (USD)</span></a>
                                        </li>
                                        <li class="switcher-option">
                                            <a href="#"><span>Japanese (JPY)</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6 col-xs-5 col-ts-12">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="~/assets/images/logo.png" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-12 col-xs-12 col-ts-12">
                            <div class="header-control">

                                <div class="block-minicart turan-mini-cart block-header turan-dropdown">
                                    <a href="javascript:void(0);" class="shopcart-icon"
                                        data-turan="turan-dropdown">Cart<span class="count">{{ cart_count }}</span></a>
                                    <div class="shopcart-description turan-submenu">
                                        <div class="content-wrap" v-if="items.length>0">
                                            <h3 class="title">Shopping Cart</h3>
                                            <ul class="minicart-items">
                                                <li class="product-cart mini_cart_item" v-for="item in items" :key="item.product_code">
                                                    <nuxt-link :to="`/products/${item.product_code}/detail`" tag="a" class="product-media">
                                                        <img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/${item.picture}.jpg`" alt="">
                                                    </nuxt-link>
                                                    <div class="product-details">
                                                        <h5 class="product-name">
                                                            <nuxt-link :to="`/products/${item.product_code}/detail`" tag="a">
                                                                {{ item.product_name }}
                                                            </nuxt-link>
                                                        </h5>
                                                        <div class="variations">
                                                            <span class="attribute_color">
                                                                <nuxt-link :to="`/products/${item.category}`" tag="a">
                                                                    {{ item.category }}
                                                                </nuxt-link>
                                                            </span>
                                                            <!-- ,<span class="attribute_size"><a href="#">300ml</a></span> -->
                                                        </div>
                                                        <span class="product-price"><span
                                                                class="price"><span>IDR. {{ item.price }}</span></span></span>
                                                        <span class="product-quantity"> x {{ item.qty }}</span>
                                                        <div class="product-remove">
                                                            <span @click="removeItem(item.product_code)">
                                                                <i class="fa fa-trash-o"
                                                                    aria-hidden="true"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <!-- <li class="product-cart mini_cart_item">
                                                    <a href="#" class="product-media">
                                                        <img src="~/assets/images/item-minicart-2.jpg" alt="">
                                                    </a>
                                                    <div class="product-details">
                                                        <h5 class="product-name"><a href="#">Soap Grooming Solutions</a>
                                                        </h5>
                                                        <div class="variations">
                                                            <span class="attribute_color"><a href="#">Black</a></span>,
                                                            <span class="attribute_size"><a href="#">300ml</a></span>
                                                        </div>
                                                        <span class="product-price"><span
                                                                class="price"><span>€45</span></span>
                                                        </span>
                                                        <span class="product-quantity"> x 1</span>
                                                        <div class="product-remove">
                                                            <a href=""><i class="fa fa-trash-o"
                                                                    aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="product-cart mini_cart_item">
                                                    <a href="#" class="product-media">
                                                        <img src="~/assets/images/item-minicart-3.jpg" alt="">
                                                    </a>
                                                    <div class="product-details">
                                                        <h5 class="product-name"><a href="#">Grooming Solutions Soap</a>
                                                        </h5>
                                                        <div class="variations">
                                                            <span class="attribute_color"><a href="#">Black</a></span>,
                                                            <span class="attribute_size"><a href="#">300ml</a></span>
                                                        </div>
                                                        <span class="product-price"><span
                                                                class="price"><span>€45</span></span></span>
                                                        <span class="product-quantity"> x 1</span>
                                                        <div class="product-remove">
                                                            <a href=""><i class="fa fa-trash-o"
                                                                    aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li> -->
                                            </ul>
                                            <div class="subtotal">
                                                <span class="total-title">Subtotal: </span><span
                                                    class="total-price"><span class="Price-amount">IDR. {{ subtotal }}</span></span>
                                            </div>
                                            <div class="actions">
                                                <a class="button button-viewcart" href="shoppingcart.html"><span>View
                                                        Bag</span></a>
                                                <a href="checkout.html"
                                                    class="button button-checkout"><span>Checkout</span></a>
                                            </div>
                                        </div>
                                        <div class="content-wrap" v-else>
                                            <h3 class="title">No item available</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="block-search block-header turan-dropdown">
                                    <a href="javascript:void(0);" class="popup-live-search-button"
                                        data-turan="turan-dropdown">
                                        <span class="icon-search">

                                        </span>
                                    </a>
                                    <form class="form-search turan-submenu">
                                        <h4 class="title-search">Store Search</h4>
                                        <div class="form-content">
                                            <div class="inner">
                                                <input type="text" class="input" placeholder="Your search here">
                                                <button class="btn-search" type="submit">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div class="block-account block-header turan-dropdown">
                                    <a href="javascript:void(0);" data-turan="turan-dropdown">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                    </a>
                                    <div class="header-account turan-submenu">
                                        <div class="header-user-form-tabs">
                                            <ul class="tab-link">
                                                <li class="active">
                                                    <a data-toggle="tab" aria-expanded="true"
                                                        href="#header-tab-login">Login</a>
                                                </li>
                                                <li>
                                                    <a data-toggle="tab" aria-expanded="true"
                                                        href="#header-tab-rigister">Register</a>
                                                </li>
                                            </ul>
                                            <div class="tab-container">
                                                <div id="header-tab-login" class="tab-panel active">
                                                    <form method="post" class="login form-login">
                                                        <p class="form-row form-row-wide">
                                                            <input type="email" placeholder="Email" class="input-text">
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <input type="password" class="input-text"
                                                                placeholder="Password">
                                                        </p>
                                                        <p class="form-row">
                                                            <label class="form-checkbox">
                                                                <input type="checkbox"
                                                                    class="input-checkbox"><span>Remember me</span>
                                                            </label>
                                                            <input type="submit" class="button" value="Login">
                                                        </p>
                                                        <p class="lost_password">
                                                            <a href="#">Lost your password?</a>
                                                        </p>
                                                    </form>
                                                </div>
                                                <div id="header-tab-rigister" class="tab-panel">
                                                    <form method="post" class="register form-register">
                                                        <p class="form-row form-row-wide">
                                                            <input type="email" placeholder="Email" class="input-text">
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <input type="password" class="input-text"
                                                                placeholder="Password">
                                                        </p>
                                                        <p class="form-row">
                                                            <input type="submit" class="button" value="Register">
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a class="menu-bar mobile-navigation" href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /main header -->

                <!-- header nav -->
                <div class="header-nav main-menu-wapper">
                    <div class="container-wapper">
                        <ul class="clone-main-menu turan-nav main-menu" id="menu-main-menu">
                            <nuxt-link to="/" tag="li" class="menu-item">
                                <a href="#" class="kt-item-title" title="Shop">Home</a>
                            </nuxt-link>
                            <nuxt-link to="/products/brightening" tag="li" class="menu-item">
                                <a href="#" class="kt-item-title" title="Brightening">Brightening</a>
                            </nuxt-link>
                            <nuxt-link to="/products/purify" tag="li" class="menu-item">
                                <a href="#" class="kt-item-title" title="Purify">Purify</a>
                            </nuxt-link>
                            <nuxt-link to="/products/decorative" tag="li" class="menu-item">
                                <a href="#" class="kt-item-title" title="Decorative">Decorative</a>
                            </nuxt-link>
                            <nuxt-link to="/products/extra care" tag="li" class="menu-item">
                                <a href="#" class="kt-item-title" title="Extra Care">Extra Care</a>
                            </nuxt-link>
                            <nuxt-link to="/products/promo" tag="li" class="menu-item">
                                <a href="#" class="kt-item-title" title="Promo">Promo</a>
                            </nuxt-link>
                        </ul>
                    </div>
                </div>
                <!-- header nav -->

            </div>
        </header>
    </div>
</template>

<script>
export default {
    computed: {
        cart_count: function() {
            return this.$store.getters['cart/count']
        },
        items: function() {
            return this.$store.getters['cart/items']
        },
        subtotal: function() {
            return this.$store.getters['cart/subtotal']
        }
    },
    methods: {
        removeItem: function(product_code) {
            this.$store.dispatch('cart/removeItem', product_code)
        }
    }
}
</script>