import { colors } from './colors';

export const buttons = {
  primary: {
    background: colors.primary,
    color: colors.text100,
    outline: {
      background: colors.foreground,
      color: colors.primary,
      borderColor: colors.primary,
    },
  },
  cancel: {
    background: 'transparent',
    color: colors.text500,
    outline: {
      background: 'transparent',
      color: colors.text500,
      borderColor: colors.text500,
    },
  },
  base: {
    background: 'transparent',
    color: colors.primary,
    outline: {
      background: 'transparent',
      color: colors.text500,
      borderColor: colors.text500,
    },
  },
};
