import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsItemInMainScreen from './NewsItemInMainScreen';
import {NEWS_LIST} from '../../../data/news';
import { dimension } from '../../../../styles';

const NewsListInMainScreen = () => {
  const news = useSelector(state => state.listings.news);

  return (
    <View>
      <FlatList
        data={news}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => <NewsItemInMainScreen item={item} />}
        contentContainerStyle={{padding:dimension.small}}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  );
};

export default NewsListInMainScreen;
