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
const AllCategoriesList = ({ navigation }) => {
    const Data = [
        {
            id: 1,
            title: 'Fruits & Veg',
            url: require('../../assets/icons/F.png'),
            product: '245 Products'
        },

        {
            id: 2,
            title: 'Beverages',
            url: require('../../assets/icons/Beverage.png'),
            product: '245 Products'
        },
        {
            id: 3,
            title: 'Household',
            url: require('../../assets/icons/cimage.png'),
            product: '245 Products'
        },
        {
            id: 4,
            title: 'Personal Care',
            url: require('../../assets/icons/PCare.png'),
            product: '245 Products'
        },
        {
            id: 5,
            title: 'Branded Foods',
            url: require('../../assets/icons/Food.png'),
            product: '245 Products'
        },


        {
            id: 6,
            title: 'Bakery',
            url: require('../../assets/icons/cake.png'),
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Eggs & Meat',
            url: require('../../assets/icons/eggs.png'),
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Oil & Maslas',
            url: require('../../assets/icons/oils.png'),
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Staples',
            url: require('../../assets/icons/eggs.png'),
            product: '245 Products'
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
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Packaged food',
            url: require('../../assets/icons/PakegedFood.png'),
            product: '245 Products'
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
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Packaged food',
            url: require('../../assets/icons/PakegedFood.png'),
            product: '245 Products'
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
            product: '245 Products'
        },
        {
            id: 7,
            title: 'Packaged food',
            url: require('../../assets/icons/PakegedFood.png'),
            product: '245 Products'
        },

    ];
    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <ChatHeader
                title="Categories"
                navigation={navigation}

            />
            <View style={{ marginTop: 10, marginHorizontal: 12 }}>
                <FlatList
                    data={Data}
                    // key={'_'}
                    keyExtractor={(item, index) => 'key' + index}
                    // horizontal={false}
                    numColumns={3}
                    style={{ height:hp(83) }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(routeName.CATEGORY_LIST,
                                    { item: item.title }
                                )}
                            >
                                <Card>
                                    <Icon
                                        tintColor={colors.primary}
                                        size={40}
                                        source={item.url}
                                    >
                                    </Icon>
                                    <ResponsiveText
                                        weight={'bold'}
                                        textAlign={'center'}
                                        margin={[5, 0, 0, 0]}
                                        color={colors.black1}
                                    >{item.title}
                                    </ResponsiveText>
                                    <ResponsiveText
                                        margin={[5, 0, 0, 0]}
                                        color={colors.black1}
                                        textAlign={'center'}
                                    >{item.product}
                                    </ResponsiveText>
                                </Card>
                            </TouchableOpacity>

                        )
                    }}
                />

            </View>
        </SafeAreaView>

    )
}

export default AllCategoriesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.secondary,
    },
})