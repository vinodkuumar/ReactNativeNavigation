import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import Header from '../Header/Header';

export default function Contact({navigation}){
    return(
        <View style={styles.container}> 
        <Header title="Contact" navigation={navigation}/>
            <View style={styles.content}>
                <Text style={styles.text}>Contact Screen</Text>
                <Button title="Go Back" onPress={()=>
                navigation.goBack()}/>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#c203fc'
    },
    text:{
        fontSize:24,
        color:'#ffffff',
        fontWeight:'800'
    }
})