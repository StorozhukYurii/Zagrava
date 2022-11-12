import {dimension, colors, fontSizes} from '../../../styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
      fontSize: fontSizes.headline,
      paddingVertical: dimension.small,
      fontWeight: '700',
      color: colors.main,
      letterSpacing: 0.5,
    },
    infoContainer: {
      paddingHorizontal: 10,
    },
    image: {
      width: dimension.width,
      height: dimension.width,
      marginBottom: dimension.xsmall,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    bottomIconPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: dimension.xsmall,
    },
    bottomIconContainer: {
      flexDirection: 'row',
      width: dimension.width / 3.5,
      justifyContent: 'space-between',
    },
    priceContainer: {
      backgroundColor: colors.secondary,
    padding: 5,
    justifyContent: 'space-evenly',
    borderRadius: dimension.borderRadius,
    flexDirection: 'row',
    },
    priceText: {
      color: colors.main,
      fontWeight: '500',
      fontSize: fontSizes.large,
      marginHorizontal:dimension.medium,
    },
    itemRating: {
      flexDirection: 'row',
      padding: dimension.xsmall,
      width: dimension.width / 6.5,
      justifyContent: 'space-evenly',
      position: 'absolute',
      right: 10,
      top: 12,
      alignItems: 'center',
    },
    itemRatingContainer: {
      backgroundColor: colors.secondary,
      height: 40,
      borderRadius: dimension.borderRadius,
      margin: dimension.width / 40,
      width: dimension.width / 6.5,
      opacity: 0.3,
    },
    userImage: {
      height: 36,
      width: 36,
      backgroundColor: colors.secondary,
      borderRadius: dimension.borderRadiusUserImage,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userImageLetter: {
      fontWeight: '700',
      color: colors.main,
      fontSize: fontSizes.large,
    },
    reviewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    reviewInput: {
      // borderWidth:1,
      height: 40,
      flex: 1,
      marginLeft: dimension.small,
    },
    dotContainer: {
      position: 'absolute',
      flexDirection: 'row',
      alignSelf: 'center',
      bottom: - dimension.small,
    },
    dotActive: {
      margin: 3,
      fontSize: 30,
      color: colors.main,
    },
    dot: {
      margin: 3,
      fontSize: 30,
      color: colors.white,
    },
  });