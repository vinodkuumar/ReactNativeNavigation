import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';


export default function Home({navigation}){
    return(
        <View style={styles.container}>
            
            <View style={styles.content}>
                <Text style={styles.text}>Home Screen Content</Text>
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
        backgroundColor:'#03cafc'
    },
    text:{
        fontSize:24,
        color:'#ffffff',
        fontWeight:'800',
        alignContent:'center',
        alignItems:'center',
    }
})