import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const curr = new Date; // get current date
const currDate = curr.getDate();
const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
console.log(curr.getDate());

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

const TICKLE = [
  {
    day: 'SUN',
    isFilled: false,
  },
  {
    day: 'MON',
    isFilled: false,
  },
  {
    day: 'TUE',
    isFilled: false,
  },
  {
    day: 'WED',
    isFilled: false,
  },
  {
    day: 'THU',
    isFilled: false,
  },
  {
    day: 'FRI',
    isFilled: false,
  },
  {
    day: 'SAT',
    isFilled: false,
  },
]; 

// component 공부하기
const Item = ({ day, date }) => (
  <View style={styles.item}>
    <Text style={styles.day}>{day}</Text>
    <View style={{...styles.highlight, backgroundColor: (currDate === date) ? 'lightgray' : null}}>
      <Text style={styles.dates}>{date}</Text>
    </View>
  </View>
);

const Tickle = ({ }) => (
  <View style={styles.tickle}>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => ( // doc에 renderItem은 {item, index, separators} 쓰도록 정의되어 있음. DATA array의 각 오브젝트가 item.  __ 어떤 오브젝트가 함수의 parameter로 들어왔을때 item 이라는 key에 매칭되는 값을 인자로 넘김 (Destructuring assignment 참조)
    <Item day={item.day} date={item.date} /> 
  );

  const renderTickle = ({ item }) => (
    <Tickle />
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
          // keyExtractor={item => item.key}
          horizontal={true}
          contentContainerStyle={{ flex: 1, justifyContent: "space-between"}}
        />
      </View>
      <View style={styles.task}>
      <FlatList
          data={TICKLE}
          renderItem={renderTickle}
          horizontal={true}
          contentContainerStyle={{ flex: 1, justifyContent: "space-between"}}
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
  item: {
    // backgroundColor: "orange",
    alignItems: 'center',
    width: 40 // fixed width due to different box sizes for each day(text)
  },
  day: {
    fontSize: 14,
    paddingBottom: 6,
  },
  dates: {
    fontSize: 20,
    fontWeight: '400',
  },
  highlight: {
    width : '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  task: {
    marginTop: 20,  // ** temporary
    paddingHorizontal: 15,
    // backgroundColor: "orange",
    width : "100%"
  },
  tickle: {
    borderRadius: 50,
    width : 40,
    height : 40,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center'
    // width: '100%',
  }
});
