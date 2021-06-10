import axios from "axios"
import store from '@/store'
export function login(email, password) {
    var data = new FormData()
    data.append('username', email)
    data.append('password', password)
    data.append('client_id', '4')
    data.append('client_secret', 'yh8cPXWFgLgXiMMFHj3HSfElgA6FrWBjSyyMZ4m7')
    data.append('grant_type', 'password')

    var config = {
        method: 'post',
        url: 'https://api.mega3.uk/v1/oauth/token',
        headers: {
            'Accept': 'application/json'
        },
        data: data
    }

    axios(config)
        .then(async (r) => (localStorage.access_token = await r.data.access_token))
        .then(() => store.dispatch("user/getUser", "/products/new"))
        .catch(function (error) {
            alert(error)
        })
}