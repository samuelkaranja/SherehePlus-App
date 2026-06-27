import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Mail, Globe } from 'lucide-react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

type SocialOption = 'email' | 'google';

type Props = {
  onPress: (option: SocialOption) => void;
};

export default function SocialAuthButtons({ onPress }: Props) {
  return (
    <View style={styles.container}>
      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerLabel}>OR CONNECT WITH</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => onPress('email')}
          activeOpacity={0.7}
        >
          <Mail size={18} color={Colors.textDark} strokeWidth={2} />
          <Text style={styles.socialLabel}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => onPress('google')}
          activeOpacity={0.7}
        >
          <Globe size={18} color={Colors.textDark} strokeWidth={2} />
          <Text style={styles.socialLabel}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.lg,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  dividerLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textMuted,
    letterSpacing: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    borderRadius: Radius.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.white,
  },
  socialLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
  },
});
