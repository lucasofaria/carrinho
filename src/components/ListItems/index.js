import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function ListItems() {
  const [produto, setProduto] = useState([
    {
      id: 1,
      name: "Coca-cola",
      price: 9.50
    },
    {
      id: 1,
      name: "Arroz",
      price: 17.99
    },
    {
      id: 1,
      name: "Feijão",
      price: 4.99
    },
    {
      id: 1,
      name: "Água 500ml",
      price: 1.99
    },
    {
      id: 1,
      name: "Café",
      price: 7.99
    },
    {
      id: 1,
      name: "Nescal",
      price: 5.99
    },
  ]);
  return (
    <View>
      <Text>{produto.name}</Text>
    </View>
  );
}