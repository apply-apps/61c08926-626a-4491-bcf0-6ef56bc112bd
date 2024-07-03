// Filename: index.js
// Combined code from all files

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
                <Stack.Screen name="Tale1" component={Tale1Screen} options={{ title: 'Tale 1' }} />
                <Stack.Screen name="Tale2" component={Tale2Screen} options={{ title: 'Tale 2' }} />
                <Stack.Screen name="Tale3" component={Tale3Screen} options={{ title: 'Tale 3' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to Tales for Kids</Text>
            <Button title="Go to Tale 1" onPress={() => navigation.navigate('Tale1')} />
            <Button title="Go to Tale 2" onPress={() => navigation.navigate('Tale2')} />
            <Button title="Go to Tale 3" onPress={() => navigation.navigate('Tale3')} />
        </SafeAreaView>
    );
}

function Tale1Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tale 1: The Little Red Hen</Text>
            <View style={styles.taleContainer}>
                <Text>
                    Once upon a time, there was a little red hen who lived on a farm. She found some grains and decided to plant them...
                </Text>
            </View>
        </SafeAreaView>
    );
}

function Tale2Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tale 2: The Three Little Pigs</Text>
            <View style={styles.taleContainer}>
                <Text>
                    Once upon a time, there were three little pigs who built three houses of different materials. One was made of straw, the second of wood, and the third of bricks...
                </Text>
            </View>
        </SafeAreaView>
    );
}

function Tale3Screen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tale 3: Goldilocks and the Three Bears</Text>
            <View style={styles.taleContainer}>
                <Text>
                    Once upon a time, a little girl named Goldilocks went for a walk in the forest. Pretty soon, she came upon a house. She knocked and, when no one answered, she walked right in...
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    taleContainer: {
        backgroundColor: '#f0f8ff',
        padding: 20,
        borderRadius: 10,
    },
});