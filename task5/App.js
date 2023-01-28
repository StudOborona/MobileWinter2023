import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const MyButton = () => {
  const [animationValue] = useState(new Animated.Value(1));

  const onPress = () => {
    Animated.timing(animationValue, {
      toValue: 0.5,
      duration: 500
    }).start();
  }

  const buttonStyle = {
    transform: [{ scale: animationValue }],
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyle = {
    color: 'white'
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[buttonStyle]}>
          <Text style={textStyle}>Не нажимать</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

export default MyButton;
