let items = window.localStorage.getItem('items')

const cart = {
    namespaced: true,
    state: {
        items: items ? JSON.parse(items) : []
    },
    mutations: {
        addItem(state, item) { // state.items.push(item)
            let item_exists = state.items.find(product => product.product_code == item.kode_barang)

            if (item_exists) {
                item_exists.qty = parseInt(item_exists.qty) + parseInt(item.qty)
                item_exists.subtotal = parseInt(item_exists.qty) * parseInt(item_exists.price)
                item_exists.grand_total = parseInt(item_exists.grand_total) + parseInt(item.price_discount) * parseInt(item.qty)
                item_exists.total_weight = item_exists.qty * item_exists.weight
            } else {
                let product = {
                    product_code: item.kode_barang,
                    product_name: item.nama,
                    weight: item.berat,
                    price: parseInt(item.harga),
                    price_bonus_calculation: item.h_hpb,
                    discount: item.diskon,
                    price_discount: parseInt(item.harga_diskon),
                    qty: parseInt(item.qty),
                    subtotal: parseInt(item.harga) * parseInt(item.qty),
                    grand_total: parseInt(item.harga_diskon) * parseInt(item.qty),
                    total_weight: parseInt(item.qty) * item.berat,
                    image: item.pic,
                    unit: item.unit,
                    category: item.jenis,
                    picture: item.pic ? item.pic : "",
                    note: item.note ? item.note : ""
                }

                state.items.push(product)
            }

            window.localStorage.setItem('items', JSON.stringify(state.items))
        },
        removeItem(state, product_code) {
            let item = state.items.find(product => product.product_code == product_code)

            if (item) {
                let index = state.items.indexOf(item)
                state.items.splice(index, 1)
            }

            window.localStorage.setItem('items', JSON.stringify(state.items))
        }
    },
    getters: {
        items(state) {
            return state.items
        },
        count(state) {
            return state.items.reduce((accumulator, item) => accumulator + parseInt(item.qty), 0)
        },
        subtotal(state) {
            return state.items.reduce((accumulator, item) => accumulator + parseInt(item.subtotal), 0)
        }
    },
    actions: {
        addItem(
            {
                state,
                commit
            },
            payload
        ) {
            commit('addItem', payload)
        },
        removeItem(
            {
                state,
                commit
            },
            payload
        ) {
            commit('removeItem', payload)
        }
    }
}

export default cart
