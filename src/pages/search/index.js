import {View, Text, StyleSheet} from 'react-native';

export function Search(){
    return (
        <View style ={styles.container}>
            <Text>Página de Busca</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    }
})