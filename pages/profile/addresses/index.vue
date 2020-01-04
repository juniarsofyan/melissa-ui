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
                                                                        <nuxt-link :to="`/profile/addresses/${address.id}/edit`">
                                                                            <feather type="edit" size="1em"></feather>
                                                                            <b>Edit</b>
                                                                        </nuxt-link>
                                                                        <br>
                                                                        <a href="" v-if="address.is_default == 0">
                                                                            <b>Set as default</b>
                                                                        </a>
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

        <nuxt-link tag="a" :to="`/checkout`" class="backtocheckout" v-if="previousRoute == 'checkout'">
            <i class="pe-7s-angle-left"></i> 
            <span>Checkout</span>
        </nuxt-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    layout: 'products',
    middleware: ['accesskey', 'authorization'],
    data() {
        return {
            shipping_addresses: [],
            previousRoute: null
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.previousRoute = from.name
        })
    },
    computed: {
        ...mapGetters('authentication', ['user_data']),
        defaultShippingAddressAvailable: function() {
            let defaultAddressFound = this.shipping_addresses.find((address) => address.is_default == 1)

            if (defaultAddressFound) {
                return true
            }

            return false
        }
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

<style>
.backtocheckout {
     display: inline;
     width: 160px;
     height: 46px;
     font-size: 40px;
     /* font-weight: 600; */
     background: #333;
     border: 2px solid #f1f1f1;
     color: #fff;
     border-radius: 5px;
     position: fixed;
     bottom: 50px;
     left: 25px;
     text-align: left;
     line-height: 45px;
     z-index: 50;
}

.backtocheckout > span {
    font-size:20px;
}

.backtocheckout:hover {
    background: #fff;
    color: #333;
    border-color: #333;
}
</style>