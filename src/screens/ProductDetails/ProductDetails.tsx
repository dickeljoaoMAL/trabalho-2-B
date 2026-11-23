import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ProductDetails({ route }: any) {
  const { product } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>
      {product ? (
        <>
          <Text style={styles.productName}>{product.title}</Text>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        </>
      ) : (
        <Text>Nenhum produto selecionado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  productName: { fontSize: 18, textAlign: 'center', marginBottom: 8 },
  price: { fontSize: 16, color: 'green', fontWeight: 'bold' },
});
