import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Statistics ({navigation}) {
  return (
      <View style={styles.xx}>
        <Text>Statistics</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  xx: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
});