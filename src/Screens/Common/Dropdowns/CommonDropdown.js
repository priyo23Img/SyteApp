import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

const CommonDropdown = ({ setIsFocus, setValue, data, isFocus, value, placeholdertext,Label,Headername}) => {
  return (
    <View>
        <Text style={styles.TopHeading}>{Headername}</Text>

      <View style={styles.container}>
        <Dropdown
          style={[
            styles.dropdown,
            isFocus && { borderColor: Colors.MainColor },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={value ? value : !isFocus ? placeholdertext : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.Label);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  )
}

export default CommonDropdown

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
    shadowColor:'rgba(0, 0, 0, 0.25)',
    
        shadowOffset: {width: -2, height: 1},
        shadowOpacity: 0.1
  },
  dropdown: {
    height: 60,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.50)',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15,
  },
})