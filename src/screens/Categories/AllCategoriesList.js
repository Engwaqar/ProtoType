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
const AllCategoriesList = () => {
    const Data = [
        {
            id: 1,
            title: 'Fruits & Veg',
            url: require('../../assets/icons/menu.png'),
        },

        {
            id: 2,
            title: 'Beverages',
            url: require('../../assets/icons/menu.png'),

        },
        {
            id: 3,
            title: 'Household',
            url: require('../../assets/icons/menu.png'),

        },
        {
            id: 4,
            title: 'Personal Care',
            url: require('../../assets/icons/menu.png'),

        },
        {
            id: 5,
            title: 'Branded Foods',
            url: require('../../assets/icons/menu.png'),

        },


        {
            id: 6,
            title: 'Bakery',
            url: require('../../assets/icons/menu.png'),

        },
        {
            id: 7,
            title: 'Eggs & Meat',
            url: require('../../assets/icons/menu.png'),

        },



    ];
    return (
        <View style={styles.footer}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15, marginHorizontal: 12 }}>
                {Data.map((item) => {
                    return (
                        <TouchableOpacity 
                        // onPress={() => navigation.navigate(routeName.ALL_ITEM_LIST, { item: item.complainName, Id: item.id })}
                        >
                            <Card style={{ width: wp(0), alignItems: 'center', justifyContent: 'center', height: wp(35), margin: 5, }}>
                                <Icon
                                    size={40}
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
                                    margin={[0, 0, 0, 0]}
                                    color={colors.black1}
                                >{item.title}</ResponsiveText>
                            </Card>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default AllCategoriesList

const styles = StyleSheet.create({})