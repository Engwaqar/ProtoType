import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../constants/colorsPallet'
import ResponsiveText from '../../components/RnText'
import Card from '../../components/Card'
import Icon from '../../components/Icon'
import { globalPath } from '../../constants/globalPath'
import Fonts from '../../helpers/Fonts'
import { hp, wp } from '../../helpers/Responsiveness'
import { routeName } from '../../constants/routeName'
import { ScrollView } from 'react-native-gesture-handler'
import urls from '../../redux/lib/urls'
import Api from '../../redux/lib/api'
import moment from 'moment';
import Loader from "../../components/loader";
import HomeHeader from '../../components/HomeHeader'
import Input2 from '../../components/Input2'
import Input from '../../components/Input';

const Home = ({navigation}) => {
  const Data = [
    {
      id: 1,
      url: require('../../assets/icons/bannnarImage.jpeg'),
      price: '$49.00',
      title: 'Fruits & Veg'
    },

    {
      id: 2,
      url: require('../../assets/icons/bannnarImage.jpeg'),
      price: '$49.00',
      title: 'Fruits & Veg'
    },
    {
      id: 3,
      url: require('../../assets/icons/bannnarImage.jpeg'),
      price: '$49.00',
      title: 'Fruits & Veg'
    },



  ];
  return (
    <ScrollView>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <HomeHeader
          title="Delivery Location"
          Itemtitle="2680 Stadium Drive Fall..."
          ItemName="Categories"
          searchBox
        />
         
        <View style={{ height: wp(42) }}>
          <ScrollView horizontal  >
            {Data.map((item) => {
              return (<Icon margin={[5, 0, 0, 10]}
                // size={50}
                borderRadius={10}
                resizeMode={'contain'}
                height={wp(40)}
                width={wp(95)}
                source={item.url}>
              </Icon>)
            })}

          </ScrollView>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <ResponsiveText margin={[10, 0, 0, 20]} textAlign={'center'} weight={'bold'} color={colors.black} size={4}>Exclusive Offer</ResponsiveText>
         <TouchableOpacity>
          <ResponsiveText margin={[10, 20, 0, 0]} textAlign={'center'} weight={'bold'} color={colors.primary} size={4}>View All</ResponsiveText>
          </TouchableOpacity>
        </View>
        <View style={{ height: hp(26) }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {Data.map((item) => {
              return (
                <View style={{
                  // flex: 1,
                  margin: 0,
                  padding: 10,
                  // borderRadius: 7,
                  //  flexDirection: 'row'
                }}>
                  <Card style={{ width: wp(40), alignItems: 'center', justifyContent: 'center', height: wp(45), margin: 0, }}>
                    <Icon
                      // tintColor={colors.primary}
                      size={90}
                      source={item.url
                        // item.complainName == "Electricity" 
                        // ?globalPath.Electricity 
                        // :item.complainName == "Gas" 
                        // ?globalPath.Gas 
                        // :item.complainName == "Internet" 
                        // ?globalPath.Internet
                        // :item.complainName == "Water"
                        //  ?globalPath.Water 
                        //  :globalPath.Water

                      }
                    >
                    </Icon>
                    <ResponsiveText
                      weight={'bold'}
                      textAlign={'center'}
                      margin={[0, 0, 0, 0]}
                      color={colors.black1}
                    >{item.title}
                    </ResponsiveText>
                    <ResponsiveText

                      margin={[2, 0, 0, 0]}
                      color={colors.primary}
                      textAlign={'center'}
                    >{item.price}
                    </ResponsiveText>
                    <TouchableOpacity onPress={() => navigation.navigate(routeName.SHOPPING_CART)}>
                    <View style={{ marginHorizontal: 0, backgroundColor: colors.yellow, paddingHorizontal: 25, paddingVertical: 6, marginBottom: 20, borderRadius: 20, }}>
                      <ResponsiveText weight={'bold'} color={colors.white} size={2.9}>
                        Add To Cart
                      </ResponsiveText>
                    </View>
                    </TouchableOpacity>
                  </Card>
                </View>)
            })}
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <ResponsiveText margin={[10, 0, 0, 20]} textAlign={'center'} weight={'bold'} color={colors.black} size={4}>Best Selling Products</ResponsiveText>
         <TouchableOpacity>
          <ResponsiveText margin={[10, 20, 0, 0]} textAlign={'center'} weight={'bold'} color={colors.primary} size={4}>View All</ResponsiveText>
          </TouchableOpacity>
        </View>
        <View style={{ height: hp(26) }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {Data.map((item) => {
              return (
                <View style={{
                  // flex: 1,
                  margin: 0,
                  padding: 10,
                  // borderRadius: 7,
                  //  flexDirection: 'row'
                }}>
                  <Card style={{ width: wp(40), alignItems: 'center', justifyContent: 'center', height: wp(45), margin: 0, }}>
                    <Icon
                      // tintColor={colors.primary}
                      size={90}
                      source={item.url}
                    >
                    </Icon>
                    <ResponsiveText
                      weight={'bold'}
                      textAlign={'center'}
                      margin={[0, 0, 0, 0]}
                      color={colors.black1}
                    >{item.title}
                    </ResponsiveText>
                    <ResponsiveText

                      margin={[2, 0, 0, 0]}
                      color={colors.primary}
                      textAlign={'center'}
                    >{item.price}
                    </ResponsiveText>
                    <TouchableOpacity onPress={() => navigation.navigate(routeName.SHOPPING_CART)}>
                    <View style={{ marginHorizontal: 0, backgroundColor: colors.yellow, paddingHorizontal: 25, paddingVertical: 6, marginBottom: 20, borderRadius: 20, }}>
                      <ResponsiveText weight={'bold'} color={colors.white} size={2.9}>
                        Add To Cart
                      </ResponsiveText>
                    </View>
                    </TouchableOpacity>
                  </Card>
                </View>)
            })}
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <ResponsiveText margin={[10, 0, 0, 20]} textAlign={'center'} weight={'bold'} color={colors.black} size={4}>Exclusive Offer</ResponsiveText>
         <TouchableOpacity>
          <ResponsiveText margin={[10, 20, 0, 0]} textAlign={'center'} weight={'bold'} color={colors.primary} size={4}>View All</ResponsiveText>
          </TouchableOpacity>
        </View>
        <View style={{ height: hp(26) }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {Data.map((item) => {
              return (
                <View style={{
                  // flex: 1,
                  margin: 0,
                  padding: 10,
                  // borderRadius: 7,
                  //  flexDirection: 'row'
                }}>
                  <Card style={{ width: wp(40), alignItems: 'center', justifyContent: 'center', height: wp(45), margin: 0, }}>
                    <Icon
                      // tintColor={colors.primary}
                      size={90}
                      source={item.url}
                    >
                    </Icon>
                    <ResponsiveText
                      weight={'bold'}
                      textAlign={'center'}
                      margin={[0, 0, 0, 0]}
                      color={colors.black1}
                    >{item.title}
                    </ResponsiveText>
                    <ResponsiveText

                      margin={[2, 0, 0, 0]}
                      color={colors.primary}
                      textAlign={'center'}
                    >{item.price}
                    </ResponsiveText>
                    <TouchableOpacity onPress={() => navigation.navigate(routeName.SHOPPING_CART)}>
                    <View style={{ marginHorizontal: 0, backgroundColor: colors.yellow, paddingHorizontal: 25, paddingVertical: 6, marginBottom: 20, borderRadius: 20, }}>
                      <ResponsiveText weight={'bold'} color={colors.white} size={2.9}>
                        Add To Cart
                      </ResponsiveText>
                    </View>
                    </TouchableOpacity>
                  </Card>
                </View>)
            })}
          </ScrollView>
        </View>
        <View style={{height:hp(10)}}>

        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
})