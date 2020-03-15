import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MimikyuScreen } from './src/screen/ MimikyuScreen';
import { PikachuScreen } from './src/screen/ PikachuScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ミミッキュ') {
              iconName = focused
                ? 'ios-eye'
                : 'ios-eye-off';
            } else if (route.name === 'ピカチュウ') {
              iconName = focused
                ? 'ios-eye'
                : 'ios-eye-off';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor:'#ddd933',
          inactiveBackgroundColor:'#fffccc',
        }}
      >
        <Tab.Screen name="ミミッキュ" component={MimikyuScreen} />
        <Tab.Screen name="ピカチュウ" component={PikachuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
