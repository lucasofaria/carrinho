import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListCart({ data }) {
  const [ amount, setAmount ] = useState(data?.amount)

  return (
    <View style={styles.container}>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
  }
})