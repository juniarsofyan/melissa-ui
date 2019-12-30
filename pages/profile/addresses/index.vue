<template>
    <!--wrap main content-->
    <div class="main-content main-content-checkout">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
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
                                                    <nuxt-link :to="`/profile`">My Profile</nuxt-link> |
                                                    <nuxt-link :to="`/profile/addresses`">Addresses list</nuxt-link> |
                                                    <nuxt-link :to="`/profile/addresses/add`">Add New addresses</nuxt-link>
                                                    <br/><br/>

                                                    <div v-if="shipping_addresses.length > 0">
                                                        <div v-for="address in shipping_addresses" :key="address.id">
                                                            <!-- Id : {{ address.id }} <br/> -->
                                                            Nama : {{ address.nama }} <br/>
                                                            Telepon : {{ address.telepon }} <br/>
                                                            Provinsi : {{ address.provinsi_nama }} <br/>
                                                            Kota : {{ address.kota_nama }} <br/>
                                                            Kecamatan : {{ address.kecamatan_nama }} <br/>
                                                            Alamat : {{ address.alamat }} <br/>
                                                            Kode pos : {{ address.kode_pos }} <br/>
                                                            Is default? : {{ address.is_default }} <br/>
                                                            <nuxt-link :to="`/profile/addresses/${address.id}/edit`" tag="button">Edit</nuxt-link> 
                                                            <button v-if="address.is_default == 0" @click="setDefaultShippingAddress(address.id)">Set as default</button><br/>
                                                            <br/>
                                                        </div>
                                                    </div>
                                                    <div class="text-center" v-else>
                                                        <img src="~/assets/images/svg/no-addresses.svg" style="width:200px;" /><br/><br/>
                                                            <b><h3>Oops...</h3></b>
                                                            You have no shipping address. Click <nuxt-link to="/profile/addresses/add" style="color:pink;"> <b>here</b> </nuxt-link> to add new.
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
            shipping_addresses: []
        }
    },
    computed: {
        ...mapGetters('authentication', ['user_data'])
    },
    methods: {
        getShippingAddresses() {
            this.$axios.post(`shipping-address/all`, {
                email: this.user_data.email
            }).then(response => {
                if (response.data.data != 0) {
                    this.shipping_addresses = response.data.data
                }
            })
            .catch(e => {
                console.log(e)
            })
        },
        async setDefaultShippingAddress(id) {
            this.$swal({
                // title: "Saving address",
                text: "Setting as default",
                allowEscapeKey: false,
                allowOutsideClick: false,
                onOpen: () => {
                    this.$swal.showLoading()
                },
            })

            await this.$axios.post(`shipping-address/set-default`, {
                id: id
            }).then(response => {
                if (response.data.data == 1) {
                    this.$swal({
                        // title: "",
                        text: "Default shipping address set!",
                        type: "success",
                    }).then(() => {
                        this.getShippingAddresses()
                    })
                }
            })
            .catch(e => {
                console.log(e)
                this.$swal({
                    title: "Oops..",
                    text: "Cannot connect to the server, Please try again later",
                    type: "error",
                    onOpen: () => {
                        this.$swal.hideLoading()
                    },
                })
            })
        },
    },
    created() {
        this.getShippingAddresses()
    }
}
</script>