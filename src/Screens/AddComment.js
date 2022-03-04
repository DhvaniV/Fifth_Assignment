import React, { useState } from 'react'
import {View , Text, FlatList , TouchableOpacity, Button , TextInput} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'
import { addDetails  , setSDetails} from '../Redux/actions'
import { useNavigation } from '@react-navigation/native'

const AddComments = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [name , setname] = useState('')
    const [body , setbody] = useState('')
   

const addComment = () => {

    dispatch(setSDetails({name,body}))
    dispatch(addDetails())
    console.log('added')
     


}

// console.log('main Screen' , posts)

    return(
        <View>
           
            <TextInput
            placeholder='Enter your Name'
            value = {name}
            onChangeText={setname}
            style = {{backgroundColor : '#C5C6D0' , marginVertical : 20}}/>          

            <TextInput
            placeholder='Enter your Comment'
            value = {body}
            onChangeText={setbody}
            multiline = {true}
            style = {{backgroundColor : '#C5C6D0' , marginVertical : 20}}/>  

            <Button title = 'Add Comment' onPress={addComment}/>
            
        </View>
    )
}

export default AddComments