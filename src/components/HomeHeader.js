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
import { routeName } from "../constants/routeName";

export default function HomeHeader(props) {

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
        <TouchableOpacity onPress={() => props.navigation.navigate(routeName.NOTIFICATION)}>
        <Icon
          tintColor={colors.white}
          style={{ marginTop: 20 }}
          // borderRadius={30}
          size={40}
          margin={[0,10,0,0]}
          resizeMode={"contain"}
          source={props.AddToCart}
        />
       
        <View style={{
          // position: 'absolute',
          backgroundColor: colors.red,
          width: 18,
          height: 18,
          borderRadius: 10,
          zIndex: 1,
          // top: 5, 
          // right: 0,
          left:20,
          bottom:35,

        }}>
          <ResponsiveText textAlign={'center'} color={colors.white}>{'2'}</ResponsiveText>
        </View>
        </TouchableOpacity>
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
        {props.searchBox && (
          <View style={styles.Search}>
            <Input
              width={wp(47)}
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
