import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/components';
import { getProducts } from '../../API/Api';
import { Product } from '../../components/components';
import { useCart } from '../../context/CartContext';
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
} from './styles';


const { cart, addToCart, removeFromCart, clearCart } = useCart();


const categories = [
  { label: 'Todos', value: 'all' },
  { label: 'Eletrônicos', value: 'electronics' },
  { label: 'Joias', value: 'jewelery' },
  { label: 'Masculino', value: "men's clothing" },
  { label: 'Feminino', value: "women's clothing" },
];

export function Home({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>Loja</ScreenTitle>
        <SearchInput
          placeholder="Buscar produtos"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <CategoryList
          horizontal
          data={categories}
          keyExtractor={(item: any) => item.value}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: any) => {
            const isSelected = selectedCategory === item.value;
            return (
              <CategoryChip
                onPress={() => setSelectedCategory(item.value)}
                style={{
                  backgroundColor: isSelected ? '#007bff' : '#f0f0f0',
                }}
              >
                <CategoryChipText
                  style={{
                    color: isSelected ? '#fff' : '#333',
                    fontWeight: isSelected ? 'bold' : 'normal',
                  }}
                >
                  {item.label}
                </CategoryChipText>
              </CategoryChip>
            );
          }}
        />
      </Header>

      <ProductGrid
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => (
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
        <BottomBarItem onPress={() => navigation.navigate('Cart')}>
          <BottomBarText>Carrinho</BottomBarText>
        </BottomBarItem>
        <BottomBarItem>
          <BottomBarText>Perfil</BottomBarText>
        </BottomBarItem>
      </BottomBar>
    </ScreenContainer>
  );
}
