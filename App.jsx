import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyShifts from "./Screens/MyShifts";
import AvailableShifts from "./Screens/AvailableScreen";
import place1 from "./Screens/place1";
import place2 from "./Screens/place2";
import place3 from "./Screens/place3";

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();


 const AvailableShiftsTopTabs = () => (
  <TopTab.Navigator>
     <TopTab.Screen name="place1" component={place1}/>
   <TopTab.Screen name="place2" component={place2}/>
    <TopTab.Screen name="place3" component={place3}/>
   </TopTab.Navigator>
 );

const BottomNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="My Shift" component={MyShifts}/>
    <BottomTab.Screen name="Available" component={AvailableShifts}/>
  </BottomTab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}

export default App;
