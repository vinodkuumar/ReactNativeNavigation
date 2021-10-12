import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';
import Header from '../Header/Header';

export default function About({navigation}){
    return(
        <View style={styles.container}>
            <Header title="About" navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>About Screen</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'orange'
    },
    text:{
        fontSize:24,
        color:'#ffffff',
        fontWeight:'800',
        alignContent:'center',
        alignItems:'center',
    }
})