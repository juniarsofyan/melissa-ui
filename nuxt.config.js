/* eslint-disable prettier/prettier */
require('dotenv').config()

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i%7CLato:300,300i,400,400i,700,700i,900%7COpen+Sans:300,300i,400,400i,600,600i,700,700i,800'
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
                integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
                crossorigin: 'anonymous'
            }
        ],
        script: [{
                src: process.env.BASE_URL + 'assets/js/jquery-3.3.1.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/bootstrap.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/owl.carousel.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/magnific-popup.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/isotope.min.js'
            },
            {
                src: process.env.BASE_URL +
                    'assets/js/jquery.mCustomScrollbar.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/jquery-ui.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/mobilemenu.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/chosen.jquery.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/slick.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/jquery.elevateZoom.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/jquery.actual.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/jquery.fancybox.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/lightbox.min.js'
            },
            {
                src: process.env.BASE_URL +
                    'assets/js/jquery.mCustomScrollbar.min.js'
            },
            {
                src: process.env.BASE_URL + 'assets/js/frontend-plugin.js'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async (hash, x) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1))
                        }, 100)
                    })
                )
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({
                        top: el.offsetTop,
                        behavior: 'smooth'
                    })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return {
                x: 0,
                y: 0
            }
        }
    },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/font-awesome.min.css',
        '@/assets/css/owl.carousel.min.css',
        '@/assets/css/animate.min.css',
        '@/assets/css/jquery-ui.css',
        '@/assets/css/slick.css',
        '@/assets/css/chosen.min.css',
        '@/assets/css/pe-icon-7-stroke.css',
        '@/assets/css/magnific-popup.min.css',
        '@/assets/css/lightbox.min.css',
        '@/assets/css/jquery.fancybox.css',
        '@/assets/css/jquery.mCustomScrollbar.min.css',
        '@/assets/css/style.css',
        '@/assets/css/style-custom.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // { src: '~/plugins/vue-carousel.js', },
        {
            src: '~/plugins/slick.js',
            ssr: false
        },
        {
            src: '~/plugins/currency.js',
            ssr: false
        }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // https://github.com/nuxt-community/dotenv-module
        [
            '@nuxtjs/dotenv',
            {
                filename: '.env'
            }
        ]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.API_BASE_URL
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: process.env.AUTH_BASE_URL + 'api/login',
                        method: 'post',
                        propertyName: 'meta.token'
                    },
                    user: {
                        url: process.env.AUTH_BASE_URL + 'api/user',
                        method: 'get',
                        propertyName: 'data'
                    },
                    logout: {
                        url: process.env.AUTH_BASE_URL + 'api/logout',
                        method: 'post'
                    }
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}