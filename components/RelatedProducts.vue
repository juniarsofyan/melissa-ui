<template>
    <div>
        <slick ref="slick" :options="slickOptions">
            <!-- item Also Like start-->
            <div
                class="product-item default-layout product-type-variable"
                v-for="product in products"
                :key="product.kode_barang"
            >
                <div class="product-inner equal-element">
                    <div class="product-thumb">
                        <div class="thumb-inner">
                            <a href="#">
                                <img
                                    :src="`${$axios.defaults.baseURL}assets/img/thumbnails/${product.pic}.jpg`"
                                    :alt="product.nama"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="product-info">
                        <h5 class="product-name product_title">
                            <a href="#">{{ product.nama }}</a>
                        </h5>
                        <div class="group-info">
                            <div class="price">
                                <!-- <del>€65</del> -->
                                <ins>{{ product.harga | rupiah }}</ins>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- item Also Like end-->
        </slick>
    </div>
</template>

<script>
export default {
    props: ['products'],
    components: {
        // // Product: () => import('~/components/Product')
    },
    data() {
        return {
            slickOptions: {
                infinite: false,
                dots: false,
                autoplay: true,
                arrows: false,
                // prevArrow: '<small> < </small>',
                // nextArrow: '<small> > </small>',
                responsive: [
                    {
                        breakpoint: 5121,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 2561,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1441,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1154,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 425,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 376,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            }
        }
    },
    methods: {}
}
</script>