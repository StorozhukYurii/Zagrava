import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import Separator from '../../../components/Separator';
import {colors, dimension, fontSizes} from '../../../styles/index';
import HeaderLogo from '../../../components/HeaderLogo';
import Container from '../../../components/Container';

const NewsItemScreen = ({route}) => {
  const navigation = useNavigation();


  const {item} = route.params;

  return (
    <Container>
      <ScrollView>
        <HeaderLogo reverse goBack/>
        <Image source={item.image} style={styles.image} resizeMode={'stretch'} />
        <View style={styles.textContainer}>
        <Text style={styles.date}>{item.date}</Text>  
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={[styles.text]}>{item.information}</Text>
        <Separator big />
        <View style={{marginBottom: 5}}></View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia vitae
          rem, labore quam minima tenetur recusandae corporis repudiandae
          architecto facilis facere quos odit vero provident blanditiis debitis.
          Voluptas, quia? Dolorem quis, soluta recusandae officiis sit, incidunt
          est vero ratione aspernatur minus facere quos consectetur rem iusto
          doloribus saepe odit laudantium impedit atque nisi? Explicabo
          voluptatum error impedit expedita aperiam. Sint deleniti laboriosam
          totam, iste enim tenetur tempora voluptas ullam nulla? Distinctio,
          numquam tempora dolorem consectetur aperiam odio et temporibus
          accusantium aliquam deserunt cupiditate quibusdam magni quia fugiat
          maiores delectus? Quo recusandae accusantium numquam fuga, itaque
          necessitatibus. Assumenda nesciunt aliquid sint officia ratione vitae
          rerum accusamus, illo, dolores, laboriosam doloribus molestiae
          deleniti recusandae voluptates dolorum iure veniam culpa delectus
          reiciendis. Animi laudantium, blanditiis consequuntur tenetur earum
          maxime illum, dolor laborum saepe soluta alias sint excepturi aliquam
          enim incidunt veniam placeat sequi, cupiditate dignissimos eligendi!
          Dicta, libero quidem? Sint, ex suscipit! Sed distinctio necessitatibus
          magni dote laborum officia dolorum! Deleniti sint beatae, expedita
          nobis eum repellat suscipit exercitationem nesciunt impedit aut iusto.
          Quod nostrum magnam ipsam, quia a non! Debitis atque nam repudiandae
          officia laboriosam rerum earum beatae. Ipsa et delectus fugiat
          accusamus obcaecati quia quaerat vitae mollitia id ex, nihil earum.
          Architecto eligendi nemo nihil? Earum, amet obcaecati nemo ab
          praesentium officiis ullam eveniet est mollitia harum eaque illum. Hic
          laboriosam eveniet dolor nobis. Accusantium odit totam reiciendis quam
          quaerat veritatis.
        </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: dimension.width,
    height: dimension.width,
  },
  title: {
    fontWeight: '800',
    fontSize: fontSizes.headline,
    marginVertical: 10,
    letterSpacing: 0.5,
  },
  textContainer:{
    padding:10
  },
  date:{
    fontSize:fontSizes.xsmall,
    fontWeight:'500',
    color:colors.darkGrey
  },
  text: {
    fontSizes: fontSizes.small,
    fontWeight: '500',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
});

export default NewsItemScreen;
