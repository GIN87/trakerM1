import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { currDate, DATA, saveData } from './src/data/data';
import { Task } from './src/components/Task';
import { renderWeeklyCal } from './src/components/WeeklyCal';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/navigations/Root';
import 'react-native-gesture-handler';

export default function App() {



  return (
    <NavigationContainer>
      <Root />
        {/* <SafeAreaView style={styles.container}>
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
        </SafeAreaView> */}
    </NavigationContainer>
  );
}