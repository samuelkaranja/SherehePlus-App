import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import DiscoverEventsScreen from './DiscoverEventsScreen';
import InstallmentsScreen from './InstallmentsScreen';
import GroupFunScreen from './GroupFunScreen';

type Props = {
  onComplete: () => void;
};

export default function OnboardingNavigator({ onComplete }: Props) {
  const [step, setStep] = useState<number>(0);

  const next = () => setStep(s => Math.min(s + 1, 3));
  const skip = () => onComplete();
  const finish = () => onComplete();

  switch (step) {
    case 0:
      return <SplashScreen onGetStarted={next} />;
    case 1:
      return <DiscoverEventsScreen onNext={next} onSkip={skip} />;
    case 2:
      return <InstallmentsScreen onNext={next} onSkip={skip} />;
    case 3:
      return <GroupFunScreen onGetStarted={finish} onSkip={skip} />;
    default:
      return null;
  }
}
