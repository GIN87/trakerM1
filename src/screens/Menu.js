import { StyleSheet, Text, View, Button } from 'react-native';

export default function Menu ({navigation}) {
  return (
      <View style={styles.xx}>
        <Text>Menu</Text>
        <Button title="MENU" onPress={()=>navigation.navigate('Menu')}/>
      </View>
  );
}

const styles = StyleSheet.create({
  xx: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});