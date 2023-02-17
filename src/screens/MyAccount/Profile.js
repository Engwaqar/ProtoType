import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
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
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-community/async-storage";
const Profile = ({ navigation, route }) => {
    const [image, setImage] = useState(null);
    const toggel = () => {
        Alert.alert("Profile Image", "change profile Image", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {
                text: "Select from gallary",
                onPress: async () => {
                    takephotofromgallary();
                },
            },
        ]);
    };
    const takephotofromgallary = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            //   addPhoto(image);
            setImage(image);
            AsyncStorage.setItem('ProfileImage', JSON.stringify(image));
            console.log(image, "image working");
        });
    };
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
                 title={'Profile'}
                navigation={navigation}
            />
            <ScrollView>
                <View style={styles.footer}>
                    <View style={{ top: 10 }}>

                        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0 }}>
                                <View style={{
                                    alignItems: "flex-end",
                                    alignSelf: "center",
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            zIndex: 1,
                                            position: "absolute",
                                            // borderRadius: 30,
                                            marginTop: 15,
                                        }}
                                        onPress={() => toggel()}
                                    >
                                        {/* <Icon
                                            tintColor={colors.lighterGrey}
                                            margin={[40, 0, 0, 0]}
                                            size={22} source={globalPath.Camera} /> */}
                                    </TouchableOpacity>
                                    <View style={{ alignSelf: 'center', marginTop: 0 }}>
                                        <Image
                                            // source={
                                            //     globalPath.User
                                            // }
                                            source={
                                                image == null
                                                    ? globalPath.User
                                                    : { uri: image.path }
                                            }
                                            style={{
                                                borderRadius: 70,
                                                height: wp(22),
                                                width: wp(22),
                                                resizeMode: 'cover',
                                                backgroundColor: colors.white,
                                            }}
                                        />
                                    </View>

                                </View>
                                {/* <Icon margin={[0, 0, 0, 0]}
                                    size={70}
                                    source={globalPath.User}>
                                </Icon> */}
                                <View style={{ flex: 1 }} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <ResponsiveText flex={1} margin={[0, 0, 0, 10]} weight={'bold'} color={colors.black} >{'Jhon Deo'}</ResponsiveText>
                                        <TouchableOpacity onPress={()=>navigation.navigate(routeName.EDIT_PROFILE)}>
                                            <Icon margin={[0, 7, 0, 0]}
                                                size={30}
                                                source={globalPath.editProfile}>
                                            </Icon>
                                        </TouchableOpacity>
                                    </View>
                                    <ResponsiveText margin={[5, 0, 0, 10]} weight={'bold'} color={colors.primary} >{'133, Aurangzeb Block, New Garden Town, Lahore-54600, Pakistan'}</ResponsiveText>
                                </View>
                            </Card>
                        </View>
                        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.MyOrder}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'My Orders'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(routeName.MY_FAV_LIST)}>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.MyOrder}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'My Favourite'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.MyWallet}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'My Wallet'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(routeName.NOTIFICATION)}>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.Notifi}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'Notifications'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.earn}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'Refer & Earn'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(routeName.LOGIN)}>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.ChangePassword}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'Change password'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card flexDirection='row' style={{ width: wp(90), margin: 0, marginHorizontal: 10, top: 0, borderRadius: 0, height: hp(8) }}>
                                    <Icon margin={[0, 7, 0, 0]}
                                        size={25}
                                        source={globalPath.loogout}>
                                    </Icon>
                                    <View style={{ flex: 1.5 }} >
                                        <ResponsiveText size={4} margin={[0, 0, 0, 10]} color={colors.black} >{'Logout'}</ResponsiveText>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ height: hp(10) }}>

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

export default Profile
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