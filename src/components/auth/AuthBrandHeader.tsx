import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PartyPopper } from 'lucide-react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

type Props = {
  subtitle?: string;
};

export default function AuthBrandHeader({
  subtitle = 'Celebrate now, pay later. Affordable event access for everyone.',
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <PartyPopper size={32} color={Colors.white} strokeWidth={2} />
      </View>
      <Text style={styles.wordmark}>Sherehe+</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.lg,
  },
  iconBox: {
    width: 80,
    height: 80,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordmark: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textDark,
    letterSpacing: -0.5,
    marginTop: Spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.primary,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: Spacing.xl,
  },
});
