<template>
	<ul class="row list-products auto-clear equal-container product-list">
		<li class="product-item style-list col-lg-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ts-12">

			<div class="card" style="border-radius:5px;" v-for="order in order_histories" :key="order.transaction.transaksi_id">
				<br /><br />
				
				<b>Order number: {{ order.transaction.nomor_transaksi }} </b>

				<OrderBreadcrumb :progresses="order.progresses" />

				<div class="row">
					<div class="col-md-4">
						<div class="row" v-for="item in order.items" :key="item.kode_barang">
							<div class="col-md-6">
								<img :src="`${$axios.defaults.baseURL}assets/img/thumbnails/${item.pic}.jpg`">
							</div>

							<div class="col-md-6">
								<b>Description </b><br />
								Item : {{ item.nama }} <br/>
								Code: {{ item.kode_barang }} <br />
								Qty : {{ item.qty }}
							</div>
						</div>
					</div>

					<div class="col-md-8">
						<div class="row">
							<div class="col-md-4">
								<b> SPB: </b> <br />
								Bandung, Lengkong
							</div>

							<div class="col-md-4">
								<b>Ship to:</b> <br />
								<u>{{ order.transaction.nama }}</u> <br />
								{{ order.transaction.alamat }} <br />
								{{ order.transaction.provinsi_nama }} <br />
								{{ order.transaction.kota_nama }} <br />
								{{ order.transaction.kecamatan_nama }} <br />
								{{ order.transaction.kode_pos }} <br /> 
							</div>
							<div class="col-md-4">
								<b>Grand Total:</b> <br />
								{{ order.transaction.grand_total | rupiah }} <br /><br />
								<b>Unique Code:</b> <br />
								{{ order.transaction.kode_unik_transfer }}
							</div>
						</div>
					</div>

				</div>
				<hr>
			</div>

		</li>
	</ul>
</template>

<script>
	export default {
    	middleware: ['traffics'],
		layout: 'products',
		components: {
			OrderBreadcrumb: () => import("@/components/OrderBreadcrumb.vue")
		},
		data() {
			return {
				order_histories: [],
				transactions: [],
				order_progress: [],
				order_items: []
			}
		},
		methods: {
			getOrderHistory: function() {

				const user_data = JSON.parse(localStorage.getItem('user_data'))

				this.$axios.post(`transaction/history`, {
					email: user_data.email
				}).then(response => {
					if (response.data.data != 0) {
						let result = response.data.data
						/* this.transactions = result.transactions
						this.order_progress = result.order_progress
						this.order_items = result.order_items */
						this.order_histories = result
					}
				}).catch(e => {
					console.log(e)
				})
			},
		},
		created() {
			this.getOrderHistory()
		},
	}
</script>