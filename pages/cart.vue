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
                                            <h3>Yeay! You got discount for these items:</h3>
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
                    "kode_barang": "01001",
                    "nama": "ACNE GEL",
                    "berat": 15.75,
                    "poin": 0,
                    "harga": 72000,
                    "h_hpb": 20000,
                    "diskon": 70,
                    "harga_diskon": 50000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "01001",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "01001",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "01001",
                    "promo": 1
                },
                {
                    "kode_barang": "07002",
                    "nama": "RADIANCE BB CREAM BEIGE",
                    "berat": 63,
                    "poin": 0,
                    "harga": 246000,
                    "h_hpb": 56364,
                    "diskon": 75,
                    "harga_diskon": 184000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "07002",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "07002",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "07002",
                    "promo": 1
                },
                {
                    "kode_barang": "08001",
                    "nama": "EYE BAG GEL",
                    "berat": 21,
                    "poin": 0,
                    "harga": 91000,
                    "h_hpb": 29091,
                    "diskon": 65,
                    "harga_diskon": 59000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "08001",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "08001",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "08001",
                    "promo": 1
                },
                {
                    "kode_barang": "09001",
                    "nama": "FOOT CREAM",
                    "berat": 52.5,
                    "poin": 0,
                    "harga": 152000,
                    "h_hpb": 69091,
                    "diskon": 50,
                    "harga_diskon": 76000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "09001",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "09001",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "09001",
                    "promo": 1
                },
                {
                    "kode_barang": "10001",
                    "nama": "GOLD MASK",
                    "berat": 73.5,
                    "poin": 0,
                    "harga": 223000,
                    "h_hpb": 81818,
                    "diskon": 60,
                    "harga_diskon": 133000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "10001",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "10001",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "10001",
                    "promo": 1
                },
                {
                    "kode_barang": "10002",
                    "nama": "KIWI MASK",
                    "berat": 73.5,
                    "poin": 0,
                    "harga": 186000,
                    "h_hpb": 68182,
                    "diskon": 60,
                    "harga_diskon": 111000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "10002",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "10002",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "10002",
                    "promo": 1
                },
                {
                    "kode_barang": "10003",
                    "nama": "APPLE MASK",
                    "berat": 73.5,
                    "poin": 0,
                    "harga": 186000,
                    "h_hpb": 68182,
                    "diskon": 60,
                    "harga_diskon": 111000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "10003",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "10003",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "10003",
                    "promo": 1
                },
                {
                    "kode_barang": "10004",
                    "nama": "MINI GOLD MASK",
                    "berat": 42,
                    "poin": 0,
                    "harga": 112000,
                    "h_hpb": 25455,
                    "diskon": 75,
                    "harga_diskon": 84000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "10004",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "10004",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "10004",
                    "promo": 1
                },
                {
                    "kode_barang": "12002",
                    "nama": "LIGHTENING NIGHT LOTION",
                    "berat": 147,
                    "poin": 0,
                    "harga": 143000,
                    "h_hpb": 39091,
                    "diskon": 70,
                    "harga_diskon": 100000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "12002",
                    "unit": "PIECES",
                    "category": "WHITENING",
                    "picture": "12002",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "12002",
                    "promo": 1
                },
                {
                    "kode_barang": "12003",
                    "nama": "MINI EXTRA WHITENING LOTION",
                    "berat": 36.75,
                    "poin": 0,
                    "harga": 108000,
                    "h_hpb": 34545,
                    "diskon": 65,
                    "harga_diskon": 70000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "12003",
                    "unit": "PIECES",
                    "category": "WHITENING",
                    "picture": "12003",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "12003",
                    "promo": 1
                },
                {
                    "kode_barang": "14001",
                    "nama": "NATURAL LOOSE POWDER ACNE",
                    "berat": 68.25,
                    "poin": 0,
                    "harga": 138000,
                    "h_hpb": 44545,
                    "diskon": 65,
                    "harga_diskon": 89000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "14001",
                    "unit": "PIECES",
                    "category": "PURIFYING",
                    "picture": "14001",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "14001",
                    "promo": 1
                },
                {
                    "kode_barang": "14002",
                    "nama": "NATURAL LOOSE POWDER NORMAL",
                    "berat": 68.25,
                    "poin": 0,
                    "harga": 123000,
                    "h_hpb": 40000,
                    "diskon": 65,
                    "harga_diskon": 79000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "14002",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "14002",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "14002",
                    "promo": 1
                },
                {
                    "kode_barang": "15001",
                    "nama": "NECK CREAM",
                    "berat": 36.75,
                    "poin": 0,
                    "harga": 98000,
                    "h_hpb": 31818,
                    "diskon": 65,
                    "harga_diskon": 63000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "15001",
                    "unit": "PIECES",
                    "category": "EXTRA CARE",
                    "picture": "15001",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "15001",
                    "promo": 1
                },
                {
                    "kode_barang": "16006",
                    "nama": "PURIFYING NIGHT CREAM ACNE MILD",
                    "berat": 31.5,
                    "poin": 0,
                    "harga": 114000,
                    "h_hpb": 31818,
                    "diskon": 70,
                    "harga_diskon": 79000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "16006",
                    "unit": "PIECES",
                    "category": "PURIFYING",
                    "picture": "16006",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "16006",
                    "promo": 1
                },
                {
                    "kode_barang": "19004",
                    "nama": "WHITE NIGHT CREAM FLAWLESS",
                    "berat": 36.75,
                    "poin": 0,
                    "harga": 107000,
                    "h_hpb": 34545,
                    "diskon": 65,
                    "harga_diskon": 69000,
                    "qty": 0,
                    "subtotal": 0,
                    "grand_total": 0,
                    "total_weight": 0,
                    "total_poin": 0,
                    "image": "19004",
                    "unit": "PIECES",
                    "category": "WHITENING",
                    "picture": "19004",
                    "note": "MINIMUM-POINT-GET-DISCOUNT-16-29-FEB",
                    "pic": "19004",
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
            if (this.grand_total_poin >= 50) {
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
                return value.note.search("MINIMUM-POINT-GET-DISCOUNT-16-29-FEB") > -1
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
                return value.note.search("MINIMUM-POINT-GET-DISCOUNT-16-29-FEB") < 0
            })

            if (normal_items.length < 1) {
                const claimed_items = this.items.filter((value, index, arr) => {
                    return value.note.search("MINIMUM-POINT-GET-DISCOUNT-16-29-FEB") > -1
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