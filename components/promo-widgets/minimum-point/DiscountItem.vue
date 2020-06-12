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
                        <div v-if="item.harga_diskon > 0 && item.harga > item.harga_diskon">
                            <div style="color:red;font-weight:bold;">{{ item.diskon }}% OFF</div>
                            <div class="cart-product-price-disc">{{ item.harga | rupiah }}</div>
                            <div class="cart-product-price">{{ item.harga_diskon | rupiah }}</div>
                        </div>
                        <div v-else>
                            <div class="cart-product-price">{{ item.harga | rupiah }}</div>
                        </div>
                        <div class="quantity">
                            <button class="btn btn-small btn-success" @click="updateQty" :disabled="disabled">{{ button_label }}</button>
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
    props: ['item', 'disabled'],
    data() {
        return {
            qty: 1,
            button_label: "Claim"/* ,
            isclaimed: false */
        }
    },
    watch: {
        /* 'items': {
            handler(val) {
                this.checkIfClaimed()
            },
            deep: true
        } */
    },
    computed: {
        ...mapGetters('cart', [
            'items'
        ])
    },
    methods: {
        updateQty () {
            this.item.qty = this.newCurrentItemQty()
            this.$store.dispatch('cart/updateQty', this.item)
        },
        newCurrentItemQty() {
            const current_item = this.items.find(product => product.product_code == this.item.kode_barang && product.note == "BUY-WHITENING-PLATINUM-SERIES-GET-DISCOUNT")
            if (current_item) {
                return current_item.qty + 1
            }

            return 1
        }
        /* ,
        checkIfClaimed () {
            const isClaimed = this.items.filter(product => product.product_code == this.item.kode_barang && product.note == "DISCOUNT-PREORDER-ITEMS").length > 0
            if (isClaimed) {
                this.isclaimed = true
                // this.button_label = "Claimed"
            } else {
                this.isclaimed = false
                // this.button_label = "Claim"
            }
        } */
    },
    created() {
        // this.checkIfClaimed()
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