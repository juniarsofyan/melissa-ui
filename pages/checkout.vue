<template>
    <div>
        <hr />
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
                                        <!-- class="chosen-select" -->
                                        <select style="width:100%;" data-placeholder="-- Choose SPB --" id="branches"
                                            ref="branches" v-model="branch">
                                            <option v-for="sales_branch in sales_branches" :key="sales_branch.code"
                                                :value="sales_branch" :disabled="sales_branch.disabled"
                                                :selected="branch.code ? branch.code == sales_branch.code : ''">
                                                {{ sales_branch.city_name }} - {{ sales_branch.subdistrict_name }}</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="shipping-address">
                                    <p class="form-row form-row-first">
                                        <span class="text">Shipping Method</span>
                                        <input 
                                            type="radio" 
                                            name="shipping_method" 
                                            id="expedition"
                                            style="margin-right:5px;" 
                                            value="EXPEDITION" 
                                            v-model="shipping_method" 
                                        /> 
                                        <label style="margin-right:10px;" for="expedition">Courier</label>

                                        <input 
                                            type="radio" 
                                            name="shipping_method"
                                            id="immediate"
                                            style="margin-right:5px;" 
                                            value="IMMEDIATE" 
                                            v-model="shipping_method" 
                                        />
                                        <label style="margin-right:10px;" for="immediate">Immediate</label>
                                    </p>
                                </div>
                                <span v-if="shipping_method == 'EXPEDITION'">    
                                    <div class="shipping-address">
                                        <div class="form-row form-row-first">
                                            <label class="text">Select Courier</label>
                                            <!-- class="chosen-select" -->
                                            <select style="width:100%;" data-placeholder="-- Choose One --" v-model="courier">
                                                <option value="jne">JNE</option>
                                                <option value="jnt">JNT</option>
                                            </select>
                                            <br />
                                            <br>
                                            <!-- <div v-if="shipment.fee">
                                            <p>  Fee : {{ shipment.fee }} </p>
                                            <p>  Etd : {{ shipment.etd }} </p>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="shipping-address">
                                        <p class="form-row form-row-first">
                                            <label class="text">
                                                Deliver to <br/>
                                                <p> 
                                                    <b>{{ default_shipping_address.nama }}</b>
                                                    <br />
                                                    {{ default_shipping_address.alamat }}
                                                    <br />
                                                    {{ default_shipping_address.kecamatan_nama }}
                                                    <br />
                                                    {{ default_shipping_address.kota_nama }}
                                                    <br />
                                                    {{ default_shipping_address.provinsi_nama }}
                                                    <br />
                                                    {{ default_shipping_address.kode_pos }}
                                                    <!-- <br /> <br /> {{ default_shipping_address.telepon }} -->
                                                </p>
                                            </label>
                                        </p>
                                    </div>
                                </span>
                            </div>

                            <!-- Branch : {{ branch }} -->

                            <div class="row-col-2 row-col checkout-form" style="padding-left: 27px;padding-bottom: 0px; padding-top:20px;">
                                <div class="your-order">
                                    <h3 class="title-form text-center" style="margin-bottom:20px;">Order Summary</h3>
                                    <hr style="margin-top: 10px;margin-bottom: 10px;" />

                                    <table style="border:none !important;">
                                        <tr style="border:none !important;">
                                            <td style="border:none !important;padding-bottom:0px"> Total items :</td>
                                            <td style="border:none !important;padding-bottom:0px" class="text-right"> <b> {{ count }}pcs </b> </td>
                                        </tr>
                                        <tr style="border:none !important;">
                                            <td style="border:none !important;padding-bottom:0px">
                                                Total weight :
                                            </td>
                                            <td style="border:none !important;padding-bottom:0px" class="text-right">
                                                <b> {{ total_weight }}Kg </b>
                                            </td>
                                        </tr>
                                    </table>

                                    <hr style="margin-top: 10px;margin-bottom: 10px;" />

                                    <table style="border:none !important;">
                                        <tr style="border:none !important;">
                                            <td style="border:none !important;padding-bottom:0px">
                                                Grand total
                                            </td>
                                            <td style="border:none !important;padding-bottom:0px" class="text-right">
                                                <b> {{ grand_total | rupiah }} </b>
                                            </td>
                                        </tr>
                                        <tr v-if="shipment.fee" style="border:none !important;">
                                            <td style="border:none !important;padding-bottom:0px;color:green;">
                                                Shipping Fee
                                            </td>
                                            <td style="border:none !important;text-align:right;padding-bottom:0px;color:green;" class="text-right" >
                                                <b> {{ shipment.fee | rupiah }} </b>
                                            </td>
                                        </tr>
                                        <tr style="border:none !important;">
                                            <td style="border:none !important;padding-bottom:0px">
                                                Unique Code
                                            </td>
                                            <td style="border:none !important;padding-bottom:0px"  class="text-right">
                                                <b> {{ unique_code }} </b>
                                            </td>
                                        </tr>
                                    </table>

                                    <hr style="margin-top: 10px;margin-bottom: 10px;" />

                                    <table style="border:none !important;">
                                        <tr style="border:none !important;">
                                            <td style="border:none !important;">
                                                <span class="title">Total Payment:</span>
                                            </td>
                                            <td style="border:none !important;">
                                                <div class="order-total text-right" >
                                                    <span class="total-price" style="color:red;">
                                                        <b> {{ total_payment | rupiah }} </b>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="button-control">
                        <nuxt-link :to="`/cart`" tag="button" class="button btn-continue-shopping">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            BACK TO MY CART
                        </nuxt-link>

                        <nuxt-link :to="`payment`" class="button button-payment">PAYMENT</nuxt-link>
                        </div>
                    </div>

                    <!--payment method-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import axios from 'axios'
    import ongkir from '~/plugins/ongkir'

    export default {
        middleware: ['traffics'],
        layout: 'products',
        data() {
            return {
                delivery_address: false,
                default_shipping_address: "",
                shipping_addresses: [],
                sales_branches: [{
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
            ...mapGetters(
                'cart', [
                    'items',
                    'itemsSummary',
                    'subtotal',
                    'grand_total',
                    'count',
                    'total_weight'
                ]),
            ...mapGetters(
                'checkout', [
                    'shipping_address',
                    'unique_code',
                    'shipment',
                    'total_payment'
                ]),
            courier: {
                get() {
                    return this.$store.getters['checkout/courier']
                },
                set(value) {
                    this.$store.dispatch('checkout/setCourier', value)
                }
            },
            branch: {
                get() {
                    return this.$store.getters['checkout/branch']
                },
                set(value) {
                    this.$store.dispatch('checkout/setBranch', value)
                }
            },
            shipping_method: {
                get() {
                    return this.$store.getters['checkout/shipping_method']
                },
                set(value) {
                    this.$store.dispatch('checkout/setShippingMethod', value)
                }
            }
        },
        watch: {
            courier: function () {
                this.checkOngkir()
            },
            shipping_method: function () {
                if (this.shipping_method == 'IMMEDIATE') {

                    this.$store.dispatch('checkout/setShipment', {
                        etd: "",
                        fee: 0
                    })

                    this.$store.dispatch('checkout/setCourier', false)

                    this.$store.dispatch('checkout/setDeliveryAddress', false)
                    this.setTotalPayment()
                } else {
                    this.getDefaultShippingAddresses()
                }
            },
            items: function() {
                this.checkAvailableBranches()
            }
        },
        methods: {
            generateUniqueCode() {
                const random_number = Math.floor(100 + Math.random() * 900)
                this.$store.dispatch('checkout/setUniqueCode', random_number)
                this.setTotalPayment()
            },
            async checkOngkir(event) {

                let shipment = {
                    destination_city_id: this.default_shipping_address.kota_id,
                    destination_subdistrict_id: this.default_shipping_address.kecamatan_id,
                    origin_city_id: this.branch.city_id,
                    origin_subdistrict_id: this.branch.subdistrict_id,
                    weight: this.total_weight,
                    courier: this.courier
                }

                const shipment_result = await ongkir.estimate(shipment)
                this.$store.dispatch('checkout/setShipment', shipment_result)
                this.setTotalPayment()
            },
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
            getShippingAddresses() {
                this.$axios.post(`shipping-address/get`, {
                    email: window.localStorage.getItem('email')
                })
                .then((response) => {
                    this.shipping_addresses = response.data.data
                })
            },
            setTotalPayment() {

                let fee = 0

                if (this.shipment && this.shipment.fee) {
                    fee = this.shipment.fee
                }
                
                const total_payment = parseInt(this.grand_total) + parseInt(this.unique_code) + parseInt(fee)
                this.$store.dispatch('checkout/setTotalPayment', total_payment)
            },
            getDefaultShippingAddresses: function() {
                const email = localStorage.getItem('email')

                this.$axios.post(`shipping-address/current`, {
                    email: localStorage.getItem('email')
                }).then(response => {
                        if (response.data.data != 0) {
                            this.default_shipping_address = response.data.data
                            this.$store.dispatch('checkout/setDeliveryAddress', this.default_shipping_address.id)
                        } else {
                            this.$store.dispatch('checkout/setDeliveryAddress', false)
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        created() {
            this.checkAvailableBranches()
            this.getShippingAddresses()
            this.generateUniqueCode()
            this.setTotalPayment()
            this.getDefaultShippingAddresses()
        }
    }
</script>

<style>
</style>