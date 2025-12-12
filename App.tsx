// App.js
import React from 'react';
import AppNavigator from './src/shared/navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
    return <AppNavigator />;
}
