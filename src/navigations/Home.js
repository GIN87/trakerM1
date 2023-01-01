import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './Drawer';
import Test from '../screens/Test';
import CreateTask from '../screens/CreateTask';


const Stack = createNativeStackNavigator();

export default function Home ({navigation}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false}}> 
    <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen options={{ presentation: 'modal'}} name="CreateTask" component={CreateTask} />
    </Stack.Navigator>
  );
}