import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  flat: {
    backgroundColor: "#fff33d"
  }
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList style={styles.flat}
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};
export default FlatListBasics;

// ЗАДАНИЕ: Что выведется в результате данного кода? Каким образом можно задать стиль компоненту FlatList?
// ОТВЕТ: В результате данного кода выведется список имен Devin, Dan, ..., Julie. Задать стиль компоненту FlatList можно, если
// добавить соответствующий стиль в константу styles 
// flat: {
//     backgroundColor: "#fff33d"
//   }
// и применить данный стиль к классу FlatList: <FlatList style={styles.flat}

