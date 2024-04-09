import { ThemeProvider, createGlobalStyle } from 'styled-components';
const theme = {
  fontfamily: 'Roboto , sans-serif',
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
const Globalstyles = createGlobalStyle`
body{
  font-family : ${({ theme }) => theme.fontfamily};
  font-size : 18px;
  margin:0;
  padding-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
}
`;

export const GlobalTheam = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles /> {children}
    </ThemeProvider>
  );
};
