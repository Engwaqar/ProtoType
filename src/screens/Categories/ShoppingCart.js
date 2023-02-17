import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../constants/colorsPallet'
import ChatHeader from '../../components/ChatHeader'
import ResponsiveText from '../../components/RnText'
import Card from '../../components/Card'
import TextProfile from '../../components/TextProfile'
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
import Swipeout from "react-native-swipeout";
const ShoppingCart = ({ navigation, route }) => {
    const [count, setCount] = useState(1);
    //  const itemDetail = route.params.item
    //  console.log('title', itemDetail)
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
            url: require('../../assets/icons/bannnarImage.jpeg'),
            price: '$ 7.48 $8.48 2.6/floz',
            title: 'Pepsi Soda,12 oz Cans,24 Count'
        },

        {
            id: 2,
            url: require('../../assets/icons/bannnarImage.jpeg'),
            price: '$ 7.48 $8.48 2.6/floz',
            title: 'Pepsi Soda,12 oz Cans,24 Count'
        },
        {
            id: 3,
            url: require('../../assets/icons/bannnarImage.jpeg'),
            price: '$ 7.48 $8.48 2.6/floz',
            title: 'Fruits & Veg'
        },



    ];
    return (
        <ScrollView>
            <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
                <ChatHeader
                    backbutton
                    // title={title}
                    navigation={navigation}
                />
                {Data.map((item) => {
                    return (
                        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0 }}>
                                <Icon margin={[0, 0, 0, 0]}
                                    size={100}
                                    source={item.url}>
                                </Icon>
                                <View style={{ flex: 1 }} >
                                    <ResponsiveText margin={[0, 0, 0, 10]} weight={'bold'} color={colors.black} >{item.title}</ResponsiveText>
                                    <ResponsiveText margin={[5, 0, 0, 10]} weight={'bold'} color={colors.primary} >{item.price}</ResponsiveText>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                                        <TouchableOpacity
                                            onPress={() => updateCount("Dec")}
                                        >
                                            <View style={{ backgroundColor: colors.primary, paddingHorizontal: 12, marginLeft: 5 }}>
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
                                            <View style={{ backgroundColor: colors.primary, paddingHorizontal: 5, paddingHorizontal: 10 }}>
                                                <ResponsiveText weight={'bold'} color={colors.white} size={6}>
                                                    +
                                                </ResponsiveText>

                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ justifyContent: 'center',flex:1,marginLeft:30}}>
                                            <View
                                                style={{
                                                    alignSelf: 'center',
                                                    backgroundColor: colors.red,
                                                    height: hp(5),
                                                    width: hp(5),
                                                    borderRadius: 30,
                                                    // marginRight: 10,
                                                    justifyContent: 'center',
                                                    // marginTop: '40%',
                                                    alignItems: 'center',
                                                    alignContent: 'center',
                                                    // top: 40

                                                }}
                                            >
                                                <Icon source={globalPath.DeleteIcon} tintColor={colors.white} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    )
                })}
                <Card style={{ width: wp(90), marginLeft: 18, marginTop: 20, height: hp(25), borderRadius: 0 }}>
                    <View style={{ flexDirection: 'row', marginTop: 5, borderBottomWidth: 1, borderBottomColor: colors.lightWhite, }}>
                        <ResponsiveText flex={0.9} size={5} margin={[5, 0, 0, 0]} weight={'bold'} color={colors.grey5} >{'Price Details'}</ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0, borderBottomColor: colors.lightWhite, flex: 1 }}>
                        <ResponsiveText size={4} flex={0.9} margin={[0, 0, 0, 0]} weight={'bold'} color={colors.black} >{'Sub Total'}</ResponsiveText>
                        <ResponsiveText margin={[0, 0, 0, 0]} weight={'bold'} color={colors.black} >{'$22.60'}</ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0, borderBottomColor: colors.lightWhite, flex: 1 }}>
                        <ResponsiveText size={4} flex={0.9} margin={[0, 0, 0, 0]} weight={'bold'} color={colors.black} >{'Delivery Fee'}</ResponsiveText>
                        <ResponsiveText margin={[0, 0, 0, 0]} weight={'bold'} color={colors.primary} >{'Free'}</ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0, borderBottomColor: colors.lightWhite, flex: 1 }}>
                        <ResponsiveText size={4} flex={0.9} margin={[0, 0, 0, 0]} weight={'bold'} color={colors.black} >{'Amount Payable'}</ResponsiveText>
                        <ResponsiveText margin={[0, 0, 0, 0]} weight={'bold'} color={colors.black} >{'$22.60'}</ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0, borderBottomColor: colors.lightWhite, flex: 1 }}>
                        <ResponsiveText size={3} flex={0.9} margin={[0, 0, 0, 0]} weight={'bold'} color={colors.primary} >{'You will save $4.00 on this order'}</ResponsiveText>
                    </View>
                </Card>
                <Card style={{ width: wp(90), marginLeft: 18, marginTop: 15, height: hp(10) }}>
                    <View style={{ flexDirection: 'row', borderBottomColor: colors.lightWhite, alignItems: 'center' }}>
                        <ResponsiveText size={5} flex={0.9} margin={[0, 0, 0, 0]} weight={'bold'} color={colors.black} >{'$22.00'}</ResponsiveText>
                        <TouchableOpacity onPress={() => navigation.navigate(routeName.PAYMENT_METHOD)}>
                            <View style={{ backgroundColor: colors.primary, height: hp(6), width: wp(30), borderRadius: 3 }}>
                                <ResponsiveText margin={[10, 0, 0, 0]} textAlign={'center'} weight={'bold'} color={colors.white} size={4}>
                                    Countinue
                                </ResponsiveText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Card>
            </SafeAreaView >
        </ScrollView >
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.secondary,
    },
    Text: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: '5%'
    },
    Text2:
    {
        flex: 0.7,
        justifyContent: "center",
        padding: 5
    },
    Text3: {
        flexDirection: 'row',
        marginTop: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightWhite
    },
    Text4: {
        flexDirection: 'row',
        marginTop: 4,
    },
})