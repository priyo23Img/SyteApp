import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useContext } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CalendeTimermodal = ({isDatePickerVisible,handleConfirm,hideDatePicker,isEndDatePickerVisible}) => {
  
  return (
    <View>
      {/* <Text>Calendermodal</Text> */}


      <DateTimePickerModal
                isVisible={ isEndDatePickerVisible && isEndDatePickerVisible || isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

    </View>
  )
}

export default CalendeTimermodal

const styles = StyleSheet.create({})