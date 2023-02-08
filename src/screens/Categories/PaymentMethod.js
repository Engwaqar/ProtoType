import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
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
// import RadioButton from '../../components/RadioButton'
import Input from "../../components/Input";
import PaymentCard from '../../components/PaymentCard'
import Api from '../../redux/lib/api'
import urls from '../../redux/lib/urls'
import Loader from "../../components/loader";
import { ScrollView } from 'react-native-gesture-handler'
import { IsDueDate } from '../../constants/Index'
const PaymentMethod = ({ navigation, route }) => {
    // const data = route.params.item;
    // console.log('billReferenceId', data)
    const [SelectPaymentMethod, setSelectPaymentMethod] = useState({})
    // console.log('first', SelectPaymentMethod)
    const [GetPaymentData, setGetPaymentData] = useState([])
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     GetPaymentMethods();
    // }, []);
    // const GetPaymentMethods = async (index, item) => {
    //     try {
    //         setLoading(true);
    //         const res = await Api.get(urls.GET_PAYMENT_METHOD);
    //         console.log('GET_PAYMENT_METHOD', res)
    //         if (res && res.success == true) {
    //             setLoading(false);
    //             setGetPaymentData(res.data);
    //             setSelectPaymentMethod(res.data[0])
    //         } else {
    //             setLoading(false);
    //             setErrorString(res.message)
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const Data = [
        {
            id: 1,
            name: 'Credit/Debit?ATM Card',
            url: require('../../assets/icons/F.png'),

        },

        {
            id: 2,
            name: 'Net Banking',
            url: require('../../assets/icons/Beverage.png'),
            price: '$49.00',
        },
        {
            id: 3,
            name: 'EMI',
            url: require('../../assets/icons/cimage.png'),
            price: '$49.00',
        },
        {
            id: 4,
            name: 'Cash On Delivery',
            url: require('../../assets/icons/PCare.png'),
            price: '$49.00',
        },





    ];
    return (
       
            <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
                <ChatHeader
                    backbutton
                    // title={title}
                    navigation={navigation}
                />
                 <ScrollView>
                <ResponsiveText
                    margin={[15, 0, 5, 15]}
                    color={colors.black}
                    weight={'bold'}
                    size={4}
                >Select Payment Method?
                </ResponsiveText>
                    <View style={styles.footer}>
                        <View style={{ top: 10 }}>
                            {Data.length > 0 ?
                                Data.map((item) => {
                                    return (
                                        <PaymentCard
                                            title={item.name}
                                            active={SelectPaymentMethod?.id == item.id}
                                            source={{ uri: item.fullPath }}
                                            Number={item.accountNumber}
                                            onPress={() => setSelectPaymentMethod(item)}
                                        />
                                    )
                                }) : null}
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
                            <Card style={{ width: wp(90), marginLeft: 18, marginTop: 15, height: hp(13) }}>
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

                        </View>
                        <View style={{height:hp(10)}}>

                        </View>
                    </View>

              
                {/* {loading == true ?
                <Loader />
                :
                null
            } */}
            </ScrollView>
            </SafeAreaView>
        
    )
}

export default PaymentMethod
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    footer: {
        flex: 1,
        backgroundColor: colors.lightWhite,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'space-between'
    },
    timestyle: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: "center",
        height: hp(7),
        marginHorizontal: '25%',
        borderWidth: 1.5,
        borderColor: colors.secondary,
        marginBottom: 10,
        alignItems: 'center'
    },

})