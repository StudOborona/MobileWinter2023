import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MyComponent from './MyComponent';


export default function App() {
  return (
    <View style={styles.container}>
       <MyComponent myText="Пример текста, переданного в отдельный компонент" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
