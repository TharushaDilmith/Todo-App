import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import TodoList from '../components/TodoList';

const Home = ({navigation}) => {
    const [todos, settodos] = useState([
        { text: "Play pubg", key: "1" },
        { text: "Watch cricket match", key: "2" },
        { text: "Eat lunch", key: "3" },
        { text: "Do homeworks", key: "4" },
      ]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"My Todos",
            headerStyle:{
                backgroundColor:"#2c6BED",
                
            },
            headerTitleStyle:{
                alignSelf:'center',
                marginLeft :50,
                color:'#fff',
            },
            headerRight:()=>(
                <TouchableOpacity style={styles.addTodo} onPress={()=>navigation.navigate('AddTodo')} >
                    <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>
                
            )
        })
    }, [navigation])
    return (
        <View>
            <StatusBar style="light"/>
            <FlatList
                data={todos}
                renderItem={({item})=>(
                    <TodoList item={item}/>
                )}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    addTodo:{
        marginRight:10
    }
})
