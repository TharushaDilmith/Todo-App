import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useLayoutEffect } from 'react'

const AddTodo = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Add Todo",
            headerStyle:{
                backgroundColor:"#00FFFF",
                
            },
            headerTitleStyle:{
                alignSelf:'center',
                marginRight:30
            }
        })
    }, [navigation])
    return (
        <View>
            <StatusBar style="light"/>
            <Text>Add Todo</Text>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({})
