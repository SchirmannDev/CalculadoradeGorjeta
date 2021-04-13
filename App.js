import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};
