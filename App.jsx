import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Building' }}
        />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'Construction Materials',
//       headerStyle: {
//         backgroundColor: '#1d1e1f',
//       },
//       headerTitleStyle: {
//         fontSize: 30,
//         color: 'yellow',
//       },
//     },
//   }
// );
