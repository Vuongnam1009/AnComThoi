import "react-native-gesture-handler";
import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import { NativeBaseProvider, Box } from "native-base";
import { StoreProvider } from "./src/store";
import AppContainer from "./src/navigation/AppContainer";

export default function App() {
  return (
    <SSRProvider>
      <StoreProvider>
        <NativeBaseProvider>
          <AppContainer />
        </NativeBaseProvider>
      </StoreProvider>
    </SSRProvider>
  );
}
