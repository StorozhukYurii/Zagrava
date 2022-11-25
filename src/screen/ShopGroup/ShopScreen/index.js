import React, { useCallback, useEffect, useRef, useState, memo } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import Container from '../../../components/Container';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Separator from '../../../components/Separator';
import { colors } from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../constants/screens';
import { useSelector } from 'react-redux';
import Category from './components/Filter/Category';
import BasketIcon from '../../../components/BasketIcon/BasketIcon';
import ListEmpty from '../../../components/ListEmpty';
import ListingItems from './components/ItemList/ListingItems';
import SingleItem from './components/ItemList/SingleItem';
import { createSelector } from 'reselect';


export const ShopScreen = () => {
    const navigation = useNavigation()

    const initialFilterArray = useSelector(state => state.filter.initialFilter)
    const listings = useSelector(state => state.listings.listings)

    const [inputText, setInputText] = useState('')
    const [isSingleItem, setSingleItem] = useState(true);
    const columnWrapperStyle = { padding: 5 };
    let itemInBasketSum = listings.reduce((sum, item) => sum + item.amount, 0)


    let searchItem = (arr, txt) => {
        if (txt.length === 0) {
            return arr
        }

        return arr.filter(item => { return item.name.indexOf(txt) > -1 })
    }

    const filteredItemSelector = createSelector(
        state => state.listings.listings,
        state => state.filter.initialFilter,
        (list, filters) => {
            return list.filter(item => filters.includes('Favorite') ? item.like === true : list)
                .slice().sort((a, b) => (filters.includes('From a higher price') ? (a.price > b.price ? -1 : 1) : filters.includes('From a lower price') ? (a.price > b.price ? 1 : -1) : filters.includes('From a higher rating') ? (a.rating > b.rating ? -1 : 1) : filters.includes('From a lower rating') ? (a.rating > b.rating ? 1 : -1) : list))
                .filter(item => filters.includes('Celtic god') ? item.type === 'Celtic god' : filters.includes('Wicca') ? item.type === 'Wicca' : filters.includes('Scandinavian god') ? item.type === 'Scandinavian god' : filters.includes('Sumerian') ? item.type === 'Sumerian' : filters.includes('Candel holders') ? item.type === 'Candel holders' : filters.includes('Ancient Greece') ? item.type === 'Ancient Greece' : list)
                .filter(item => filters.includes('Oak') ? item.material === 'Oak' : filters.includes('Pine') ? item.material === 'Pine' : list)
        },
    );
    
    const onOpenOrderList = () => {
        navigation.navigate(screens.OrderList)
    }

    const onToggleList = () => {
        setSingleItem(!isSingleItem);
    };

    const ListHeader = () => {
        return (
            <View style={styles.listHeader}>
                <Text style={styles.listHeaderText}>
                    {filteredListing.length} listings found
                </Text>
                <Pressable onPress={() => onToggleList()}>
                    <Ionicons
                        size={25}
                        name={isSingleItem ? 'layers-outline' : 'map-outline'}
                        color={colors.dark}
                    />
                </Pressable>
            </View>
        );
    };

    const filteredListing = useSelector(filteredItemSelector);
    let a = searchItem(filteredListing, inputText)

    return (
        <Container>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={'search-outline'} size={24} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        // onChange={event => change(event.nativeEvent.text)}
                        value={inputText}
                        placeholder="Search..."
                        keyboardType={'web-search'}
                        autoCorrect={false}
                        onChangeText={(val) => setInputText(val)}
                    />
                    <Pressable style={styles.close}>
                        <Ionicons name={'backspace-outline'} size={24} />
                    </Pressable>
                </View>
                <TouchableOpacity style={styles.basketIcon} onPress={onOpenOrderList}>
                    <View>
                        <IconFontAwesome5 name={'shopping-basket'} size={24} />
                        <View style={styles.basketCounterContainer}>
                            <Text style={styles.basketCounter}>{itemInBasketSum}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.containerF}>
                <FlatList
                    data={initialFilterArray}
                    renderItem={({ item }) => <Category item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>


            <Separator small />

            <View style={styles.containerI}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={inputText.length === 0 ? filteredListing : a}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            isSingleItem ? (
                                <SingleItem item={item} />
                            ) : (
                                <ListingItems item={item} />
                            )
                        }
                        ListHeaderComponent={ListHeader}
                        numColumns={!!isSingleItem ? 1 : 2}
                        key={isSingleItem ? 1 : 2}
                        ItemSeparatorComponent={() =>
                            isSingleItem ? <Separator big /> : null
                        }
                        columnWrapperStyle={!isSingleItem ? columnWrapperStyle : null}
                        ListEmptyComponent={ListEmpty}
                    />
                </View>
                <BasketIcon />
            </View>
        </Container>
    );
}


const styles = StyleSheet.create({
    close: {
        width: '10%',
        backgroundColor: colors.secondary,
        height: 40,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        backgroundColor: colors.secondary,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: '10%',
    },
    textInput: {
        height: 40,
        backgroundColor: colors.secondary,

        flex: 1,
        width: '100%',
    },
    container: {
        padding: 10,
        flexDirection: 'row',
        flex: 1,
    },
    basketIcon: {
        alignSelf: 'center',
        padding: 2,
        marginRight: 15,
        // backgroundColor:colors.secondary
    },
    basketCounterContainer: {
        height: 18,
        width: 18,
        backgroundColor: colors.secondary,
        position: 'absolute',
        bottom: -8,
        right: -5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    basketCounter: {
        // alignSelf:'center',
        color: colors.main,
        fontSize: 10,
        fontWeight: '500'
    },
    containerF: {
        paddingBottom: 10,
    },
    containerI: {
        flex: 1,
        // paddingHorizontal:10
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    listHeaderText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.darkGrey,
    },
});

export default ShopScreen;