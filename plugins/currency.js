import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('rupiah', function (value) {
    return "IDR " + numeral(value).format("0,0").replace(",", ".");
})
