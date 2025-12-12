import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Импорты экранов
import HomeScreen from '../../features/home/screens/HomeScreen';
import TeamsListScreen from '../../features/teams/screens/TeamsListScreen';
import TeamDetailsScreen from '../../features/teams/screens/TeamDetailsScreen';
import MatchesListScreen from '../../features/matches/screens/MatchesListScreen';

// Стек для Teams (список + детали)
const TeamsStackNavigator = createNativeStackNavigator();

function TeamsStack() {
    return (
        <TeamsStackNavigator.Navigator>
            <TeamsStackNavigator.Screen
                name="TeamsList"
                component={TeamsListScreen}
                options={{ title: 'Teams' }}
            />
            <TeamsStackNavigator.Screen
                name="TeamDetails"
                component={TeamDetailsScreen}
                options={{ title: 'Team Details' }}
            />
        </TeamsStackNavigator.Navigator>
    );
}

// Bottom Tab
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false, // заголовки будут только в стеке Teams
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Teams" component={TeamsStack} />
                <Tab.Screen name="Matches" component={MatchesListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
