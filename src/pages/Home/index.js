import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      name: "Coca-cola",
      price: 9.50
    },
    {
      id: 2,
      name: "Arroz",
      price: 17.99
    },
    {
      id: 3,
      name: "Feijão",
      price: 4.99
    },
    {
      id: 4,
      name: "Água 500ml",
      price: 1.99
    },
    {
      id: 5,
      name: "Café",
      price: 7.99
    },
    {
      id: 6,
      name: "Nescal",
      price: 5.99
    },
  ]);

  const Item = ({name, price}) => (
    <View style={styles.areaProdutos}>
      <View>
        <Text style={styles.textProduto}>{name}</Text>
        <Text>R$ {price}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#121212'}}>+</Text>
      </TouchableOpacity>
    </View>
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de produtos</Text>

        <View style={styles.areaIcon}>
          <Ionicons 
            name='cart' 
            size={30} 
            style={{color: '#121212'}}
            onPress={() => navigation.navigate('Car')} 
          />
          
          <View style={styles.areaIndicator}>
            <Text style={{fontWeight: 'bold', color: '#FFF'}}> 2 </Text>
          </View>
        </View>
      </View>

      <View style={{width: '90%'}}>
        <FlatList
          data={produtos}
          renderItem={({item}) => <Item name={item.name} price={item.price}/>}
          keyExtractor={item => item.id}
        />
      </View>  

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: 40,
    marginBottom: 20
  },

  areaIndicator:{
    backgroundColor: '#457b9d',
    width: 18,
    height: 18,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 15
  },

  title:{
    fontSize: 25,
    fontWeight: 'bold'
  },

  areaProdutos:{
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 6
  },

  textProduto:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonAdd:{
    backgroundColor: '#588157',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30
  }
})