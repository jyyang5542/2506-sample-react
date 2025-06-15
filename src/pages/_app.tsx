import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import GlobalStyle from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  // 사용자의 시스템 설정 감지 (optional)
  useEffect(() => {
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} isDark={isDark} />
    </ThemeProvider>
  );
}
