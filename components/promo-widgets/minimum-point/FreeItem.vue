<template>
    <div class="cart-item">
        <!-- {{ item }} -->
        <div class="item-wrap">
            <div class="cart-thumbnail">
                <img
                    :src="`${$axios.defaults.baseURL}assets/img/thumbnails/${item.pic}.jpg`"
                    :alt="item.nama"
                    class="img-thumbnail"
                />
            </div>
            <div class="cart-product-info">
                <nuxt-link
                    :to="`/products/${item.kode_barang}/detail`"
                    tag="a"
                    class="title"
                >{{ item.nama }}</nuxt-link>
                <div class="cart-info-wrap">
                    <div class="flex-cart-item">
                        FREE
                        <div class="quantity">
                            <button class="btn btn-small btn-success" @click="updateQty" :disabled="isAllClaimed">{{ button_label }}</button>
                        </div>
                    </div>
                    <!-- <div class="product-remove">
                        <a class="remove" @click="removeItem"></a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['item', 'number_of_claimed_series'],
    data() {
        return {
            qty: 1,
            button_label: "Claim",
            isAllClaimed: false
        }
    },
    watch: {
        'items': {
            handler(val) {
                this.checkIfAllClaimed()
            },
            deep: true
        }
    },
    computed: {
        ...mapGetters('cart', [
            'items'
        ]),
        qty_in_cart: function() {
            let item_exists = this.items.find((product) => product.product_code == this.item.kode_barang)
            return item_exists
        }
    },
    methods: {
        updateQty () {

            let free_item_in_cart = this.items.find((product) => product.product_code == this.item.kode_barang)
            let qty = 1

            if (free_item_in_cart) {
                qty = qty + free_item_in_cart.qty
            }

            this.item.qty = qty
            this.$store.dispatch('cart/updateQty', this.item)
            
        },
        checkIfAllClaimed () {
            
            let free_item_in_cart = this.items.find((product) => product.product_code == this.item.kode_barang)

            if (free_item_in_cart) {
                if (free_item_in_cart.qty >= this.number_of_claimed_series) {
                    this.isAllClaimed = true
                    this.button_label = "Claimed"
                } else {
                    this.isAllClaimed = false
                    this.button_label = "Claim"
                }
            }
        }
    },
    created() {
        this.checkIfAllClaimed()
    }
}
</script>

<style scoped>
.cart-form .shop_table .product-price {
    width: 18%;
    font-size: 20px;
    color: #111;
    font-weight: 700;
}
.cart-form .shop_table .product-quantity {
    width: 15%;
}
.cart-form .shop_table .product-name {
    font-weight: 600;
    color: #333333;
    width: 25%;
    font-size: 16px;
}
</style>