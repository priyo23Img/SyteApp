import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  Modal,
} from 'react-native';
import React, {useState, useRef} from 'react';
import SalesHeader from './InnerScreen/SalesHeader';
import DropIcon from 'react-native-vector-icons/AntDesign';
import Fonts from '../../../assets/fonts';
import Colors from '../../../assets/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import AvailableBottomSheet from './Available/AvailableBottomSheet';
import ReserveModal from './Reserve/ReserveModal';
import ReserveForcustomerModal from './Reserve/ReserveForcustomerModal';
import AvailBookSheet from './AvailBookSheet';
import CommonHeards from '../Common/CommonHeards';

const Flatdata = [
  {
    status: 'Booked',
    Text: 'Flat 1',
    size: '1 BHK',
    id: '1',
    visit: '3',
  },
  {
    status: 'Avail',
    Text: 'Flat 2',
    size: '2 BHK',
    id: '2',
    visit: '5',
  },
  {
    status: 'Reserve',
    Text: 'Flat 3',
    size: '3 BHK',
    id: '3',
    visit: '',
  },

  {
    status: 'Avail',
    Text: 'Flat 4',
    size: '2 BHK',
    id: '4',
    visit: '8',
  },
  {
    status: 'Booked',
    Text: 'Flat 5',
    size: '3 BHK',
    id: '5',
    visit: '',
  },
  {
    status: 'Reserve',
    Text: 'Flat 6',
    size: '3 BHK',
    id: '11',
    visit: '3',
  },

  {
    status: 'Booked',
    Text: 'Flat 1',
    size: '1 BHK',
    id: '6',
    visit: '',
  },
  {
    status: 'Reserve',
    Text: 'Flat 1',
    size: '1 BHK',
    id: '7',
    visit: '',
  },
  {
    status: 'Avail',
    Text: 'Flat 1',
    size: '1 BHK',
    id: '8',
    visit: '6',
  },

  {
    status: 'Booked',
    Text: 'Flat 1',
    size: '4 BHK',
    id: '9',
    visit: '',
  },
  {
    status: 'Reserve',
    Text: 'Flat 10',
    size: '5 BHK',
    id: '10',
    visit: '6',
  },
  {
    status: 'Reserve',
    Text: 'Flat 10',
    size: '5 BHK',
    id: '12',
    visit: '8',
  },
];

const Sales = () => {
  const refRBSheet = useRef();
  const refavailSheet = useRef();
  const refAvilBookSheet = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [isChoose, setChoose] = useState(false);
  const [value, setValue] = useState(null);
  const [flatdata, setFlatData] = useState([]);
  const handleButtonPress = buttonName => {
    if (isChoose === buttonName) {
      setChoose(null);
    } else {
      setChoose(buttonName);
    }
  };

  const handleSelect = data => {
    if (data.status === 'Avail') {
      refavailSheet.current.open();
      setFlatData(data);
    } else if (data.status === 'Reserve') {
      setFlatData(data);
      setModalVisible(!modalVisible);
    } else if (data.status === 'Booked') {
      navigation.navigate('Bookedmain');
    }
  };
  console.log(flatdata, 'dataSelect');
  const Availsheet = () => {
    // console.log("Function called")
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <SalesHeader />
        {/* <CommonHeards lasticonname="settings" /> */}
        <View
          style={{
            borderBottomColor: '#D6D6D6',
            borderBottomWidth: 2,
          }}>
          <View style={styles.TopHeader}>
            <Text style={styles.HeaderText}> Oskar Tech</Text>
            <View>
              <Text style={styles.HeaderText}>
                Oskar Heights
                <DropIcon name="caretdown" size={15} color="#1F1F1F" />
              </Text>
            </View>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.OptionTextWrap}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.Emptyview} />
              <Text style={styles.OptionText}>Available</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={[
                  styles.Emptyview,
                  {backgroundColor: Colors.ReservedFlat},
                ]}
              />
              <Text style={styles.OptionText}>Reserved</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={[styles.Emptyview, {backgroundColor: Colors.BookedFlat}]}
              />
              <Text style={styles.OptionText}>Booked</Text>
            </View>
          </View>

          <View style={styles.FlatBoxWrap}>
            {Flatdata?.map((el, index) => {
              let backgroundColor = Colors.BookedFlat;

              if (el.status === 'Avail') {
                backgroundColor = Colors.AvailableFlat;
              } else if (el.status === 'Reserve') {
                backgroundColor = Colors.ReservedFlat;
              }
              return (
              
                  <TouchableOpacity
                    style={[styles.FlatBox, {backgroundColor}]}
                    onPress={() => handleSelect(el)}
                    key={index}>
                    <View style={styles.FlatBoxemptyview}
                   
                    
                    >
                      <Text
                        style={{
                          color: Colors.CommonColor,
                          fontSize: 10,
                          fontFamily: Fonts.Poppins500,
                        }}>
                        {el.size}
                      </Text>
                    </View>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: '#fff',
                        fontFamily: Fonts.Poppins600,
                        fontSize: 15,
                      }}>
                      {el.Text}
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-end',
                        color: '#fff',
                        fontFamily: Fonts.Poppins600,
                        fontSize: 13,
                        position: 'absolute',
                        bottom: 5,
                        right: 5,
                      }}>
                      {el.visit}
                    </Text>
                  </TouchableOpacity>
              
              );
            })}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.BottomButton}
        onPress={() => refRBSheet.current.open()}>
        <Text
          style={{color: Colors.CommonColor, fontWeight: 600, fontSize: 25}}>
          +
        </Text>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        animationType="slide"
        openDuration={5000}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <View>
          <View
            style={{
              backgroundColor: Colors.MainColor,
              height: 60,
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <Text style={styles.BottomSheetText}>Choose Action</Text>
          </View>
          <View style={styles.SheetBoxContainer}>
            <TouchableOpacity
              style={styles.SheetBox}
              onPress={() => {
                refRBSheet.current.close();
                navigation.navigate('AddUnit', {
                  value,
                  setValue,
                });
              }}>
              <Text style={styles.SheetBoxText}>Add Unit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SheetBox}>
              <Text style={styles.SheetBoxText}>Add Leads</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>

      <RBSheet
        ref={refavailSheet}
        animationType="slide"
        openDuration={900}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <AvailableBottomSheet
          refavailSheet={refavailSheet}
          flatdata={flatdata}
        />
      </RBSheet>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {value === 'For Owner' && (
            <View style={styles.modalView}>
              <ReserveModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                refAvilBookSheet={refAvilBookSheet}
              />
            </View>
          )}
          {value === 'For Customer' && (
            <View style={[styles.modalView, {width: '80%'}]}>
              <ReserveForcustomerModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                refAvilBookSheet={refAvilBookSheet}
              />
            </View>
          )}
        </View>
      </Modal>
      <RBSheet
        ref={refAvilBookSheet}
        animationType="slide"
        openDuration={900}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}
        // onOpen={onBottomSheetOpen}
      >
        <AvailBookSheet refAvilBookSheet={refAvilBookSheet} />
      </RBSheet>
    </View>
  );
};

export default Sales;
const {width, height} = Dimensions.get('screen');
const Left = width > 420 ? 70 : width > 410 ? 60 : 55;
const styles = StyleSheet.create({
  TopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  HeaderText: {
    fontFamily: Fonts.OpenSans600,
    color: Colors.CommonColor,
  },
  TopButtonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  Topbutton: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  Topbutton1: {
    borderColor: Colors.MainColor,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  TopbuttonText: {
    color: Colors.CommonColor,
    fontSize: 16,
    fontFamily: Fonts.Inter600,
  },
  OptionText: {
    color: Colors.CommonColor,
    fontFamily: Fonts.Poppins500,
    fontSize: 14,
  },
  Emptyview: {
    width: 10,
    height: 10,
    backgroundColor: Colors.AvailableFlat,
    marginRight: 5,
  },
  OptionTextWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  FlatBoxemptyview: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
    position: 'absolute',
    top: 0,
    left: Left,
  },
  FlatBox: {
    width: '30%',
    height: 120,
    backgroundColor: Colors.BookedFlat,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  FlatBoxWrap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
  },
  scrollViewContent: {
    height: 'auto',
    // flex:2,
    overflow: 'hidden',
    paddingBottom: 70,
    flexGrow: 1,
  },
  BottomButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 3,
    backgroundColor: Colors.MainColor,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // marginRight:30
  },
  sheetContainer: {
    container: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingBottom: 20,
      height: 300,
      // justifyContent:'center'
    },
  },
  BottomSheetText: {
    color: Colors.CommonColor,
    fontSize: 15,
    fontFamily: Fonts.Poppins500,
  },
  SheetBox: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.MainColor,
    // width:'30%'
  },
  SheetBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
    // justifyContent:'center',
    alignItems: 'center',
    // alignSelf:'center'
  },
  SheetBoxText: {
    fontSize: 15,
    color: Colors.CommonColor,
    fontFamily: Fonts.Poppins500,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '70%',
    height: 'auto',
    marginHorizontal: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
