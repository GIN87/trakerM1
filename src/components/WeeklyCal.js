import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { currDate } from "../data/data";

const WeeklyCal = ({ day, date }) => (
  <View style={styles.item}>
    <Text style={styles.day}>{day}</Text>
    <View style={{...styles.highlight, backgroundColor: (currDate === date) ? 'lightgrey' : null}}>
      <Text style={styles.dates}>{date}</Text>
    </View>
  </View>
);

const renderWeeklyCal = ({ item }) => ( // doc에 renderItem은 {item, index, separators} 쓰도록 정의되어 있음. DATA array의 각 오브젝트가 item.  __ 어떤 오브젝트가 함수의 parameter로 들어왔을때 item 이라는 key에 매칭되는 값을 인자로 넘김 (Destructuring assignment 참조)
<WeeklyCal day={item.day} date={item.date} /> 
);

const styles = StyleSheet.create({
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
});

export { renderWeeklyCal }