<template>
    <!--wrap main content-->
    <div class="main-content main-content-checkout">
        <div class="container">
            <div class="row">

                        <div class="tab-container">
                            <div id="profil" class="tab-panel active">
                                <div class="col-md-12">
                                    <div class="shipping-address-form-wrapp">
                                        <div
                                            class="shipping-address-form checkout-form"
                                            style="padding: 35px 27px 20px 27px !important; border:0px;"
                                        >
                                            <div class="col-md-12">
                                                <div class="shipping-address">
                                                    <!-- <nuxt-link :to="`/profile`">My Profile</nuxt-link> |
                                                    <nuxt-link :to="`/profile/addresses`">Addresses list</nuxt-link> |
                                                    <nuxt-link :to="`/profile/addresses/add`">Add New address</nuxt-link> -->

                                                    <div class="tab-base mt-4" id="tab-program">
                                                        <ul class="nav nav-justified nav-base" id="tab" role="tablist">
                                                            <li class="nav-item">
                                                                    <nuxt-link class="nav-link py-3" id="detail-tab" data-toggle="tab"
                                                                    role="tab" aria-controls="detail" aria-selected="true" :to="`/profile`">My Profile</nuxt-link>
                                                            </li>
                                                            <li class="nav-item">
                                                                <nuxt-link class="nav-link py-3" id="detail-tab" data-toggle="tab"
                                                                role="tab" aria-controls="detail" aria-selected="true" :to="`/profile/addresses`">Addresses list</nuxt-link>
                                                            </li>
                                                            <li class="nav-item">
                                                                <nuxt-link class="nav-link py-3" id="detail-tab" data-toggle="tab"
                                                                role="tab" aria-controls="detail" aria-selected="true" :to="`/profile/addresses/add`">Add New address</nuxt-link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br/><br/>

                                                    <div class="row">
                                                        <div class="col-md-12">
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
                                                            <div class="text-left" style="margin-top: 2em">
                                                                <button class="button" @click="updateProfile">Save Profile</button>
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
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    layout: 'products',
    middleware: ['accesskey', 'authorization'],
    data() {
        return {
            profile: []
        }
    },
    watch: {
        'email': {
            handler(val) {
                if (val) {
                    this.getProfile()
                }
            }
        }
    },
    computed: {
        ...mapGetters('authentication', ['email'])
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
                    name: response.data.data.nama,
                    birthdate: response.data.data.tgl_lahir,
                    phone: response.data.data.telepon,
                    email: response.data.data.email
                }
            })
        },
    },
    created() {
        this.getProfile()
    }
}
</script>