import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import TodoList from '../components/TodoList';

const Home = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"My Todos",
            headerStyle:{
                backgroundColor:"#00FFFF",
                
            },
            headerTitleStyle:{
                alignSelf:'center',
                marginLeft :50
            },
            headerRight:()=>(
                <TouchableOpacity style={styles.addTodo} onPress={()=>navigation.navigate('AddTodo')} >
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
                
            )
        })
    }, [navigation])
    return (
        <View>
            <StatusBar style="light"/>
            <TodoList/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    addTodo:{
        marginRight:10
    }
})
