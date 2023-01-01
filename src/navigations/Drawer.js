import { createDrawerNavigator } from '@react-navigation/drawer';
import Project from '../screens/Project';
import Test from '../screens/Test';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const Header = ({projectName, navigation}) => {
  return (
    <View style={styles.header}>
      <Feather name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()} />
      <Text style={styles.projectName}>My Routine</Text>
      <MaterialIcons name="add" size={24} color="black" onPress={()=>navigation.navigate('CreateTask')} />
    </View>
  );
  }

export default function Draw ({navigation}) {
  return (
      <Drawer.Navigator screenOptions={
        { 
          header: ({ navigation, route, options, back }) => { // 각 페이지의 prams를 통해서 각 페이지별 options.headerStyle, route.name 등으로 커스텀 가능... https://reactnavigation.org/docs/stack-navigator
            return (
              <Header navigation={navigation} projectName={route.name} />
            );
          }
        }
      }>
        <Drawer.Screen name="Project" component={Project} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,  // more padding than the weeklyCal View to align left and right (width 40 given for day/date)
  },
  projectName: {
    fontSize: 24,
    fontWeight: '600',
  },
});
