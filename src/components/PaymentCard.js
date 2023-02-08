import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";

const PaymentCard = ({source,active,title,onPress,Number}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor:active?colors.primary:colors.grey}]}>
      {/* <Icon size={50} source={source} /> */}
      <View style={{ padding: 10,flex:1,marginLeft:8 }}>
        <ResponsiveText size={5} color={active?colors.white:colors.black} >{title}</ResponsiveText>
        {/* <ResponsiveText color={active?colors.grey5:colors.grey1}margin={[5,0,0,0]} >{Number}</ResponsiveText> */}
      </View>
      <View style={{
            backgroundColor:active ? colors.primary: undefined, 
            borderRadius:50, 
            borderColor:active ? colors.white:colors.grey1, 
            borderWidth:2 , height:25, width:25,alignItems:'center', justifyContent:'center',padding:5,marginHorizontal:5
        
        }}
           >
                {active ? <Icon source={globalPath.radioIcon} size={10} tintColor={colors.white}/> :<View/>}
            </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.PaymentColor,
    padding: 10,
    borderRadius: 0,
    alignItems:'center',
    margin:0,
    borderWidth:0.5,
    borderColor:colors.grey1,
    marginHorizontal:10,
  },
});