import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Container from '../../../components/Container';
import HeaderLogo from '../../../components/HeaderLogo';
import {colors, dimension, fontSizes} from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AttachmentInProfileScreen from '../../../components/AttachmentInProfileScreen';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../constants/screens';
import { useSelector } from 'react-redux';

export const ProfileScreen = () => {

  const name = useSelector(state => state.user.name)
  const city = useSelector(state => state.user.city[0])
  const phone_number = useSelector(state => state.user.phone_number)
  const isAuthorization = useSelector(state => state.auth.isAuthorization)
  
  console.log(isAuthorization)
  const navigation = useNavigation()

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

  return (
    <Container>
      <HeaderLogo />
      <TouchableOpacity activeOpacity={0.7} style={styles.personInfoContainer} onPress={onOpenUserInfo}>
        <View style={styles.personImage}>
          <Text style={styles.personLetterInImage}>{name.substr(0,1)}</Text>
        </View>
        <View style={styles.personPersonalDataContainer}>
          <View style={styles.personPersonalData}>
            <Text style={[styles.personalDataText, {fontSize:fontSizes.large}]}>{name}</Text>
            <Text style={[styles.personalDataText, {fontSize:fontSizes.small}]}>{phone_number}</Text>
          </View>
          <View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={colors.darkGrey} />
          </View>
        </View>
      </TouchableOpacity>

      <AttachmentInProfileScreen text={'City'} city={city} icon={'location-sharp'} onPress={onOpenCitySetting}/>

      <View style={{height:30}}></View>
      
      <AttachmentInProfileScreen text={'All news'}  icon={'newspaper'} onPress={onOpenNews}/>

      <AttachmentInProfileScreen text={'My reserve'}  icon={'cart'} onPress={onOpenOrderList}/>
      
      <AttachmentInProfileScreen text={'Favorites'}  icon={'heart'} onPress={onOpenFavorite}/>

      <AttachmentInProfileScreen text={'My rank'}  icon={'basket'} onPress={onOpenRank}/>

      <View style={{height:30}}></View>

      <AttachmentInProfileScreen text={'Configuration'}  icon={'settings-sharp'} onPress={onOpenConfiguration}/>

      <AttachmentInProfileScreen text={'Terms of service'}  icon={'reader'} onPress={onOpenTermsOfService}/>

      <AttachmentInProfileScreen text={'Language'}  icon={'language'} onPress={onOpenLanguageSetting}/>

      <View style={{height:30}}></View>

      <AttachmentInProfileScreen text={'Log out'}  icon={'log-out'}/>
   
    </Container>
  );
};

const styles = StyleSheet.create({
  personInfoContainer: {
    flexDirection: 'row',
    padding: dimension.small,
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
    flexDirection:'column',
  },
  personPersonalDataContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    paddingHorizontal:dimension.small
  },
  personalDataText:{
    fontWeight:'600',
    letterSpacing:1,
    color:colors.darkGrey
  }
});

export default ProfileScreen;
