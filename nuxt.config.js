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
                href: 'https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i%7CLato:300,300i,400,400i,700,700i,900%7COpen+Sans:300,300i,400,400i,600,600i,700,700i,800',
            }
        ],
        script: [{
                src: 'assets/js/jquery-3.3.1.min.js'
            },
            {
                src: 'assets/js/bootstrap.min.js'
            },
            {
                src: 'assets/js/owl.carousel.min.js'
            },
            {
                src: 'assets/js/magnific-popup.min.js'
            },
            {
                src: 'assets/js/isotope.min.js'
            },
            {
                src: 'assets/js/jquery.mCustomScrollbar.min.js'
            },
            {
                src: 'assets/js/jquery-ui.min.js'
            },
            {
                src: 'assets/js/mobilemenu.js'
            },
            {
                src: 'assets/js/chosen.jquery.min.js'
            },
            {
                src: 'assets/js/slick.min.js'
            },
            {
                src: 'assets/js/jquery.elevateZoom.min.js'
            },
            {
                src: 'assets/js/jquery.actual.min.js'
            },
            {
                src: 'assets/js/jquery.fancybox.js'
            },
            {
                src: 'assets/js/lightbox.min.js'
            },
            {
                src: 'assets/js/jquery.mCustomScrollbar.min.js'
            },
            {
                src: 'assets/js/frontend-plugin.js'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
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
    plugins: [],
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
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // https://github.com/nuxt-community/dotenv-module
        ['@nuxtjs/dotenv', {
            filename: '.env'
        }]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.API_BASE_URL
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
