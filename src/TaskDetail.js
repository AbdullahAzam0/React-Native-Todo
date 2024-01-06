import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function Taskdetail({ route }) {
  const { name, age, phoneNo, gender,task,description } = route.params;
 
  return (
    <SafeAreaView>
      <View style={{ alignSelf: 'flex-start', margin: 20 }}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
        <Text>Phone No: {phoneNo}</Text>
        <Text>gender: {gender}</Text>
        <Text>task: {task}</Text>
        <Text style = {{margin: 10,  fontWeight: 'bold', backgroundColor: 'lightgray',elevation:10}}>
          Description:                                                    {description}</Text>
      </View>

    </SafeAreaView>
  );
}