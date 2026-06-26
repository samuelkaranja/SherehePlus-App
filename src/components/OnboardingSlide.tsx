import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import SkipButton from './SkipButton';
import PageDots from './PageDots';
import PrimaryButton from './PrimaryButton';
import { Colors, Spacing, Typography } from '../constants/theme';

type Props = {
  heading: string;
  headingAccent?: string;
  body: string;
  currentPage: number;
  buttonLabel?: string;
  onNext: () => void;
  onSkip: () => void;
  showArrow?: boolean;
  children: ReactNode;
  bgColor?: string;
};

export default function OnboardingSlide({
  heading,
  headingAccent,
  body,
  currentPage,
  buttonLabel = 'Next',
  onNext,
  onSkip,
  showArrow = true,
  children,
  bgColor = Colors.white,
}: Props) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bgColor }]}>
      <View style={styles.container}>
        <SkipButton onPress={onSkip} />

        <View style={styles.card}>{children}</View>

        <View style={styles.copy}>
          <Text style={Typography.heading}>{heading}</Text>
          {headingAccent ? (
            <Text style={Typography.headingAccent}>{headingAccent}</Text>
          ) : null}
          <Text style={[Typography.body, styles.body]}>{body}</Text>
        </View>

        <View style={styles.footer}>
          <PageDots total={3} current={currentPage} />
          <PrimaryButton
            label={buttonLabel}
            onPress={onNext}
            showArrow={showArrow}
            style={styles.cta}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.lg,
  },
  card: {
    flex: 1,
    marginTop: Spacing.sm,
    marginBottom: Spacing.lg,
    maxHeight: 420,
  },
  copy: {
    alignItems: 'center',
    gap: 2,
    marginBottom: Spacing.lg,
  },
  body: {
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  footer: {
    gap: Spacing.md,
    marginTop: 'auto',
  },
  cta: {
    marginTop: Spacing.xs,
  },
});
