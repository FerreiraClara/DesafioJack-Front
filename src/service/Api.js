import axios from 'axios'
const base_url = 'http://localhost:3000'

export async function Api(body, method, route) {
    const req = {
        method: method,
        url: `${base_url}${route}`,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        data: body,
    }
    console.log(req)
    await axios(req).then(function (res) {
        console.log(res)
    }).catch((err) => {

    })
}
