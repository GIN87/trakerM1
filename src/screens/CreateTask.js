import { StyleSheet, Text, View, Button } from 'react-native';

export default function CreateTask ({navigation}) {
  return (
      <View style={styles.xx}>
        <Text>Create Tasks</Text>
        <Button title="back" onPress={()=>navigation.navigate('Test')}/>
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
