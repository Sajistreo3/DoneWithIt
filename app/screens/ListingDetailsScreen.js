import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Alert,
  StatusBar,
  Dimensions,
  Platform,
  SafeAreaView,
  Button,
  ImageBackground,
} from 'react-native';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';


function ListingDetailsScreen() {
  return (
    < View >
      <Image style={styles.image} source={require('../assets/jacket.png')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            image={require("../assets/me.png")}
            title="Shajeed Islam"
            subTitle="3 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen;