import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/Container';
import HeaderLogo from '../../components/HeaderLogo';
import Separator from '../../components/Separator';
import {colors, dimension, fontSizes} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AttachmentInProfileScreen from '../../components/AttachmentInProfileScreen/AttachmentInProfileScreen';

export const ProfileScreen = () => {
  return (
    <Container>
      <HeaderLogo />
      <Separator big />
      <TouchableOpacity activeOpacity={0.7} style={styles.personInfoContainer}>
        <View style={styles.personImage}>
          <Text style={styles.personLetterInImage}>Y</Text>
        </View>
        <View style={styles.personPersonalDataContainer}>
          <View style={styles.personPersonalData}>
            <Text style={[styles.personalDataText, {fontSize:fontSizes.large}]}>Yurii</Text>
            <Text style={[styles.personalDataText, {fontSize:fontSizes.small}]}>+30(066)121-21-21</Text>
          </View>
          <View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={colors.darkGrey} />
          </View>
        </View>
      </TouchableOpacity>

      <AttachmentInProfileScreen text={'City'} city={'Ternopil'} icon={'location-sharp'}/>

      <View style={{height:30}}></View>
      
      <AttachmentInProfileScreen text={'All news'}  icon={'newspaper'}/>

      <AttachmentInProfileScreen text={'My reserve'}  icon={'basket'}/>
      
      <AttachmentInProfileScreen text={'Favorites'}  icon={'heart'}/>

      <View style={{height:30}}></View>

      <AttachmentInProfileScreen text={'Configuration'}  icon={'options'}/>

      <AttachmentInProfileScreen text={'Terms of service'}  icon={'reader'}/>

      <AttachmentInProfileScreen text={'Language'}  icon={'language'}/>

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
    borderRadius: 30,
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
