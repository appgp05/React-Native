import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Setting from "../screens/Settings";
import { RootStackParamList } from "./RootStackPramList";

// export type BottomTabParamList = {
//     Favorite: undefined;
//     Disney: undefined;
//     Account: undefined;
//     Home: undefined;
//     Setting: undefined    
//   };
  /*
    Un tipo para los parámetros de navegación. 
    Esto nos ayuda a tipar correctamente las rutas dentro del BottomTabNavigator y evitar errores en el código.
  */
const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel: "Mi cuenta",    
          }}/>
        <Tab.Screen name="Favorite" component={Favorite}
        options={{
            tabBarLabel: "Mi cuenta",   
            tabBarIcon: () => renderDisneyIcon(), 
          }} />
      <Tab.Screen name="Settings" component={Setting} 
        options={{
            tabBarLabel: "Mi cuenta",    
          }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const renderDisneyIcon = () => {
  return (
    <Image
      source={require("../assets/disney_plus.png")}
      style={styles.disneyIcon}
    />
  );
};

const styles = StyleSheet.create({
  disneyIcon: {
    width: 150,
    height: 150,
    top: -30,
  },
});