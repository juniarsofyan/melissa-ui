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
                                <div class="col-md-12">
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
                                                        <div>
                                                            <div class="table-container" role="table" aria-label="Destinations">
                                                                <div class="flex-table header" role="rowgroup">
                                                                    <div class="flex-row first header" role="columnheader">Penerima</div>
                                                                    <div class="flex-row header" role="columnheader">Alamat Pengiriman</div>
                                                                    <div class="flex-row header" role="columnheader">Daerah Pengiriman</div>
                                                                    <div class="flex-row header text-right" role="columnheader">Actions</div>
                                                                </div>
                                                                <div v-for="address in shipping_addresses" :key="address.id" class="flex-table" role="rowgroup">
                                                                    <div class="flex-row first" role="cell">
                                                                        <div>
                                                                            <!-- <input type="radio" name="address_default" id=""> -->
                                                                            <div>
                                                                                <b>{{ address.nama }}</b>
                                                                                <div>
                                                                                    {{ address.telepon }}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-row" role="cell">
                                                                        {{ address.alamat }}, {{ address.kecamatan_nama }}. {{ address.kota_nama }}
                                                                    </div>
                                                                    <div class="flex-row" role="cell">
                                                                        {{ address.provinsi_nama }}, {{ address.kota_nama }}, {{ address.kecamatan_nama }} {{ address.kode_pos }}
                                                                    </div>
                                                                    <div class="flex-row text-right" role="cell">
                                                                        <!-- <nuxt-link :to="`/profile/addresses/${address.id}/edit`" tag="button">Edit</nuxt-link> -->
                                                                        <nuxt-link :to="`/profile/addresses/${address.id}/edit`">Edit</nuxt-link>
                                                                        <br>
                                                                        <a href="" v-if="address.is_default == 0">Set as default</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-else class="text-center">
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
    created() {
        this.getShippingAddresses()
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
        }
    }
}
</script>