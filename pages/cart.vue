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
                    <div class="main-content-cart main-content">
                        <div class="page-main-content">
                            <div class="shoppingcart-content" v-if="items.length > 0">
                                <div class="col-md-8 col-sm-12">
                                    <div class="col-md-12 col-sm-12">
                                        <CartItem
                                            v-for="item in items"
                                            :key="item.product_code"
                                            :item="item"
                                            @removeClaimedItems="removeClaimedItems"
                                        />
                                    </div>
                                    <div class="col-md-12 col-sm-12" v-if="promo_items_in_cart_count > 0">
                                        <div class="text-center" style="margin-top:50px;">
                                            <h3>You got {{ promo_items_in_cart_count - number_of_claimed_free_items }} free items:</h3>
                                        </div>
                                        <FreeItem	
                                            v-for="item in free_items"	
                                            :key="item.kode_barang"	
                                            :item="item"	
                                            :number_of_claimed_series="number_of_claimed_free_items"	
                                            :disabled="number_of_claimed_free_items >= promo_items_in_cart_count"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12">
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
                                    </div> -->
                                    <div class="cart-wrap-summary">
                                        <div class="cart-total-checkout">
                                            <div class="cart-total-item">
                                                <div>Total Price</div>
                                                <div
                                                    class="cart-total-value"
                                                >{{ subtotal | rupiah }}</div>
                                            </div>
                                            <div class="cart-total-item">
                                                <div>Grand Total</div>
                                                <div
                                                    class="cart-total-value"
                                                >{{ grand_total | rupiah }}</div>
                                            </div>
                                        </div>
                                        <div class="control-cart">
                                            <button
                                                v-if="!userIsAuthorized"
                                                @click="warnSignIn"
                                                class="button button-checkout btn-cart-to-checkout"
                                            >CHECKOUT NOW</button>
                                            <nuxt-link
                                                v-else
                                                :to="`/checkout`"
                                                tag="button"
                                                class="button button-checkout btn-cart-to-checkout"
                                            >CHECKOUT NOW</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shoppingcart-content text-center" v-else >
                                <img src="~/assets/images/svg/empty-cart.svg" style="width:300px;" /><br/><br/>
                                <b><h3>Oops...</h3></b>
                                <!-- Belum ada item didalam shopping cart, silahkan tambahkan item terlebih dahulu. -->
                                You have no items in you shopping cart. Click <nuxt-link to="/" style="color:pink;"> <b>here</b> </nuxt-link> to continue shopping.
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
import FreeItem from '~/components/promo-widgets/minimum-point/FreeItem.vue'

export default {
    layout: 'products',
    components: {
        CartItem,
        FreeItem
    },
    data() {
        return {
            promo_items: ['88015', '88016', '88018', '88019', '88020', '88021', '88023', '88024', '88062', '88088', '88097', '88130', '88132', '88137', '88138', '88169', '88170', '88083'],
            free_items: [   
                {
                    "kode_barang" : "19020",
                    "nama" : "EXTRA WHITENING",
                    "berat" : 5,
                    "poin" : 8,
                    "harga" : 0,
                    "h_hpb" : 0,
                    "diskon" : 0,
                    "harga_diskon" : 0,
                    "qty" : 0,
                    "subtotal" : 0,
                    "grand_total" : 0,
                    "total_weight" : 0,
                    "total_poin" : 0,
                    "image" : "19020",
                    "unit" : "PIECES",
                    "category" : "WHITENING",
                    "picture" : "19020",
                    "note" : "FREE-ITEM",
                    "pic" : "19020",
                    "promo" : 1
                }
            ]
        }
    },
    computed: {
        ...mapGetters('authentication', ['userIsAuthorized']),
        ...mapGetters('cart', [
            'items',
            'subtotal',
            'grand_total',
            'grand_total_poin'
        ]),
        items: {
            get() {
                return this.$store.getters['cart/items']
            },
            set(value) {
                this.$store.dispatch('cart/setItems', value)
            }
        },
        promo_items_in_cart_count: function() {
            const promo_items_in_cart = this.items.filter((item) => {
                return item.product_code == this.promo_items.find(element => element == item.product_code);
            })

            return promo_items_in_cart.reduce((accumulator, item) => accumulator + parseInt(item.qty), 0)
        },
        number_of_claimed_free_items: function() {

            const claimed = this.items.filter((item) => {
                return item.note == "FREE-ITEM"
            })

            return claimed.reduce((accumulator, item) => accumulator + parseInt(item.qty), 0)
        }
    },
    watch: {
        'items': {
            handler(val) {
                this.checkNoRegularItems()
            },
            deep: true
        }
    },
    methods: {
        warnSignIn() {
            this.$swal({
                title: 'Oops!',
                text: 'Please sign in to checkout',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('authentication/auth0Login')
            })
        },
        removeClaimedItems() {
            const claimed_items = this.items.filter((value, index, arr) => {
                return value.note.search("FREE-ITEM") > -1
            })

            claimed_items.forEach(claimed_item => {
                this.items.forEach(cart_item => {
                    if (cart_item.product_code == claimed_item.product_code) {
                        this.$store.dispatch('cart/removeItem', cart_item.product_code)
                    }
                })
            })
        },
        checkNoRegularItems() {
            const normal_items = this.items.filter((value, index, arr) => {
                return value.note.search("FREE-ITEM") < 0
            })

            if (normal_items.length < 1) {
                const claimed_items = this.items.filter((value, index, arr) => {
                    return value.note.search("FREE-ITEM") > -1
                })

                claimed_items.forEach(cart_item => {
                    this.$store.dispatch('cart/removeItem', cart_item.product_code)
                })
            }
        },
        checkPromoGetFree() {	
            let count = 0	
            this.promo_items.forEach((free_item) => {	
                this.items.forEach((cart_item) => {	
                    if (cart_item.product_code == free_item) {	
                        count += cart_item.qty	
                    }	
                })	
            })	
        }
    },
    mounted() {
        this.checkNoRegularItems()
    }
}
</script>

<style>
</style>