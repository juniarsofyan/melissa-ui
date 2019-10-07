<template>
    <!--wrap main content-->
    <div class="main-content main-content-checkout">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <hr />
                    <div class="tab-details-product" style="margin-bottom:30px;margin-top:0px;">
                        <ul class="tab-link">
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
                        </ul>

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
                                                        <label class="text">No KTP</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.nik"
                                                            id="nik"
                                                            ref="nik"
                                                        />
                                                    </p>
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
                            <div id="buat-baru" class="tab-panel">
                                <div class="col-md-10 col-md-offset-1">
                                    <a
                                        class="button single_add_to_cart_button"
                                        data-toggle="tab"
                                        aria-expanded="true"
                                        href="#semua"
                                    >
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; Back to List
                                    </a>
                                    <br />
                                    <br />
                                    <div class="shipping-address-form-wrapp">
                                        <div
                                            class="shipping-address-form checkout-form"
                                            style="padding: 35px 27px 20px 27px !important; border:0px;"
                                        >
                                            <div class="col-12">
                                                <div class="shipping-address">
                                                    <p class="col-12">
                                                        <label class="text">Name</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="address_form.name"
                                                        />
                                                    </p>

                                                    <p class="col-12">
                                                        <label class="text">Phone</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="address_form.phone"
                                                        />
                                                    </p>

                                                    <p class="col-12">
                                                        <label class="text">Provinsi</label>
                                                        <br />
                                                        <select
                                                            style="width:100%;"
                                                            data-placeholder="London"
                                                            class="form-control"
                                                            tabindex="1"
                                                            v-model="address_form.province"
                                                        >
                                                            <option disabled selected>- Choose Province -</option>
                                                            <option
                                                                v-for="province in provinces"
                                                                :key="province.province_id"
                                                                :value="province"
                                                                :selected="province.province_id === address_form.provinsi_id"
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
                                                            class="form-control"
                                                            tabindex="1"
                                                            v-model="address_form.city"
                                                        >
                                                            <option disabled selected>- Choose City -</option>
                                                            <option
                                                                v-for="city in cities"
                                                                :key="city.city_id"
                                                                :value="city"
                                                                :selected="city.city_id === address_form.city_id"
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
                                                            class="form-control"
                                                            tabindex="1"
                                                            v-model="address_form.subdistrict"
                                                        >
                                                            <option disabled selected>- Choose City -</option>
                                                            <option
                                                                v-for="subdistrict in subdistricts"
                                                                :key="subdistrict.subdistrict_id"
                                                                :value="subdistrict"
                                                                :selected="subdistrict.subdistrict_id === address_form.subdistrict_id"
                                                            >{{ subdistrict.subdistrict_name }}
                                                            </option>
                                                        </select>
                                                    </p>

                                                    <p class="col-12">
                                                        <label class="text">Alamat</label>
                                                        <textarea
                                                            class="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            v-model="address_form.address"
                                                        ></textarea>
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Kode Pos</label>
                                                        <input
                                                            type="number"
                                                            style="width:100%"
                                                            class="form-control"
                                                            v-model="address_form.postcode"
                                                        />
                                                    </p>

                                                    <button class="button" @click="addNewAddress()">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="semua" class="tab-panel">
                                <a
                                    class="button single_add_to_cart_button"
                                    data-toggle="tab"
                                    aria-expanded="true"
                                    href="#buat-baru"
                                ><i class="fa fa-plus">&nbsp;</i> Add new address</a>
                                <br />

                                <hr />
                                <div class="per-item" v-for="address in shipping_addresses" :key="address.id">
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <p>
                                                <b>{{ address.nama }}</b>
                                                <br />
                                                {{ address.alamat }}
                                                <br />
                                                {{ address.kecamatan_nama }}
                                                <br />
                                                {{ address.kota_nama }}
                                                <br />
                                                {{ address.kode_pos }}
                                                <br />
                                                <br />
                                                {{ address.telp }}
                                            </p>
                                        </div>
                                        <div class="col-lg-3">
                                            <button
                                                class="btn btn-success btn-xs"
                                                data-toggle="tab"
                                                aria-expanded="true"
                                                href="#buat-baru"
                                                title="Set as default address"
                                                @click="setDefaultAddress(address.id)"
                                                v-if="address.is_default != 1"
                                            ><i class="fa fa-check"></i></button>
                                            <!-- <button
                                                class="btn btn-info btn-xs"
                                                data-toggle="tab"
                                                aria-expanded="true"
                                                href="#buat-baru"
                                                title="Edit address"
                                                @click="editAddress(address)"
                                            ><i class="fa fa-pencil"></i></button> -->
                                            <button
                                                class="btn btn-danger btn-xs"
                                                data-toggle="tab"
                                                aria-expanded="true"
                                                title="Delete address"
                                                @click="deleteAddress(address.id)"
                                            ><i class="fa fa-trash"></i></button>
                                        </div>
                                    </div>
                                    <hr />
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
    middleware: ['authentication', 'traffics'],
    layout: 'products',
    data() {
        return {
            // profile: this.$store.getters['profile/personal']
            profile: [],
            shipping_addresses: [],
            address_form : {},
            provinces: [],
            cities: [],
            subdistricts: []
        }
    },
    watch: {
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
            await this.$axios.post(`${process.env.API_BASE_URL}profile/update`, {
                    nik: this.profile.nik,
                    name: this.profile.name,
                    birthdate: this.profile.birthdate,
                    phone: this.profile.phone,
                    email: this.profile.email
                }
            )

            await this.$axios.post(`${process.env.API_BASE_URL}profile/get`, {
                    email: this.profile.email
                })
                .then((response) => {
                    this.$store.dispatch('profile/updateProfile', {
                        nik: response.data.data.nik,
                        name: response.data.data.nama,
                        birthdate: response.data.data.tgl_lahir,
                        phone: response.data.data.telp,
                        email: response.data.data.email
                    })
                })
        },
        getProfile() {
            this.$axios.post(`${process.env.API_BASE_URL}profile/get`, {
                // email: window.localStorage.getItem('email')
                email: this.email
            })
            .then((response) => {
                
                this.profile =  {
                    nik: response.data.data.nik,
                    name: response.data.data.nama,
                    birthdate: response.data.data.tgl_lahir,
                    phone: response.data.data.telepon,
                    email: response.data.data.email
                }

                this.getShippingAddresses()
            })
        },
        getShippingAddresses() {
            this.$axios.post(`${process.env.API_BASE_URL}shipping-address/get`, {
                email: window.localStorage.getItem('email')
            })
            .then((response) => {
                this.shipping_addresses = response.data.data
            })
        },
        addNewAddress(address) {
            // this.address_form = address

            if (this.validateAddress()) {

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
                    postcode : this.address_form.postcode
                }).then(response => {
                        if (response.data.data == 1) {
                            
                            this.address_form = []

                            this.$swal({
                                // title: "",
                                text: "Shipping address added!",
                                type: "success",
                            }).then(response => {

                                this.$router.push('/profile')
                                window.location.reload()

                                /* if (this.previous_route.name == "checkout") {
                                    this.$router.push({
                                        name: "checkout",
                                    })
                                } */
                            })

                            this.getShippingAddresses()
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                alert('lalsd')
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
                alert('city')
                return false
            }

            if (!this.address_form.hasOwnProperty('subdistrict') || this.address_form.subdistrict == "") {
                alert('subdistrict')
                return false
            }

            if (!this.address_form.hasOwnProperty('address') || this.address_form.address == "") {
                alert('address')
                return false
            }

            if (!this.address_form.hasOwnProperty('postcode') || this.address_form.postcode == "") {
                alert('postcode')
                return false
            }

            return true
        },
        setDefaultAddress: function(shipping_address_id) {
            this.$swal({
                // title: "",
                text: "Saving",
                allowEscapeKey: false,
                allowOutsideClick: false,
                onOpen: () => {
                    this.$swal.showLoading()
                },
            })

            this.$axios.get(`shipping-address/set-default/${shipping_address_id}`)
                .then(response => {
                    if (response.data.data == 1) {
                        this.$swal({
                            // title: "",
                            text: "Default address set!",
                            type: "success",
                        }).then(response => {
                            /* if (this.previous_route.name == "checkout") {
                                this.$router.push({
                                    name: "checkout",
                                })
                            } */

                            this.$router.push('/profile')
                            window.location.reload()
                        })

                        this.getShippingAddresses()
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        },
        deleteAddress(address_id) {
            this.$swal({
                // title: "",
                text: "Are you sure want to delete this address?",
                type: "question",
                showCancelButton: true,
                // confirmButtonClass: "btn-danger",
                confirmButtonColor: "#d33",
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel",
                cancelButtonColor: "#3085d6",
            }).then(isConfirm => {
                if (isConfirm.value) {
                    this.$swal({
                        // title: "",
                        text: "Deleteting",
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        onOpen: () => {
                            this.$swal.showLoading()
                        },
                    })

                    this.$axios.get(`shipping-address/delete/` + address_id)
                        .then(response => {
                            if (response.data.data == 1) {
                                this.$swal({
                                    // title: "",
                                    text: "Address deleted!",
                                    type: "success",
                                })

                                this.getShippingAddresses()
                            }
                        })
                        .catch(e => {
                            console.log(e)

                            this.$swal({
                                // title: "",
                                text: "Cannot connect to the server, please try again later",
                                type: "error",
                                onOpen: () => {
                                    this.$swal.hideLoading()
                                },
                            })
                        })
                }
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
    },
    created() {
        this.getProfile()
        this.getProvinces()
    }
}
</script>