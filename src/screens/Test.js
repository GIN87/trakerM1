import { StyleSheet, Text, View, Button } from 'react-native';

export default function Test ({navigation}) {
  return (
      <View style={styles.xx}>
        <Text>Test</Text>
        <Button title="back" onPress={()=>navigation.navigate('Project')}/>
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