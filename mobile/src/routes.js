import { createStackNavigator } from '@react-navigation/stack'

import Feed from './pages/Feed';
import New from  './pages/New';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={ Feed } />
      <Stack.Screen name="New" component={ New } />
    </Stack.Navigator>
  );
}