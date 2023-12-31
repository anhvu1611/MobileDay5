import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import manHinh1 from "./screens/manHinh1"
import manHinh2 from "./screens/manHinh2"
import manHinh3 from "./screens/manHinh3"

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='manHinh1'>
        <Stack.Screen name="manHinh1" component={manHinh1} />
        <Stack.Screen name="manHinh2" component={manHinh2} />
        <Stack.Screen name="manHinh3" component={manHinh3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}