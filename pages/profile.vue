<template>
    <!--wrap main content-->
    <div class="main-content main-content-checkout">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <hr />
                    <div class="tab-details-product" style="margin-bottom:30px;margin-top:0px;">
                        <!-- <ul class="tab-link">
                            <li class="active">
                                <a data-toggle="tab" aria-expanded="true" href="#profil"><i class="fa fa-user"></i>&nbsp;My Profile</a>
                            </li>
                            <li>
                                <a
                                    data-toggle="tab"
                                    aria-expanded="true"
                                    href="#semua "
                                ><i class="fa fa-book"></i>&nbsp;Address Book</a>
                            </li>
                        </ul> -->

                        <!-- {{ address }} -->

                        <div class="tab-container">
                            <div id="profil" class="tab-panel active">
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="shipping-address-form-wrapp">
                                        <div
                                            class="shipping-address-form checkout-form"
                                            style="padding: 35px 27px 20px 27px !important; border:0px;"
                                        >
                                            <div class="col-12">
                                                <div class="shipping-address">
                                                    <p class="col-12">
                                                        <label class="text">Nama</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.name"
                                                            id="name"
                                                            ref="name"
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Tanggal Lahir</label>
                                                        <input
                                                            type="date"
                                                            style="width:100%"
                                                            class="form-control"
                                                            v-model="profile.birthdate"
                                                            id="birthdate"
                                                            ref="birthdate"
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Telepon</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.phone"
                                                            id="phone"
                                                            ref="phone"
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Email</label>
                                                        <input
                                                            type="email"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.email"
                                                            id="email"
                                                            ref="email"
                                                            readonly
                                                        />
                                                    </p>

                                                    <template>
                                                        <br />
                                                        <hr />
                                                        <br />
                                                        <p class="col-12">
                                                            <label class="text">Province</label>
                                                            <br />
                                                            <select
                                                                style="width:100%;"
                                                                data-placeholder="London"
                                                                class="input-text"
                                                                tabindex="1"
                                                                @change="setProvinceToModel($event)"
                                                            >
                                                                <option disabled selected>- Choose Province -</option>
                                                                <option
                                                                    v-for="province in provinces"
                                                                    :key="province.province_id"
                                                                    :value="province"
                                                                    :selected="(address.province ? address.province.province_id == province.province_id : false)"
                                                                    :data-province-id="province.province_id"
                                                                    :data-province-name="province.province"
                                                                >{{ province.province }}
                                                                </option>
                                                            </select>
                                                        </p>

                                                        <p class="col-12">
                                                            <label class="text">City</label>
                                                            <br />
                                                            <select
                                                                style="width:100%;"
                                                                data-placeholder="London"
                                                                class="input-text"
                                                                tabindex="1"
                                                                @change="setCityToModel($event)"
                                                            >
                                                                <option disabled selected>- Choose City -</option>
                                                                <option
                                                                    v-for="city in cities"
                                                                    :key="city.city_id"
                                                                    :value="city"
                                                                    :selected="(address.city ? address.city.city_id == city.city_id : false)"
                                                                    :data-city-id="city.city_id"
                                                                    :data-city-name="city.city_name"
                                                                >{{ city.city_name }}
                                                                </option>
                                                            </select>
                                                        </p>

                                                        <p class="col-12">
                                                            <label class="text">Subdistrict</label>
                                                            <br />
                                                            <select
                                                                style="width:100%;"
                                                                data-placeholder="London"
                                                                class="input-text"
                                                                tabindex="1"
                                                                @change="setSubdistrictToModel($event)"
                                                            >
                                                                <option disabled selected>- Choose City -</option>
                                                                <option
                                                                    v-for="subdistrict in subdistricts"
                                                                    :key="subdistrict.subdistrict_id"
                                                                    :value="subdistrict"
                                                                    :selected="(address.subdistrict ? address.subdistrict.subdistrict_id == subdistrict.subdistrict_id : false)"
                                                                    :data-subdistrict-id="subdistrict.subdistrict_id"
                                                                    :data-subdistrict-name="subdistrict.subdistrict_name"
                                                                >{{ subdistrict.subdistrict_name }}
                                                                </option>
                                                            </select>
                                                        </p>

                                                        <p class="col-12">
                                                            <label class="text">Address</label>
                                                            <textarea
                                                                class="input-text"
                                                                id="exampleFormControlTextarea1"
                                                                rows="3"
                                                                v-model="address.address"
                                                            ></textarea>
                                                        </p>
                                                        <p class="col-12">
                                                            <label class="text">Post Code</label>
                                                            <input
                                                                type="text"
                                                                style="width:100%"
                                                                class="input-text"
                                                                v-model="address.postcode"
                                                            />
                                                        </p>
                                                    </template>
                                                    
                                                    <button
                                                        class="button"
                                                        @click="updateProfile"
                                                    >Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    layout: 'products',
    middleware: ['authentication', 'accesskey', 'authorization'],
    data() {
        return {
            profile: [],
            shipping_addresses: [],
            address : {},
            provinces: [],
            cities: [],
            subdistricts: [],
            province: [],
            city: [],
            subdistrict: [],
            default_shipping_address: []
        }
    },
    watch: {
        'address': {
            handler(val) {
                if (val) {
                    this.getCities(val.province.province_id)
                    this.getSubdistricts(val.city.city_id)
                }
            },
            deep: true
        },
        'email': {
            handler(val) {
                if (val) {
                    this.getProfile()
                }
            }
        }
    },
    computed: {
        ...mapGetters("authentication", ['email'])
    },
    methods: {
        async updateProfile() {
            this.$swal({
                title: "Processing...",
                // text: "Processing",
                allowEscapeKey: false,
                allowOutsideClick: false,
                onOpen: () => {
                    this.$swal.showLoading()
                },
            })

            await this.$axios.post(`profile/update`, {
                name: this.profile.name,
                birthdate: this.profile.birthdate,
                phone: this.profile.phone,
                email: this.profile.email
            }).then(response => {
                this.$swal({
                    // title: "",
                    text: "Profile saved!",
                    type: "success",
                })

                if (this.no_address_available) {
                    this.addNewAddress()
                } else {
                    this.updateAddress()
                }

                this.getProfile()

            }).catch(e => {
                console.log(e)
                this.$swal({
                    // title: "",
                    text:
                        "Tidak dapat terhubung ke server, Silahkan coba lagi nanti",
                    type: "error",
                    onOpen: () => {
                        this.$swal.hideLoading()
                    },
                })
            })
        },
        getProfile() {
            this.$axios.post(`profile/get`, {
                email: this.email
            })
            .then((response) => {
                
                this.profile =  {
                    // nik: response.data.data.nik,
                    name: response.data.data.nama,
                    birthdate: response.data.data.tgl_lahir,
                    phone: response.data.data.telepon,
                    email: response.data.data.email
                }

                this.getDefaultShippingAddresses()
            })
        },
        getDefaultShippingAddresses() {
            this.$axios.post(`shipping-address/current`, {
                email: localStorage.getItem('email')
            }).then(response => {
                if (response.data.data != 0) {
                    
                    const result = response.data.data

                    this.address = {
                        id: result.id,
                        province : {
                            province_id : parseInt(result.provinsi_id),
                            province_name: result.provinsi_nama
                        },
                        city : {
                            city_id : parseInt(result.kota_id),
                            city_name: result.kota_nama
                        },
                        subdistrict : {
                            subdistrict_id : parseInt(result.kecamatan_id),
                            subdistrict_name: result.kecamatan_nama
                        },
                        address: result.alamat,
                        postcode: result.kode_pos
                    }

                    this.no_address_available = false

                    this.$store.dispatch('checkout/setDeliveryAddress', result.id)
                } else {
                    this.address = {
                        id: false,
                        province : {
                            province_id : false,
                            province_name: false
                        },
                        city : {
                            city_id : false,
                            city_name: false
                        },
                        subdistrict : {
                            subdistrict_id : false,
                            subdistrict_name: false
                        },
                        address: "",
                        postcode: ""
                    }

                    this.no_address_available = true

                    this.$store.dispatch('checkout/setDeliveryAddress', false)
                }
            })
            .catch(e => {
                console.log(e)
            })
        },
        setProvinceToModel(event) {
            this.address.province.province_id = parseInt(event.target.options[event.target.options.selectedIndex].dataset.provinceId)
            this.address.province.province_name = event.target.options[event.target.options.selectedIndex].dataset.provinceName
        },
        setCityToModel(event) {
            this.address.city.city_id = parseInt(event.target.options[event.target.options.selectedIndex].dataset.cityId)
            this.address.city.city_name = event.target.options[event.target.options.selectedIndex].dataset.cityName
        },
        setSubdistrictToModel(event) {
            this.address.subdistrict.subdistrict_id = parseInt(event.target.options[event.target.options.selectedIndex].dataset.subdistrictId)
            this.address.subdistrict.subdistrict_name = event.target.options[event.target.options.selectedIndex].dataset.subdistrictName
        },
        addNewAddress() {
            // if (this.validateAddress()) {

                this.$axios.post(`shipping-address/add`, {
                    email: window.localStorage.getItem('email'),
                    name: this.profile.name,
                    phone: this.profile.phone,
                    province_id: this.address.province.province_id,
                    province_name: this.address.province.province_name,
                    city_id: this.address.city.city_id,
                    city_name: this.address.city.city_name,
                    subdistrict_id: this.address.subdistrict.subdistrict_id,
                    subdistrict_name: this.address.subdistrict.subdistrict_name,
                    address: this.address.address,
                    postcode: this.address.postcode
                }).then(response => {
                    if (response.data.data == 1) {
                        this.getDefaultShippingAddresses()
                    }
                })
                .catch(e => {
                    console.log(e)
                })
            // } else {
                
            // }
        },
        updateAddress() {
            this.$axios.post(`shipping-address/${this.address.id}/update`, {
                name: this.profile.name,
                phone: this.profile.phone,
                province_id: this.address.province.province_id,
                province_name: this.address.province.province_name,
                city_id: this.address.city.city_id,
                city_name: this.address.city.city_name,
                subdistrict_id: this.address.subdistrict.subdistrict_id,
                subdistrict_name: this.address.subdistrict.subdistrict_name,
                address: this.address.address,
                postcode: this.address.postcode
            })
            .then(response => {
                if (response.data.data == 1) {
                    
                }
            })
            .catch(e => {
                console.log(e)
            })
        },
        validateAddress() {
            if (!this.address.hasOwnProperty('name') || this.address.name == "") {
                return false
            }

            if (!this.address.hasOwnProperty('phone') || this.address.phone == "") {
                return false
            }

            if (!this.address.hasOwnProperty('province') || this.address.province == "") {
                return false
            }

            if (!this.address.hasOwnProperty('city') || this.address.city == "") {
                return false
            }

            if (!this.address.hasOwnProperty('subdistrict') || this.address.subdistrict == "") {
                return false
            }

            if (!this.address.hasOwnProperty('address') || this.address.address == "") {
                return false
            }

            if (!this.address.hasOwnProperty('postcode') || this.address.postcode == "") {
                return false
            }

            return true
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
        getCities(province_id) {
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
        getSubdistricts(city_id) {
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
    },
    created() {
        this.getProfile()
        this.getProvinces()
    }
}
</script>