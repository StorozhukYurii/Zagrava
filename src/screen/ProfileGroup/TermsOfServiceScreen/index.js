import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Container from '../../../components/Container';
import HeaderLogo from '../../../components/HeaderLogo';
import { colors, dimension, fontSizes } from '../../../styles';

const TermsOfServiceScreen = () => {
  return (
    <Container>
      <HeaderLogo reverse goBack/>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Zagrava Terms & Privacy Policy</Text>
        <Text style={styles.text}>When does react component re-render? What can cause the re-render, and how to prevent unnecessary renders? Here is a quick cheat sheet you can refer to whenever you find yourself asking these questions.When does react component re-render? What can cause the re-render, and how to prevent unnecessary renders? Here is a quick cheat sheet you can refer to whenever you find yourself asking these questions.</Text>
        <Text style={styles.titleText}>Terms of Services</Text>
        <Text style={styles.text}>By default, when the state of the component changes, this component and all its children re-render. You can wrap React component with memo to prevent an entire subtree from re-rendering.By default, when the state of the component changes, this component and all its children re-render. You can wrap React component with memo to prevent an entire subtree from re-rendering.</Text>
        <Text style={styles.titleText}>Using Zagrava</Text>
        <Text style={styles.text}>When does react component re-render? What can cause the re-render, and how to prevent unnecessary renders? Here is a quick cheat sheet you can refer to whenever you find yourself asking these questions.When does react component re-render? What can cause the re-render, and how to prevent unnecessary renders? Here is a quick cheat sheet you can refer to whenever you find yourself asking these questions.</Text>
        <Text style={styles.titleText}>Your right and License with Zagrava</Text>
        <Text style={styles.text}>When does react component re-render? What can cause the re-render, and how to prevent unnecessary renders? Here is a quick cheat sheet you can refer to whenever you find yourself asking these questions.When does react component re-render? What can cause the re-render, and how to prevent unnecessary renders? Here is a quick cheat sheet you can refer to whenever you find yourself asking these questions.</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:dimension.small
  },
  titleText:{
    fontSize:fontSizes.headline,
    letterSpacing:1,
    fontWeight:'800',
    color:colors.dark,
    padding:dimension.small
  },
  text:{
    fontSize:fontSizes.small,
    letterSpacing:0.4
  }
})

export default TermsOfServiceScreen;
