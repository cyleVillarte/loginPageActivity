import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';   


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry   

        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={()   => {}}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>   

        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.socialButton}   
 onPress={() => {}}>
        <FontAwesome5 name="apple" size={24} color="white" />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}   
 onPress={() => {}}>
        <FontAwesome5 name="google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2544', 
  },
  title: {
    color: 'white',
    fontSize: 32,
    marginBottom: 100,
    fontWeight: 'bold',
    marginRight: 190,

  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#424769', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#2D3250', 
    color: 'white', 
  },
  forgotPasswordButton: {
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#7077A1', 
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#474F7A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
    color: '#7077A1', 
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474F7A',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 10,
  },
});