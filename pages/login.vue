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
                                id="email"
                                ref="email"
                            />
                        </p>
                        <p class="col-12">
                            <label class="text">Password</label>
                            <input
                                type="password"
                                style="width:100%"
                                class="input-text"
                                v-model="password"
                                id="password"
                                ref="password"
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
            this.$swal({
                title: "Logging In...",
                // text: "Processing",
                allowEscapeKey: false,
                allowOutsideClick: false,
                onOpen: () => {
                    this.$swal.showLoading()
                },
            })

            this.$axios.post(`${process.env.API_BASE_URL}auth/login`, {
                email: this.email,
                password: this.password
            }).then((response) => {
                if (response.data.data != 0) {
                    this.$swal.close()
                    this.$store.dispatch('authentication/setAccessKey', response.data.data)

                    this.$cookies.set('key', response.data.data.key, {
                        path: '/',
                        maxAge: 60 * 60 * 24 * 7
                    })

                    this.$router.push('/')
                } else {
                    this.$swal({
                        title: "Oops!",
                        text: "Please re-check your email and password",
                        type: "warning",
                    })
                    .then(() => {
                        this.email = ""
                        this.password = ""
                    })
                }
            });
        },
    }
}
</script>