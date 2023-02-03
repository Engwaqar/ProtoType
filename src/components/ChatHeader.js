import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { wp } from "../helpers/Responsiveness";

export default function ChatHeader(props) {

  return (
    <View style={{height:(wp(15)) ,alignItems: "center", margin: wp(0),backgroundColor:colors.primary,marginTop:"7.8%" }}>
      <TouchableOpacity
          onPress={() => props.navigation.goBack()}
      >
        <Icon
          source={globalPath.backArrow}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          marginHorizontal: 10,
        }}
       >
        <Icon
          style={{ marginTop: 0 }}
          // borderRadius={30}
          size={30}
          resizeMode={"contain"}
          source={globalPath.Notifi}
        />
        <View style={{ flex: 1, }}>
          <ResponsiveText textAlign={'center'} weight={'bold'} color={colors.white} size={6}>
            {props.title}
          </ResponsiveText>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.btnBack}>
        <Icon size={15} source={globalPath.video} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBack}>
        <Icon size={15} source={globalPath.audio} />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({

    btnBack:{
        backgroundColor:colors.green5,padding:12,borderRadius:45,marginRight:5
    }
});
