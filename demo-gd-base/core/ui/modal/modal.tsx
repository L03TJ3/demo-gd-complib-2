import React, { useState } from 'react';
import { Text, StyleSheet, Modal, View, Button } from 'react-native-web';

export type ModalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function StyledModal({ text }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsVisible(true)} title={`Modal with fade animation`} />
      <Modal
        animationType={'fade'}
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {text}
          </Text>
          <Button onPress={() => setIsVisible(false)} title={'Close Modal'} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 300,
    height: 100,
    border: '1px solid white',
    borderRadius: 10
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});

export default function ModalPage() {
  return (
    <View style={styles.container}>
      <StyledModal text="test"></StyledModal>
    </View>
  )
}

