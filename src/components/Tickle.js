import React, { useEffect, useState } from "react";
// import styled from "styled-components/native";
import { StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tickle = ({ id, day, isFilled, index, data, updateData }) => {

  return (
    <TouchableOpacity
      onPress = { () => updateData(data, id, isFilled)}
      style={{ ...styles.tickle, backgroundColor: (isFilled) ? 'green' : '#eeeeee' }}
    >
    </TouchableOpacity>
  );
}

// const renderTickle = ({ item, index }) => (
//   <Tickle id={item.id} day={item.day} isFilled={item.isFilled} index={index} />
// );

const styles = StyleSheet.create({
  tickle: {
    borderRadius: 50,
    width : 40,
    height : 40,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth : 1,
    borderColor: "lightgrey",
  }
});


export { Tickle } ;