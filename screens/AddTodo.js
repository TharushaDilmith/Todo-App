import React from "react";
import { StyleSheet, Text, View ,Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { Input } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";


const AddTodo = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Todo",
      headerStyle: {
        backgroundColor: "#2c6BED",
      },
      headerTitleStyle: {
        
        color : '#fff'
      },
    });
  }, [navigation]);

  const onChange =(e,selectedDate)=>{
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setShow(false);

  }

  const showMode =(currentMode)=>{
        setShow(true);
        setMode(currentMode);
  }

  const showDatePicker = () => {
      showMode('date');
      
  };
  const showTimePicker = () => {
      showMode('time');
  };

  return (
    <>
      <StatusBar style="light" />
      <KeyboardAvoidingView>
        <Input style={styles.input} autoFocus placeholder="name" />
        <Input style={styles.input} placeholder="description" />
        <TouchableOpacity onPress={showDatePicker}>
          <Input style={styles.input} placeholder="Date" disabled  />
        </TouchableOpacity>
        <TouchableOpacity onPress={showTimePicker}>
          <Input style={styles.input} placeholder="Time" disabled />
        </TouchableOpacity>
        <Button title="Submit"  style={styles.button} />
      </KeyboardAvoidingView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

    </>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input:{
    paddingVertical:10,
  },
  button:{
    padding:100,
    fontSize:100
  }
});
