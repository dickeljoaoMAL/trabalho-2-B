import React from 'react';
import { Product, ProductCard } from '../../components/components.tsx';
import {
  BottomBar,
  BottomBarItem,
  BottomBarText,
  CategoryChip,
  CategoryChipText,
  CategoryList,
  Header,
  ProductGrid,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
} from './styles.ts';

const exampleProducts: Product[] = [
  {
    id: 1,
    title: 'Mochila Casual Notebook Executiva',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Camiseta Slim Fit Masculina Básica',
    price: 22.3,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX_Y_SY_879_.jpg',
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: 'Jaqueta de Algodão com Zíper',
    price: 55.99,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: 'Camisa Casual Slim Manga Curta',
    price: 15.99,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: 'Pulseira de Prata com Detalhes',
    price: 695.0,
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: 'Anel Solitário de Ouro Branco',
    price: 168.0,
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: 'Brinco Princesa em Aço Banhado',
    price: 9.99,
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3.0, count: 400 },
  },
  {
    id: 8,
    title: 'Disco Rigido Externo SSD 1TB',
    price: 109.0,
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 9,
    title: 'SSD Interno Gaming 256GB',
    price: 109.0,
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 10,
    title: 'Monitor Ultrawide LED 27 polegadas',
    price: 599.0,
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    rating: { rate: 2.2, count: 140 },
  },
];

const exampleCategories = [
  'Todos',
  'Eletrônicos',
  'Joias',
  'Masculino',
  'Feminino',
];

export function Home({ navigation }: any) {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>Loja</ScreenTitle>
        <SearchInput placeholder="Buscar produtos" />
        <CategoryList
          horizontal
          data={exampleCategories}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryChip>
              <CategoryChipText>{item}</CategoryChipText>
            </CategoryChip>
          )}
        />
      </Header>

      <ProductGrid
        data={exampleProducts}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetails', { product: item })
            }
          />
        )}
      />

      <BottomBar>
        <BottomBarItem>
          <BottomBarText>Início</BottomBarText>
        </BottomBarItem>
        <BottomBarItem>
          <BottomBarText>Buscar</BottomBarText>
        </BottomBarItem>
        <BottomBarItem>
          <BottomBarText>Carrinho</BottomBarText>
        </BottomBarItem>
        <BottomBarItem>
          <BottomBarText>Perfil</BottomBarText>
        </BottomBarItem>
      </BottomBar>
    </ScreenContainer>
  );
}
