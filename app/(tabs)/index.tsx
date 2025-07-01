import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';
import { Image, Modal, Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { productDetailsStyles } from './commonStyles';

export default function ProductDetailsScreen() {
  const { top } = useSafeAreaInsets();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ThemedView style={[productDetailsStyles.container, { paddingTop: top, paddingHorizontal: 20 }]}>
      <ThemedText type="subtitle" style={[productDetailsStyles.title, {color: 'green'}]}>
        Accessible Screen
      </ThemedText>
      <ThemedText type="subtitle" >
        Playstation 5
      </ThemedText>
      
      <Pressable
        onPress={() => setIsModalVisible(true)}
      >
        <Image 
          source={require('@/assets/images/playstation5.jpg')}
          style={productDetailsStyles.productImage}
        />
      </Pressable>
      
      <ThemedText type="subtitle" style={productDetailsStyles.price}>
        $499.99
      </ThemedText>
      
      <ThemedView style={productDetailsStyles.inputContainer}>
        <TextInput
          style={productDetailsStyles.zipcodeInput}
          placeholder="Enter ZIP code"
          keyboardType="numeric"
        />
      </ThemedView>
      
      <TouchableOpacity style={productDetailsStyles.button} role='button'>
        <ThemedText style={productDetailsStyles.buttonText}>
          Add to Cart
        </ThemedText>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={productDetailsStyles.modalContainer}>
          <Pressable
            onPress={() => setIsModalVisible(false)}
            accessibilityLabel='Close'
            accessibilityRole='button'
            style={productDetailsStyles.closeButton}
          >
            <IconSymbol name='xmark' size={36} color='white' />
          </Pressable>
          <Image
            source={require('@/assets/images/playstation5.jpg')}
            style={productDetailsStyles.productImage}
          />
        </View>
      </Modal>
    </ThemedView>
  );
}