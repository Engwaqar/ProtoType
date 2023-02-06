import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Login/Register';
import Splash from '../screens/Auth/splash/Splash';
import CategoryList from '../screens/Categories/CategoryList';
import ProductDetail from '../screens/Categories/ProductDetail';
import ShoppingCart from '../screens/Categories/ShoppingCart';
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
      <Stack.Screen name={routeName.CATEGORY_LIST} component={CategoryList} /> 
      <Stack.Screen name={routeName.PRODUCT_DETAIL} component={ProductDetail} /> 
      <Stack.Screen name={routeName.SHOPPING_CART} component={ShoppingCart} /> 
    </Stack.Navigator>
  )
}
export default AuthStack
