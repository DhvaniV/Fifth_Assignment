import { create } from "apisauce";

export default async function requestGetPosts(id){
    let data = []
    console.log('reques id' , id)

    const api = create({
        baseURL: 'https://gorest.co.in/public/v1',
        headers: {
            'Content-type': 'application/json', 
            'Accept':'application/json', 
            // 'Authorization': 'Bearer f610302b21f5793ffffb0a110d626ad74dbbdb3a40e52e3c2f730936f3975984'
        }
    })
    
   await api.get(`/users/${id}/posts`).then(response => {
            // console.log('reques id' , id)
            data = response.data.data 

            console.log('request posts data' , data)
                 
    })

  return data
}