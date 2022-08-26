import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';



const Stack = createNativeStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={{title: "Contacts Agenda"}}/>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: "Create Contact"}}/>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: "Contact Details"}}/>  
    </Stack.Navigator>
  )
}
export default function App() {
  return (
   <NavigationContainer>
     <MyStack/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
