import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ChakraProvider } from '@chakra-ui/react'

// Render your React component instead
const root = createRoot(document.getElementById("app")!);
root.render(
  <ChakraProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>
);
