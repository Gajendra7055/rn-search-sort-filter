import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import {DataList, IDataList} from '../components/DataList';

function Dashboard() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<IDataList[]>(DataList);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() === '') {
        setFilteredData(DataList);
      } else {
        const filtered = DataList.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredData(filtered);
      }
    }, 300); 

    return () => clearTimeout(timer); 
  }, [query]);

  const renderItem = ({item}: {item: IDataList}) => (
    <View style={styles.innerCard}>
      <Text style={styles.item}>Title: {item.title}</Text>
      <Text style={styles.item}>Status: {item.status}</Text>
      <Text style={styles.item}>Date: {item.createdAt}</Text>
      <Text style={styles.item}>Author Name: {item.author}</Text>
    </View>
  );

  return (
    <View style={styles.component}>
      <TextInput
        style={styles.input}
        placeholder="Search by title..."
        onChangeText={setQuery}
        value={query}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  innerCard: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 2,
    fontSize: 14,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default Dashboard;
