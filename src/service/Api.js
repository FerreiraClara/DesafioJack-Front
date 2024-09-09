import axios from 'axios'
const base_url = 'https://api-taskly.vercel.app'

export async function Api(body, method, route) {
try{
    const token = localStorage.getItem('token')
    const req = {
        method: method,
        url: `${base_url}${route}`,
        headers: {
            'rejectUnauthorized': false,
            'Authorization':token
        },
        data: body,
    }
   const response = await axios(req)

   console.log(response)
   return response?.data?.response
}
   catch(err){

   }
}
