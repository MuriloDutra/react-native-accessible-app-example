import { Foundation } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export const CheckBoxTermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsChecked((checked) => !checked);
      setIsLoading(false);
    }, 500);
  };

  return (
    // We also did not add the prop accessible={true}: this is because Pressables, unlike Views, are already accessible components by default!
    <Pressable
      onPress={handlePress}
      disabled={isLoading}
      // Note that we did NOT indicate the word “Checkbox” in the label. This is because it will be automatically added by the screen reader using the role prop, so we don’t need to add it twice!
      accessibilityRole="checkbox"
      // This way, we ensure that the icon label will not be read by the screen reader, and it also allows us to use a clearer text for screen reader users.
      accessibilityLabel="Agreement to terms and conditions"
      // which gives more precision about what does the component when actioned (the label should remain short).
      accessibilityHint="I agree to the terms and conditions of the application."
      // this will indicate to the user if the checkbox is ticked or not
      accessibilityState={{ checked: isChecked, disabled: isLoading }}
      // this will indicate to the user if the checkbox is loading or not
      accessibilityValue={{ text: isLoading ? 'Loading' : undefined }}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 4, margin: 20 }}
    >
      {isChecked ? (
        <Foundation name="check" size={24} color={isLoading ? 'lightgrey' : 'green'} />
      ) : (
        <Foundation name="x" size={24} color={isLoading ? 'lightgrey' : 'red'} />
      )}
      <Text>I agree to the terms and conditions</Text>
    </Pressable>
  );
};