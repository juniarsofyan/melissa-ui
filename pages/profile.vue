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
                                <a data-toggle="tab" aria-expanded="true" href="#profil">My Profile</a>
                            </li>
                            <li>
                                <a
                                    data-toggle="tab"
                                    aria-expanded="true"
                                    href="#semua "
                                >Address Book</a>
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
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Nama</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.name"
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Tanggal Lahir</label>
                                                        <input
                                                            type="date"
                                                            style="width:100%"
                                                            class="form-control"
                                                            v-model="profile.birthdate"
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Telepon</label>
                                                        <input
                                                            type="text"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.phone"
                                                        />
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Email</label>
                                                        <input
                                                            type="email"
                                                            style="width:100%"
                                                            class="input-text"
                                                            v-model="profile.email"
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
                                                            v-model="address_form.nama"
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
                                                            v-model="address_form.provinsi"
                                                        >
                                                            <option disabled selected>- Choose Province -</option>

                                                            {{ provinces }}
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
                                                            v-model="address_form.kota_id"
                                                        >
                                                            <option value="United States">London</option>
                                                            <option value="United Kingdom">tokyo</option>
                                                            <option value="Afghanistan">Seoul</option>
                                                            <option
                                                                value="Aland Islands"
                                                            >Mexico city</option>
                                                            <option value="Albania">Mumbai</option>
                                                            <option value="Algeria">Delhi</option>
                                                            <option value="American Samoa">New York</option>
                                                            <option value="Andorra">Jakarta</option>
                                                            <option value="Angola">Sao Paulo</option>
                                                            <option value="Anguilla">Osaka</option>
                                                            <option value="Antarctica">Karachi</option>
                                                            <option
                                                                value="Antigua and Barbuda"
                                                            >Matx-cơ-va</option>
                                                            <option value="Argentina">Toronto</option>
                                                            <option value="Armenia">Boston</option>
                                                        </select>
                                                    </p>

                                                    <p class="col-12">
                                                        <label class="text">Subdisctrict</label>
                                                        <br />
                                                        <select
                                                            style="width:100%;"
                                                            data-placeholder="London"
                                                            class="form-control"
                                                            tabindex="1"
                                                            v-model="address_form.kecamatan_id"
                                                        >
                                                            <option value="United States">London</option>
                                                            <option value="United Kingdom">tokyo</option>
                                                            <option value="Afghanistan">Seoul</option>
                                                            <option
                                                                value="Aland Islands"
                                                            >Mexico city</option>
                                                            <option value="Albania">Mumbai</option>
                                                            <option value="Algeria">Delhi</option>
                                                            <option value="American Samoa">New York</option>
                                                            <option value="Andorra">Jakarta</option>
                                                            <option value="Angola">Sao Paulo</option>
                                                            <option value="Anguilla">Osaka</option>
                                                            <option value="Antarctica">Karachi</option>
                                                            <option
                                                                value="Antigua and Barbuda"
                                                            >Matx-cơ-va</option>
                                                            <option value="Argentina">Toronto</option>
                                                            <option value="Armenia">Boston</option>
                                                        </select>
                                                    </p>

                                                    <p class="col-12">
                                                        <label class="text">Alamat</label>
                                                        <textarea
                                                            class="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            v-model="address_form.alamat"
                                                        ></textarea>
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Kode Pos</label>
                                                        <input
                                                            type="number"
                                                            style="width:100%"
                                                            class="form-control"
                                                            v-model="address_form.kode_pos"
                                                        />
                                                    </p>

                                                    <nuxt-link to="#" class="button">Simpan</nuxt-link>
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
                                >Add New Address</a>
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
                                                <br />sdfsdfsdf
                                                <br />
                                                {{ address.telp }}
                                            </p>
                                        </div>
                                        <div class="col-lg-3">
                                            <a
                                                class="button single_add_to_cart_button"
                                                data-toggle="tab"
                                                aria-expanded="true"
                                                href="#buat-baru"
                                                @click="editAddress(address)"
                                            >Edit</a>
                                            <a
                                                class="button single_add_to_cart_button"
                                                data-toggle="tab"
                                                aria-expanded="true"
                                                @click="deleteAddress(address.id)"
                                            >Delete</a>
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
    middleware: 'authentication',
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
    methods: {
        async updateProfile() {
            await this.$axios.post(
                `${process.env.API_BASE_URL}profile/update`,
                {
                    nik: this.profile.nik,
                    name: this.profile.name,
                    birthdate: this.profile.birthdate,
                    phone: this.profile.phone,
                    email: this.profile.email
                }
            )

            await this.$axios
                .post(`${process.env.API_BASE_URL}profile/get`, {
                    email: this.profile.email
                })
                .then((response) => {
                    this.$store.dispatch('profile/updateProfile', {
                        member_no: response.data.data.no_member,
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
                email: window.localStorage.getItem('email')
            })
            .then((response) => {
                this.profile =  {
                    member_no: response.data.data.no_member,
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
        editAddress(address) {
            this.address_form = address
            this.getRegionalData()
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
                                // this.$store.commit("resetShippingPreferences")
                            }
                        })
                        .catch(e => {
                            console.log(e)

                            this.$swal({
                                // title: "",
                                text:
                                    "Cannot connect to the server, please try again later",
                                type: "error",
                                onOpen: () => {
                                    this.$swal.hideLoading()
                                },
                            })
                        })
                }
            })
        },
        async getRegionalData() {
            this.provinces = await this.$axios.get(`ongkir/provinces`)
                .then(response => {
                    if (response.data.data != 0) {
                        this.provinces = response.data.data
                        console.log(this.provinces)
                    } else {
                        this.provinces = []
                    }
                })
                .catch(e => {
                    console.log(e)
                })

            this.cities = await this.$axios.get(`ongkir/province/` + this.address_form.province_id + `/cities`)
                .then(response => {
                    if (response.data.data != 0) {
                        var cities = response.data.data
                        var data = []

                        for (var city in cities) {
                            data.push({
                                city_id: cities[city].city_id,
                                city_name:
                                    cities[city].type +
                                    " " +
                                    cities[city].city_name,
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

            this.subdistricts = await this.$axios.get(`ongkir/city/` + this.address_form.kota_id + `/subdistricts`)
                .then(response => {
                    if (response.data.data != 0) {
                        var subdistricts = response.data.data

                        var data = []
                        for (var subdistrict in subdistricts) {
                            data.push({
                                subdistrict_id:
                                    subdistricts[subdistrict].subdistrict_id,
                                subdistrict_name:
                                    subdistricts[subdistrict].subdistrict_name,
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
        getCities: function(province_id) {
            this.$axios.get( this.$store.getters.api_url + `ongkir/province/` + province_id + `/cities` )
                .then(response => {
                    if (response.data.data != 0) {
                        var cities = response.data.data
                        var data = []

                        for (var city in cities) {
                            data.push({
                                city_id: cities[city].city_id,
                                city_name:
                                    cities[city].type +
                                    " " +
                                    cities[city].city_name,
                            })
                        }
                        this.sa_city_options = data
                    } else {
                        this.sa_city_options = []
                    }
                })
                .catch(e => {
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
        getSubdistricts: function(city_id) {
            this.$axios.get( this.$store.getters.api_url + `ongkir/city/` + city_id + `/subdistricts` )
                .then(response => {
                    if (response.data.data != 0) {
                        var subdistricts = response.data.data

                        var data = []
                        for (var subdistrict in subdistricts) {
                            data.push({
                                subdistrict_id:
                                    subdistricts[subdistrict].subdistrict_id,
                                subdistrict_name:
                                    subdistricts[subdistrict].subdistrict_name,
                            })
                        }
                        this.sa_subdistrict_options = data
                    } else {
                        this.sa_subdistrict_options = []
                    }
                })
                .catch(e => {
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
    },
    created() {
        this.getProfile()
    },
}
</script>