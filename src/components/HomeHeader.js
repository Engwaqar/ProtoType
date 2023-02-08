import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { wp } from "../helpers/Responsiveness";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";
import Input from '../components/Input';

export default function HomeHeader({ searchBox, ...props }) {

  return (
    <View style={{ height: (wp(30)), alignItems: "center", margin: wp(0), backgroundColor: colors.primary, marginTop: "7.8%" }}>

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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
        <View style={{
          marginHorizontal: 0,
          backgroundColor: colors.white,
          paddingHorizontal: 20,
          paddingVertical: 11,
          marginBottom: 5,
          borderRadius: 20,
        }}>
          <ResponsiveText weight={'bold'} color={colors.black} size={4}>
            {props.ItemName}
          </ResponsiveText>
        </View>
        {searchBox && (
          <View style={styles.Search}>
            <Input
              width={wp(40)}
              padding={[0, 5, 0, 5]}
              placeholder="Search"
              color={colors.black}
              backgroundColor={colors.white}
              searchBox
              onChnageText={(text) => searchFilterFunction(text)}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  btnBack: {
    backgroundColor: colors.green5, padding: 12, borderRadius: 45, marginRight: 5
  },
  showPasswordBtn: {
    marginHorizontal: 0, backgroundColor: colors.white, paddingHorizontal: 70, paddingVertical: 10, marginBottom: 5, borderRadius: 20, marginLeft: 5
  },
  Search: {
    marginLeft:10
  },
});
