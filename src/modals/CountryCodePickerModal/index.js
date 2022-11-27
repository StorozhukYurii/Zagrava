import React, { memo, useState } from 'react';
import { Text, View, Modal, FlatList, Pressable, StyleSheet, TextInput } from 'react-native';
import Container from '../../components/Container';
import HeaderLogo from '../../components/HeaderLogo';
import Separator from '../../components/Separator';
import countries from '../../screen/AuthorizationGroup/countries.json'
import cities from '../../data/cities.json'
import { colors, dimension, fontSizes } from '../../styles';

const CountryCodePickerModal = memo(({ changeModalVisibility, modalVisible, setCountry, city }) => {

    const [textInInput, setText] = useState('')

    const selectCountryNumber = (item) => {
        setCountry(item)
        changeModalVisibility(false)
    }

    let searchItem = (arr, txt) => {
        if (txt.length === 0) {
            return arr
        }

        return arr.filter(item => { return item.name.indexOf(txt) > -1 })
    }
    const searchItemListPhoneNumber = searchItem( countries, textInInput)
    const searchItemListCity = searchItem( cities, textInInput)

    const ListItem = memo(({ item }) => {
        return (
            <>
                <Pressable style={styles.itemContainer} onPress={() => selectCountryNumber(item)}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{city ? item.country : `+${item.dialCode}`}</Text>
                </Pressable>
                <Separator xsmall/>
            </>
        )
    })

    return (
        <Modal visible={modalVisible} animationType='slide' onRequestClose={changeModalVisibility}>
            <Container>
                <HeaderLogo reverse goBack changeModalVisibility={changeModalVisibility}/>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Search for country'}
                    value={textInInput}
                    onChangeText={setText}
                />
                <FlatList
                    data={city ? searchItemListCity : searchItemListPhoneNumber}
                    renderItem={({ item }) => <ListItem item={item} />}
                />
            </Container>
        </Modal>
    )
});

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: dimension.small,
        paddingHorizontal: dimension.medium,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    text: {
        fontSize: fontSizes.medium,
        color: colors.dark,
        fontWeight: '400'
    },
    textInput:{
        height:30,
        borderBottomWidth:1,
        width:dimension.width - dimension.big,
        alignSelf:'center',
        marginVertical:dimension.small
    }
})

export default CountryCodePickerModal;