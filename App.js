import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const curr = new Date; // get current date
const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
console.log(first)

const DATA = [
  {
    day: 'SUN',
    date: new Date(curr.setDate(first+0)).getDate(),
  },
  {
    day: 'MON',
    date: new Date(curr.setDate(first+1)).getDate(),
  },
  {
    day: 'TUE',
    date: new Date(curr.setDate(first+2)).getDate(),
  },
  {
    day: 'WED',
    date: new Date(curr.setDate(first+3)).getDate(),
  },
  {
    day: 'THU',
    date: new Date(curr.setDate(first+4)).getDate(),
  },
  {
    day: 'FRI',
    date: new Date(curr.setDate(first+5)).getDate(),
  },
  {
    day: 'SAT',
    date: new Date(curr.setDate(first+6)).getDate(),
  },
];

// component 공부하기
const Item = ({ day, date }) => (
  <View style={styles.item}>
    <Text style={styles.day}>{day}</Text>
    <Text style={styles.dates}>{date}</Text>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item day={item.day} date={item.date} />
  );

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
          renderItem={renderItem}
          keyExtractor={item => item.key}
          horizontal={true}
          contentContainerStyle={{ flex: 1, justifyContent: "space-around" }}
        />
      </View>

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
    paddingHorizontal: 25,
  },
  projectName: {
    fontSize: 28,
    fontWeight: '600',
  },
  weeklyCal: {
    // backgroundColor: 'orange',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  item: {
    alignItems: 'center',
    width: 40
  },
  day: {
    fontSize: 14,
    paddingBottom: 6,
  },
  dates: {
    fontSize: 20,
    fontWeight: '400'
  }
});
