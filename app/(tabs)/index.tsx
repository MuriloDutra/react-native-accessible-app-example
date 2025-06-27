import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { productDetailsStyles } from './commonStyles';

export default function ProductDetailsScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <ThemedView style={[productDetailsStyles.container, { paddingTop: top, paddingHorizontal: 20 }]}>
      <ThemedText type="subtitle" style={[productDetailsStyles.title, {color: 'green'}]}>
        Accessible Screen
      </ThemedText>
      <ThemedText type="subtitle" >
        Playstation 5
      </ThemedText>
      
      <Image 
        source={require('@/assets/images/playstation5.jpg')}
        style={productDetailsStyles.productImage}
      />
      
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
      
      <TouchableOpacity style={productDetailsStyles.button}>
        <ThemedText style={productDetailsStyles.buttonText}>
          Add to Cart
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

