<template>

    <div>
        <!--wrap main content-->
        <div class="main-content main-content-checkout" style="margin-top:10%;">
            <div class="container">
                <!--checkout input form-->
                <div class="row">
                    <div class="col-md-4 col-md-offset-4 text-center">
                        <img src="~/assets/images/logo.png"><br /><br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <p class="col-12">
                            <label class="text">E-mail</label>
                            <input
                                type="text"
                                style="width:100%"
                                class="input-text"
                                v-model="email"
                                id="name"
                                ref="name"
                            />
                        </p>
                        <p class="col-12">
                            <label class="text">Password</label>
                            <input
                                type="password"
                                style="width:100%"
                                class="input-text"
                                v-model="email"
                                id="name"
                                ref="name"
                            />
                        </p>
                        <button class="button" @click="logIn">Log In</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    middleware: ['authorization'],
    methods: {
        logIn() {
            this.$axios.post(`${process.env.API_BASE_URL}auth/login`, {
                email: this.loginForm.email,
                password: this.loginForm.password
            }).then((response) => {
                // this.$store.dispatch("profile/updateProfile", {
                //     member_no: response.data.data.no_member,
                //     nik: response.data.data.nik,
                //     name: response.data.data.nama,
                //     birthdate: response.data.data.tgl_lahir,
                //     phone: response.data.data.telp,
                //     email: response.data.data.email
                // })
            });
        },
    },
    computed: {
        ...mapGetters(['userIsAuthorized'])
    }
}
</script>