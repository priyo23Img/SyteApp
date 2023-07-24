import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import CommonHeards from '../Common/CommonHeards';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetFrom from '../../Components/BottomSheet';
import LeadsContainer from './innerScreens/LeadsContainer';

const TopScrollList = [
  { title: 'All Leads' },
  { title: 'Site Visit' },
  { title: 'Follow Up' },
  { title: 'Hot Leads' },
  { title: 'Cold Leads' },
  { title: 'Social Media' },
];

const Indicator = [
  {
    source: 'Site Visit',
    leadsname: 'Akash Sen',
    project: 'Akshita Height',
    leadStatus: 'New Lead',
    key:1
    // Date: " July 2 2023 "

  },
  {
    source: 'Site Visit', leadsname: 'Akash',
    project: 'Akshita Height',
    leadStatus: 'New Lead',
    // Date: " July 2 2023 "
    key:2

  },
  {
    source: 'Site Visit', leadsname: 'Ramesh',
    project: 'Akshita Height',
    leadStatus: 'New Lead',
    // Date: " July 2 2023 "
    key:3

  },
  {
    source: 'Follow Up', leadsname: 'Rohen Sen',
    project: 'Akshita Height',
    leadStatus: 'New Lead',
    key:4
    // Date: " July 2 2023 "

  },
  {
    source: 'Follow Up', leadsname: 'Shaan Sengupta',
    project: 'Akshita Height',
    leadStatus: 'Site Visit',
    Date: " July 2 2023 ",
    key:5

  },
  {
    source: 'Follow Up', leadsname: 'Rishabh Sharma',
    project: 'Akshita Height',
    leadStatus: 'call Not Received',
    Date: " July 2 2023 ",
    key:6

  },
  {
    source: 'Hot Leads', leadsname: 'Ramesh Sahu',
    project: 'Akshita Height',
    leadStatus: 'call Not Connected',
    Date: " July 2 2023 ",
    key:7

  },
  {
    source: 'Cold Leads', leadsname: 'rakesh Singh',
    project: 'Akshita Royals',
    leadStatus: 'Follow Up',
    Date: " July 2 2023 ",
    key:8

  },
  {
    source: 'Social Media', leadsname: 'Gaurav Chawla',
    project: 'Akshita Hill',
    leadStatus: 'Call Back',
    Date: " July 2 2023 ",
    key:9
  },
];
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const { width, height } = Dimensions.get('window');
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const LeadsMain = () => {
  const [leads, setleads] = useState(Indicator);
  const [selectedleads, setselectedleads] = useState(0);
  const refRBSheet = React.useRef();
  const [BottomSheet, setBottomSheet] = useState('');

  const navigation = useNavigation()
  const onPressLeads = (leads, index) => {
    setselectedleads(index);
    let leadsdata = Indicator.filter(Item => {
      if (Item?.source == leads) {
        return Item;
      }
    });
    leadsdata.length > 0 ? setleads(leadsdata) : setleads(Indicator);
  };
  console.log(leads);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <CommonHeards title={'Leads'} />
      <View
        style={{ margin: 15, padding: 10, backgroundColor: Colors.MainColor }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}>
          {TopScrollList.map((item, index) => {
            return (
              <View style={{ flexDirection: 'row', marginEnd: 8 }}>
                <TouchableOpacity
                  onPress={() => onPressLeads(item?.title, index)}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: Fonts.OpenSans400,
                      marginEnd: 8,
                      color: index == selectedleads ? 'red' : 'black',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
                {TopScrollList.length - 1 !== index ? (
                  <Icons name={'angle-right'} size={20} color="black" />
                ) : (
                  <></>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {leads.map((item, index) => {
            return (
              <LeadsContainer
                item={item}
                index={index}
                refRBSheet={refRBSheet}
                setBottomSheet={setBottomSheet}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.MainColor,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          bottom: 9,
          right: 15,
        }}
        onPress={() => navigation.navigate("Addleads")}
      >
        <Icons name={'plus'} size={30} color={'black'} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <BottomSheetFrom data={data} BottomSheet={BottomSheet} />
      </RBSheet>
    </SafeAreaView>
  );
};

export default LeadsMain;

const styles = StyleSheet.create({
  sheetContainer: {
    container: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingBottom: 20,
      height: 'auto',
    },
  },

  bottomSheetHeader: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
  },
  bottomSheetHeaderText: {
    fontFamily: Fonts.OpenSans400,
    fontSize: 24,
    lineHeight: 33,
    color: '#1F1F1F',
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  InputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
  },
  TopHeading: {
    fontSize: 20,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 20,
  },
  SecondButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MainColor,
    width: '30%',
    borderRadius: 5,
    elevation: 5,
  },
  SkipButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 5,
    elevation: 5,
    marginRight: 20,
  },
  ButtonWrap: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginBottom: 20,
  },
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15,
  },
  InputStyle: {
    // marginTop:15,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
    // elevation:5
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
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
    fontSize: 16,
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
  textareaContainer: {
    height: height / 7,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 20,
  },
  textarea: {
    textAlignVertical: 'top',
    height: height / 8,
    fontSize: 14,
    color: Colors.CommonColor,
    fontFamily: Fonts.OpenSans400,
  },
  Icons: {
    color: '#000000',
    fontSize: 20,

  },
});
