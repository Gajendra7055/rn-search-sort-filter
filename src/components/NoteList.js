import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const NoteList = ({notes, deleteNote}) => {
    console.log('list ', notes);
    
  const renderItem = ({item}) => (

  
    // console.log('hello---- data', item);

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        flex:1,
        backgroundColor:'red'
      }}>
      <Text style={{color: '#000'}}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteNote(item.id)}>
        <Text>Detete</Text>
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={{flex: 1}}>
    <Text style={{margin:10}}>list Data</Text>
      <FlatList data={notes} renderItem={renderItem} />
    </View>
  );
};

export default NoteList;
