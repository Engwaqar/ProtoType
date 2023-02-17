import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Platform,
     TouchableOpacity,
     Alert
} from "react-native";
import { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { loginUser } from "../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveText from "../../components/RnText";
// import DropDown from "../../components/DropDown";
import Input from "../../components/Input";
import { globalPath } from "../../constants/globalPath";
import RnButton from "../../components/RnButton";
// import Api from "../../../redux/lib/api";
// import urls from "../../../redux/lib/urls";
import Fonts from "../../helpers/Fonts";
import Loader from "../../components/loader";
import { routeName } from "../../constants/routeName";
import ChatHeader from "../../components/ChatHeader";
import Card from "../../components/Card";
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "../../components/Icon";
const EditProfile = ({ navigation }) => {
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
    return (
        <View style={styles.container}>

            <ChatHeader
                backbutton
                title={'Edit Profile'}
                navigation={navigation}
            />
            {/* <ResponsiveText
              alignItems={'center'}
                fontFamily={Fonts.Bold}
                margin={[10,0,0,0]}
                size={3}
                color={colors.grey1}
              >
                Enter your phone number or Email address for sign in.
              </ResponsiveText> */}
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
                            <Icon
                                tintColor={colors.lighterGrey}
                                margin={[40, 0, 0, 0]}
                                size={22} source={globalPath.Camera} />
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
                            {/* <TouchableOpacity onPress={() => navigation.navigate(routeName.EDIT_PROFILE)}>
                                <Icon margin={[0, 7, 0, 0]}
                                    size={30}
                                    source={globalPath.editProfile}>
                                </Icon>
                            </TouchableOpacity> */}
                        </View>
                        <ResponsiveText margin={[5, 0, 0, 10]} weight={'bold'} color={colors.primary} >{'133, Aurangzeb Block, New Garden Town, Lahore-54600, Pakistan'}</ResponsiveText>
                    </View>
                </Card>
            </View>

            <Input
                placeholder={"First Name"}
                height={hp(6.5)}
                margin={[20, 0, 5, 0]}
                // onChnageText={(text) => setUserName(text)}
                leftIcon={globalPath.Email}
            />
            <Input
                placeholder={"Last Name"}
                height={hp(6.5)}
                margin={[20, 0, 5, 0]}
                // onChnageText={(text) => setUserName(text)}
                leftIcon={globalPath.Email}
            />
            <Input
                placeholder={"Email"}
                height={hp(6.5)}
                margin={[20, 0, 5, 0]}
                // onChnageText={(text) => setUserName(text)}
                leftIcon={globalPath.Email}
            />
            <Input
                placeholder={"Address"}
                // value={removeEmojis(password)}
                height={hp(6.5)}
                margin={[20, 0, 5, 0]}
                // keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                // onChnageText={(text) => setPassword(text)}
                
            />
            <Input
                placeholder={"Phone"}
                // value={removeEmojis(password)}
                height={hp(6.5)}
                margin={[20, 0, 5, 0]}
                secureTextEntry
                // keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                // onChnageText={(text) => setPassword(text)}
                leftIcon={globalPath.Lock}
            />
            {/* <ResponsiveText color={colors.red} margin={[20, 0, 0, 10]}>{errorString}</ResponsiveText> */}
            <RnButton
                margin={[50, 0, 0, 0]}
                title={"Update Profile"}
            // onPress={() => Validation()}
            //  onPress={() => navigation.replace(routeName.BOTTOM_TABS)}
            />

        </View>
    );
}

export default EditProfile
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.grey,
        justifyContent: "center",
        alignItems: 'center'
    },

    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    screeninfo: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 35,
    },
    logo: {
        height: hp(30),
        width: wp(70),
        resizeMode: "contain",
        // marginBottom: 20,
        alignItems: "center",
    },
});