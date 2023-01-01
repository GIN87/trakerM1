import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Settings ({navigation}) {
  return (
      <View style={styles.xx}>
        <Text>Settings</Text>
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