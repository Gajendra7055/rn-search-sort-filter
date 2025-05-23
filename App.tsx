/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NoteForm from './src/components/NoteForm';
import NoteList from './src/components/NoteList';

function App() {
const [notes,setNotes] = useState<any>([]); 
const addNote = (note:string)=> {
  console.log('note',note);
  
  setNotes([...notes,{id:Date.now().toString(),text:note}])
}
const handleDeleteNote = (id: any) => {
  setNotes(notes.filter((note: { id: any; }) => note.id !== id));
}
  return (
    <NavigationContainer>
     <SafeAreaView style={styles.container}>
           <StatusBar barStyle="dark-content" />
           {/* <View style={styles.content}>
             <Text style={styles.title}>React Native Boilerplate</Text>
             <Text style={styles.subtitle}>Your starting point for a new project</Text>
           </View> */}
           <NoteForm handleSetNote={addNote}/>
           <NoteList notes={notes} deleteNote={handleDeleteNote}/>
         </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});

export default App;
