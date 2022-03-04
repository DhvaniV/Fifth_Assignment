export const SET_USERS = 'SET_USERS'
export const GET_USERS = 'GET_USERS'
export const SET_ID = 'SET_ID'
export const SET_POSTS = 'SET_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const SET_POSTID = 'SET_POSTID'
export const SET_COMMENTS = 'SET_COMMENTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const SET_DETAILS = 'SET_DETAILS'
export const ADD_COMMENT = 'ADD_COMMENT'

export const getUsers = () => {
    return{
        type : GET_USERS
    }
}

export const setUsers = users => {
    return {
    type : SET_USERS,
    payload : users
    }  
}

export const setId = id => {
    return {
    type : SET_ID,
    payload : id
    }  
}

export const setPosts = posts => {

    console.log('action post called' , posts)
    return {
    type : SET_POSTS,
    payload : posts
    }  
}

export const getPosts = () => {
    return {
    type : GET_POSTS,
    
    }  
}

export const setPostId = id => {
    console.log(id)
    return {
    type : SET_POSTID,
    payload : id
    
    }  
}

export const setComments = comments => {
    console.log("action comment called " , comments)
    return {
    type : SET_COMMENTS,
    payload : comments
    }  
}

export const getComments = () => {
    return {
    type : GET_COMMENTS,
    
    }  
}

export const setSDetails = ({name,body}) => {
    console.log('action comments' , {name,body} )
    return {
    type : SET_DETAILS,
    payload : {name,body}


    
    }  
}

export const addDetails = () => {
    return {
    type : ADD_COMMENT,
    
    }  
}







