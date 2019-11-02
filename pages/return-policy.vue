<template>
    <div>
        <hr />
        <!--wrap main content-->
        <div class="main-content main-content-checkout">
            <div class="container">
                <!--page title-->
                <!-- <h3 class="custom_blog_title">#Checkout</h3> -->
                <!--checkout input form-->
                <div class="checkout-wrapp">
                    <!--shipping address-->
                    <div class="shipping-address-form-wrapp">
                        <div class="shipping-address-form checkout-form">
                            <div class="row-col-12 row-col">
                                <div class="shipping-address" style="padding:0% 10% 0% 10%;">
                                    <h3 class="text-center">
                                        Return Policy<br/>
                                        <small>(Kebijakan pengembalian barang)</small>
                                    </h3>
                                    <br/>
                                    <br/>
                                    <div>
                                        <strong>Pertukaran Barang</strong><br/>
                                        <span class="text-muted">Mohon maaf kami tidak dapat melayani layanan ini, saran kami pastikan Anda sudah memesan sesuai dengan kebutuhan sebelum melakukan Place Order (Exchange Order).</span><br/>
                                        <br />
                                        <strong>Pembatalan Order</strong><br/>
                                        <span class="text-muted">Kami berupaya memberikan pelayanan terbaik dengan mempercepat proses kiriman, setelah pembayaran terkonfirmasi kami segera pack and ship, ini berarti kami TIDAK bisa melakukan pembatalan (Order Cancellation).</span><br/>
                                        <br />
                                        <strong>Pengembalian Dana</strong><br/>
                                        <span class="text-muted">Program Big Sale acap kali menyebabkan kami tidak bisa menyediakan item yang dipesan. Layanan pengembalian dana (Refund) diproses HANYA jika kami tidak bisa memenuhi sebagian atau seluruh pesanan karena tingginya permintaan. Silahkan hubungi <a href="mailto:support.service@bellezkin.com">support.service@bellezkin.com</a> dengan subjek REFUND, menginformasikan nomor order dan nomor kontak Anda.</span><br/>
                                        <br />
                                        <strong>Barang Kurang</strong><br/>
                                        <span class="text-muted">Proses double check pick and pack untuk memastikan tidak ada order kurang atau tertinggal, jika hal ini terjadi silahkan hubungi <a href="mailto:support.service@bellezkin.com">support.service@bellezkin.com</a> dengan subjek LEFT ORDER, menginformasikan nomor order dan nomor kontak Anda.</span><br/>
                                        <br />
                                        <strong>Barang Hilang</strong><br/>
                                        <span class="text-muted">Sebagian atau seluruh order hilang selama proses pengiriman mengikuti kebijakan dari jasa layanan atau ekspedisi yang digunakan (Missing Order). Silahkan hubungi penyedia jasa yang digunakan.</span><br/>
                                        <br/>
                                        <strong>Barang Rusak</strong><br/>
                                        <span class="text-muted">Sebagian atau seluruh order Anda rusak ? silahkan hubungi <a href="mailto:support.service@bellezkin.com">support.service@bellezkin.com</a> dengan subjek DAMAGED ORDER, menginformasikan No Order dan nomor kontak Anda yang selanjutnya akan kami telusuri.</span><br/>
                                        <br />
                                    </div>
                                </div>
                            </div>
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
        layout: 'products',
        middleware: ['affiliation'],
        data() {
            return {
                address_form: {
                    name: "",
                    phone: "",
                    province: "",
                    city: "",
                    subdistrict: "",
                    address: "",
                    postcode: "",
                    is_default: ""
                },
                provinces: [],
                cities: [],
                subdistricts: [],
                showModal: false,
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
            },
            'address_form.province': {
                handler(val) {
                    if (val) {
                        this.getCities(val.province_id)
                    }
                },
                deep: true
            },
            'address_form.city': {
                handler(val) {
                    if (val) {
                        this.getSubdistricts(val.city_id)
                    }
                },
                deep: true
            },
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
            },
            getProvinces() {
                this.provinces = this.$axios.get(`ongkir/provinces`)
                    .then(response => {
                        if (response.data.data != 0) {
                            this.provinces = response.data.data
                        } else {
                            this.provinces = []
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
            getCities: function(province_id) {
                this.$axios.get(`ongkir/province/` + province_id + `/cities` )
                    .then(response => {
                        if (response.data.data != 0) {
                            var cities = response.data.data
                            var data = []

                            for (var city in cities) {
                                data.push({
                                    city_id: cities[city].city_id,
                                    city_name: cities[city].type + " " + cities[city].city_name,
                                })
                            }
                            this.cities = data
                        } else {
                            this.cities = []
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })

                    this.subdistricts = []
            },
            getSubdistricts: function(city_id) {
                this.$axios.get(`ongkir/city/` + city_id + `/subdistricts` )
                    .then(response => {
                        if (response.data.data != 0) {
                            var subdistricts = response.data.data
                            var data = []
                            for (var subdistrict in subdistricts) {
                                data.push({
                                    subdistrict_id: subdistricts[subdistrict].subdistrict_id,
                                    subdistrict_name: subdistricts[subdistrict].subdistrict_name
                                })
                            }
                            this.subdistricts = data
                        } else {
                            this.subdistricts = []
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
            addNewAddress() {
                // this.address_form = address

                if (this.validateAddress()) {

                    this.showModal = false

                    this.$swal({
                        // title: "",
                        text: "Saving address",
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        onOpen: () => {
                            this.$swal.showLoading()
                        },
                    })

                    this.$axios.post(`shipping-address/add`, {
                        email : window.localStorage.getItem('email'),
                        name : this.address_form.name,
                        phone : this.address_form.phone,
                        province_id : this.address_form.province.province_id,
                        province_name : this.address_form.province.province,
                        city_id : this.address_form.city.city_id,
                        city_name : this.address_form.city.city_name,
                        subdistrict_id : this.address_form.subdistrict.subdistrict_id,
                        subdistrict_name : this.address_form.subdistrict.subdistrict_name,
                        address : this.address_form.address,
                        postcode : this.address_form.postcode,
                        is_default : this.address_form.is_default
                    }).then(response => {
                            if (response.data.data == 1) {
                                
                                this.address_form = []

                                this.$swal({
                                    // title: "",
                                    text: "Shipping address added!",
                                    type: "success",
                                }).then(response => {

                                    // this.$router.push('/profile')
                                    // window.location.reload()

                                })
                            }
                        })
                        .catch(e => {
                            console.log(e)
                        })
                } else {
                    
                }
            },
            validateAddress() {
                if (!this.address_form.hasOwnProperty('name') || this.address_form.name == "") {
                    return false
                }

                if (!this.address_form.hasOwnProperty('phone') || this.address_form.phone == "") {
                    return false
                }

                if (!this.address_form.hasOwnProperty('province') || this.address_form.province == "") {
                    return false
                }

                if (!this.address_form.hasOwnProperty('city') || this.address_form.city == "") {
                    return false
                }

                if (!this.address_form.hasOwnProperty('subdistrict') || this.address_form.subdistrict == "") {
                    return false
                }

                if (!this.address_form.hasOwnProperty('address') || this.address_form.address == "") {
                    return false
                }

                if (!this.address_form.hasOwnProperty('postcode') || this.address_form.postcode == "") {
                    return false
                }

                return true
            },
        },
        created() {
            this.checkAvailableBranches()
            this.getShippingAddresses()
            this.getProvinces()
            this.generateUniqueCode()
            this.setTotalPayment()
            this.getDefaultShippingAddresses()
        }
    }
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 50%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/
.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container, .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>