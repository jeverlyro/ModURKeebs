import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../../../../molecules/card';
import {BottomNavbar} from '../../../../molecules';
import {usePlans} from '../../../../context';

// screens/Plans/index.tsx
const Plans = () => {
  const navigation = useNavigation();
  const {savePlan} = usePlans();
  const [showNotification, setShowNotification] = useState(false);

  const handleSavePlan = () => {
    savePlan();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Make Your Plans</Text>
        </View>
        <View style={styles.divider} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {[
            {
              title: 'Choose your barebone kit',
              targetPage: 'Page3',
              type: 'barebone',
            },
            {
              title: 'Choose your switches',
              targetPage: 'Page4',
              type: 'switches',
            },
            {
              title: 'Choose your keycaps',
              targetPage: 'Page5',
              type: 'keycaps',
            },
            {title: 'Additional', targetPage: 'Page6', type: 'additional'},
          ].map((item, index) => (
            <Card
              key={index}
              title={item.title}
              targetPage={item.targetPage}
              type={item.type}
            />
          ))}
          <TouchableOpacity style={styles.saveButton} onPress={handleSavePlan}>
            <Text style={styles.saveButtonText}>Save plan</Text>
          </TouchableOpacity>
        </ScrollView>
        {showNotification && (
          <View style={styles.notification}>
            <Text style={styles.notificationText}>
              Plan saved successfully!
            </Text>
          </View>
        )}
      </View>
      <BottomNavbar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121927',
    paddingHorizontal: 20,
  },
  notification: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: '#5046E5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontFamily: 'Lexend-Regular',
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: 'Lexend-Bold',
    color: 'white',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#222C41',
    opacity: 0.5,
    marginVertical: 5,
  },
  scrollContainer: {
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#5046E5',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
  },
  cardText: {
    fontFamily: 'Lexend-Regular',
  },
});

export default Plans;
