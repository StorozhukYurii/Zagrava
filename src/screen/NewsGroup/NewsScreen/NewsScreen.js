import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Container from '../../../components/Container';
import { useSelector } from 'react-redux';
import NewsList from './components/NewsList';
import { dimension } from '../../../styles';
import HeaderLogo from '../../../components/HeaderLogo';

const NewsScreen = () => {

const news = useSelector(state => state.listings.news);
    
  return (
    <Container>
      <HeaderLogo goBack reverse/>
        <FlatList
            data={news}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<NewsList item={item}/>) }
            contentContainerStyle={{padding:dimension.medium}}
        />
    </Container>
  );
};

export default NewsScreen;
