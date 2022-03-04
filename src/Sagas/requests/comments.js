import { create } from "apisauce";

export default async function requestGetComments(pid){
    let data = []
    // console.log('reques id' , id)

    const api = create({
        baseURL: 'https://gorest.co.in/public/v1',
        headers: {
            'Content-type': 'application/json', 
            'Accept':'application/json', 
            // 'Authorization': 'Bearer f610302b21f5793ffffb0a110d626ad74dbbdb3a40e52e3c2f730936f3975984'
        }
    })
    
   await api.get(`/posts/${pid}/comments`).then(response => {
            console.log('request comment id' , pid)
            data = response.data.data 

            console.log('request data' , data)
                 
    })

  return data
}