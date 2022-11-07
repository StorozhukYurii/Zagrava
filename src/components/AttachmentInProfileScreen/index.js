import React from 'react';
import {StyleSheet, Text, View, Pressable, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, dimension, fontSizes} from '../../styles';
import Separator from '../Separator';

const AttachmentInProfileScreen = ({icon, text, city, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
        <Ionicons name={icon} size={25} color={colors.main} style={{left:5}}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
          <View style={{flexDirection: 'row'}}>
            {city && (
              <Text style={[styles.text, {right: 15, color: colors.secondary}]}>
                {city}
              </Text>
            )}

            <Ionicons
              name={'chevron-forward-outline'}
              size={20}
              color={colors.darkGrey}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Separator xsmall/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    padding: dimension.small,
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: dimension.small,
  },
  text: {
    marginLeft: dimension.xsmall,
    color: colors.darkGrey,
    fontSize: fontSizes.medium,
    letterSpacing: 1,
    fontWeight: '600',
  },
});

export default AttachmentInProfileScreen;
