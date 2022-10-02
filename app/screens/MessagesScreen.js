import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import SafeScreen from '../components/SafeScreen';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/me.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/me.png')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/me.png')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        // Delete Message from the Message
        setMessages(messages.filter((m) => m.id !== message.id));
    }

    return (
        <SafeScreen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        }
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 4,
                            title: 'T4',
                            description: 'D4',
                            image: require('../assets/me.png')
                        },
                    ])
                }}
            />
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;