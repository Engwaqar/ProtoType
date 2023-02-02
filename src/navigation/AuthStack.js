import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Login/Register';
import Splash from '../screens/Auth/splash/Splash';
import Home from '../screens/Home/Home';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     initialRouteName={routeName.SPLASH}
    >
      <Stack.Screen name={routeName.SPLASH} component={Splash} />  
      <Stack.Screen name={routeName.LOGIN} component={Login} /> 
      <Stack.Screen name={routeName.REGISTER} component={Register} /> 
      <Stack.Screen name={routeName.BOTTOM_TABS} component={BottomTabs} /> 
      <Stack.Screen name={routeName.HOME} component={Home} /> 


     


    </Stack.Navigator>
  )
}
export default AuthStack
