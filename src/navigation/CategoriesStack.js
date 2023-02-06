import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { routeName } from "../constants/routeName";
import AllCategoriesList from "../screens/Categories/AllCategoriesList";
import CategoryList from "../screens/Categories/CategoryList";

 

const Stack = createNativeStackNavigator();

function CategoriesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName.HOME}
    >
       <Stack.Screen name={routeName.ALL_CATEGORY_LIST} component={AllCategoriesList} /> 
       {/* <Stack.Screen name={routeName.CATEGORY_LIST} component={CategoryList} />  */}
     
    </Stack.Navigator>
  );
}

export default CategoriesStack;
