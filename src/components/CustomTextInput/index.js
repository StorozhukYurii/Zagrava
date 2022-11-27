import React from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { colors, dimension, fontSizes } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
    placeholder,
    phoneNumberInput = false,
    icon,
    isEditable = true,
    dialCode,
    changeModalVisibility,
    city,
    value,
    onChangeText,
    wrong = false
}) => {
    return (
        < View style={[styles.textInputContainer, wrong ? styles.wrongInput : {}]} >
            {!phoneNumberInput && (
                <View style={styles.iconContainer}>
                    <Ionicons name={icon} size={25} color={colors.main} />
                </View>
            )}

            {phoneNumberInput && (
                <Pressable style={styles.iconContainer} onPress={() => changeModalVisibility(true)}>
                    <Text style={styles.phoneText}>+{dialCode}</Text>
                </Pressable>
            )}

            <View style={styles.separator} />

            <TextInput
                style={styles.inputText}
                placeholder={placeholder}
                editable={isEditable}
                keyboardType={phoneNumberInput ? 'numeric' : 'default'}
                onPressIn={city ? () => changeModalVisibility(true) : null}
                value={value}
                onChangeText={onChangeText}
            />
        </ View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        height: 50,
        backgroundColor: colors.secondary,
        width: dimension.width - dimension.medium,
        marginVertical: dimension.small,
        borderRadius: dimension.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText: {
        flex: 1,
        textAlign: 'left',
        paddingHorizontal: dimension.medium,
        fontSize: fontSizes.medium,
        color: colors.dark,
    },
    separator: {
        width: 1,
        height: dimension.big,
        backgroundColor: colors.dark
    },
    iconContainer: {
        width: dimension.small * 7,
        alignItems: 'center'
    },
    phoneText: {
        fontSize: fontSizes.medium
    },
    wrongInput:{
        borderWidth:1,
        borderColor:colors.red
    }
})
export default CustomTextInput;