<template>
    <div class="site-content">
        <main class="site-main main-container no-sidebar">
            <div class="container">
                <!-- breadcrumb -->
                <div class="breadcrumb-trail breadcrumbs">
                    <ul class="trail-items breadcrumb">
                        <li class="trail-item trail-begin active">
                            <span>My Cart</span>
                        </li>
                        <li class="trail-item trail-end">
                            <span>Checkout</span>
                        </li>
                        <li class="trail-item trail-end">
                            <span>Payment</span>
                        </li>
                    </ul>
                </div>

                <!-- main content -->
                <div class="row">
                    <div class="main-content-cart main-content col-sm-12">
                        <div class="page-main-content">
                            <div class="shoppingcart-content">
                                <form action="shoppingcart.html" class="cart-form">
                                    <table class="shop_table">
                                        <thead>
                                            <tr>
                                                <th class="product-remove"></th>
                                                <th class="product-thumbnail"></th>
                                                <th class="product-name"></th>
                                                <th class="product-price"></th>
                                                <th class="product-quantity"></th>
                                                <th class="product-subtotal"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <CartItem v-for="item in items" :key="item.product_code" :item="item" />
                                            <tr>
                                                <td class="actions">
                                                    <!-- <div class="coupon">
                                                        <label class="coupon_code">Coupon Code:</label>
                                                        <div class="coupon-wrapp">
                                                            <input
                                                                type="text"
                                                                class="input-text"
                                                                placeholder="Promotion code here"
                                                            />
                                                            <a href="#" class="button"></a>
                                                        </div>
                                                    </div>-->
                                                    <table style="width:0; border:none; float:right;">
                                                        <tr >
                                                            <td style="text-align:right !important">
                                                                <span class="title"><h5><b>Total Price :</b></h5></span>
                                                            </td>
                                                            <td style="text-align:right !important">
                                                                <span
                                                                    class="total-price "><h4><b>{{ subtotal | rupiah }}</b></h4></span>
                                                            </td>
                                                        </tr>
                                                        <!-- <tr >
                                                            <td style="text-align:right !important">
                                                                <span class="title"><h5><b>Save :</b></h5></span>
                                                            </td>
                                                            <td style="text-align:right !important">
                                                                <span class="total-price"><h4><b>IDR 10.000</b></h4></span>
                                                            </td>
                                                        </tr> -->
                                                        <tr>
                                                            <td style="text-align:right !important">
                                                                <span class="title"><h5><b>Grand Total :</b></h5></span>
                                                            </td>
                                                            <td style="text-align:right !important">
                                                                <span
                                                                    class="total-price"><h4><b>{{ subtotal | rupiah }}</b></h4></span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    
                                                </td>
                                            </tr>
                                           
                                           
                                        </tbody>
                                    </table>
                                </form>
                                <div class="control-cart">
                                    <nuxt-link :to="`/`" tag="button" class="button btn-continue-shopping">
                                        CONTINUE SHOPPING
                                    </nuxt-link>

                                    <button v-if="!userIsAuthorized" @click="warnSignIn" class="button btn-cart-to-checkout">
                                        CHECKOUT NOW
                                    </button>
                                    <nuxt-link v-else :to="`/checkout`" tag="button" class="button btn-cart-to-checkout">
                                        CHECKOUT NOW
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- full width layout have no sidebar-->
            </div>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '~/components/CartItem.vue'

export default {
    layout: 'products',
    components: {
        CartItem
    },
    computed: {
        ...mapGetters("authentication", ['userIsAuthorized']),
        items: function () {
            return this.$store.getters['cart/items']
        },
        subtotal: function () {
            return this.$store.getters['cart/subtotal']
        }
    },
    methods: {
        warnSignIn() {
            this.$swal({
                title: "Oops!",
                text: "Please sign in to continue",
                type: "warning",
            })
        }
    }
        
}
</script>

<style>
</style>