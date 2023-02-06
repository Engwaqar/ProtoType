import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { wp } from "../helpers/Responsiveness";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";

export default function HomeHeader({searchBox,...props}) {

  return (
    <View style={{height:(wp(30)) ,alignItems: "center", margin: wp(0),backgroundColor:colors.primary,marginTop:"7.8%" }}>
      
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          marginHorizontal: 10,
          
        }}
       >
       <TouchableOpacity
          onPress={() => props.navigation.goBack()}
      >
        <Icon
        tintColor={colors.white}
          size={40}
          source={globalPath.DrawerIcon}
        />
      </TouchableOpacity>
        <View style={{ flex: 1, }}>
          <ResponsiveText textAlign={'center'} weight={'bold'} color={colors.white} size={4}>
            {props.title}
          </ResponsiveText>
          <ResponsiveText textAlign={'center'} weight={'bold'} color={colors.white} size={4}>
            {props.Itemtitle}
          </ResponsiveText>
        </View>
        <Icon
        tintColor={colors.white}
          style={{ marginTop: 0 }}
          // borderRadius={30}
          size={40}
          resizeMode={"contain"}
          source={globalPath.AddToCart}
        />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
      <View style={{marginHorizontal:0,backgroundColor:colors.white,paddingHorizontal:20,paddingVertical:10,marginBottom:5,borderRadius:20,}}>
      <ResponsiveText weight={'bold'} color={colors.black} size={4}>
            {props.ItemName}
          </ResponsiveText>
          
      </View>
      {searchBox && (
          <TouchableOpacity
            style={styles.showPasswordBtn}
            // onPress={updateSecureTextEntry}
          >
            <Feather name="search" size={20} style={styles.Feather} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    btnBack:{
        backgroundColor:colors.green5,padding:12,borderRadius:45,marginRight:5
    },
    showPasswordBtn: {
        marginHorizontal:0,backgroundColor:colors.white,paddingHorizontal:70,paddingVertical:10,marginBottom:5,borderRadius:20,marginLeft:5
      },
});
