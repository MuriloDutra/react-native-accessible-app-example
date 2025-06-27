import { StyleSheet } from "react-native";

export const productDetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    productImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      backgroundColor: 'red',
    },
    price: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#007AFF',
    },
    inputContainer: {
      marginVertical: 10,
    },
    zipcodeInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  