import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import CommonHeards from '../../Common/CommonHeards'
import Icons from 'react-native-vector-icons/FontAwesome'
import EmailLetter from 'react-native-vector-icons/MaterialCommunityIcons'
import Costruct from 'react-native-vector-icons/MaterialIcons'
import RBSheet from 'react-native-raw-bottom-sheet';
import CencelBookingSheet from './InnerScreen/CencelBookingSheet'
import Colors from '../../../../assets/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import Fonts from '../../../../assets/fonts'
import CameraGelleryModal from '../../DprScreens/InnerScreens/CameraGelleryModal'
import ImagePicker from 'react-native-image-crop-picker';

// import RBSheet from 'react-native-raw-bottom-sheet';


const BookScreenMain = () => {
    const refRBSheet = useRef();
    const refMaterialConSheet = useRef();

    const [modalVisible, setModalVisible] = useState(false);
    const [cammodalVisible, setCamModalVisible] = useState(false);

    const [camchoose, setCamchoose] = useState(false)
    const [fileResponse, setFileResponse] = useState([]);
    const [fileResponse1, setFileResponse1] = useState([]);
    const [fileResponse2, setFileResponse2] = useState([]);




    const openCancelBookingScreen = () => {
        setModalVisible(true);
        setCamchoose(false);
    };

    const openCameraGalleryModal = () => {
        setCamModalVisible(true);
        setCamchoose(true);
    };




    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [DocumentPicker.types.allFiles]
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    const handleDocumentSelection1 = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [DocumentPicker.types.allFiles]
            });
            setFileResponse1(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);
    const handleDocumentSelection2 = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [DocumentPicker.types.allFiles]
            });
            setFileResponse2(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    const HandleCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <CommonHeards title={"Booking ID #xx"} />
            <View style={styles.TopHeader}>
                <Text style={styles.HeaderText}>Unit Name: XXXX</Text>
                <Text style={styles.HeaderText}>Project Name: XXXX</Text>
            </View>
            <View style={styles.Projectdetails}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Text style={styles.ProjectdetailsText}>Customer Name</Text>
                    <Text>XXXXX</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Text style={styles.ProjectdetailsText}>Contact Number</Text>
                    <Text>XXXXX</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Text style={styles.ProjectdetailsText}>Email ID</Text>
                    <Text>XXXXX</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Text style={styles.ProjectdetailsText}>Booking Date</Text>
                    <Text>XXXXX</Text>
                </View>
            </View>
            <View style={styles.PaymentConfirmBox}>
                <Text style={styles.PaymentConfirmBoxHeader}>Dues</Text>
                <View style={styles.PaymentConfirmBoxContent}>
                    <Text style={[styles.PaymentConfirmBoxsubContent, { width: '60%' }]}>Amount Receivable</Text>
                    <Text style={styles.PaymentConfirmBoxsubContent}>xxxx</Text>
                </View>
                <View style={styles.PaymentConfirmBoxContent}>
                    <Text style={[styles.PaymentConfirmBoxsubContent, { width: '60%' }]}>Date of Payment</Text>
                    <Text style={styles.PaymentConfirmBoxsubContent}>xxxx</Text>
                </View>

                <View style={styles.Iconswrap}>
                    <Icons name='phone' style={{ fontSize: 20, color: '#fff', marginRight: 20 }} />
                    <Icons name='bell' style={{ fontSize: 20, color: '#fff', marginRight: 20 }} />
                    <Icons name='pencil' style={{ fontSize: 20, color: '#fff' }} />
                </View>

            </View>

            <View style={styles.OptionWrap}>
                <TouchableOpacity
                    style={styles.Options}
                    onPress={() => handleDocumentSelection()}
                >
                    <EmailLetter name='email-newsletter' size={20} color={"black"} />
                    <Text style={{ textAlign: 'center', fontSize: fontSize }}>Allotment{'\n'} Letter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Options}
                    onPress={() => handleDocumentSelection1()}

                >
                    <Icons name='bar-chart' size={20} color={"black"} />
                    <Text style={{ textAlign: 'center', fontSize: fontSize, width: '70%' }}>Progress Sheet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.Options, { marginRight: 0 }]}
                    onPress={() => handleDocumentSelection2()}

                >
                    <Costruct name='point-of-sale' size={20} color={"black"} />
                    <Text style={{ textAlign: 'center', fontSize: fontSize, width: '60%' }}>Sale
                        Deed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Options}
                    onPress={() =>
                        refRBSheet.current.open()

                    }
                >
                    <Costruct name='camera-alt' size={20} color={"black"} />
                    <Text style={{ textAlign: 'center', fontSize: fontSize, width: '70%' }}>Sent Site Pics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Options}

                    onPress={() => refMaterialConSheet.current.open()}
                >
                    <Costruct name='construction' size={20} color={"black"} />
                    <Text style={{ textAlign: 'center', fontSize: fontSize }}>Material Confirmation </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.ButtonsWrap}>
                <TouchableOpacity
                    style={styles.Buttons}
                    onPress={() =>
                        openCancelBookingScreen()

                    }
                ><Text style={styles.ButtonsText}>Cancel Booking</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}><Text style={styles.ButtonsText}>Transfer Booking</Text></TouchableOpacity>

            </View>



            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    // setCamModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <CencelBookingSheet
                            setModalVisible={setModalVisible}
                            modalVisible={modalVisible}
                        />
                    </View>

                </View>
            </Modal>


            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                // height={450}
                customStyles={{
                    draggableIcon: {
                        display: 'none',
                    },
                    container: { borderTopLeftRadius: 50, borderTopRightRadius: 50, height: 'auto' },
                }}>
                <CameraGelleryModal refRBSheet={refRBSheet} />

            </RBSheet>


            <RBSheet
                ref={refMaterialConSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={450}
                customStyles={{
                    draggableIcon: {
                        display: 'none',
                    },
                    container: { borderTopLeftRadius: 50, borderTopRightRadius: 50 },
                }}>
                <View style={styles.rbSheetInner__container}>
                    <View style={styles.RBheading__container}>
                        <Text style={styles.RBSheet_heading}>Material Confirmation</Text>
                    </View>
                    <View style={styles.RbMain_container}>
                        <View style={styles.paymentType__container}>
                            <TextInput
                                placeholder='Payment Type'
                                style={styles.paymenttype_Text}
                            />
                            {/* <Text ></Text> */}

                            <View style={styles.Inputcontainer1}>

                                <TextInput
                                    placeholder='₹XXXXXX'
                                    style={styles.InputStyle1}
                                />
                            </View>
                            {/* <Text ></Text> */}
                            <TouchableOpacity style={{ marginTop: 10 }}
                                onPress={() => {
                                    HandleCamera()

                                }}
                            >

                                <MaterialCommunityIcons
                                    name="camera"
                                    size={22}
                                    color="black"
                                />
                            </TouchableOpacity>

                        </View>

                        {/* -----------schedule btn */}
                        <View
                            style={styles.schedule_btn}
                            onTouchEnd={() => refMaterialConSheet.current.close()}>
                            <Text style={styles.btnText}>Confirm Material</Text>
                        </View>
                    </View>
                </View>
            </RBSheet>
        </View>
    )
}

export default BookScreenMain
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 12 : height >= 800 ? 10 : 8
const RBfontSize = height > 900 ? 20 : height >= 800 ? 15 : 10

const styles = StyleSheet.create({

    TopHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 15
    },
    HeaderText: {
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins600
    },
    Projectdetails: {
        backgroundColor: '#fff',
        width: '90%',
        marginHorizontal: 20,
        height: 'auto',
        elevation: 3,
        marginVertical: 10,
        paddingHorizontal: 35,
        paddingTop: 30,
        paddingBottom: 10
    },
    ProjectdetailsText: {
        fontFamily: Fonts.OpenSans500,
        color: Colors.CommonColor
    },
    PaymentConfirmBox: {
        backgroundColor: 'rgba(247, 135, 2, 1)',
        width: '90%',
        marginHorizontal: 20,
        height: 'auto',
        elevation: 3,
        marginVertical: 10,
        paddingHorizontal: 35,
        paddingTop: 20,
        paddingBottom: 10,
        marginTop: 20
    },
    PaymentConfirmBoxHeader: {
        alignSelf: 'center',
        fontFamily: Fonts.Poppins600,
        color: '#fff',
        fontSize: 16
    },
    PaymentConfirmBoxContent: {
        flexDirection: "row", marginTop: 10
    },
    PaymentConfirmBoxsubContent: {
        color: '#fff',
        // marginRight:40,
        fontFamily: Fonts.Poppins500,
        fontSize: 14
    },
    Iconswrap: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    OptionWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 30,
        marginVertical: 30
    },
    Options: {
        width: '23%',
        paddingVertical: 10,
        height: 'auto',
        alignItems: 'center',
        backgroundColor: "rgba(255, 223, 22, 0.1)",
        marginRight: 50,
        marginBottom: 40,
        borderColor: '#D6D6D6', borderWidth: 1
    },
    Buttons: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.MainColor,
        elevation: 3,
        borderRadius: 5,

    },
    ButtonsText: {
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins600,
        fontSize: 15,
    },
    ButtonsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20, marginTop: 20
    },
    sheetContainer: {
        container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 20,
            height: 'auto',
        },
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
    rbSheetInner__container: {
        flex: 1,
        // alignItems: 'center',
        // paddingVertical: 20,
    },
    RBheading__container: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        backgroundColor: Colors.MainColor,
        height: 60
    },
    RBSheet_heading: { color: Colors.CommonColor, fontSize: RBfontSize },

    amounContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.25)',
        width: '100%',
    },
    AmountText: {
        fontSize: 12,
        color: Colors.CommonColor,
    },
    RbMain_container: {
        width: '100%',
        paddingVertical: 10,
        // paddingHorizontal: 20,
        flex: 1,
        // alignItems:'center'
    },
    paymentType__container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 15,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
        elevation: 5,
    },
    paymenttype_Text: {
        borderBottomWidth: 1,
        flex: 1 / 2,
        fontSize: 10,
        color: Colors.CommonColor,
    },
    paymentAmount_Text: {
        borderBottomWidth: 1,
        flex: 1 / 3.5,
        fontSize: 14,
        color: Colors.CommonColor,
    },
    schedule_btn: {
        backgroundColor: Colors.MainColor,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 5,
    },
    btnText: {
        color: Colors.CommonColor,
        fontSize: 14,
        fontFamily: Fonts.OpenSans600

    },
    Inputcontainer1: {
        backgroundColor: '#fff',
        // elevation: 3,
        marginTop: 15,
        // marginRight: 10,
        flexDirection: 'row',
        width: '40%',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.MainColor,
        backgroundColor: 'rgba(247, 248, 249, 1)',
        borderRadius: 6,


        // paddingVertical: 5
    },
    InputStyle1: {
        // backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '90%',

        // marginLeft: 20
    },

})