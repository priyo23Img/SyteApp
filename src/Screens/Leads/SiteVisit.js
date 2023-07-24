import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeards from '../Common/CommonHeards'
import Colors from '../../../assets/colors'
import Fonts from '../../../assets/fonts'
import Icons from 'react-native-vector-icons/FontAwesome'
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Flow from 'react-native-vector-icons/Entypo'
import CommonScreen from './innerScreens/CommonScreen'
const SiteVisit = () => {
    return (
        <>
        <CommonScreen />
        </>
//         <View style={{ flex: 1, backgroundColor: '#fff' }}>
//             <CommonHeards title={"Site Visit"} />
//             <View style={styles.TopContainerwrap}>

//                 <View style={styles.TopContantwrap}>
//                     <View style={{ width: '65%', marginLeft: 20 }}>
//                         <Text style={styles.ContentText}>Lead Name</Text>
//                         <Text style={styles.ContentText}>project Name</Text>
//                         <Text style={[styles.ContentText, { color: '#D6D6D6' }]}>july 04,2023 | 12.00pm</Text>
//                     </View>
//                     <View style={{ alignItems: 'center' }}>
//                         <View style={styles.Hotleadimageback}>
//                             <Image source={require('../../../assets/images/Hotlead.png')} style={styles.Hotleadimage} />
//                         </View>
//                         <Text style={{ color: Colors.CommonColor, fontFamily: Fonts.Poppins500, fontSize: 15 }}>Hot Lead</Text>
//                     </View>
//                 </View>

//                 <View style={styles.TopContantBottomWrap}>
//                     <View style={styles.IconsBack}>

//                         <Icons name='phone' style={styles.Icons} />
//                     </View>
//                     <View style={styles.IconsBack}>

//                         <Icons name='whatsapp' style={styles.Icons} />
//                     </View>
//                     <View style={styles.IconsBack}>

//                         <MessageIcon name='message-processing-outline' style={styles.Icons} />
//                     </View>
//                     <View style={styles.IconsBack}>

//                         <MessageIcon name='email' style={styles.Icons} />
//                     </View>
//                     <View style={styles.IconsBack}>

//                         <MessageIcon name='pencil-outline' style={styles.Icons} />
//                     </View>

//                 </View>
//             </View>
//             <View style={styles.ButtonsWrap}>
//                 <TouchableOpacity style={styles.Buttons}>
//                     <Flow name='flow-line' style={styles.Icons} />
//                     <Text style={styles.LeadText}>Lead History</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.Buttons}>
//                     <Flow name='info-with-circle' style={[styles.Icons,{marginRight:15}]} />
//                     <Text  style={styles.LeadText}>More Info</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={{  borderBottomColor:'#D6D6D6',
//         borderBottomWidth:1}}>
//                 <View style={styles.Bodycontent}>
//                     <Flow  name='circular-graph' style={styles.BodyIcons}/>
//                     <Text style={styles.LeadStatus}>Lead Status</Text>
//                 </View>
//                 <View style={styles.Bodycontent}>
//                     <Flow  name='location-pin' style={styles.BodyIcons}/>
//                     <Text style={[styles.LeadStatus,{fontFamily:Fonts.OpenSans400}]}>Site Visit</Text>
//                 </View>
//                 <View style={styles.Bodycontent}>
//                     <Flow  name='clock' style={styles.BodyIcons}/>
//                     <Text style={[styles.LeadStatus,{fontFamily:Fonts.OpenSans400}]}>Wednesday| July 07,2023 | 12:00pm</Text>
//                 </View>
//             </View>


// <View style ={styles.BottomButton}>
//     <TouchableOpacity style={[styles.BottomButtons]}><Text style={styles.LeadText}>Booked</Text></TouchableOpacity>
//     <TouchableOpacity style={styles.BottomButtons}><Text style={styles.LeadText}>Follow-Up</Text></TouchableOpacity>
//     <TouchableOpacity style={styles.BottomButtons}><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
//     <TouchableOpacity style={styles.BottomButtons}><Text style={styles.LeadText}>Re-scheduled</Text></TouchableOpacity>

// </View>
//         </View>
    )
}

export default SiteVisit

const styles = StyleSheet.create({
    Hotleadimage: {
        width: 70,
        height: 70
    },
    Hotleadimageback: {
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70
    },
    TopContantwrap: {
        flexDirection: 'row',

    },
    ContentText: {
        lineHeight: 35,
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins500,
        fontSize: 15
    },
    TopContainerwrap: {
        paddingVertical: 30,
        height: 'auto',
        borderBottomColor: '#D6D6D6',
        borderWidth: 1,
    },
    Icons: {
        color: '#000000',
        fontSize: 22,

    },
    IconsBack: {
        backgroundColor: Colors.MainColor,
        width: 35,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TopContantBottomWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20
    },
    Buttons: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Colors.MainColor,
        flexDirection: 'row',
        borderRadius: 5,
        // justifyContent:'space-between'

    },
    ButtonsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginVertical: 20,
        // marginHorizontal: 20
        paddingHorizontal:20,
        paddingVertical:20,
        borderBottomColor:'#D6D6D6',
        borderBottomWidth:1
    },
    LeadText: {
        color: '#000000',
        fontFamily: Fonts.OpenSans400
    },
    LeadStatus:{
        fontSize:17,
        color:Colors.CommonColor,
        fontFamily:Fonts.OpenSans600
    },
    Bodycontent:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:20,
      
    },
    BodyIcons:{
        color:'black',
        fontSize:25,
        marginRight:10
    },
    BottomButton:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',marginHorizontal:20,
        marginVertical:30
    },
    BottomButtons:{
        width:'40%',
        backgroundColor:Colors.MainColor,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        marginBottom:30,
        borderRadius:5
    }
})