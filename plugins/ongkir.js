import axios from 'axios'
import { reject } from 'q'

const ongkir = {
    estimate (shipment) {
        return axios.post(`${process.env.API_BASE_URL}ongkir/cost`, {
                    destination_city_id: parseInt(shipment.destination_city_id),
                    destination_subdistrict_id: parseInt(shipment.destination_subdistrict_id),
                    origin_city_id: parseInt(shipment.origin_city_id),
                    origin_subdistrict_id: parseInt(shipment.origin_subdistrict_id),
                    weight: shipment.weight * 1000,
                    courier: shipment.courier
                }).then((response) => new Promise((resolve) => {
                    if (response.data.data != 0) {

                        const shipping =  {
                            fee: response.data.data.costs[0].cost[0].value,
                            etd: response.data.data.costs[0].cost[0].etd
                        }

                        resolve(shipping)

                    } else {
                        reject()
                    }
                }))
    },
    track() {}
}

export default ongkir