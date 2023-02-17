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
import ChatHeader from '../../components/ChatHeader'

const MyFavList = ({ navigation }) => {
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
        {
            id: 4,
            url: require('../../assets/icons/bannnarImage.jpeg'),
            price: '$49.00',
            title: 'Fruits & Veg'
        },
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
        {
            id: 4,
            url: require('../../assets/icons/bannnarImage.jpeg'),
            price: '$49.00',
            title: 'Fruits & Veg'
        },

    ];
    return (
        // <ScrollView>
            <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
                <ChatHeader
                    backbutton
                    title={'My Favourite List'}
                    navigation={navigation}
                />
                <View style={{ height: hp(100) }}>
                    <FlatList
                        data={Data}
                        keyExtractor={(item, index) => item + index}
                        numColumns={2}
                        style={{ height: '20%' }}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    // flex: 1,
                                    margin: 0,
                                    padding: 10,
                                    marginTop:10
                                    // borderRadius: 7,
                                    //  flexDirection: 'row'
                                    }}>
                                     <TouchableOpacity onPress={()=>navigation.navigate(routeName.PRODUCT_DETAIL,{item:item})}>
                                    <Card style={{
                                      width: wp(45),
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: wp(50),
                                      bottom: 12,
                                      margin: 0,
                                    }}>
                                      <TouchableOpacity style={{alignSelf:'flex-end',top:20}}>
                                        <Icon
                                          // tintColor={colors.primary}
                                          size={30}
                                          margin={[0, 0, 0, 0]}
                                          source={globalPath.FillHeart}
                                        >
                                        </Icon>
                                        </TouchableOpacity> 
                                      <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                                      <Icon
                                          // tintColor={colors.primary}
                                          size={80}
                                          borderRadius={50}
                                          source={item.url}
                                        >
                                        </Icon>
                                       
                                      </View>
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
                                    </TouchableOpacity>
                                  </View>
                            )
                        }}
                    />
                </View>

            </SafeAreaView>
        // </ScrollView>
    )
}

export default MyFavList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})