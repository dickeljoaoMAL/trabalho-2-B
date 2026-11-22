import styled from 'styled-components/native';

export const ProductCardContainer = styled.Pressable`
  border-color: #cccccc;
  border-width: 1px;
  flex: 1;
  margin-bottom: 12px;
  max-width: 48%;
  padding: 8px;
`;

export const ImagePlaceholder = styled.View`
  align-items: center;
  background-color: #eeeeee;
  height: 110px;
  justify-content: center;
`;

export const ImagePlaceholderText = styled.Text`
  color: #777777;
`;

export const ProductInfo = styled.View`
  padding-top: 8px;
`;

export const ProductTitle = styled.Text`
  min-height: 38px;
`;

export const ProductPrice = styled.Text`
  margin-top: 4px;
`;

export const ProductRating = styled.Text`
  margin-top: 4px;
`;
