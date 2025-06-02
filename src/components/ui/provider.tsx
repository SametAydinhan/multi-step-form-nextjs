"use client";

import { ColorModeProvider } from "./color-mode";
import type { ThemeProviderProps } from "next-themes";

export function Provider(props: ThemeProviderProps) {
  return <ColorModeProvider {...props} />;
}
