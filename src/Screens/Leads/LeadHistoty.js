import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CommonHeards from '../Common/CommonHeards'
import Colors from '../../../assets/colors'
import Fonts from '../../../assets/fonts'



const history = [
    {
        date: '20/03/2023',
        headers: "done by Chetan Chavan",
        status: 'Contact initiated via WhastApp'
    },
    {
        date: '24/03/2023',
        headers: "done by Chetan Chavan",
        leadStatus: 'Lead status updated New ---> Pending',
        status: 'Contact initiated via WhastApp'
    },
    {
        date: '26/03/2023',
        headers: "done by Chetan Chavan",
        leadStatus: 'Lead status updated New ---> Pending',
        status: ''
    },
    {
        date: '28/03/2023',
        headers: "done by Chetan Chavan",
        updatestatus: 'Upper Budget Added --> 200000 lacs',
        leadStatus: 'Lead status updated New ---> Pending',

    },
    {
        date: '26/03/2023',
        headers: "done by Chetan Chavan",
        status: 'Lead status updated New ---> Pending'
    },
    {
        date: '26/03/2023',
    },
]
const LeadHistoty = () => {
    return (
        <View>
            <CommonHeards title={"Lead History"} />
            <ScrollView style={{ marginVertical: 30 }}>
                {
                    history.map((item, index) => {
                        return (
                            <View style={{ flexDirection: 'row', marginHorizontal: 20 }} key={index}>
                                <View style={{ width: '25%' }}>
                                    <Text>{item.date}</Text>
                                </View>
                                <View style={{ width: '60%' }}>
                                    <View style={styles.Bigemptyview} />
                                    <View style={[styles.DashlineView, { height: 35, }]} />
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>

                                            <View style={styles.smallEmptyview} />
                                            <View style={[styles.DashlineView, { height: 50, }]} />
                                        </View>
                                        <View>

                                            <Text>{item.headers}</Text>
                                            <View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, }}>
                                                    <View style={styles.smallEmptyview1} />
                                                    <Text style={{ fontSize: 13 }}>{item.leadStatus}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                    <View style={styles.smallEmptyview1} />
                                                    <Text style={{ fontSize: 13 }}>{item.updatestatus}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </View>



                                </View>

                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default LeadHistoty
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginVertical: 20,

    },
    DateContainer: {
        // width: '30%',
        // alignItems: 'center'
    },
    Datewrap: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    ProgressLinecontainer: {
        // alignItems: 'center'
        alignItems: 'flex-end'
    },
    Bigemptyview: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.MainColor
    },
    DashlineView: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        width: 1,

        borderStyle: 'dashed',
        marginLeft: 20,
        // backgroundColor: '#D9D9D9',
        marginBottom: 5
    },
    smallEmptyview: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#1FAF38",
        marginLeft: 10,
        marginRight: 10

    },
    smallEmptyview1: {
        width: 10,
        height: 10,
        borderRadius: 5,

        backgroundColor: "grey",
        marginRight: 10,
        // marginTop:10

    },
    contentTextwrap: {
        flexDirection: 'row',
        // justifyContent:'flex-end'

    },
    contentText: {
        color: Colors.AvailableFlat,
        fontFamily: Fonts.Poppins500
    }
})