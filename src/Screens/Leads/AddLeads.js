import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView,Platform } from 'react-native'
import React, { useState } from 'react'
import CommonHeards from '../Common/CommonHeards'
import Fonts from '../../../assets/fonts'
import Colors from '../../../assets/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';

import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'
import CommonTextInputs from '../../Components/CommonTextInputs'
const AddLeads = () => {
    const navigation = useNavigation()
    const [input, setInput] = useState({
        fullName: '',
        PhnNo: '',
        AltPhnNo:'',
       
        email: '',

    });
    const [textareatext, setTextareaText] = useState('');

    const handleTextareaChange = (value) => {
      setTextareaText(value)
    };
    const [selectedOptions, setSelectedOptions] = useState('');
    const [leadEmploy, setLeadEmploy] = useState('');
    const [leadsource, setLeadsource] = useState('');
    const [leadType, setleadType] = useState(" ")
    const [Possession, setPossession] = useState(" ")
    const [ parking,setParking] = useState("")
    const [investment,setInvestment] = useState(" ")


    // Const [LeadEmploy,setLeadEmploy] = useState("")
    // const [isChoose, setChoose] = useState('');

    const handleInputChange = (field, value) => {
        console.log(value, field);
        setInput(prevInput => ({ ...prevInput, [field]: value }));
    };

    const handleOptionSelect = (option) => {
        if (selectedOptions === option) {
            setSelectedOptions(null)
        } else {
            setSelectedOptions(option);
        }

    };
    const HandleLeadEmploy = (option) => {
        if (leadEmploy === option) {
            setLeadEmploy(null)
        } else {
            setLeadEmploy(option);
        }

    };



    const HandleaLeadtype = (option) => {
        if (leadType === option) {
            setleadType(null)
        } else {
            setleadType(option);
        }

    };
    const HandleaLeadsorce = (option) => {
        if (leadsource === option) {
            setLeadsource(null)
        } else {
            setLeadsource(option);
        }

    };

    const HandlePossion = (option) => {
        if (Possession === option) {
            setPossession(null)
        } else {
            setPossession(option);
        }

    };

    const HandleInvesment = (option) => {
        if (investment === option) {
            setInvestment(null)
        } else {
            setInvestment(option);
        }

    };

    const handleParking = (option) => {
        if (parking === option) {
            setParking(null)
        } else {
            setParking(option);
        }

    };
    const handleSubmitUser = () => {
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <CommonHeards title={"Add Leads"} />
            <ScrollView >


                <View style={styles.form_container}>
                    {/* -----------Name */}

                    <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"Full Name*"}
          placeholderText={'Enter your Full Name'}
          Inputname={input.fullName}
          Inputfieldname={'fullName'}
          OnChangeFunction ={handleInputChange}
        />
                    {/* ---------PHone */}
                


                    <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"phone Number*"}
          placeholderText={'Enter your Phone Number'}
          Inputname={input.PhnNo}
          Inputfieldname={'PhnNo'}
          OnChangeFunction ={handleInputChange}
        />
                    

                    <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"Alternate phone Number*"}
          placeholderText={'Enter your  Alternative Phone Number'}
          Inputname={input.AltPhnNo}
          Inputfieldname={'AltPhnNo'}
          OnChangeFunction ={handleInputChange}
        />
              <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"phone Number*"}
          placeholderText={'Enter your Phone Number'}
          Inputname={input.PhnNo}
          Inputfieldname={'PhnNo'}
          OnChangeFunction ={handleInputChange}
        />
              <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"Email Id "}
          placeholderText={"Enter your Email Address"}
          Inputname={input.email}
          Inputfieldname={'email'}
          OnChangeFunction ={handleInputChange}
        />
                   

                   <Text style={styles.TopHeading}>Unit Type*</Text>

<View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('1BHK')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === '1BHK' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            1BHK
        </Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('2BHK')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === '2BHK' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            2BHK
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('3BHK')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === '3BHK' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            3BHK
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('3.5BHK')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === '3.5BHK' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            3.5BHK
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('4BHK')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === '4BHK' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            4BHK
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('5BHK')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === '5BHK' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            5BHK
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('Shop')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === 'Shop' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            Shop
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('Office Space')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === 'Office Space' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            Office Space
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.contentWrap}
        onPress={() => handleOptionSelect('Row House')}
    >
        <TouchableOpacity
            style={[styles.EmptyView, selectedOptions === 'Row House' && styles.SelectedView]}
        />
        <Text
            style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
        >
            Row House
        </Text>
    </TouchableOpacity>



</View>
<Text style={styles.TopHeading}>Lead Budget</Text>
<View style={styles.Inputcontainer1}>
    <TextInput
        placeholder='Enter Lowest Budget'
        placeholderStyle={styles.Placeholder}
        style={styles.InputStyle1}

    />
    <TextInput
        placeholder='Enter Height Budget'
        style={[styles.InputStyle1, { marginLeft: 15 }]}

    />
</View>
<View>
    <Text style={styles.TopHeading}>Lead Employment</Text>

    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleLeadEmploy('Salaried')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadEmploy === 'Salaried' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Salaried
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleLeadEmploy('Self- Employed ')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadEmploy === 'Self- Employed ' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Self- Employed   
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleLeadEmploy('Business')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadEmploy === 'Business' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
                Business
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleLeadEmploy('Govt. Job')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadEmploy === 'Govt. Job ' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Govt. Job
            </Text>
        </TouchableOpacity>





    </View>

</View>

<View>
    <Text style={styles.TopHeading}>Lead Type</Text>

    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadtype('Referral')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadType === 'Referral' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Referral                        </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadtype('Agent')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadType === 'Agent' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
                Agent
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadtype('Site visit')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadType === 'Site visit ' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Site visit
            </Text>
        </TouchableOpacity>





    </View>

</View>


<View>
    <Text style={styles.TopHeading}>Lead Source</Text>

    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadsorce('News Paper')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadsource === 'News Paper' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                News Paper
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadsorce('Site Visit')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadsource === 'Site Visit' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Site Visit
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadsorce('Agent')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadsource === 'Agent' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Agent
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadsorce('Sales Team')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadsource === 'Sales Team' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Sales Team
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadsorce(' Digital Platform')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadsource === ' Digital Platform' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
                Digital Platform
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleaLeadsorce('Referral')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, leadsource === 'Referral' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Referral
            </Text>
        </TouchableOpacity>
    </View>
</View>

<View>
    <Text style={styles.TopHeading}>Possession Availability</Text>

    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandlePossion('Ready to move')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, Possession === 'Ready to move' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Ready to move                       </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandlePossion('Within 6 month')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, Possession === 'Within 6 month' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
                Within 6 month
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandlePossion('Within 1 year')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, Possession === 'Within 1 year ' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Within 1 year
            </Text>
        </TouchableOpacity>





    </View>

</View>


<View>
    <Text style={styles.TopHeading}>Parking Choice</Text>

    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => handleParking('Yes')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, parking === 'Yes' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Yes                      </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => handleParking('No')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, parking === 'No' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
                No
            </Text>
        </TouchableOpacity>

     





    </View>

</View>



<View>
    <Text style={styles.TopHeading}>Investment Purpose</Text>

    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleInvesment('Self Use')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, investment === 'Self Use' && styles.SelectedView]}
            />
            <Text
                style={{
                    fontSize: 13,
                    color: Colors.CommonColor,
                    fontFamily: Fonts.OpenSans400
                }}
            >
                Self Use                    </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleInvesment('Commercial Use')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, investment === 'Commercial Use' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
               Commercial Use
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleInvesment('Investment')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, investment === 'Investment' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
            Investment
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.contentWrap}
            onPress={() => HandleInvesment('Rental Source')}
        >
            <TouchableOpacity
                style={[styles.EmptyView, investment === 'Rental Source' && styles.SelectedView]}
            />
            <Text style={{
                fontSize: 13,
                color: Colors.CommonColor,
                fontFamily: Fonts.OpenSans400
            }}
            >
            Rental Source
            </Text>
        </TouchableOpacity>





    </View>

</View>
<Text style={styles.FieldHeading}>Remarks</Text>

<Textarea
containerStyle={styles.textareaContainer}
style={styles.textarea}
onChangeText={handleTextareaChange}
defaultValue={textareatext}
maxLength={120}
placeholder={'Enter your remarks here'}
placeholderTextColor={'#c7c7c7'}
underlineColorAndroid={'transparent'}
/>

<TouchableOpacity style={styles.LoginButton} onPress={()=>{
handleSubmitUser
// navigation.navigate("Commonscreen")
}}>
<Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save Lead</Text>
</TouchableOpacity>

</View>
<View>
</View>


                
                
            </ScrollView>
        </View>

    )
}

export default AddLeads

const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;
const styles = StyleSheet.create({
    form_container: {
        marginHorizontal: 15,
    },
    unitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: 'gray',
    },
    header_text: {
        color: Colors.CommonColor,
        fontSize: 14,
        fontWeight: 'bold',
    },
    FieldHeading: {
        fontSize: fontSize,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 20,
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
    Inputcontainer1: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical:  Platform.OS === "ios"?20:5,
    },
    text_91: {
        borderRightWidth: 1,
        paddingRight: 10,
        borderRightColor: 'rgba(0, 0, 0, 0.25)',
        color: 'rgba(0, 0, 0, 0.25)',
    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '93%',
        marginLeft: 10,
    },
    InputStyle1: {
        backgroundColor: '#fff',
        borderColor: '#D6D6D6',
        borderWidth: .5,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 14,
        width: '48%',
    },
    scheduleDate_text: { color: ' rgba(0, 0, 0, 0.25)' },
    calendarContainer: {
        width: '97%',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    rbSheetInner__container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    RBheading__container: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 5,
    },
    RBSheet_heading: { color: Colors.CommonColor, fontSize: 24 },

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
        paddingHorizontal: 20,
        flex: 1,
    },
    paymentType__container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        elevation: 10,
    },
    paymenttype_Text: {
        borderBottomWidth: 1,
        flex: 1 / 2,
        fontSize: 14,
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
        bottom: 0,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 5,
    },
    btnText: {
        color: Colors.CommonColor,
        fontSize: 14,
        fontWeight: 'bold',
    },
    textareaContainer: {
        height: height / 7,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D6D6D6', marginVertical: 20
    },
    textarea: {
        textAlignVertical: 'top',
        height: height / 8,
        fontSize: 14,
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans400

    },
    TopHeading: {
        fontSize: 15,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 15
    },
    LoginButton: {
        backgroundColor: Colors.MainColor,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        borderRadius: 5,
        elevation: 3,
        marginBottom: 20
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
        paddingHorizontal: 10
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.50)'

    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    contentWrap: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 20,
        width: '25%',

    },
    EmptyView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginRight: 10,
    },
    Filledview: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.AvailableFlat
    },
    SelectedView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        color: Colors.AvailableFlat,
        backgroundColor: Colors.AvailableFlat,
        marginRight: 10,
    },
    Placeholder: {
        fontSize: 8
    },
    LoginButton: {
        backgroundColor: Colors.MainColor,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        borderRadius: 5,
        elevation: 3,
        marginBottom:20
      },
})
