import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { dimension, fontSizes, colors } from '../../styles';
import screens from '../../constants/screens';

const ListEmpty = () => {
    const navigation = useNavigation()

    const navigationToStore = () => {
        navigation.navigate(screens.ShopTab)
    }

    return (
        <View style={styles.emptyListContainer}>
            <Image style={styles.emptyListImage} source={require('../../assets/gallery/vik.png')} />
            <Text style={styles.emptyListText}>Your basket is empty. To add offers, go to the store</Text>
            <Button title='Go to store' color={colors.main} onPress={navigationToStore} />
        </View>
    );
};

const styles = StyleSheet.create({
    emptyListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimension.height * 0.15
    },
    emptyListImage: {
        height: 300,
        width: 300,
    },
    emptyListText: {
        fontSize: fontSizes.medium,
        fontWeight: '500',
        letterSpacing: 0.5,
        width: dimension.width * 0.75,
        textAlign: 'center',
        marginBottom: dimension.xsmall
    }
})

export default ListEmpty;