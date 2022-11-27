import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Container from '../../../components/Container';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import screens from '../../../constants/screens';
import { colors, dimension, fontSizes } from '../../../styles';
import CountryCodePickerModal from '../../../modals/CountryCodePickerModal';
import { useDispatch, useSelector } from 'react-redux';
import { checkExitingNumber } from '../../../store/userSlice/userSlice';
import { setAuthorization } from '../../../store/authorizationSlice/authorizationSlice';
import { checkId } from '../../../store/userSlice/userSlice';
import { createSelector } from "reselect";


const LogInScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const users = useSelector(state => state.user.users)

    const [errorMessage, setErrorMessage] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('')
    const [country, setCountry] = useState({
        "name": "Ukraine (Україна)",
        "iso2": "ua",
        "dialCode": "380",
        "priority": 0,
        "areaCodes": null
    });


    const changeModalVisibility = (val) => {
        setModalVisible(val)
    }

    const onSingIn = () => {
        navigation.navigate(screens.SingUp)
    }

    const checkNumber = () => {
        const num = `+${country.dialCode}` + phoneNumber
        if (phoneNumber.length == 8 || phoneNumber.length == 7) {
            users.filter(item => {
                if (item.phone_number === num) {
                    dispatch(checkExitingNumber(item))
                    dispatch(setAuthorization(true))
                    setErrorMessage('')
                    setTimeout(() => {
                        navigation.navigate(screens.ProfileTab)
                    }, 3000)
                    setErrorMessage('')
                } else
                 setErrorMessage("Sorry you don't have an account")
            })
        } else {
            setErrorMessage("Not valid number!")
        }

    }

    return (
        <Container style={styles.container}>
            <Text style={styles.title}>Workshop Zagrava Greeting You!</Text>
            <Image source={require('../../../assets/gallery/ic_launcher_round.png')} style={styles.imageLogo} resizeMode={'contain'} />

            <CustomTextInput
                placeholder={'Enter your phone number'}
                dialCode={country.dialCode}
                phoneNumberInput
                changeModalVisibility={changeModalVisibility}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                wrong={errorMessage ? true : false}
            />

            {errorMessage && (<Text style={styles.errorText}>{errorMessage}</Text>)}

            <Text style={styles.text}>We will send you message to confirm your number</Text>

            <CustomButton title={"Let's go"} onConfirm={checkNumber} />

            <CustomButton bgColorNone title={"Don't have an account? Create one!"} onConfirm={onSingIn} />

            <CountryCodePickerModal changeModalVisibility={changeModalVisibility} modalVisible={modalVisible} setCountry={setCountry} />
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: fontSizes.headline,
        alignSelf: 'center',
        marginTop: dimension.small,
        color: colors.main,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    imageLogo: {
        width: dimension.width / 2,
        height: dimension.width / 3,
        maxHeight: 400,
        marginVertical: dimension.big,
        alignSelf: 'center'
    },
    container: {
        paddingHorizontal: dimension.small
    },
    text: {
        color: colors.dark,
        marginBottom: dimension.big
    },
    errorText: {
        color: colors.red,
        alignSelf: 'center',
        marginTop: -dimension.small,
        fontWeight: '500',
        textDecorationLine: 'underline',
        fontSize: fontSizes.xsmall,
    }
})
export default LogInScreen;