# MobileWinter2023

### **Примеры практических заданий на экзамене**

1. Создайте функциональный компонент счётчик и поменяйте его состояние через хук (подсчет нажатий на кнопку).
2. Создайте собственный компонент в отдельном js-файле, вызовите его в основном App и передайте ему значения через props.
3. Что появится на экране при реализации фрагмента синтаксиса:

```
<View
    style={{
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }} >
    {categories.map((cat, idx) => (
        <View
        key={`categories ${idx}`}
        style={{
            width: '30%',
            marginBottom: 20,
        }} >
        <TouchableHighlight
            underlayColor={COLORS.secondary}
            style={{
            height: 100,
            justifyContent: 'center',
            borderRadius: SIZES.radius,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: COLORS.gray,
            }} >
```
4. Исправьте ошибки в коде:

```
import React from 'react'
import { View } from 'react-native'
import { COLORS } from './constants'
import Header from './src/components/Header'
import Popular from './src/components/Popular'

export default function App() {
  return (
    <View
      style={{
        Padding: 24,
        paddingTop: 55,
        paddingBottom: 75,
        BackgroundColor: COLORS.black,
      }}
    >
      <Header />
      <Categories />
      <Popul />
  )
}
```
5. Создайте кнопку и задайте ей анимацию с помощью компонента Animate