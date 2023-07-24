import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions,Modal,Pressable } from 'react-native'
import React, { useState,useRef } from 'react'
import CommonHeards from '../../Common/CommonHeards'
import Fonts from '../../../../assets/fonts'
import Colors from '../../../../assets/colors'
import * as Progress from 'react-native-progress';
import SearchIcon from 'react-native-vector-icons/AntDesign'
import FilterIcon from 'react-native-vector-icons/Ionicons'
import CameraGelleryModal from './CameraGelleryModal'
import RBSheet from 'react-native-raw-bottom-sheet';
import CalendeTimermodal from '../../Common/CalendeTimermodal'

const TaskDetails = () => {
    const refRBSheet = useRef();
    const [modalVisible, setModalVisible] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
        //   refollowRBSheet.current.close()
    };
    return (

        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <CommonHeards title={"Task Details"} />
            <ScrollView >
                <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 2 }}>
                    <View style={styles.Topcontainer}>
                        <Text style={styles.ContainerText}>Foundation</Text>
                        <View style={styles.innertextWrap}>
                            <Text>start: 01/02/2023</Text>
                            <Text>End Date: 01/02/2023</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 15 }}>
                            <Progress.Bar
                                progress={.5}
                                width={width / 1.2}
                                color={Colors.AvailableFlat}
                                height={15}
                                borderRadius={10}
                            />
                            <Text style={{ color: '#1F1F1F', fontSize: 12, marginLeft: 10 }}>100%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.MediaContainter}>
                    <Text style={styles.ContainerText}>Media</Text>
                    <View style={{ flexDirection: 'row' }}>
                     
                        <TouchableOpacity 
                        onPress={()=>showDatePicker()}
                        style={styles.FilterWrap}
                        
                        >
                            <Text style={{ fontFamily: Fonts.Poppins500, marginRight: 10, color:Colors.CommonColor}}>Filter by Date</Text>

                            <FilterIcon name='calendar-outline' style={{ fontSize: 15,color:Colors.CommonColor}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ImageWrap}>
                    <Image source={require('../../../../assets/images/Image3.jpg')} style={styles.Images} />
                    <Image source={require('../../../../assets/images/Image3.jpg')} style={styles.Images} />
                    <Image source={require('../../../../assets/images/Image3.jpg')} style={styles.Images} />
                    <Image source={require('../../../../assets/images/Image3.jpg')} style={styles.Images} />
                    
                </View>

                <TouchableOpacity style={styles.PlusIcon}
                          onPress={() => refRBSheet.current.open()}
                        >
                            <SearchIcon name='plus' style={{ fontSize: 15,color:Colors.CommonColor }} />
                            <Text  style={{ fontFamily: Fonts.Poppins500, marginRight: 10, color:Colors.CommonColor}}>Add Media</Text>
                        </TouchableOpacity>
            </ScrollView>
           
            <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>






          

<RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <CameraGelleryModal refRBSheet ={refRBSheet} />
      </RBSheet>

      <CalendeTimermodal isDatePickerVisible={isDatePickerVisible}  handleConfirm={handleConfirm} hideDatePicker={hideDatePicker}/>
        </View>
    )
}

export default TaskDetails
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    Topcontainer: {
        width: '94%',
        marginHorizontal: 15,
        marginVertical: 20
    }, ContainerText: {
        fontFamily: Fonts.Poppins600,
        color: Colors.CommonColor,
        fontSize: 17,
        marginBottom: 10,
    },
    innertextWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PlusIcon: {
        backgroundColor: Colors.MainColor,
        paddingHorizontal: 15,
        paddingVertical: 5,
        // width: '20%', 
        elevation: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 20,
        alignSelf:'flex-end',
        borderRadius:6,

    },
    FilterWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.MainColor,
        elevation: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius:6,

    },
    MediaContainter: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        width: '93%',

    },
    nextButton: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.MainColor,
        borderRadius: 5,
        elevation: 5,
        width: "40%",
        marginBottom: 30,
        alignSelf: 'center'
        // marginRight:20
    },
    buttonText: {
        fontFamily: Fonts.Inter600,
        color: Colors.CommonColor,
        fontSize: 17,
    },
    Images: {
        width: '30%',
        height: 110,
        resizeMode: 'contain'
    },
    ImageWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '93%',
        marginHorizontal: 15,
        flexWrap:'wrap'
    },
    centeredView: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal:20,
        width:'70%',
        alignItems: 'center',
        height:200  
      },
      sheetContainer: {
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // backgroundColor:Colors.MainColor,
          paddingBottom: 20,
          height: 'auto',
        },
      },
   
})