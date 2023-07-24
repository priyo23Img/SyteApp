import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Colors from '../../../../assets/colors';

const MediaMain = () => {
  return (
    <View style={{marginBottom: 20}}>
      <View
        style={{
          borderBottomColor: Colors.MainColor,
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}>
        <View style={styles.container}>
          <Text
            style={{
              color: Colors.CommonColor,
              fontSize: 12,
            }}>
            16feb,2023
          </Text>
        </View>

        <View style={styles.ImageContainer}>
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
        </View>
      </View>

      <View
        style={{
          borderBottomColor: Colors.MainColor,
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}>
        <View style={styles.container}>
          <Text
            style={{
              color: Colors.CommonColor,
              fontSize: height > 900 ? 16 : 12,
            }}>
            16feb,2023
          </Text>
        </View>

        <View style={styles.ImageContainer}>
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../../../../assets/images/Image3.jpg')}
            style={styles.images}
          />
        </View>
      </View>
    </View>
  );
};

export default MediaMain;
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: '30%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  images: {
    width: 110,
    height: 110,
    resizeMode: 'stretch',
    marginRight: 10,
    marginBottom: 20,
  },
  ImageContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
