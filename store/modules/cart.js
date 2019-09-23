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
                item_exists.subtotal = item_exists.qty * item_exists.price
                item_exists.grand_total = item_exists.grand_total + item.price_discount * item.qty
                item_exists.total_weight = item_exists.qty * item_exists.weight
            } else {
                let product = {
                    product_code: item.kode_barang,
                    product_name: item.nama,
                    weight: item.berat,
                    price: item.harga,
                    price_bonus_calculation: item.h_hpb,
                    discount: item.diskon,
                    price_discount: item.harga_diskon,
                    qty: item.qty,
                    subtotal: item.price * item.qty,
                    grand_total: item.harga_diskon * item.qty,
                    total_weight: item.qty * item.berat,
                    image: item.pic,
                    unit: item.unit,
                    note: item.note ? item.note : ""
                }

                state.items.push(product)
            }

            window.localStorage.setItem('items', JSON.stringify(state.items))
        }
    },
    getters: {
        items(state) {
            return state.items
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
        }
    }
}

export default cart
