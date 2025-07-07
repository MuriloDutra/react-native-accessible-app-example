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
  const [zipcode, setZipcode] = useState('');

  return (
    <ThemedView style={[productDetailsStyles.container, { paddingTop: top, paddingHorizontal: 20 }]}>
      <ThemedText type="subtitle" style={[productDetailsStyles.title, {color: 'green'}]}>
        Accessible Screen
      </ThemedText>
      <ThemedText type="subtitle" accessibilityRole='header'>
        Playstation 5
      </ThemedText>
      
      <Pressable
        onPress={() => setIsModalVisible(true)}
        accessibilityLabel='PlayStation 5 product image'
        accessibilityHint='Open the product image details modal'
        accessibilityRole='imagebutton'
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
          value={zipcode}
          onChangeText={setZipcode}
        />
      </ThemedView>
      
      <TouchableOpacity
        style={[productDetailsStyles.button, zipcode.length === 0 && productDetailsStyles.disabledButton]}
        accessibilityRole='button'
        accessibilityState={{disabled: zipcode.length === 0}}
        accessibilityHint='Fill in the zip code to add to cart'
        disabled={zipcode.length === 0}
        onPress={() => console.log('Add to Cart')}
      >
        <ThemedText style={productDetailsStyles.buttonText}>
          Add to Cart
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={productDetailsStyles.subButton}
        accessibilityRole='button'
        accessibilityHint='It redirects to product details screen'
        onPress={() => console.log('Product Details')}
      >
        <ThemedText style={productDetailsStyles.buttonText}>Product Details</ThemedText>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        accessibilityLabel='Product image details modal'
        accessibilityHint='Close the product image details modal'
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