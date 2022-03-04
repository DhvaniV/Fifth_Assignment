import React, { useEffect } from 'react'
import {View , Text, FlatList , TouchableOpacity , StyleSheet} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'
import { getPosts , setPostId } from '../Redux/actions'
import { useNavigation } from '@react-navigation/native'

const Posts = () => {

    const posts = useSelector(state => state.postReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()
   

useEffect(() => {
    dispatch(getPosts())
}, [dispatch])

// console.log('main Screen' , posts)

    return(
        <View>
           {posts.length !== 0 ?

<FlatList
data = {posts}
renderItem={({item}) => <TouchableOpacity onPress={() => { dispatch(setPostId(item.id))
navigation.navigate('Comments' , {id : item.id})}}>
    <View  style = {styles.container}>
    <View style = {{flexDirection : 'row'}}>
         <Text style = {styles.text}>Title : </Text>
         <Text style = {styles.texts}>{item.title} </Text>
    </View>
    <View style = {{flexDirection : 'row'}}>
         <Text style = {styles.text}>Body : </Text>
         <Text style = {styles.texts}>{item.body} </Text>
    </View>
   
    </View>
   
 </TouchableOpacity>}/> :

 <Text style = {styles.text}>There are no Posts</Text>
 
           }
         
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        color : "#544C4A",
        marginTop : 15,
        alignSelf : 'center'
    },

    container : {
        flex : 1,
        elevation : 20,
        backgroundColor : '#C5C6D0',
        marginTop : 20
       
    },
    texts : {
        color : "#0439",
        marginTop : 15,
        alignSelf : 'center'
    },
})

export default Posts