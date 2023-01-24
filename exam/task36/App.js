import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const PhoneInput = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (text) => {
    setPhone(text);
  }

  const handleSubmit = () => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneRegex.test(phone)) {
      Alert.alert('Правильный номер телефона');
    }
  }

 return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        placeholderTextColor="#1133dd" 
        value={phone}
        onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    color: '#000',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'blue',    
    padding: 10,
    margin: 10,
    width: '40%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  }
});

export default PhoneInput;