import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, dimension, fontSizes} from '../../../../styles';
import Separator from '../../../../components/Separator'
import screens from '../../../../constants/screens';
import { useNavigation } from '@react-navigation/native';


const NewsList = ({item}) => {

  const navigation = useNavigation()

  const onOpenNewsItem = () => {
    navigation.navigate(screens.NewsItem, {id:item.id, item:item})
  }

  return (
    <TouchableWithoutFeedback onPress={onOpenNewsItem}>
      <View style={{marginBottom:15}}>
        <Image source={item.image} style={styles.image} />
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={[styles.text]}>{item.information}</Text>
        <Text style={[styles.text, {color:colors.main, textDecorationLine:'underline', alignSelf:'flex-end', fontSize:fontSizes.medium}]}>Read more</Text>
        <Separator big/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    width: dimension.width * 0.92,
    height: dimension.width * 0.8,
    borderRadius: dimension.borderRadius,
    marginBottom:5,
  },
  title:{
    fontWeight:'800',
    fontSize:fontSizes.large,
    marginBottom:5,
    letterSpacing:0.5
  },
  text:{
    fontSizes:fontSizes.small,
    fontWeight:'500',
    marginBottom:5,
    letterSpacing:0.5
  }
});

export default NewsList;
