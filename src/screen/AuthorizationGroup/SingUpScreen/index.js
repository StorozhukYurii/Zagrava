import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import screens from '../../../constants/screens';
import CountryCodePickerModal from '../../../modals/CountryCodePickerModal';
import { dimension, fontSizes, colors } from '../../../styles';
import { addNewUser } from '../../../store/userSlice/userSlice';
import { setAuthorization } from '../../../store/authorizationSlice/authorizationSlice';
import { useDispatch, useSelector } from 'react-redux';

const SingUpScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [modalPhoneNumberVisible, setModalPhoneNumberVisible] = useState(false);
    const [modalCityVisible, setModalCityVisible] = useState(false)

    const [country, setCountry] = useState({
        "name": "Ukraine (Україна)",
        "iso2": "ua",
        "dialCode": "380",
        "priority": 0,
        "areaCodes": null
    });

    const [userName, setUserName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [city, setCity] = useState({})


    const createnewuser = () => {
        dispatch(addNewUser({
            id: 1,
            name: userName,
            last_name: lastName,
            phone_number: `+${country.dialCode}` + phoneNumber,
            city: city.name,
        }))
        dispatch(setAuthorization(true))
        navigation.navigate(screens.ProfileTab)
    }

    const changeModalPhoneNumberVisibility = (val) => {
        setModalPhoneNumberVisible(val)
    }

    const changeModalCityVisibility = (val) => {
        setModalCityVisible(val)
    }

    const onOpenTermsOfService = () => {
        navigation.navigate(screens.TermsOfService)
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>
                Create an account
            </Text>

            <Text>Name:</Text>
            <CustomTextInput
                placeholder={'Enter your name'}
                icon={'person'}
                value={userName}
                onChangeText={setUserName}
            />

            <Text>Surname:</Text>
            <CustomTextInput
                placeholder={'Enter your surname'}
                icon={'person-add'}
                value={lastName}
                onChangeText={setLastName}
            />

            <Text>Phone number:</Text>
            <CustomTextInput
                placeholder={'Enter your phone number'}
                dialCode={country.dialCode}
                phoneNumberInput
                changeModalVisibility={changeModalPhoneNumberVisibility}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            <Text>City</Text>
            <CustomTextInput
                city
                placeholder={'Select your sity'}
                icon={'location'}
                changeModalVisibility={changeModalCityVisibility}
                value={city.name} />

            <Text style={styles.text}>We will send you message to confirm your number</Text>
            <Text style={styles.text}>By registering you confirm that you accept our <Text onPress={onOpenTermsOfService} style={styles.termsText}>Terms and Privacy Policy</Text></Text>
            <CustomButton title={"Let's go"} onConfirm={() => createnewuser()} />

            <CountryCodePickerModal changeModalVisibility={changeModalPhoneNumberVisibility} modalVisible={modalPhoneNumberVisible} setCountry={setCountry} />
            <CountryCodePickerModal changeModalVisibility={changeModalCityVisibility} modalVisible={modalCityVisible} setCountry={setCity} city />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: dimension.small,
        flex: 1
    },
    title: {
        fontSize: fontSizes.large,
        fontWeight: '700',
        letterSpacing: 1,
        color: colors.dark,
        marginVertical: dimension.medium,
        alignSelf: 'center',
    },
    text: {
        color: colors.dark,
        marginBottom: dimension.medium
    },
    termsText: {
        color: colors.main,
        fontWeight: '500',
        textDecorationLine: 'underline'
    }
})
export default SingUpScreen;