import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Dimensions, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import * as Progress from 'react-native-progress';
import RBSheet from 'react-native-raw-bottom-sheet';
import SearchIcon from 'react-native-vector-icons/AntDesign'
import StartIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonHeards from '../Common/CommonHeards'
import Fonts from '../../../assets/fonts'
import Colors from '../../../assets/colors'
import Slider from 'react-native-slider';

const Data = [
    {
        name: "Foundation",
        startdate: '01/02/2023',
        enddate: '04/04/2023'
    },
    {
        name: "Brick Laying",
        startdate: '01/02/2023',
        enddate: '04/04/2023'
    },
    {
        name: "Excavation",
        startdate: '01/02/2023',
        enddate: '04/04/2023'
    },
    {
        name: "Slab",
        startdate: '01/02/2023',
        enddate: '04/04/2023'
    },
    {
        name: "Flooring",
        startdate: '01/02/2023',
        enddate: '04/04/2023'
    },
]
const initialSliderValues = {
  Foundation: 0.3,
  'Brick Laying': 0.3,
  Excavation: 0.3,
  Slab: 0.3,
  Flooring: 0.3,
};
import { useNavigation } from '@react-navigation/native'
import NewTaskDetails from './InnerScreens/NewTaskDetails';

const TaskManagerMain = () => {
    const [sliderValues, setSliderValues] = useState(Data.map(() => 0));


    const handleSliderChange = (index, value) => {
        setSliderValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    };


    const refRBSheet = useRef();
    // const refRBSheet1 = useRef();
    const navigation = useNavigation()
    return (
        <>
            <CommonHeards title={"Tasks Progress"} />
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View>

                    <View style={[styles.Inputcontainer,]}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                            // value={input.password}
                            // onChangeText={(text) => handleInputChange('password', text)}
                            style={styles.InputStyle}
                        />
                        <SearchIcon name='search1' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
                    </View>

                    {
                        Data?.map((el, index) => {
                            return (
                                <>
                                    <TouchableOpacity style={styles.Contentbox}
                                        onPress={() => navigation.navigate('Taskdetails')}
                                    >
                                        <View style={styles.Contentinner}>
                                            <View>
                                                <Text style={styles.ContentText}>{el.name}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <SearchIcon name='calendar' style={{ fontSize: 17, marginRight: 5 }} />
                                                <Text style={{ fontSize: 12 }}>{el.startdate}</Text>
                                            </View>
                                            <View>
                                                <StartIcon name='ray-start-arrow' style={{ fontSize: 25, marginRight: 5 }} />
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <SearchIcon name='calendar' style={{ fontSize: 17, marginRight: 5 }} />
                                                <Text style={{ fontSize: 12 }}>{el.enddate}</Text>
                                            </View>

                                        </View>
                                        <View style={styles.container}>
                                            <Slider
                                                value={sliderValues[index]}
                                                onValueChange={(value) => handleSliderChange(index, value)}
                                                onSlidingComplete={(value) => handleSliderChange(index, value)}
                                                minimumValue={0}
                                                maximumValue={100}
                                                step={1}
                                                style={styles.slider}
                                                minimumTrackTintColor="#00C07F"
                                                maximumTrackTintColor="#D6D6D6" 
                                                thumbStyle={styles.thumb}
                                                thumbTintColor="#00C07F"
                                            />
                                            <Text style={{ marginLeft: 8, color: '#1F1F1F', fontSize: 12 }}>{`${sliderValues[index]}%`}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )
                        })
                    }
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.nextButton, { width: '60%' }]}
                            onPress={() =>
                                refRBSheet.current.open()}
                        >
                            <Text style={styles.buttonText}>Add Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

            <RBSheet
                ref={refRBSheet}
                closeOnPressMask={true}
                customStyles={styles.sheetContainer}
            >
                <NewTaskDetails />
            </RBSheet>
        </>

    )
}

export default TaskManagerMain
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    Inputcontainer: {
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical:  Platform.OS==="ios"?14:5,
        marginHorizontal: 20,
        borderColor:'#D6D6D6',
        borderWidth:1,

        borderRadius: 10,
        marginBottom: 10

    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '93%',
    },
    Contentbox: {
        width: '90%',
        height: 'auto',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        elevation: 3,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        marginHorizontal: 20,
        marginTop: 30,

    },
    Contentinner: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    ContentText: {
        fontFamily: Fonts.Poppins600,
        color: Colors.CommonColor,
        fontSize: 12,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20
    },
    buttonText: {
        fontFamily: Fonts.Inter600,
        color: Colors.CommonColor,
        fontSize: 15,
    },
    nextButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.MainColor,
        borderRadius: 5,
        elevation: 3,
        // marginRight:20
    },
    sheetContainer: {
        container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            //   paddingBottom: 20,
            height: 'auto',
        },
    },
    container: {
        flex: 1,
    },
    slider: {
        height: 20, 
      },
      thumb: {
        width: 20, 
        height: 20, 
        borderRadius: 10,
      },
      sliderValue: {
        marginLeft: 8,
        color: '#1F1F1F',
        fontSize: 12,
      },
})