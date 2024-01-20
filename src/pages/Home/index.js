import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  
  const navigation = useNavigation();

  return (
    <View>
      <Text>Página Home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Car')}>
        <Text>Carrinho</Text>
      </TouchableOpacity>

    </View>
  );
}