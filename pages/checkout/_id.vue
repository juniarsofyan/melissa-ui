<template>
    <div>
        <hr>
        <div class="main-content-checkout">
            <div class="container">
                <!--breadcrumb-->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-trail breadcrumbs" style="text-align:center;">
                            <ul class="trail-items breadcrumb" >
                                <li class="trail-item trail-end " style="font-size:30px;">
                                   <nuxt-link :to="'/checkout/'+ 1 +'/'">Checkout </nuxt-link> 
                                </li>
                                <li class="trail-item trail-end " style="font-size:30px;">
                                   <nuxt-link :to="'payment'">Payment </nuxt-link>
                                </li>
                                <li class="trail-item trail-end active" style="font-size:30px;">
                                    <nuxt-link :to="'status'">Status </nuxt-link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-child />
    </div>
</template>

<script>
    // import CartItem from '~/components/CartItem.vue'

    export default {
        layout: 'products',
        // components: {
        //     CartItem
        // },
        // data() {
        //     return {
        //         slugs: [
        //             { title: 'Home', url:'/' },
        //             { title: 'My Cart', url:'/cart' },
        //             { title: 'Check Out', url:'/checkout', active: true }
        //         ]
        //     }
        // },
        // computed: {
        //     items: function() {
        //         return this.$store.getters['cart/items']
        //     },
        //     subtotal: function() {
        //         return this.$store.getters['cart/subtotal']
        //     }
        // }
    }
</script>