<template>
  <div class="row">
    <!--site main area -->
    <div class="content-area shop-grid-content full-width col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="site-main">
        <!-- Slide Banner -->
        <SlideBanner />

        <!--shop control-->
        <div class="shop-top-control">
          <!--product per page-->
          <form class="select-item select-form">
            <span class="title">Products/Page</span>
            <select class="chosen-select">
              <option value="16">16</option>
              <option value="24">24</option>
              <option value="32">32</option>
              <option value="40">40</option>
              <option value="48">48</option>
            </select>
          </form>

          <!--wrap filters-->
          <div class="wrap-topbar-filter">
            <span class="title class-toggle">
              Filters
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
            <div class="wrap-menu-toggle">
              <div class="widget woof_widget clone-sidebar">
                <!--product category widget-->
                <div class="widget widget-categories">
                  <h3 class="widgettitle">Skin Types</h3>
                  <ul class="list-categories">
                    <li>
                      <input type="checkbox" id="cb1" />
                      <label for="cb1" class="label-text">Combination</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cb2" />
                      <label for="cb2" class="label-text">Dry</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cb3" />
                      <label for="cb3" class="label-text">Normal</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cb4" />
                      <label for="cb4" class="label-text">Oily</label>
                    </li>
                  </ul>
                </div>

                <!--brand filter-->
                <div class="widget widget-brand">
                  <h3 class="widgettitle">Units</h3>
                  <ul class="list-brand">
                    <li>
                      <input id="cb7" type="checkbox" />
                      <label for="cb7" class="label-text">Series</label>
                    </li>
                    <li>
                      <input id="cb8" type="checkbox" />
                      <label for="cb8" class="label-text">Pieces</label>
                    </li>
                  </ul>
                </div>

                <div class="widget widget-brand">
                  <h3 class="widgettitle">Special Offers</h3>
                  <ul class="list-brand">
                    <li>
                      <input id="cb7" type="checkbox" />
                      <label for="cb7" class="label-text">Promo</label>
                    </li>
                    <li>
                      <input id="cb8" type="checkbox" />
                      <label for="cb8" class="label-text">Discount</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!--shop mode-->
          <!-- <div class="grid-view-mode">
            <div class="inner">
              <span class="title hidden">View</span>
              <a href="listproducts_bannerslider.html" class="modes-mode mode-list">
                <span></span>
                <span></span>
              </a>
              <a href="gridproducts_bannerslider.html" class="modes-mode mode-grid active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>-->
        </div>

        <!--shop title-->
        <h3 class="custom_blog_title">#AllProducts</h3>

        <!--product lists-->
        <ul class="row list-products auto-clear equal-container product-grid">
          <template v-if="products">
            <Product v-for="product in products" :key="product.id" :product="product" />
          </template>
        </ul>

        <!--pagination-->
        <div class="pagination clearfix style2">
          <div class="nav-link">
            <a href="#" class="page-numbers" v-if="page != 1" @click="page--">
              <i class="icon fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              v-for="pageNumber in pages.slice(page - 1, page + 10)"
              :key="pageNumber"
              @click="page = pageNumber"
              class="page-numbers"
            >{{ pageNumber }}</a>
            {{page}} {{products.length}}
            <nuxt-link
              :to="`/?page=` + (parseInt($route.query.page) + 1)"
              tag="a"
              @click="page++"
              v-if="page < products.length"
              class="page-numbers"
            >
              <i class="icon fa fa-angle-right" aria-hidden="true"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- full width layout have no sidebar-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'products',
    components: {
        SlideBanner: () => import('~/components/SlideBanner'),
        Product: () => import('~/components/Product')
    },
    data() {
        return {
            dataLoaded: false,
            products: [],
            page: 1,
            perPage: 48,
            pages: []
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
        products() {
            this.setPages()
        }
    },
    computed: {
        displayedProducts() {
            return this.paginate(this.products)
        }
    },
    methods: {
        getProducts: function() {
            this.$axios
                .post(`/promo/items`, {
                    // date_join: this.$store.getters.date_registered,
                    date_join: '2019-08-01'
                })
                .then((response) => {
                    if (response.data.data != 0) {
                        this.products = response.data.data
                    }
                })
        },
        setPages: function() {
            let numberOfPages = Math.ceil(this.products.length / this.perPage)
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index)
            }
        },
        paginate(products) {
            let page = this.page
            let perPage = this.perPage
            let from = page * perPage - perPage
            let to = page * perPage
            return products.slice(from, to)
        }
    },
    created() {
        console.log(this.$route.query.page)
        this.getProducts()
    }
}
</script>
