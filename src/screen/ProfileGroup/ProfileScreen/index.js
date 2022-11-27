import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Container from '../../../components/Container';
import HeaderLogo from '../../../components/HeaderLogo';
import { colors, dimension, fontSizes } from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AttachmentInProfileScreen from '../../../components/AttachmentInProfileScreen';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../../components/CustomButton';
import { logOut } from '../../../store/userSlice/userSlice';
import { setAuthorization } from '../../../store/authorizationSlice/authorizationSlice';

export const ProfileScreen = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const name = useSelector(state => state.user.name)
  const city = useSelector(state => state.user.city)
  const phone_number = useSelector(state => state.user.phone_number)
  const isAuthorization = useSelector(state => state.auth.isAuthorization)
  
  console.log(isAuthorization, 'is auth')

  const onOpenNews = () => {
    navigation.navigate(screens.News)
  }

  const onOpenOrderList = () => {
    navigation.navigate(screens.OrderList)
  }

  const onOpenFavorite = () => {
    navigation.navigate(screens.Favorite)
  }

  const onOpenUserInfo = () => {
    navigation.navigate(screens.ProfileInfo)
  }

  const onOpenCitySetting = () => {
    navigation.navigate(screens.CitySetting)
  }

  const onOpenConfiguration = () => {
    navigation.navigate(screens.Configuration)
  }

  const onOpenTermsOfService = () => {
    navigation.navigate(screens.TermsOfService)
  }

  const onOpenLanguageSetting = () => {
    navigation.navigate(screens.Language)
  }

  const onOpenRank = () => {
    navigation.navigate(screens.Rank)
  }

  const onLogIn = () => {
    navigation.navigate(screens.LogIn)
  }

  const onLogOut = () => {
    dispatch(logOut())
    dispatch(setAuthorization(false))
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}> 
      <HeaderLogo />
      {isAuthorization && (
        <>
          <TouchableOpacity activeOpacity={0.7} style={styles.personInfoContainer} onPress={onOpenUserInfo}>
            <View style={styles.personImage}>
              <Text style={styles.personLetterInImage}>{name.substr(0, 1)}</Text>
            </View>
            <View style={styles.personPersonalDataContainer}>
              <View style={styles.personPersonalData}>
                <Text style={[styles.personalDataText, { fontSize: fontSizes.large }]}>{name}</Text>
                <Text style={[styles.personalDataText, { fontSize: fontSizes.small }]}>{phone_number}</Text>
              </View>
              <View>
                <Ionicons name={'chevron-forward-outline'} size={20} color={colors.darkGrey} />
              </View>
            </View>
          </TouchableOpacity>

          <AttachmentInProfileScreen text={'City'} city={city} icon={'location-sharp'} onPress={onOpenCitySetting} /></>
      )}

      {!isAuthorization && (
        <View style={{ padding: dimension.small }}>
          <Text style={styles.logInTitle}>Your Profile</Text>
          <Text style={styles.logInText}>Log in to have access to discounts and purchase products</Text>

          <CustomButton title={'Lets go'} onConfirm={onLogIn}/>
        </View>
      )}

      {/* <View style={{ height: dimension.xsmall }}></View> */}

      <AttachmentInProfileScreen text={'All news'} icon={'newspaper'} onPress={onOpenNews} />

      <AttachmentInProfileScreen text={'My reserve'} icon={'cart'} onPress={onOpenOrderList} />

      <AttachmentInProfileScreen text={'Favorites'} icon={'heart'} onPress={onOpenFavorite} />

      <AttachmentInProfileScreen text={'My rank'} icon={'stats-chart-sharp'} onPress={onOpenRank} />

      <View style={{ height: 30 }}></View>

      <AttachmentInProfileScreen text={'Configuration'} icon={'settings-sharp'} onPress={onOpenConfiguration} />

      <AttachmentInProfileScreen text={'Terms of service'} icon={'reader'} onPress={onOpenTermsOfService} />

      <AttachmentInProfileScreen text={'Language'} icon={'language'} onPress={onOpenLanguageSetting} />

      <View style={{ height: 30 }}></View>

      <AttachmentInProfileScreen text={'Log out'} icon={'log-out'} onPress={onLogOut} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  logInTitle: {
    fontSize: fontSizes.headline,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.dark
  },
  logInText: {
    color: colors.darkGrey,
    marginVertical: dimension.small
  },
  logInButton: {
    backgroundColor: colors.main,
    alignItems: 'center',
    alignSelf: 'center',
    width: dimension.width - dimension.medium,
    padding: dimension.medium,
    borderRadius: dimension.borderRadius
  },
  logInButtonText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: '600'
  },
  personInfoContainer: {
    flexDirection: 'row',
    padding: dimension.small,
    marginBottom:dimension.medium
  },
  personImage: {
    backgroundColor: colors.secondary,
    height: 55,
    width: 55,
    borderRadius: dimension.borderRadiusUserImage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personLetterInImage: {
    fontSize: fontSizes.headline,
    fontWeight: '800',
    color: colors.main,
  },
  personPersonalData: {
    flexDirection: 'column',
  },
  personPersonalDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: dimension.small
  },
  personalDataText: {
    fontWeight: '600',
    letterSpacing: 1,
    color: colors.darkGrey
  }
});

export default ProfileScreen;
