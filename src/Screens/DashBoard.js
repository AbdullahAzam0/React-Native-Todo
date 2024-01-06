import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

export default function Welcome({ navigation }) {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState('');

  const addPerson = () => {
    if (name && age && phoneNo && gender && task, description) {
      const newItem = { name, age, phoneNo, gender, task, description };
      setData([...data, newItem]);
      setName('');
      setAge('');
      setPhoneNo('');
      setGender('');
      setTask('');
      setDescription('');
    }
    else {
      alert('Field must not be empty');
    }
  };

  const editPerson = (index) => {
    setEditIndex(index);
    setName(data[index].name);
    setAge(data[index].age);
    setPhoneNo(data[index].phoneNo);
    setGender(data[index].gender);
    setTask(data[index].task);
    setDescription(data[index].description);
  };

  const deletePerson = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const updatePerson = () => {
    if (name && age && phoneNo && gender && task && description) {
      let newArray = [...data];
      const newItem = { name, age, phoneNo, gender, task, description };
      newArray[editIndex] = newItem;
      setData(newArray);
      setName('');
      setAge('');
      setPhoneNo('');
      setGender('');
      setTask('');
      setDescription('');
    } else {
      alert('Field must not be empty');
    }
  };

  return (

      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
              <TextInput style={{
                width: 165,
                borderColor: 'grey',
                marginTop: 20,
                borderWidth: 0.5,
                borderRadius: 4,
                alignSelf: 'center',
              }}
                placeholder=" Enter Name..."
                placeholderTextColor="grey"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <TextInput style={{
                width: 165,
                borderColor: 'grey',
                marginTop: 20,
                borderWidth: 0.5,
                borderRadius: 4,
                alignSelf: 'center',
              }}
                placeholder=" Enter Age..."
                placeholderTextColor="grey"
                keyboardType="numeric"
                value={age}
                onChangeText={(text) => setAge(text)}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
              <TextInput style={{
                width: 165,
                borderRadius: 4,
                borderColor: 'grey',
                marginTop: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
              }}
                placeholder=" Enter Ph Number..."
                placeholderTextColor="grey"
                keyboardType="numeric"
                value={phoneNo}
                onChangeText={(text) => setPhoneNo(text)}
              />
              <TextInput style={{
                width: 165,
                borderRadius: 4,
                borderColor: 'grey',
                marginTop: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
              }}
                placeholder=" Enter Gender ..."
                placeholderTextColor="grey"
                value={gender}
                onChangeText={(text) => setGender(text)}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
              <TextInput style={{
                width: 119,
                borderRadius: 4,
                borderColor: 'grey',
                marginTop: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
              }}
                placeholder="Task ..."
                placeholderTextColor="grey"
                value={task}
                onChangeText={(text) => setTask(text)}
              />
              <TextInput style={{
                width: 214,
                borderRadius: 4,
                borderColor: 'grey',
                marginTop: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
              }}
                placeholder=" Enter your Task Description..."
                placeholderTextColor="grey"
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </View>

            <TouchableOpacity style={{
              width: 70,
              marginTop: 10,
              borderwidth: 1,
              borderRadius: 4,
              alignSelf: "center",
              padding: 5,
              backgroundColor: "lightgreen",
            }} onPress={() => {
              if (editIndex === '') {
                addPerson();
              } else {
                updatePerson();
                setEditIndex('');
              }
            }}
            >
            <Text style={{ textAlign: "center" }}>{editIndex === '' ? 'Add' : 'Update'}</Text>
            </TouchableOpacity>
            
            <FlatList
              data={data}
              KeyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (

                <View style={{ flexDirection: 'row', marginVertical: 10, elevation: 10, marginHorizontal: 10, shadowColor: "gray", padding: 5, backgroundColor: 'lightgray' }}>

                  <TouchableOpacity onPress={() => navigation.navigate('taskdetails', { name: item.name, age: item.age, phoneNo: item.phoneNo, gender: item.gender, task: item.task, description: item.description, })}>

                    <Text style={{ marginLeft: 5 }}>{item.name}</Text>
                    <Text style={{ marginLeft: 5 }}>{item.age}</Text>
                    <Text style={{ marginLeft: 5 }}>{item.phoneNo}</Text>
                    <Text style={{ marginLeft: 5 }}>{item.gender}</Text>
                    <Text style={{ marginLeft: 5 }}>{item.task}</Text>

                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: 50,
                      borderRadius: 4,
                      backgroundColor: 'lightblue',
                      alignSelf: 'center',
                      marginLeft: 'auto',
                      padding: 4
                    }} onPress={() => {
                      editPerson(index);
                    }}>
                    <Text style={{ textAlign: "center" }}>Edit</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      borderRadius: 4,
                      backgroundColor: 'red',
                      padding: 4,
                      alignSelf: 'center',
                      marginHorizontal: 5
                    }} onPress={() => deletePerson(index)}>
                    <Text>Delete</Text>
                  </TouchableOpacity>

                </View>

              )}
            />
          </View>
      </SafeAreaView>
    
  )
}