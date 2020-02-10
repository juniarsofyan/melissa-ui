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
                                        />
                                    </div>
                                    <div class="col-md-12 col-sm-12" v-if="showMinimumPromoItems">
                                        <div class="text-center" style="margin-top:50px;">
                                            <h3>Yeay! You got promo for these items:</h3>
                                        </div>
                                        <DiscountItem
                                            v-for="item in discount_items"
                                            :key="item.kode_barang"
                                            :item="item"
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
import DiscountItem from '~/components/promo-widgets/minimum-point/DiscountItem.vue'
import minimumpoint from '~/plugins/promos/minimumpoint'

export default {
    layout: 'products',
    components: {
        CartItem,
        DiscountItem
    },
    data() {
        return {
            showMinimumPromoItems: false,
            discount_items: [
                {
                    "kode_barang": "05004",
                    "nama": "LIP CREAM BERRY VIOLET",
                    "berat": 31.5,
                    "poin": 0,
                    "harga": 134000,
                    "h_hpb": 44545,
                    "diskon": 64,
                    "harga_diskon": 85000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "05004",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "05004",
                    "note": "MINIMUM-POINT-GET-DISCOUNT",
                    "pic": "05004",
                    "promo": 1
                },
                {
                    "kode_barang": "05005",
                    "nama": "LIP CREAM MAUVE QUINN",
                    "berat": 31.5,
                    "poin": 0,
                    "harga": 134000,
                    "h_hpb": 44545,
                    "diskon": 64,
                    "harga_diskon": 85000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "05005",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "05005",
                    "note": "MINIMUM-POINT-GET-DISCOUNT",
                    "pic": "05005",
                    "promo": 1
                },
                {
                    "kode_barang": "05007",
                    "nama": "LIP CREAM PEACH ELORA",
                    "berat": 31.5,
                    "poin": 0,
                    "harga": 134000,
                    "h_hpb": 44545,
                    "diskon": 64,
                    "harga_diskon": 85000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "05007",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "05007",
                    "note": "MINIMUM-POINT-GET-DISCOUNT",
                    "pic": "05007",
                    "promo": 1
                },
                {
                    "kode_barang": "05010",
                    "nama": "LIP CREAM ROSY CIBRINA",
                    "berat": 31.5,
                    "poin": 0,
                    "harga": 134000,
                    "h_hpb": 44545,
                    "diskon": 64,
                    "harga_diskon": 85000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "05010",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "05010",
                    "note": "MINIMUM-POINT-GET-DISCOUNT",
                    "pic": "05010",
                    "promo": 1
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
        }
    },
    watch: {
        'items': {
            handler(val) {
                this.checkPromoMinimumPoint()
                this.checkNoRegularItems()
            },
            deep: true
        },
        'showMinimumPromoItems': {
            handler(val) {
                if (val==false) {
                    this.removeClaimedItems()
                }
            }
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
        checkPromoMinimumPoint() {
            if (this.grand_total_poin > 35) {
                const accesskey = JSON.parse(localStorage.getItem('accesskey'))

                let transaction = {
                    no_member: accesskey.no_member
                }

                const get_promo = minimumpoint.check(transaction)

                get_promo.then(function(promoAllowed) {
                    this.showMinimumPromoItems = promoAllowed
                }.bind(this))
            } else {
                this.showMinimumPromoItems = false
            }
        },
        removeClaimedItems() {
            const claimed_items = this.items.filter((value, index, arr) => {
                return value.note.search("MINIMUM-POINT-GET-DISCOUNT") > -1
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
                return value.note.search("MINIMUM-POINT-GET-DISCOUNT") < 0
            })

            if (normal_items.length < 1) {
                const claimed_items = this.items.filter((value, index, arr) => {
                    return value.note.search("MINIMUM-POINT-GET-DISCOUNT") > -1
                })

                claimed_items.forEach(cart_item => {
                    this.$store.dispatch('cart/removeItem', cart_item.product_code)
                })
            }
        }
    },
    mounted() {
        this.checkPromoMinimumPoint()
        this.checkNoRegularItems()
    }
}
</script>

<style>
</style>