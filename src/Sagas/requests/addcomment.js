import { create } from "apisauce";

export default async function requestAddComments(id, pid, {name,body}){
    let data = []

    
    console.log('reques id' , body)

    const api = create({
        baseURL: 'https://gorest.co.in/public/v1',
        headers: {
            'Content-type': 'application/json', 
            'Accept':'application/json', 
            'Authorization': 'Bearer f610302b21f5793ffffb0a110d626ad74dbbdb3a40e52e3c2f730936f3975984'
        }
    })
    
   await api.post(`/posts/${pid}/comments` , 
   {
        userid : id ,
        postid : pid,
        name : name,
        body : body

   }).then(response => {
         
            

            console.log('request data added' )
                 
    })

  return data
}