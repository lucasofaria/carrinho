import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

import ListItems from '../../components/ListItems';

import { CartContext } from '../../contexts/CartContexts'

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);
  
  const navigation = useNavigation();

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

  function handleAdd(item){
    addItemCart(item)
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de produtos</Text>

        <View style={styles.areaIcon}>
          <Ionicons 
            name='cart' 
            size={30} 
            style={{color: '#121212'}}
            onPress={() => navigation.navigate('Cart')} 
          />

          {cart?.length >= 1 && (
            <View style={styles.areaIndicator}>
            <Text style={styles.textCart}>
              {cart?.length} 
            </Text>
          </View>
          )}
          
        </View>
      </View>

      <View style={{width: '90%'}}>
        <FlatList
          data={produtos}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ListItems data={item} addToCart={() => handleAdd(item)} />}
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

  textCart:{
    fontSize: 11,
    color: '#FFF',
    fontWeight: 'bold'
  },

  title:{
    fontSize: 25,
    fontWeight: 'bold'
  }
})