import React from "react";
import { StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { Input } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTodo = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [choosedate, setchoosedate] = useState('');
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');


  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Todo",
      headerStyle: {
        backgroundColor: "#2c6BED",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    });
  }, [navigation]);

  const saveData = async()=>{
    let object ={
      name,
      description,
      choosedate,
      message :"hello",
    }
    try {
      const jsonValue = JSON.stringify(object)
      await AsyncStorage.setItem('@storage_Key:key', jsonValue)
    } catch (e) {
      // saving error
    }
    //get data
    const getData = await AsyncStorage.getItem('@storage_Key:key')
    getData != null ? JSON.parse(getData) : null;
    console.log(getData);
    
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datetime) => {
    setchoosedate(moment(datetime).format('LLL'))
    hideDatePicker();
  };

  return (
    <>
      <StatusBar style="light" />
      <KeyboardAvoidingView>
        <Input style={styles.input} value={name} onChangeText={(text)=>setname(text)} autoFocus placeholder="name" />
        <Input style={styles.input} value={description} onChangeText={(text)=>setdescription(text)} placeholder="description" />
        <TouchableOpacity onPress={showDatePicker}>
          <Input style={styles.input} placeholder="date" value={choosedate} disabled />
        </TouchableOpacity>
        <Button title="Submit" style={styles.button} onPress={saveData} />
      </KeyboardAvoidingView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
  },
  button: {
    padding: 100,
    fontSize: 100,
  },
});
