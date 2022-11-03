import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsItem from './NewsItem';
import {NEWS_LIST} from '../../../data/news';
import { dimension } from '../../../styles';

const NewsList = () => {
  const news = useSelector(state => state.listings.news);

  return (
    <View>
      <FlatList
        data={news}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => <NewsItem item={item} />}
        contentContainerStyle={{padding:dimension.small}}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  );
};

export default NewsList;
