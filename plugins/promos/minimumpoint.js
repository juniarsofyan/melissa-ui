import axios from 'axios'
import { reject } from 'q'

const minimumpoint = {
    check (transaction) {
        return axios.post(`${process.env.API_BASE_URL}promo/minimum-point/get-discount`, {
                    no_member: transaction.no_member
                }).then(function(response) { 
                    return new Promise(function(resolve) {
                        if (response.data.data != false) {
                            resolve(true)
                        } else {
                            reject()
                        }
                    })}
                )
    }
}

export default minimumpoint