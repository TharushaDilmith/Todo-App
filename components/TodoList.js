import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoList = ({ item }) => {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
        marginVertical:6,
    }
});
