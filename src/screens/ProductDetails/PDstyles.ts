import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  background-color: #f9f9f9;
  margin-top: 16px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: -20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px -2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2e7d32;
`;

export const RatingContainer = styled.View`
  background-color: #f1f8e9;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const RatingText = styled.Text`
  font-size: 14px;
  color: #558b2f;
  font-weight: 600;
`;

export const DescriptionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: #666;
  line-height: 22px;
  margin-bottom: 30px;
`;

export const BuyButton = styled.Pressable`
  background-color: #007bff;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BuyButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
