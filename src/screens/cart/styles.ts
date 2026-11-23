import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f8f9fa;
`;

export const Header = styled.View`
  padding: 20px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #1a1a1a;
`;

export const CartList = styled.FlatList`
  flex: 1;
  padding: 16px;
`;

export const ItemCard = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  align-items: center;
  elevation: 2;
`;

export const ItemImage = styled.Image`
  width: 70px;
  height: 70px;
  resize-mode: contain;
  margin-right: 12px;
`;

export const ItemInfo = styled.View`
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const StepperButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #e9ecef;
  align-items: center;
  justify-content: center;
`;

export const StepperText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const QuantityText = styled.Text`
  margin-horizontal: 12px;
  font-size: 15px;
  font-weight: bold;
`;

export const Footer = styled.View`
  padding: 20px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const TotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TotalLabel = styled.Text`
  font-size: 18px;
  color: #666;
`;

export const TotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #1a1a1a;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
  color: #888;
`;
