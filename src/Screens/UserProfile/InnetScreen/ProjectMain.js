import {StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';
import React from 'react';
import Fonts from '../../../../assets/fonts';
import Colors from '../../../../assets/colors';
import {TabRouter} from '@react-navigation/native';

export const Conatiner = ({title, address, endDate, iscomplited}) => {
  const enddatesplit = endDate.split(',');
  // console.log(enddatesplit)
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.ContainerText}>{title}</Text>
        <Text style={styles.ContainersubText}>{address}</Text>
      </View>
      <View>
        <Text
          style={[
            styles.ContainersubText2,
            {color: !iscomplited ? 'red' : 'rgba(80, 200, 120, 1)'},
          ]}>
          {iscomplited ? (
            <Text style={{textAlign: 'left'}}>
              Completed {'\n'}on {enddatesplit[0]}
              {'\n'}
              {enddatesplit[1]}
            </Text>
          ) : (
            <Text style={{paddingRight: 10}}>ongoing</Text>
          )}
        </Text>
      </View>
    </View>
  );
};
const ProjectMain = () => {
  //  const {height,width}=useWindowDimensions()
  return (
    <View style={{marginBottom: 20}}>
      <Conatiner
        title={'Oskar Towers'}
        address={'5B, Nirapalm Society, Solapur'}
        endDate={'31 Jan, 2023'}
        iscomplited={true}
      />
      <Conatiner
        title={'Oskar Heights'}
        address={'5B, Nirapalm Society, Solapur'}
        endDate={'31 Jan, 2023'}
        iscomplited={false}
      />
      <Conatiner
        title={'Oskar Towers'}
        address={'5B, Nirapalm Society, Solapur'}
        endDate={'31 Jan, 2023'}
        iscomplited={true}
      />
      <Conatiner
        title={'Oskar Towers'}
        address={'5B, Nirapalm Society, Solapur'}
        endDate={'31 Jan, 2023'}
        iscomplited={true}
      />
      <Conatiner
        title={'Oskar Towers'}
        address={'5B, Nirapalm Society, Solapur'}
        endDate={'31 Jan, 2023'}
        iscomplited={true}
      />
    </View>
  );
};

export default ProjectMain;
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 15,
    width: '93%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  ContainerText: {
    fontFamily: Fonts.OpenSans600,
    color: Colors.CommonColor,
    fontSize: 15,
  },
  ContainersubText: {
    fontFamily: Fonts.OpenSans400,
    color: Colors.CommonColor,
    fontSize: 12,
    lineHeight: 25,
  },
  ContainersubText2: {
    fontFamily: Fonts.OpenSans400,
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(80, 200, 120, 1)',
    // width:'50%',
    // alignSelf:'flex-end',
    alignItems: 'center',
  },
});
