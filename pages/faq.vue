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
                                        Frequently Asked Questions<br/>
                                        <small>(Pertanyaan yang sering diajukan)</small>
                                    </h3>
                                    <br/>
                                    <br/>
                                    <div>
                                        <h4 class="text-muted">Product</h4>
                                        <strong>Q: Produk perawatan Bellezkin untuk kebutuhan kulit apa saja?</strong><br/>
                                        <span class="text-muted"> A: Produk perawatan Bellezkin diformulasikan sesuai dengan kebutuhan kulit orang Indonesia pada umumnya yaitu jerawat dan mencerahkan.</span><br/>
                                        <br />
                                        <strong>Q: Bagaimana Bellezkin bisa membantu keluhan kulit saya?</strong><br/>
                                        <span class="text-muted"> A: Dengan variant 3 step perawatan jerawat yaitu Mild – Acne – Acne Glow, dan 4 step perawatan mencerahkan yaitu Flawless – Glow – Plus dan Platinum yang tersedia dalam set perawatan (series) juga satuan (pieces) kami akan senang membantu.</span><br/>
                                        <br />
                                        <strong>Q: Apakah saya selalu disarankan memakai satu set perawatan?</strong><br/>
                                        <span class="text-muted"> A: Belum tentu dear, kami akan menyarankan produk sesuai dengan kebutuhan meski umumnya kami menyarankan satu set perawatan karena menurut kami akan memberikan hasil yang lebih maksimal jika dibandingkan hanya memakai produk satuan saja. Tapi jangan khawatir keputusan akhir selalu Anda yang putuskan. So, series or Pieces?? We’re HAPPY to help : ).</span><br/>
                                        <br />
                                        <strong>Q: Apakah ada jaminan atau semacam garansi jika saya memakai produk Bellezkin?</strong><br/>
                                        <span class="text-muted"> A: Seiring berjalannya waktu kulit akan berubah dan pasti membutuhkan perawatan yang berbeda pula, juga setiap kulit memiliki karakter tertentu – unik yang membutuhkan penanganan yang sesuai dengan karakter kulit tertentu pula. Perawatan Bellezkin menyelesaikan keluhan tanpa ada jaminan berlebih kecuali jaminan kami siap membantu.</span><br/>
                                        <br />
                                        <strong>Q: Bagaimana saya menentukan perawatan yang tepat?</strong><br/>
                                        <span class="text-muted"> A: Good question, Anda akan dibantu oleh para Beauty Consultant untuk menentukan perawatan yang sesuai. Klik <router-link to="/consultation">disini</router-link> untuk konsultasi.</span> <br/>
                                        <br/>
                                        <br/>

                                        <h4 class="text-muted">Payment</h4>
                                        <strong>Q: Metode pembayaran apa saja yang diterima?</strong><br/>
                                        <span class="text-muted"> A: Saat ini Bellezkin menerima pembayaran melalui transfer Bank Central Asia ( BCA ), Bank Mandiri, Bank Rakyat Indonesia ( BRI ) dan Bank Nasional Indonesia ( BNI ).</span><br/>
                                        <br />
                                        <strong>Q: Mengapa harus transfer dengan 3 digit unik (di akhir total pembayaran)?</strong><br/>
                                        <span class="text-muted"> A: Kode unik digunakan sebagai kode verifikasi pembayaran agar lebih cepat terverifikasi sehingga pesananpun lebih cepat dikirim dan diterima.</span><br/>
                                        <br />
                                        <strong>Q: Apa yang terjadi jika saya transfer tidak menggunakan kode unik?</strong><br/>
                                        <span class="text-muted"> A: Mohon maaf, pesanan anda secara system tidak terverifikasi dan dianggap belum melakukan pembayaran. Pastikan transfer tepat jumlah sesuai total pesanan.</span><br/>
                                        <br />
                                        <strong>Q: Saya sudah transfer tapi mengapa status order belum berubah?</strong><br/>
                                        <span class="text-muted"> A: Email konfirmasi pembayaran akan diterima setelah Anda melakukan transfer dan status order otomatis berubah menjadi “Payment Confirmed”. Untuk mempercepat proses ini Anda bisa gunakan fitur <code><b>Confirm Payment</b></code> halaman History Order.</span><br/>
                                        <br />
                                        <br />

                                        <h4 class="text-muted">Fulfillment</h4>
                                        <strong>Q: Apakah barang yang saya pesan bisa dijamin keasliannya?</strong><br/>
                                        <span class="text-muted"> A: YA.. kami pastikan barang yang Anda pesan melalui Bellezkin Online Shop (BE-SHOP) 100% asli karena e-commerce ini Bellezkin sediakan sebagai fasilitas bagi Reseller resmi Bellezkin untuk berjualan.</span><br/>
                                        <br />
                                        <strong>Q: Dari kota mana pesanan saya dikirim?</strong><br/>
                                        <span class="text-muted"> A: Anda dapat memilih kota asal pengiriman yang anda kehendaki sesuai sebaran Service Point Bellezkin ( SPB ) yang telah ada dengan tujuan untuk mempersingkat proses pengiriman barang dan menghemat ongkos kirim. SPB bisa anda pilih di proses Check Out.</span><br/>
                                        <br />
                                        <strong>Q: Bagaimana jika pesanan saya tidak sampai?</strong><br/>
                                        <span class="text-muted"> A: Anda dapat mengajukan keluhan kepada pihak penyedia jasa layanan. Lebih lengkap dapat Anda pelajari di halaman <router-link to="/return-policy">Return Policy</router-link>.</span><br/>
                                        <br />
                                        <strong>Q: Bagaimana cara saya klaim Diskon - Produk Gratis - Sample Gratis – Gift Coupon dari penawaran yang saya terima?</strong><br/>
                                        <span class="text-muted"> A: Senang anda bertanya, jika Anda berhak seluruh program diatas bisa di klaim di halaman My Cart > Add On. Penawaran yang Anda terima adalah periodical yang berarti ada tengat waktu yang berlaku, pastikan anda <router-link to="/register"><code><b>Sign Up</b></code></router-link> agar selalu update program – program Bellezkin.</span>
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
        middleware: ['traffics'],
        layout: 'products',
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