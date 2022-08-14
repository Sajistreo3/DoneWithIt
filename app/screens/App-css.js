// import { StatusBar } from 'expo-status-bar'
import {
  View
} from 'react-native';



export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
    </View>
  );
}

{/* 
export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
        top: 20,
        left: 20,
        position: 'relative',
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
    </View>
  );
}
*/}


// flexBasis, flexGrow and flexShink
{/* 
export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 400,
        flexShrink: 1, // same as flex: 1
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
    </View>
  );
}
*/}

// Flex Wrap, AlighContent

{/**
export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'gray',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100
      }} />
    </View>
  );
}
 */}

//  justifyContent, alignItems

{/**
export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
        alignSelf: "flex-start"
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 200
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
    </View>
  );
}
 */}