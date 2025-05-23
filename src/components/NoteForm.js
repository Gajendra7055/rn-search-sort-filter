import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const NoteForm = ({handleSetNote}) => {
  const [noteText, setNoteText] = useState('');
  const handleSubmit = () => {
    console.log('notetext',noteText);
    
     if (noteText.trim()) {
      handleSetNote(noteText);
      setNoteText('');
     }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={noteText}
          onChangeText={setNoteText}
          placeholder="enter note.."
        />
        <Button title="add note.." onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    margin: 20,
    borderRadius: 10,
  },
});

export default NoteForm;
