<template>
    <!--wrap main content-->
    <div class="main-content main-content-checkout">

        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <div class="checkout-wrapp">
                        <div class="shipping-address-form-wrapp">

                            <div class="shipping-address-form  checkout-form"
                                style="padding: 35px 27px 20px 27px !important;">

                                <div class="col-12">
                                    <div class="shipping-address">
                                        <h3 class="title-form text-center">Profile</h3>
                                        <p class="col-12">
                                            <label class="text">No KTP</label>
                                            <input type="text" style="width:100%" class="input-text">
                                        </p>


                                        <p class="col-12">
                                            <label class="text">Nama</label>
                                            <input type="text" style="width:100%" class="input-text">
                                        </p>


                                        <p class="col-12">
                                            <label class="text">Tanggal Lahir</label>
                                            <input type="date" style="width:100%" class="form-control">
                                        </p>

                                        <p class="col-12">
                                            <label class="text">Telepon</label>
                                            <input type="text" style="width:100%" class="input-text">
                                        </p>

                                        <p class="col-12">
                                            <label class="text">Email</label>
                                            <input type="email" style="width:100%" class="input-text">
                                        </p>


                                        <nuxt-link to="#" class="button ">Simpan</nuxt-link>

                                    </div>
                                </div>



                            </div>



                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <h3 class=" text-center">Alamat Pengiriman</h3>
                    <div class="tab-details-product" style="margin-bottom:30px;margin-top:0px;">
                        <ul class="tab-link">
                            <li class="active">
                                <a data-toggle="tab" aria-expanded="true" href="#buat-baru">Buat Baru </a>
                            </li>
                            <li class>
                                <a data-toggle="tab" aria-expanded="true" href="#semua ">Semua</a>
                            </li>
                        </ul>
                        <div class="tab-container">

                            <div id="buat-baru" class="tab-panel active">
                                <div class="checkout-wrapp">
                                    <div class="shipping-address-form-wrapp">

                                        <div class="shipping-address-form  checkout-form"
                                            style="padding: 35px 27px 20px 27px !important;">

                                            <div class="col-12">
                                                <div class="shipping-address">




                                                    <p class="col-12">
                                                        <label class="text">Nama</label>
                                                        <input type="text" style="width:100%" class="input-text">
                                                    </p>
                                              
                                                    <p class="col-12">
                                                        <label class="text">Provinsi</label><br>
                                                        <select style="width:100%;" data-placeholder="London" class="form-control"
                                                            tabindex="1">
                                                            <option value="United States">London</option>
                                                            <option value="United Kingdom">tokyo</option>
                                                            <option value="Afghanistan">Seoul</option>
                                                            <option value="Aland Islands">Mexico city</option>
                                                            <option value="Albania">Mumbai</option>
                                                            <option value="Algeria">Delhi</option>
                                                            <option value="American Samoa">New York</option>
                                                            <option value="Andorra">Jakarta</option>
                                                            <option value="Angola">Sao Paulo</option>
                                                            <option value="Anguilla">Osaka</option>
                                                            <option value="Antarctica">Karachi </option>
                                                            <option value="Antigua and Barbuda">Matx-cơ-va</option>
                                                            <option value="Argentina">Toronto </option>
                                                            <option value="Armenia">Boston </option>
                                                        </select>
                                                    </p>

                                                     <p class="col-12">
                                                        <label class="text">Kota</label><br>
                                                        <select style="width:100%;" data-placeholder="London" class="form-control"
                                                            tabindex="1">
                                                            <option value="United States">London</option>
                                                            <option value="United Kingdom">tokyo</option>
                                                            <option value="Afghanistan">Seoul</option>
                                                            <option value="Aland Islands">Mexico city</option>
                                                            <option value="Albania">Mumbai</option>
                                                            <option value="Algeria">Delhi</option>
                                                            <option value="American Samoa">New York</option>
                                                            <option value="Andorra">Jakarta</option>
                                                            <option value="Angola">Sao Paulo</option>
                                                            <option value="Anguilla">Osaka</option>
                                                            <option value="Antarctica">Karachi </option>
                                                            <option value="Antigua and Barbuda">Matx-cơ-va</option>
                                                            <option value="Argentina">Toronto </option>
                                                            <option value="Armenia">Boston </option>
                                                        </select>
                                                    </p>

                                                     <p class="col-12">
                                                        <label class="text">Kecamatan</label><br>
                                                        <select style="width:100%;" data-placeholder="London" class="form-control"
                                                            tabindex="1">
                                                            <option value="United States">London</option>
                                                            <option value="United Kingdom">tokyo</option>
                                                            <option value="Afghanistan">Seoul</option>
                                                            <option value="Aland Islands">Mexico city</option>
                                                            <option value="Albania">Mumbai</option>
                                                            <option value="Algeria">Delhi</option>
                                                            <option value="American Samoa">New York</option>
                                                            <option value="Andorra">Jakarta</option>
                                                            <option value="Angola">Sao Paulo</option>
                                                            <option value="Anguilla">Osaka</option>
                                                            <option value="Antarctica">Karachi </option>
                                                            <option value="Antigua and Barbuda">Matx-cơ-va</option>
                                                            <option value="Argentina">Toronto </option>
                                                            <option value="Armenia">Boston </option>
                                                        </select>
                                                    </p>


                                                    <p class="col-12">
                                                        <label class="text">Alamat</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                                            rows="3"></textarea>
                                                    </p>
                                                    <p class="col-12">
                                                        <label class="text">Kode Pos</label>
                                                        <input type="number" style="width:100%" class="form-control">
                                                    </p>




                                                    <nuxt-link to="#" class="button ">Simpan</nuxt-link>

                                                </div>
                                            </div>



                                        </div>



                                    </div>

                                </div>
                            </div>
                            <div id="semua" class="tab-panel">
                                <div class="per-item">
                                    <p>
                                        <b>Alamat rumah </b><br>
                                        jl.peta bandung no 15. <br>
                                        084232
                                    </p>
                                    <hr>
                                    <p>
                                        <b>Alamat rumah </b><br>
                                        jl.peta bandung no 15. <br>
                                        084232
                                    </p>
                                    <hr>
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
    import CartItem from '~/components/CartItem.vue'

    export default {
        layout: 'products',
        components: {
            CartItem
        }
    }
</script>