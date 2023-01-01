import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Tickle } from './Tickle';

const Task = ({ module, taskName, desc, data, updateData }) => {
  const moduleType = {module};
  return (
  <View style={styles.task}>
    <Text style={styles.taskName}>{taskName}</Text>
    <Text style={styles.desc}>{desc}</Text>
    <FlatList
    data={data}
    keyExtractor={item => item.id}
    renderItem={
      ({ item, index }) => (
        <Tickle id={item.id} day={item.day} isFilled={item.isFilled} index={index} data={data} updateData={updateData} />
      )
    } 
    horizontal={true}
    contentContainerStyle={{ flex: 1, justifyContent: "space-between"}}
    />
  </View>
)
};

const styles = StyleSheet.create({
  task: {
    marginTop: 20,  // ** temporary
    paddingHorizontal: 15,
    // backgroundColor: "orange",
    width : "100%"
  },
  taskName: {
    fontSize: 18,
    paddingVertical: 4,
  },
  desc: {
    fontSize: 14,
    color: 'grey',
    paddingBottom: 10,
  },
});

export { Task } ;