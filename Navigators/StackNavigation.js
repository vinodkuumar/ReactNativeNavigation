import * as React from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function Home({navigation}){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:'center',backgroundColor:'#03cafc'}}>
                <Text style={{flex:1,fontSize:20,fontWeight:'800',color:'#ffffff'}}>Home is Here</Text>
                <Button
        title="Go to Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
            </View>
        )
}

function Contacts({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:'center',backgroundColor:'#c203fc'}}>
            <Text style={{flex:1,fontSize:20,fontWeight:'800',color:'#ffffff'}}>Contact is Here</Text>
            <Button title="Go to About" onPress={() => navigation.navigate("About")}/>
        </View>
    )
}

function About({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:'center',backgroundColor:'#48d969'}}>
            <Text style={{flex:1,fontSize:20,fontWeight:'800',color:'#ffffff'}}>About is Here</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}


const forFade = ({current,next}) =>{
    const opacity = Animated.add(
        current.progress,
        next ? next.progress:0
    ).interpolate({
        inputRange:[0,1,2],
        outputRange:[0,1,0]
    })
    return{
        leftButtonStyle:{opacity},
        rightButtonStyle:{opacity},
        titleStyle:{opacity},
        backgroundStyle:{opacity}
    }
}

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerTintColor:'white',headerStyle:{backgroundColor:'green'}}} />
            <Stack.Screen name="Contacts" component={Contacts} 
            options={{headerStyleInterpolator:forFade}}/>
            <Stack.Screen name="About" component={About} 
            options={{headerStyleInterpolator:forFade}}/>
        </Stack.Navigator>
    )
}
export default function StackNavigation(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}