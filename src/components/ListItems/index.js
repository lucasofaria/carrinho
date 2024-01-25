import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItems({data, addToCart}) {
  return (
    <View style={styles.areaProdutos}>
      <View>
        <Text style={styles.textProduto}>{data.name}</Text>
        <Text>R$ {data.price}</Text>
      </View>
  
      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#121212'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
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