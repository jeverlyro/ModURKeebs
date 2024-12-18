import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {foam, krytox, tape} from '../../../../assets/images';
import CardB from '../../../../molecules/CardB';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {usePlans} from '../../../../context';

const SelectionAdditional = () => {
  const navigation = useNavigation();
  const {updateSelected} = usePlans();

  const handleSelect = (title: string, image: any) => {
    updateSelected('additional', {title, image});
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
        <Text style={styles.headerTitle}>Select Additional Items</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => handleSelect('Masking tape', tape)}>
          <CardB title="Masking tape" imageSource={tape} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelect('Krytox GPL 205g0', krytox)}>
          <CardB title="Krytox GPL 205g0" imageSource={krytox} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelect('YIMAGUJRX Keyboard Eva Foam', foam)}>
          <CardB title="YIMAGUJRX Keyboard Eva Foam" imageSource={foam} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121927',
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: 'Lexend-Bold',
    color: 'white',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#222C41',
    opacity: 0.5,
    marginVertical: 5,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    backgroundColor: 'transparent ',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
  },
  tabText: {
    fontFamily: 'Inter-Regular',
    color: 'white',
    fontSize: 10,
    marginTop: 4,
  },
});

export default SelectionAdditional;
