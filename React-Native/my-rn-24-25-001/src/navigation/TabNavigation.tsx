import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { RootStackParamList } from './RootStackPramList';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

// Navegación entre pantallas: NAVIGATION DRAWER, TABS, STACK

// Props = 
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function DrawerNavigator(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}