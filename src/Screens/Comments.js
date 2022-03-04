import React, { useEffect } from 'react'
import {View , Text, FlatList , TouchableOpacity, Button , StyleSheet} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'
import { getComments } from '../Redux/actions'
import { useNavigation } from '@react-navigation/native'

const Posts = () => {

    const comments = useSelector(state => state.commentReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()
   

useEffect(() => {
    dispatch(getComments())
}, [dispatch])

// console.log('main Screen' , posts)

    return(
        <View>
           {comments.length !== 0 ?

<FlatList
data = {comments}
renderItem={({item}) => <TouchableOpacity >
    <View style = {styles.container}>
    <View style = {{flexDirection : 'row'}}>
         <Text style = {styles.text}>Name : </Text>
         <Text style = {styles.texts}>{item.name} </Text>
    </View>
    <View style = {{flexDirection : 'row'}}>
         <Text style = {styles.text}>Body : </Text>
         <Text style = {styles.texts}>{item.body} </Text>
    </View>
    </View>
    
 </TouchableOpacity>}/> :

 <Text style = {styles.text}>There re no Comments</Text>

           }
          

            <Button title = 'Add Comment' onPress={() => {navigation.navigate('AddComment')}}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        color : "#544C4A",
        marginTop : 15,
        marginBottom : 10,
        alignSelf : 'center'
    },

    container : {
        flex : 1,
        elevation : 20,
        backgroundColor : '#C5C6D0',
        marginTop : 20,
        marginBottom : 20
       
    },
    texts : {
        color : "#0439",
        marginTop : 15,
        alignSelf : 'center'
    },
})

export default Posts