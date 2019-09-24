<template>
    <div class="site-content">
        <main class="site-main main-container no-sidebar">
            <div class="container">
                <!-- breadcrumb -->
                <div class="breadcrumb-trail breadcrumbs">
                    <ul class="trail-items breadcrumb">
                        <li class="trail-item trail-begin">
                            <a href>
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="trail-item trail-end active">
                            <span>My Cart</span>
                        </li>
                    </ul>
                </div>

                <!-- main content -->
                <div class="row">
                    <div class="main-content-cart main-content col-sm-12">
                        <h3 class="custom_blog_title">#MyCart</h3>

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
                                            <CartItem
                                                v-for="item in items"
                                                :key="item.product_code"
                                                :item="item"
                                            />
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
                                                    <div class="order-total">
                                                        <span class="title">Total Price:</span>
                                                        <span
                                                            class="total-price"
                                                        >{{ subtotal | rupiah }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <hr />
                                            <tr class="grand total">
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
                                                    <div class="order-total">
                                                        <span class="title">Grand Total :</span>
                                                        <span
                                                            class="total-price"
                                                        >{{ subtotal | rupiah }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                                <div class="control-cart">
                                    <nuxt-link
                                        :to="`/`"
                                        tag="button"
                                        class="button btn-continue-shopping"
                                    >CONTINUE SHOPPING</nuxt-link>

                                    <nuxt-link
                                        :to="`/checkout`"
                                        tag="button"
                                        class="button btn-cart-to-checkout"
                                    >CHECKOUT NOW</nuxt-link>
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
import CartItem from '~/components/CartItem.vue'

export default {
    layout: 'products',
    components: {
        CartItem
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