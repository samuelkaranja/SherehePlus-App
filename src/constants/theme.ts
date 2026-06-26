import { TextStyle } from 'react-native';

export const Colors = {
  primary: '#C94B1E',
  primaryLight: '#E8B4A0',
  primaryBg: '#FDF1EC',
  white: '#FFFFFF',
  black: '#000000',
  textDark: '#1A1A1A',
  textMuted: '#666666',
  dotInactive: '#D9D9D9',
} as const;

export const Typography = {
  splashTitle: {
    fontSize: 40,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.5,
  } as TextStyle,
  splashSubtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.white,
    letterSpacing: 2.5,
  } as TextStyle,
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textDark,
    textAlign: 'center',
    lineHeight: 34,
  } as TextStyle,
  headingAccent: {
    fontSize: 28,
    fontWeight: '800',
    fontStyle: 'italic',
    color: Colors.primary,
    textAlign: 'center',
  } as TextStyle,
  body: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  } as TextStyle,
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const Radius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  pill: 999,
} as const;
