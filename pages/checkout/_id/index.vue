<template>
    <!--wrap main content-->
    <div class="main-content main-content-checkout">
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

            <!--breadcrumb-->
            <!-- <div class="row">
				<div class="col-lg-12">
              
					<div class="breadcrumb-trail breadcrumbs">
						<ul class="trail-items breadcrumb">
							<li class="trail-item trail-begin"><a href="index.html">Home</a></li>
							<li class="trail-item trail-end active">Checkout</li>
						</ul>
					</div>
               
				</div>
            </div>-->

            <!--page title-->
            <!-- <h3 class="custom_blog_title">#Checkout</h3> -->

            <!--checkout input form-->
            <div class="checkout-wrapp">
                <!--shipping address-->
                <div class="shipping-address-form-wrapp">
                    <div class="shipping-address-form checkout-form">
                        <div class="row-col-1 row-col">
                            <div class="shipping-address">
                                <h3 class="title-form">Checkout</h3>
                                <p class="form-row form-row-first">
                                    <label class="text">Select SPB (Sales Point Branch)</label>
                                    <select
                                        data-placeholder="-- Choose One --"
                                        class="chosen-select"
                                    >
                                        <option
                                            v-for="branch in sales_branches"
                                            :key="branch.code"
                                            :value="branch.code"
                                        >{{ branch.city_name }} - {{ branch.subdistrict_name }}</option>
                                    </select>
                                </p>
                            </div>
                            <div class="shipping-address">
                                <p class="form-row form-row-first">
                                    <label class="text">Shipping Method</label>
                                    <input type="radio" name="shipping_method" value="EXPEDITION" /> Courier
                                    <input
                                        type="radio"
                                        name="shipping_method"
                                        value="IMMEDIATE"
                                    />Immediate
                                </p>
                            </div>
                            <div class="shipping-address">
                                <p class="form-row form-row-first">
                                    <label class="text">Select Courier</label>
                                    <select
                                        data-placeholder="-- Choose One --"
                                        class="chosen-select"
                                    >
                                        <option value="JNE">JNE</option>
                                        <option value="JNT">JNT</option>
                                    </select>
                                </p>
                            </div>
                        </div>

                        <div class="row-col-2 row-col">
                            <div class="your-order">
                                <h3 class="title-form">Order Summary</h3>
                                <hr />Total items : Xpcs
                                <br />Total weight : Xkg
                                <hr />
                                <br />Grand total
                                <b>IDR. xxx.xxx.xxx</b>
                                <br />Shipping Fee
                                <b>IDR. xx.xxx</b>
                                <br />Unique Code
                                <b>245</b>
                                <hr />
                                <div class="order-total">
                                    <span class="title">Total Payment:</span>
                                    <span class="total-price" style="color:red;">IDR. XXX.XXX.XXX</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nuxt-link :to="`payment`" class="button button-payment">PAYMENT</nuxt-link>
                </div>

                <!--payment method-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'products',
    data() {
        return {
            slugs: [
                { title: 'Home', url: '/' },
                { title: 'My Cart', url: '/cart' },
                { title: 'Check Out', url: '/checkout', active: true }
            ],
            sales_branches: [
                {
                    code: '00000',
                    province_id: 9,
                    city_id: 23,
                    city_name: 'BANDUNG',
                    subdistrict_id: 359,
                    subdistrict_name: 'Lengkong',
                    phone: '+6282119163629',
                    disabled: true
                },
                {
                    code: '00217',
                    province_id: 9,
                    city_id: 55,
                    city_name: 'BEKASI',
                    subdistrict_id: 757,
                    subdistrict_name: 'Mustika Jaya',
                    phone: '+6281360360688',
                    disabled: true
                },
                {
                    code: '00553',
                    province_id: 9,
                    city_id: 79,
                    city_name: 'BOGOR',
                    subdistrict_id: 1067,
                    subdistrict_name: 'Tanah Sereal',
                    phone: '+6289513313909',
                    disabled: true
                },
                {
                    code: '00539',
                    province_id: 34,
                    city_id: 278,
                    city_name: 'MEDAN',
                    subdistrict_id: 3918,
                    subdistrict_name: 'Medan Marelan',
                    phone: '+6287868981767',
                    disabled: true
                },
                {
                    code: '00042',
                    province_id: 9,
                    city_id: 430,
                    city_name: 'PELABUHAN RATU',
                    subdistrict_id: 5954,
                    subdistrict_name: 'Pelabuhan/Palabuhan Ratu',
                    phone: '+6281337479174',
                    disabled: true
                },
                {
                    code: '00005',
                    province_id: 9,
                    city_id: 431,
                    city_name: 'SUKABUMI',
                    subdistrict_id: 5936,
                    subdistrict_name: 'Cisaat',
                    phone: '+6281563205235',
                    disabled: true
                },
                {
                    code: '01340',
                    province_id: 9,
                    city_id: 430,
                    city_name: 'SUKABUMI',
                    subdistrict_id: 5951,
                    subdistrict_name: 'Pabuaran',
                    phone: '+6285798847881',
                    disabled: true
                },
                {
                    code: '01838',
                    province_id: 10,
                    city_id: 41,
                    city_name: 'PURWOKERTO',
                    subdistrict_id: 591,
                    subdistrict_name: 'Purwokerto Timur',
                    phone: '+6283818235538',
                    disabled: true
                },
                {
                    code: '15666',
                    province_id: 3,
                    city_id: 457,
                    city_name: 'TANGERANG SELATAN',
                    subdistrict_id: 6312,
                    subdistrict_name: 'Pamulang',
                    phone: '-',
                    disabled: true
                },
                {
                    code: '15658',
                    province_id: 9,
                    city_id: 115,
                    city_name: 'DEPOK',
                    subdistrict_id: 1585,
                    subdistrict_name: 'Sawangan',
                    phone: '-',
                    disabled: true
                },
                {
                    code: '15641',
                    province_id: 6,
                    city_id: 154,
                    city_name: 'Jakarta Timur',
                    subdistrict_id: 2116,
                    subdistrict_name: 'Duren Sawit',
                    phone: '-',
                    disabled: true
                },
                {
                    code: '13722',
                    province_id: 9,
                    city_id: 54,
                    city_name: 'Bekasi',
                    subdistrict_id: 733,
                    subdistrict_name: 'Cikarang Selatan',
                    phone: '-',
                    disabled: true
                },
                {
                    code: '02006',
                    province_id: 9,
                    city_id: 126,
                    city_name: 'Garut',
                    subdistrict_id: 1751,
                    subdistrict_name: 'Tarogong Kidul',
                    phone: '-',
                    disabled: true
                }
            ]
        }
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