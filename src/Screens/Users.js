import React, { useEffect } from 'react'
import {View , Text, FlatList ,  TouchableOpacity , StyleSheet} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'
import { getUsers , setId } from '../Redux/actions'
import { useNavigation } from '@react-navigation/native'

const Users = () => {

    const users = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()

useEffect(() => {
    dispatch(getUsers())
}, [dispatch])

    return(
        <View>
           
           <FlatList
           data = {users}
           renderItem={({item}) => <TouchableOpacity onPress={() => { dispatch(setId(item.id)) 
            navigation.navigate('Posts')}}>
                <View style = {styles.container} >
                     <Text style = {styles.text}>id : {item.id}</Text>
                     <Text style = {styles.text}>Name : {item.name}</Text>
                </View>
                </TouchableOpacity>}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        elevation : 10,
        backgroundColor : '#fff',
        marginVertical : 5
       
    },
    text : {
        color : "black",
        marginTop : 15,
        alignSelf : 'center'
    }
})

export default Users