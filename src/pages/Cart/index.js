import { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../../contexts/CartContexts';
import ListCart from '../../components/ListCart';

export default function Cart() {
  const { cart, addItemCart, reduceItemCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => 
          <View style={styles.alert}>
            <Text style={styles.text }>Nenhum item adicionado no carrinho</Text>
          </View>  
        }
        renderItem={({ item }) => (
          <ListCart
            data={item}
            addAmount={ () => addItemCart(item) }
            reduceAmount={ () => reduceItemCart(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  },
  alert:{
    alignItems: 'center',
  },
  text:{
    fontSize: 18,
    color: '#000'
  }
})