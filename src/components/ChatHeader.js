import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { wp } from "../helpers/Responsiveness";

export default function ChatHeader(props) {

  return (
    <View style={{ height: (wp(15)), alignItems: "center", margin: wp(0), backgroundColor: colors.primary, marginTop: "7.8%" }}>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        {props.backbutton ? (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            size={40}
            margin={[5, 0, 0, 10]}
            tintColor={colors.white}
            source={globalPath.backarrow}
          />
        </TouchableOpacity>
      ) : null}
        {/* <TouchableOpacity
          onPress={() => props.navigation.goBack()}
        >
          <Icon
            tintColor={colors.white}
            size={40}
            source={globalPath.Search}
          />
        </TouchableOpacity> */}
        <View style={{ flex: 1, }}>
          <ResponsiveText textAlign={'center'} weight={'bold'} color={colors.white} size={5}>
            {props.title}
          </ResponsiveText>
        </View>
        <Icon
          style={{ marginHorizontal: 10 }}
          // borderRadius={30}
          tintColor={colors.white}
          size={40}
          resizeMode={"contain"}
          source={globalPath.Search}
        />
        <Icon
          tintColor={colors.white}
          style={{ marginTop: 0 }}
          // borderRadius={30}
          size={40}
          resizeMode={"contain"}
          source={globalPath.AddToCart}
        />
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

  btnBack: {
    backgroundColor: colors.green5, padding: 12, borderRadius: 45, marginRight: 5
  }
});
