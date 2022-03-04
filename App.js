import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Users from './src/Screens/Users.js'
import Posts from './src/Screens/Posts.js'
import Comments from './src/Screens/Comments'
import { Provider } from "react-redux";
import store from './src/Redux/store'
import AddComment from './src/Screens/AddComment.js'

const Stack = createStackNavigator()

const App = () => {
  return(
    <Provider store = {store}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{

          headerShown : true,
          headerStyle : {backgroundColor : 'blue'},
          headerTitleAlign : 'center',
          headerTintColor : 'yellow'
         
        }}>
          <Stack.Screen name ="Users" component={Users}/>
          <Stack.Screen name ="Posts" component={Posts}/>
          <Stack.Screen name ="Comments" component={Comments}/>
          <Stack.Screen name ="AddComment" component={AddComment}/>
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  )
}

export default App