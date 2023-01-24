### **Практические задания с экзамене**

Номер в списке равен номеру варианта


4. Создайте хук, который позволит компоненту изменять цвет кнопки

_20. Что выведется в результате данного кода? Каким образом можно задать стиль компоненту FlatList?
```
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
  } 
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList 
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

```

_36. Организуйте обработку пользовательского ввода и в случае, если он вводит правильный номер телефона - вызов Alert

_44. Создать кнопку с градиентом, обводкой, текстом и тенью

_50. Создайте компонент в качестве контейнера, поддерживающего компановку с помощью flexbox.