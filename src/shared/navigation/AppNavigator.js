// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Экран Home
import HomeScreen from '../../features/home/screens/HomeScreen';

// Экраны Teams
import TeamsListScreen from '../../features/teams/screens/TeamsListScreen';
import TeamDetailsScreen from '../../features/teams/screens/TeamDetailsScreen';
import TeamCreateScreen from '../../features/teams/screens/TeamCreateScreen';
import TeamEditScreen from '../../features/teams/screens/TeamEditScreen';

// Экраны Matches
import MatchesListScreen from '../../features/matches/screens/MatchesListScreen';

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
            <TeamsStackNavigator.Screen
                name="TeamCreate"
                component={TeamCreateScreen}
                options={{ title: 'Create Team' }}
            />
            <TeamsStackNavigator.Screen
                name="TeamEdit"
                component={TeamEditScreen}
                options={{ title: 'Edit Team' }}
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
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Home') iconName = 'home-outline';
                        else if (route.name === 'Teams') iconName = 'people-outline';
                        else if (route.name === 'Matches') iconName = 'football-outline';
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#1e90ff',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Teams" component={TeamsStack} />
                <Tab.Screen name="Matches" component={MatchesListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
