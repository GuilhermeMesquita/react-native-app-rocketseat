import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Não possuem valores semânticos (significado)
// Não possuem estilização própria
// View: div, footer, header, main, aside, section

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>
            <View style={styles.container}>
                <Text style={styles.title}>Hello world</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    }
});