<template>
    <div>
        <!-- breadcrumb -->
        <div class="breadcrumb-trail breadcrumbs">
            <ul class="trail-items breadcrumb">
                <nuxt-link to="/" tag="li" class="trail-item trail-begin">
                    <a href="#">
                        <span>Home</span>
                    </a>
                </nuxt-link>

                <nuxt-link
                    :to="`/products/${product.jenis}`"
                    tag="li"
                    class="trail-item trail-begin"
                >
                    <a href="#">
                        <span>{{ product.jenis }}</span>
                    </a>
                </nuxt-link>

                <nuxt-link
                    :to="`/products/${product.kode_barang}/detail`"
                    tag="li"
                    class="trail-item trail-end active"
                >
                    <a href="#">
                        <span>{{ product.nama }}</span>
                    </a>
                </nuxt-link>
            </ul>
        </div>

        <!-- main content -->
        <div class="row">
            <!-- sidemain -->
            <div
                class="content-area content-details full-width col-lg-9 col-md-8 col-sm-12 col-xs-12"
            >
                <div class="site-main">
                    <!-- media box -->
                    <div class="details-product single-product-galery">
                        <div class="details-thumd">
                            <div
                                class="image-preview-container image-thick-box image_preview_container"
                            >
                                <img
                                    id="img_zoom"
                                    :data-zoom-image="`${$axios.defaults.baseURL}assets/img/products/${product.pic}.jpg`"
                                    :src="`${$axios.defaults.baseURL}assets/img/products/${product.pic}.jpg`"
                                    alt
                                />
                            </div>
                            <div class="product_preview image-small"></div>
                        </div>
                        <div class="details-infor">
                            <h1 class="product-title">{{ product.nama }}</h1>
                            <div class="availability" style="margin-left:0px;">
                                Product Code:
                                <a href="#">{{ product.kode_barang }}</a>
                            </div>
                            <div class="price">
                                <span>IDR. {{ product.harga }}</span>
                            </div>
                            <div class="product-details-description">
                                <p
                                    class="desc"
                                >3Pack Tshirt is Crew-neck T-shirts in soft organic cotton jersey. Regular fit.</p>
                                <ul>
                                    <li>100% cotton. Machine wash warm</li>
                                    <li>Imported</li>
                                    <li>Art.No. 06-7680</li>
                                </ul>
                            </div>
                            <div class="group-button">
                                <div class="yith-wcwl-add-to-wishlist">
                                    <div class="yith-wcwl-add-button">
                                        <a href="#">Add to Wishlist</a>
                                    </div>
                                </div>
                                <div class="quantity-add-to-cart">
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
                            </div>
                        </div>
                    </div>

                    <!-- details atbs -->
                    <div class="tab-details-product">
                        <ul class="tab-link">
                            <li class="active">
                                <a
                                    data-toggle="tab"
                                    aria-expanded="true"
                                    href="#product-descriptions"
                                >Descriptions</a>
                            </li>
                            <li class>
                                <a
                                    data-toggle="tab"
                                    aria-expanded="true"
                                    href="#product-guide "
                                >How to use</a>
                            </li>
                        </ul>
                        <div class="tab-container">
                            <div id="product-descriptions" class="tab-panel active">
                                <p>{{ product.deskripsi }}</p>
                            </div>
                            <div id="product-guide" class="tab-panel">
                                <p>{{ product.cara_pakai }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- reset floading -->
                    <div class="reset-floatding"></div>

                    <RelatedProducts :products="related_products" />
                </div>
            </div>

            <!-- full width layout have no sidebar-->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'product',
    components: {
        RelatedProducts: () => import('~/components/RelatedProducts')
    },
    data() {
        return {
            dataLoaded: false,
            code: this.$route.params.code,
            product: [],
            related_products: []
        }
    },
    head() {
        return {
            bodyAttrs: {
                class: this.dataLoaded
                    ? 'home-page home page page-id-4 page-template page-template-template-homepage page-template-template-homepage-php'
                    : ''
            }
        }
    },
    watch: {
        '$route.params.code': {
            handler: function(code) {
                this.getProductDetail(code)
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
        //   productTitle: function() {
        //     return this.category.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace(" ", "");
        //   }
    },
    methods: {
        getProductDetail(code) {
            this.$axios
                .get(`products/${code}/detail`)
                .then((response) => {
                    if (response.data.data != 0) {
                        this.product = response.data.data
                        this.getRelatedProducts()
                        // this.getRelatedPromoItems()
                        // this.getDiscountedItem()
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        getRelatedProducts() {
            this.$axios
                .get(
                    `/products/${this.product.jenis}/related/${this.product.kode_barang}`
                )
                .then((response) => {
                    if (response.data.data != 0) {
                        this.related_products = response.data.data
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }
}
</script>

<style>
.custom_blog_title {
    text-transform: captialize;
}
</style>