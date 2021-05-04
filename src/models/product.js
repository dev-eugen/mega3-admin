import axios from "@/libs/axios.js"

export function getById(id) {
    axios.get('product/${id}').then(r => {
        return r.data.data
    })
}