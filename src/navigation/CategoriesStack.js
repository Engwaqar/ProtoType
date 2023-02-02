import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { routeName } from "../constants/routeName";
import AllCategoriesList from "../screens/Categories/AllCategoriesList";

 

const Stack = createNativeStackNavigator();

function CategoriesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName.HOME}
    >
       <Stack.Screen name={routeName.CATEGORY_LIST} component={AllCategoriesList} /> 
     
    </Stack.Navigator>
  );
}

export default CategoriesStack;
