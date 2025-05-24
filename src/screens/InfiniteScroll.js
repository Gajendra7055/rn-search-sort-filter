import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(5);
  const [loading, setLoading] = useState(false);

  // Fetch Data
  const fetchData = async () => {
    if (loading) return;

    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
    );
    const json = await res.json();

    setData(prev => [...prev, ...json]);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item, index}) => (
    <View key={index} style={{padding: 10, borderBottomWidth: 1}}>
      <Text>{item.title}</Text>
    </View>
  );

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" /> : null;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={fetchData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
}
