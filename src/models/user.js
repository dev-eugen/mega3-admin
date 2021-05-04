import axios from "axios"

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
        .then(function (response) {
            console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error)
        })

}