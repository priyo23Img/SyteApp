import React, { useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogRegisterMain from '../LoginRegister/LogRegisterMain';

const BlankScreen = () => {
  const translateY = new Animated.Value(-1200); // Start the component off-screen
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // Animation completed, navigate to the main page
    //   navigation.replace('Logregistermain');
    });
  }, [navigation, translateY]);

  return (
    <View style={styles.container}>
      {/* Your main page content here */}
      <Animated.View
        style={[
          styles.mainPageContainer,
          { transform: [{ translateY: translateY }] },
        ]}
      >
        <LogRegisterMain />
      </Animated.View>
    </View>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFCC',
  },
  mainPageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
