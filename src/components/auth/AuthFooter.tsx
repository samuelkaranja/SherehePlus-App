import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../constants/theme';

type Props = {
  onTermsPress: () => void;
  onPrivacyPress: () => void;
};

export default function AuthFooter({ onTermsPress, onPrivacyPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By continuing, you agree to Sherehe+{' '}
        <Text style={styles.link} onPress={onTermsPress}>
          Terms of Service
        </Text>
        {'\n'}and{' '}
        <Text style={styles.link} onPress={onPrivacyPress}>
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: Spacing.lg,
  },
  text: {
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  link: {
    color: Colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
