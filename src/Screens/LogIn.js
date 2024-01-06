import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Login() {
    const navigation = useNavigation(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const savedUsername = 'eritheia.lab'; 
    const savedPassword = 'eritheia786'; 

    const handleLogin = () => {
        if (username === savedUsername && password === savedPassword) {
            Alert.alert('Login successful');
            navigation.navigate('dashboard'); 
        } else {
            Alert.alert('Error', 'Invalid username or password');
        }
        setUsername('');
        setPassword('');
    };

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={{ height: 690 }}>
                    <Image style={{ marginTop: 80, alignSelf: 'center' }} source={require('../assets/login.png')} />

                    <Text style={{ marginLeft: 59, fontSize: 15, marginTop: 100, fontWeight: 'bold' }}>Login</Text>

                    <TextInput
                        style={{
                            width: 200,
                            borderColor: 'grey',
                            marginTop: 10,
                            borderWidth: 0.5,
                            borderRadius: 4,
                            alignSelf: 'center',
                        }}
                        placeholder="Enter your user name..."
                        placeholderTextColor="grey"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />

                    <Text style={{ marginLeft: 59, fontSize: 15, margin: 10, fontWeight: 'bold' }}>Password</Text>

                    <TextInput
                        style={{
                            width: 200,
                            borderColor: 'grey',
                            borderWidth: 0.5,
                            borderRadius: 4,
                            alignSelf: 'center',
                        }}
                        placeholder="Enter your Password..."
                        placeholderTextColor="grey"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderRadius: 4,
                            alignSelf: 'center',
                            margin: 10,
                            padding: 5,
                            backgroundColor: 'lightgreen',
                        }}
                        onPress={handleLogin}
                    >
                        <Text>login</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
}