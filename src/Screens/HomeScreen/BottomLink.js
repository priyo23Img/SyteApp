import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Fonts from '../../../assets/fonts'
import Colors from '../../../assets/colors'
import FileIcon from 'react-native-vector-icons/AntDesign'
import Photoicon from 'react-native-vector-icons/FontAwesome'
import PersonBooth from 'react-native-vector-icons/FontAwesome5'

import Graphbar from 'react-native-vector-icons/Foundation'

const BottomLink = ({ navigation }) => {
    return (
        <View style={{ marginHorizontal: 20, }}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.BottomWrap, styles.shadowProp]}
                    onPress={() => navigation.navigate('Material')}
                >

                    <PersonBooth name='person-booth' style={styles.Icons} />
                    <Text style={styles.Text}>Material History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.BottomWrap, { paddingTop: 15 }]}
                    onPress={() => navigation.navigate('Document')}

                >
                    <FileIcon name='filetext1' style={styles.Icons} />
                    <Text style={[styles.Text, { paddingTop: 10 }]}>Document</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.BottomWrap, { paddingTop: 15 }]}
                    onPress={() => navigation.navigate('Photos')}

                >
                    <Photoicon name='photo' style={styles.Icons} />
                    <Text style={[styles.Text, { paddingTop: 10 }]}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.BottomWrap, { paddingTop: 15 }]}
                    onPress={() => navigation.navigate('Salesmain')}

                >
                    <Graphbar name='graph-bar' style={styles.Icons} />
                    <Text style={[styles.Text, { paddingTop: 10 }]}>Sales</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BottomLink

const styles = StyleSheet.create({
    Image: {
        width: 30,
        height: 30
    },
    Text: {
        fontFamily: Fonts.Arial700,
        color: '#1f1f1f',
        fontSize: 12,

    },
    BottomWrap: {
        width: '20%',
        // backgroundColor: 'rgba(255, 223, 22, 0.1)',
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 5,

        // borderLeftColor:"#D6D6D6",
        // borderLeftWidth:.5,
        borderColor: "black",
        borderWidth: .8,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        paddingHorizontal: 8,
        paddingVertical: 8,
        height: 80,

    },
    Icons: {
        fontSize: 30,
        color: '#1f1f1f'
    }

})