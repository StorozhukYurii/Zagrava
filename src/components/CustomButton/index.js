import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { colors, dimension, fontSizes } from '../../styles';

const CustomButton = ({onConfirm, bgColorNone, title}) => {

    

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: bgColorNone ? {} : colors.main }]} onPress={onConfirm}>
            <Text style={[styles.buttonText, {color: bgColorNone ? colors.main : colors.white}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: dimension.width - dimension.medium,
        padding: dimension.medium,
        borderRadius: dimension.borderRadius,
        marginVertical:dimension.small
    },
    buttonText: {
        color: colors.white,
        fontSize: fontSizes.medium,
        fontWeight: '600'
    },
})
export default CustomButton;