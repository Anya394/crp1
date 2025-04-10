"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { MantineProvider } from '@mantine/core';

export function Provider(props: ColorModeProviderProps) {
  return (
    <MantineProvider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </MantineProvider>
  )
}
