import React, { useState } from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native';
import { CartItem } from '../../types/CartItem';
import {
  CartList,
  CheckoutButton,
  CheckoutButtonText,
  Container,
  EmptyText,
  Footer,
  Header,
  HeaderTitle,
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
  QuantityContainer,
  QuantityText,
  StepperButton,
  StepperText,
  TotalLabel,
  TotalRow,
  TotalValue,
} from './styles';

const initialCartItems: CartItem[] = [
  {
    product: {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: { rate: 3.9, count: 120 },
    },
    quantity: 1,
  },
];

export function Cart({ navigation }: any) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  function handleIncrease(productId: number) {
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function handleDecrease(productId: number) {
    setCartItems(prev =>
      prev
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  }

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  function handleCheckout() {
    Alert.alert(
      'Pedido Finalizado!',
      'Obrigado pela sua compra na LojaFakeStore.',
    );
    setCartItems([]);
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Meu Carrinho</HeaderTitle>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#007bff', fontWeight: 'bold' }}>Voltar</Text>
        </TouchableOpacity>
      </Header>

      <CartList
        data={cartItems}
        keyExtractor={(item: any) => String(item.product.id)}
        ListEmptyComponent={<EmptyText>Seu carrinho está vazio.</EmptyText>}
        renderItem={({ item }: any) => (
          <ItemCard>
            <ItemImage source={{ uri: item.product.image }} />
            <ItemInfo>
              <ItemTitle numberOfLines={2}>{item.product.title}</ItemTitle>
              <ItemPrice>R$ {item.product.price.toFixed(2)}</ItemPrice>

              <QuantityContainer>
                <StepperButton onPress={() => handleDecrease(item.product.id)}>
                  <StepperText>-</StepperText>
                </StepperButton>
                <QuantityText>{item.quantity}</QuantityText>
                <StepperButton onPress={() => handleIncrease(item.product.id)}>
                  <StepperText>+</StepperText>
                </StepperButton>
              </QuantityContainer>
            </ItemInfo>
          </ItemCard>
        )}
      />

      {cartItems.length > 0 && (
        <Footer>
          <TotalRow>
            <TotalLabel>Total:</TotalLabel>
            <TotalValue>R$ {totalAmount.toFixed(2)}</TotalValue>
          </TotalRow>
          <CheckoutButton onPress={handleCheckout}>
            <CheckoutButtonText>Finalizar Compra</CheckoutButtonText>
          </CheckoutButton>
        </Footer>
      )}
    </Container>
  );
}
