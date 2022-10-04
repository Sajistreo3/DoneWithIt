import React from 'react';
import ListItem from '../components/ListItem';
import SafeScreen from '../components/SafeScreen';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

function AccountScreen() {

    const menuItems = [
        {
            title: 'My Listings',
            icon: {
                name: 'format-list-bulleted',
                backgroundColor: colors.primary
            }
        },
        {
            title: 'My Messages',
            icon: {
                name: 'email',
                backgroundColor: colors.secondary
            }
        }
    ]

    return (
        <SafeScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Shajeed"
                    subTitle="shajeed@live.fr"
                    image={require('../assets/me.png')}
                    />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem
                            title={item.title}
                            IconComponant={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress={() => console.log(item.title)}
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponant={
                    <Icon
                        name='logout'
                        backgroundColor='#ffe66d'
                    />
                }
                onPress={() => console.log("Log Out Pressed")}
            />
            
        </SafeScreen>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.lightGray,
    }
})

export default AccountScreen;