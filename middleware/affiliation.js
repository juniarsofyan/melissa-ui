export default function ({ store, query, redirect }) { 
    const aff = query.aff
    const affiliation_code = store.getters['authentication/affiliation_code']

    if (aff) {
        store.dispatch('authentication/setAffiliationCode', aff)
    }

    if (!(aff || affiliation_code)) {
        redirect("https://bellezkin.com/")
    }
}