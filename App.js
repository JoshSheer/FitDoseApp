//import "tailwindcss";
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SupplementReminderForm from './components/SupplementReminderForm';


const Tab = createBottomTabNavigator();

// מסך הבית
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ברוך הבא!</Text>
    </View>
  );
}

// מסך הוספת תזכורת
function AddReminderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>טופס הוספת תזכורת כאן</Text>
      <SupplementReminderForm/>
    </View>
  );
}

// מסך הגדרות
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>מסך הגדרות</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 14 }, headerShown: false }}>
        <Tab.Screen name="בית" component={HomeScreen} />
        <Tab.Screen name="הוסף תזכורת" component={AddReminderScreen} />
        <Tab.Screen name="הגדרות" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// עיצוב בסיסי
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
};
