
import Home from './Home';
import Statistics from '../screens/Statistics';
import Settings from '../screens/Settings';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  // <Nav.Navigator initialRouteName="Home">
  //   <Nav.Screen
  //     name="Home"
  //     component={Home}
  //     options={({navigation})=>({
  //       headerLeft: () => (
  //         <Feather name="menu" size={24} color="black" onPress={() => navigation.navigate('Test')}/>
  //       ),
  //       headerTitle: "My Routine",
  //       headerRight: () => (
  //         <MaterialIcons name="add" size={24} color="black" onPress={() => alert('Preparing')}/>
  //       ),
  //       headerStyle: {
  //         backgroundColor: 'yellow',
  //         borderBottomWidth: 50,
  //       },
  //       headerTitleStyle: {
  //         fontSize: 24,
  //         fontWeight: '600',
  //       },
  //     })}
  //   />
  //   <Nav.Screen
  //     name="Test"
  //     component={Test}
  //     options={{title: "KKKK"}}
  //   />
  // </Nav.Navigator>
)
};
