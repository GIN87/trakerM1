import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { currDate, DATA, saveData } from './src/data/data'
import { Task } from './src/components/Task'
import { renderWeeklyCal } from './src/components/WeeklyCal'


export default function App() {

  const STORAGE_KEY = "@tickle";
  const [data, setData] = useState(null);

  const loadData = async (KEY) => {
    const s = await AsyncStorage.getItem(KEY);
    setData(JSON.parse(s));
  }

  const updateData = async (data, id, isFilled) => { 
    const temp = [...data];
    temp.find(e => e.id === id).isFilled = !isFilled;
    await setData(temp);
    saveData(STORAGE_KEY, temp);
  }

  useEffect( () => {
    loadData(STORAGE_KEY);    
  }, []);

  if (data === null) {
    setData(DATA);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text><Feather name="menu" size={24} color="black" /></Text>
        <Text style={styles.projectName}>My Routine</Text>
        <Text><MaterialIcons name="add" size={24} color="black" /></Text>
      </View>
      <View style={styles.weeklyCal}>
        <FlatList
          data={DATA}
          renderItem={renderWeeklyCal}
          horizontal={true}
          contentContainerStyle={{ flex: 1, justifyContent: "space-between"}}
        />
      </View>
      <Task module={"One time complete"} taskName={"Probiotics"} desc={"Once a day"} data={data} updateData={updateData}></Task>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    // backgroundColor: 'yellow',
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,  // more padding than the weeklyCal View to align left and right (width 40 given for day/date)
  },
  projectName: {
    fontSize: 28,
    fontWeight: '600',
  },
  weeklyCal: {
    // backgroundColor: 'skyblue',
    paddingHorizontal: 15, 
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey', 
  },
});