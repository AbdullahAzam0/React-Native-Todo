import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/Screens/LogIn';
import Welcome from './src/Screens/DashBoard';
import Taskdetail from './src/TaskDetail';

const Stack = createNativeStackNavigator();

export default function TodoApp() {
 return(
  <NavigationContainer>

    <Stack.Navigator nitialRouteName='Todo App'>
        
    <Stack.Screen name="login"
          component={Login}
            
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerStyle: {

                backgroundColor: 'lightgreen', 
                
                },
            
          }}
       
        />

        <Stack.Screen name="dashboard"
          component={Welcome}
            
          options={{
            title: 'DashBoard',
            headerTitleAlign: 'center',
            headerStyle: {

                backgroundColor: 'lightgreen',
                
                },
            
          }}
       
        />

<Stack.Screen name="taskdetails"
          component={Taskdetail}

          options={{
            title: 'Task Details',
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor: 'lightgreen', 
                
            },
            
          }}
        
        />
    </Stack.Navigator>
    
  </NavigationContainer>
 )
}