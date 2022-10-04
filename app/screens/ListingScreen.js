import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import SafeScreen from '../components/SafeScreen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for Sale',
        price: 100,
        image: require('../assets/jacket.png')
    },
    {
        id: 2,
        title: 'Laptop Like New',
        price: 500,
        image: require('../assets/laptop.jpeg')
    },
]

function ListingScreen() {
    return (
        <SafeScreen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                }
            />
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightGray,
    }
})

export default ListingScreen;