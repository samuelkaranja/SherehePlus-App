import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Ticket } from 'lucide-react-native';
import OnboardingSlide from '../../components/OnboardingSlide';
import { Colors, Radius } from '../../constants/theme';

type Props = {
  onNext: () => void;
  onSkip: () => void;
};

export default function DiscoverEventsScreen({ onNext, onSkip }: Props) {
  return (
    <OnboardingSlide
      heading="Discover Amazing"
      headingAccent="Events"
      body="Browse the best concerts, festivals, and cultural events across Kenya with ease and style."
      currentPage={0}
      buttonLabel="Next"
      onNext={onNext}
      onSkip={onSkip}
    >
      <IllustrationCard />
    </OnboardingSlide>
  );
}

function IllustrationCard() {
  return (
    // Replace with: source={require('../../assets/onboarding_discover.jpg')}
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/600x420/C94B1E/C94B1E' }}
      style={styles.image}
      imageStyle={styles.imageInner}
      resizeMode="cover"
    >
      <View style={styles.tint} />
      <View style={styles.badge}>
        <Ticket size={20} color={Colors.white} strokeWidth={2} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  imageInner: {
    borderRadius: Radius.lg,
  },
  tint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(201,75,30,0.35)',
  },
  badge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
