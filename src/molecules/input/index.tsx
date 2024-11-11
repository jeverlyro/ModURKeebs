import {
  StyleSheet,
  Text,
  View,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextInput: React.FC<InputProps> = ({
  label = '',
  placeholder = '',
  secureTextEntry = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isFocused && styles.labelFocused]}>
        {label}
      </Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={isPasswordVisible && secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}>
          <Ionicons
            name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A4052',
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 5,
    marginVertical: 11,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: 'white',
    opacity: 0.6,
  },
  labelFocused: {
    opacity: 1,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingVertical: 12,
  },
  iconContainer: {
    marginRight: 15,
    marginBottom: 10,
  },
});
