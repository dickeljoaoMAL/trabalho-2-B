import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Product} from '../components/components';

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 16px 16px 0;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
`;

export const SearchInput = styled.TextInput`
  border-color: #c02bc7;
  border-width: 1px;
  height: 44px;
  margin-top: 12px;
  padding: 0 12px;
`;

export const CategoryList = styled(FlatList<string>)`
  margin-top: 12px;
`;

export const CategoryChip = styled.Pressable`
  border-color: #c90505;
  border-width: 1px;
  margin-right: 8px;
  padding: 8px 12px;
`;

export const CategoryChipText = styled.Text``;

export const ProductGrid = styled(FlatList<Product>)`
  flex: 1;
`;

export const BottomBar = styled.View`
  border-color: #24f5ae;
  border-top-width: 1px;
  flex-direction: row;
  padding: 12px 8px;
`;

export const BottomBarItem = styled.Pressable`
  align-items: center;
  flex: 1;
`;

export const BottomBarText = styled.Text``;
