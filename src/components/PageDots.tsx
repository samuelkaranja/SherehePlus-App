import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Radius } from '../constants/theme';

type Props = {
  total: number;
  current: number;
  light?: boolean;
};

export default function PageDots({ total, current, light = false }: Props) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            i === current && styles.dotActive,
            i !== current && light && styles.dotLight,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: Radius.pill,
    backgroundColor: Colors.dotInactive,
  },
  dotActive: {
    width: 28,
    height: 8,
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary,
  },
  dotLight: {
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
});
