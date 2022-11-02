import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// sobrescrevendo a tipagem de uma biblioteca existente

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
