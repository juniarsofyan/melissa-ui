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
                    <li class="trail-item trail-end active">
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
                                        data-placeholder="-- Choose SPB --"
                                        class="chosen-select"
                                        id="branches"
                                        ref="branches"
                                        v-model="selected_branch"
                                        @change="checkOngkir($event)"
                                    >
                                        <option
                                            v-for="sales_branch in sales_branches"
                                            :key="sales_branch.code"
                                            :value="sales_branch.code"
                                            :disabled="sales_branch.disabled"
                                            :data-city-id="sales_branch.city_id"
                                            :data-subdistrict-id="sales_branch.subdistrict_id"
                                            :selected="selected_branch == sales_branch.code"
                                        >{{ sales_branch.city_name }} - {{ sales_branch.subdistrict_name }}</option>
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
                                <hr />
                                Total items : {{ count }}pcs
                                <br />
                                Total weight : {{ total_weight }}kg
                                <hr />
                                <br />Grand total
                                <b>{{ grand_total | rupiah }}</b>
                                <br />Shipping Fee
                                <b>IDR. xxx.xxx.xxx</b>
                                <br />Unique Code
                                <b>{{ unique_code }}</b>
                                <hr />
                                <div class="order-total">
                                    <span class="title">Total Payment:</span>
                                    <span
                                        class="total-price"
                                        style="color:red;"
                                    >{{ total_payment | rupiah }}</span>
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
import { mapGetters } from 'vuex'

export default {
    layout: 'products',
    data() {
        return {
            current_shipping_address : {
                kota_id: 79,
                kecamatan_id: 1063
            },
            curent_shipping_address: [],
            jnt: [],
            jne: [],
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
        ...mapGetters({
            itemsSummary: 'cart/itemsSummary'
        }),
        ...mapGetters({
            subtotal: 'cart/subtotal'
        }),
        ...mapGetters({
            grand_total: 'cart/grand_total'
        }),
        ...mapGetters({
            count: 'cart/count'
        }),
        ...mapGetters({
            total_weight: 'cart/total_weight'
        }),
        ...mapGetters({
            unique_code: 'cart/unique_code'
        }),
        ...mapGetters({
            total_payment: 'cart/total_payment'
        }),
        ...mapGetters({
            items: 'cart/items'
        }),
        selected_branch: {
            get() {
                return this.$store.getters['spb/selected_branch']
            },
            set(value) {
                this.$store.commit('spb/setBranch', value)
            }
        }
    },
    methods: {
        checkAvailableBranches() {
            this.$axios
                .post(`transaction/check-sales-branches-stock`, {
                    products: this.itemsSummary
                })
                .then((response) => {
                    if (response.data.data != 0) {
                        let result = response.data.data

                        result.forEach((item) => {
                            let found = this.sales_branches.find(
                                (product) => product.code == item.code
                            )

                            if (found) {
                                found.disabled = item.disabled
                            }
                        })
                    }
                })
        },
        checkOngkir: function(event) {
            
            let branch_city_id = event.target.options[event.target.options.selectedIndex].dataset.cityId
            let branch_subdistrict_id = event.target.options[event.target.options.selectedIndex].dataset.subdistrictId

            this.$axios
                .post(`ongkir/cost`, {
                    destination_city_id: parseInt(this.current_shipping_address.kota_id),
                    destination_subdistrict_id: parseInt(this.current_shipping_address.kecamatan_id),
                    origin_city_id: parseInt(branch_city_id),
                    origin_subdistrict_id: parseInt(branch_subdistrict_id),
                    weight: parseInt(this.total_weight),
                    courier: 'jne'
                })
                .then((response) => {
                    if (response.data.data != 0) {
                        this.jne =  {
                            fee: response.data.data.costs[0].cost[0].value,
                            etd: response.data.data.costs[0].cost[0].etd
                        }
                    }
                })

            this.$axios
                .post(`ongkir/cost`, {
                    destination_city_id: parseInt(this.current_shipping_address.kota_id),
                    destination_subdistrict_id: parseInt(this.current_shipping_address.kecamatan_id),
                    origin_city_id: parseInt(branch_city_id),
                    origin_subdistrict_id: parseInt(branch_subdistrict_id),
                    weight: parseInt(this.total_weight),
                    courier: 'jnt'
                })
                .then((response) => {
                    if (response.data.data != 0) {
                        this.jne =  {
                            fee: response.data.data.costs[0].cost[0].value,
                            etd: response.data.data.costs[0].cost[0].etd
                        }
                    }
                })

                // console.log(jne)
                // console.log(jnt)
        }
    },
    created() {
        this.checkAvailableBranches()
    }
}
</script>

<style>
</style>