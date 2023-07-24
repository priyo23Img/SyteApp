import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const ShedulePaymentsheet = ({handleInputChange,showDatePicker,showDatePicker}) => {

  return (
     <View style={styles.rbSheetInner__container}>
          <View style={styles.RBheading__container}>
            <Text style={styles.RBSheet_heading}>Schedule Payment</Text>
          </View>
          <View style={styles.amounContainer}>
            <Text style={styles.AmountText}>Total Amount ₹ XXXXXX</Text>
            <Text style={styles.AmountText}>Due Amount ₹ XXXXXX</Text>
          </View>
          <View style={styles.RbMain_container}>
            <View style={styles.paymentType__container}>
            <TextInput
                placeholder='Payment Type'
                style={styles.paymenttype_Text}
              />
              <View style={[styles.Inputcontainer1]}>
              <TextInput
                value={input.gst}
                onChangeText={(text) => handleInputChange('gst', text)}
                style={styles.InputStyle1}
              />
              <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

            </View>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color="black"
                onPress={() => showDatePicker()}
              />
            </View>

            {/* -----------schedule btn */}
            <View
              style={styles.schedule_btn}
              onTouchEnd={() => refRBSheet.current.close()}>
              <Text style={styles.btnText}>Schedule Payment</Text>
            </View>
          </View>
        </View>
  )
}

export default ShedulePaymentsheet

const styles = StyleSheet.create({})