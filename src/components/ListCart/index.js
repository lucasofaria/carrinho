import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListCart({ data }) {
  const [ amount, setAmount ] = useState(data?.amount)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.item}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <View style={styles.areaButtons}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 6,
    marginBottom: 14,
    padding: 10
  },

  item:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  price:{
    fontSize: 16
  },

  areaButtons:{
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },

  amount:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },

  buttonAdd:{
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight:10,
    backgroundColor: '#168FFF' 
  },

  textButton:{
    fontWeight: 'bold',
    color: '#FFF'
  }
})