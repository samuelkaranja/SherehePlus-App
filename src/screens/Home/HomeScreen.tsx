import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/theme';
import { AppTabScreenProps } from '../../navigation/types';

type Props = AppTabScreenProps<'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: { fontSize: 24, fontWeight: '700', color: Colors.textDark },
});
