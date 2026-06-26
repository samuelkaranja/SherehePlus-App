import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CreditCard, CalendarDays } from 'lucide-react-native';
import OnboardingSlide from '../../components/OnboardingSlide';
import { Colors, Radius, Spacing } from '../../constants/theme';

type Props = {
  onNext: () => void;
  onSkip: () => void;
};

export default function InstallmentsScreen({ onNext, onSkip }: Props) {
  return (
    <OnboardingSlide
      heading="Pay in Installments"
      body="Secure your tickets today and pay slowly over time with our flexible payment plans. No pressure, just fun."
      currentPage={1}
      buttonLabel="Next"
      onNext={onNext}
      onSkip={onSkip}
      bgColor="#FDFAF9"
    >
      <PhoneMockupCard />
    </OnboardingSlide>
  );
}

function PhoneMockupCard() {
  return (
    <View style={styles.cardBg}>
      <View style={[styles.floatIcon, styles.floatTopRight]}>
        <CreditCard size={20} color={Colors.primary} strokeWidth={2} />
      </View>

      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screenContent}>
          <View
            style={[styles.skeletonLine, { width: '65%', marginBottom: 6 }]}
          />
          <View
            style={[styles.skeletonLine, { width: '50%', marginBottom: 20 }]}
          />

          <View style={styles.payCard}>
            <Text style={styles.payLabel}>LIPA MDOGO MDOGO</Text>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
            <View style={styles.payMeta}>
              <Text style={styles.payAmount}>KES 4,500</Text>
              <Text style={styles.payPercent}>60% Paid</Text>
            </View>
          </View>

          <View
            style={[styles.skeletonLine, { width: '80%', marginTop: 16 }]}
          />
          <View style={[styles.skeletonLine, { width: '60%', marginTop: 8 }]} />
        </View>
      </View>

      <View style={[styles.floatIcon, styles.floatBottomLeft]}>
        <CalendarDays size={20} color={Colors.primary} strokeWidth={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBg: {
    flex: 1,
    backgroundColor: '#FDECEA',
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  floatIcon: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(201,75,30,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  floatTopRight: {
    top: 24,
    right: 20,
  },
  floatBottomLeft: {
    bottom: 32,
    left: 20,
  },
  phone: {
    width: 200,
    height: 340,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: '#1A1A1A',
    backgroundColor: Colors.white,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 28,
  },
  notch: {
    position: 'absolute',
    top: 0,
    width: 80,
    height: 22,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#1A1A1A',
  },
  screenContent: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  skeletonLine: {
    height: 10,
    borderRadius: 6,
    backgroundColor: '#E8E8E8',
  },
  payCard: {
    borderWidth: 1.5,
    borderColor: Colors.primaryLight,
    borderRadius: Radius.sm,
    padding: Spacing.sm,
    backgroundColor: '#FFF9F8',
  },
  payLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  progressTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: '#F0DEDA',
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    width: '60%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  payMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payAmount: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.textDark,
  },
  payPercent: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.textMuted,
  },
});
