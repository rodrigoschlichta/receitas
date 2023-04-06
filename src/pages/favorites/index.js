import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export function Favorites(){
    return (
        <SafeAreaView style ={styles.container}>
            <Text>Página de Favoritas</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
    }
})