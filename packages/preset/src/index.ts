import { definePreset, type PresetFactory } from 'unocss'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { theme } from './theme'

export const colors = Object.keys(theme.colors!)

interface PresetOptions {
}

export const presetAno: PresetFactory<object, PresetOptions> = definePreset(() => {
  return {
    name: '@ano-ui/preset',
    theme,
    shortcuts,
    rules,
    safelist: [
      // common
      ...colors.map(c => `a-${c}`),
      ...colors.map(c => `!a-${c}`),

      // shortcuts
      ...Object.keys(shortcuts),
    ],
  }
})
