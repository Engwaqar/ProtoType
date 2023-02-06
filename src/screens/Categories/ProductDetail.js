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
const ProductDetail = ({ navigation, route }) => {
    const [count, setCount] = useState(1);
    const itemDetail = route.params.item
    console.log('title', itemDetail)
    console.log('count', count)
    useEffect(() => {
        setCount(count);
        // setslectedTopping(slectedTopping);
      }, [count]);
    const updateCount = (type) => {
        if (type == "Inc") {
          setCount(count + 1);
        } else {
          setCount(count > 1 ? count - 1 : 1);
        }
      };
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
    const Data1 = [
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
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <ChatHeader
                backbutton
                // title={title}
                navigation={navigation}
            />
            <View style={{ marginTop: 30, marginHorizontal: 12, justifyContent: 'center', alignItems: 'center' }}>

                <Card style={{ width: wp(95), alignItems: 'center', justifyContent: 'center', height: hp(50), margin: 0, }}>
                    <Icon
                        // tintColor={colors.primary}
                        margin={[20, 0, 0, 0]}
                        size={150}
                        source={itemDetail.url}
                    >
                    </Icon>
                    <ResponsiveText
                        weight={'bold'}
                        // textAlign={'center'}
                        margin={[0, 0, 0, 0]}
                        color={colors.black1}
                    >{itemDetail.title}
                    </ResponsiveText>
                    <ResponsiveText

                        margin={[2, 0, 0, 0]}
                        color={colors.primary}
                    // textAlign={'center'}
                    >{itemDetail.price}
                    </ResponsiveText>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 0, backgroundColor: colors.lightGrey, paddingHorizontal: 25, paddingVertical: 5, marginBottom: 20, borderRadius: 20, }}>
                            <ResponsiveText margin={[5, 0, 0, 0]} weight={'bold'} color={colors.black} size={4.5}>
                                Quantity
                            </ResponsiveText>
                            <TouchableOpacity
                              onPress={() => updateCount("Dec")}
                             >
                            <View style={{ backgroundColor: colors.grey5,paddingHorizontal:12,marginLeft:5}}>
                                <ResponsiveText weight={'bold'} color={colors.white} size={6}>
                                    -
                                </ResponsiveText>
                            </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    // backgroundColor: colors.primary,
                                    height: wp(10),
                                    width: wp(10),
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 45,
                                }}
                            >
                                <ResponsiveText color={colors.black} size={6}>
                                    {count}
                                </ResponsiveText>
                            </View>
                            <TouchableOpacity
                              onPress={() => updateCount("Inc")}
                             >
                            <View style={{ backgroundColor: colors.grey5, paddingHorizontal: 5,paddingHorizontal:10 }}>
                                <ResponsiveText weight={'bold'} color={colors.white} size={6}>
                                    +
                                </ResponsiveText>
                                
                            </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate(routeName.SHOPPING_CART)}>
                            <View style={{ marginLeft: 5, marginHorizontal: 0, backgroundColor: colors.yellow, paddingHorizontal: 25, paddingVertical: 14, marginBottom: 20, borderRadius: 20, }}>
                                <ResponsiveText weight={'bold'} color={colors.white} size={2.9}>
                                    Add To Cart
                                </ResponsiveText>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ResponsiveText
                        weight={'bold'}
                        // textAlign={'center'}
                        margin={[0, 0, 0, 0]}
                        color={colors.black1}
                    >{'Pepsi Soda,12 oz Cans ,24 Count Pepsi Soda,12 oz Cans ,24 Count Pepsi Soda,12 oz Cans ,24 Count'}
                    </ResponsiveText>
                </Card>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <ResponsiveText margin={[10, 0, 0, 20]} textAlign={'center'} weight={'bold'} color={colors.black} size={4}>Exclusive Offer</ResponsiveText>
            </View>
            <View style={{ height: hp(26) }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {Data1.map((item) => {
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
                                    <TouchableOpacity onPress={() => navigation.navigate(routeName.SHOPPING_CART, { item: itemDetail })}>
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
        </SafeAreaView>

    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.secondary,
    },
})