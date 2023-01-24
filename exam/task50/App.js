import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        },
      ]}>
      <View style={{ width: 100, height: 100, backgroundColor: '#ffaae3' }} />
      <View style={{ width: 100, height: 100, backgroundColor: '#aae34f' }} />
      <View style={{ width: 100, height: 100, backgroundColor: '#bc31a6' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
