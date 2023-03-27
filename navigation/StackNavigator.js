import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerNavigator from '../navigation/DrawerNavigator';
import SetTimeScreen from '../screens/SetTimeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name="Home" component={DrawerNavigator} options={{unmountOnBlur:true}}/>
            <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{unmountOnBlur:true}}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;