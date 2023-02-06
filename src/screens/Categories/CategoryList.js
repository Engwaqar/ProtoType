import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../constants/colorsPallet'
import ChatHeader from '../../components/ChatHeader'
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
const CategoryList = ({ navigation, route }) => {
    const title = route.params.item
    console.log('title', title)
    const Data = [
        {
            id: 1,
            title: 'Fruits & Veg',
            url: require('../../assets/icons/F.png'),
            price: '$49.00',
        },

        {
            id: 2,
            title: 'Beverages',
            url: require('../../assets/icons/Beverage.png'),
            price: '$49.00',
        },
        {
            id: 3,
            title: 'Household',
            url: require('../../assets/icons/cimage.png'),
            price: '$49.00',
        },
        {
            id: 4,
            title: 'Personal Care',
            url: require('../../assets/icons/PCare.png'),
            price: '$49.00',
        },
        {
            id: 5,
            title: 'Branded Foods',
            url: require('../../assets/icons/Food.png'),
            price: '$49.00',
        },


        {
            id: 6,
            title: 'Bakery',
            url: require('../../assets/icons/cake.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Eggs & Meat',
            url: require('../../assets/icons/eggs.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Oil & Maslas',
            url: require('../../assets/icons/oils.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Staples',
            url: require('../../assets/icons/eggs.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Tea & Coffee',
            url: require('../../assets/icons/Tea.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Baby Care',
            url: require('../../assets/icons/babycare.png'),
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Packaged food',
            url: require('../../assets/icons/PakegedFood.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Tea & Coffee',
            url: require('../../assets/icons/Tea.png'),
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Baby Care',
            url: require('../../assets/icons/babycare.png'),
            price: '$49.00',
        },
        {
            id: 7,
            title: 'Packaged food',
            url: require('../../assets/icons/PakegedFood.png'),
            price: '$49.00',
        },


    ];
    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <ChatHeader
                backbutton
                title={title}
                navigation={navigation}
            />
            <View style={{ marginTop: 10, marginHorizontal: 12 }}>
                <FlatList
                    data={Data}
                    // key={'_'}
                    keyExtractor={(item, index) => 'key' + index}
                    // horizontal={false}
                    numColumns={2}
                    style={{ height: '89%' }}
                    renderItem={({ item }) => {
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
                                        margin={[20, 0, 0, 0]}
                                        size={80}
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
                                    <TouchableOpacity onPress={() => navigation.navigate(routeName.PRODUCT_DETAIL, { item: item })}>
                                        <View style={{ marginHorizontal: 0, backgroundColor: colors.yellow, paddingHorizontal: 25, paddingVertical: 6, marginBottom: 20, borderRadius: 20, }}>
                                            <ResponsiveText weight={'bold'} color={colors.white} size={2.9}>
                                                Add To Cart
                                            </ResponsiveText>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        )
                    }}
                />

            </View>
        </SafeAreaView>

    )
}

export default CategoryList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.secondary,
    },
})