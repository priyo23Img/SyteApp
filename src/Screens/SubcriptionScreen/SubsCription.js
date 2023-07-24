import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../assets/colors'
import Fonts from '../../../assets/fonts'
import CheckIcon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const SubsCription = () => {
    const navigation = useNavigation()
    const [isSelect, setIsSelect] = useState(false)
    return (
    <ScrollView style={styles.SubsWrap}>

            <View>

                <Image
                    source={require('../../../assets/images/Bulding.png')}
                    style={styles.TopBgimage}
                    resizeMode='contain'
                />
                <View style={{ position: 'absolute', top: '40%', marginHorizontal: 20 }}>
                    <Text style={styles.ImageText}>Unlock Premium</Text>
                    <Text style={styles.ImagesubText}>Get Full Access to add multiple projects and more!</Text>
                </View>

                <TouchableOpacity style={styles.SubButton}
                    onPress={() => setIsSelect(false)}
                >
                    <View style={styles.CheckBack}>
                        {!isSelect ? <CheckIcon name='check' style={{ color: 'black', fontSize: 15 }} /> : null}
                    </View>
                    <Text style={styles.SubButtonText}>3 MONTHS FREE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.SubButton, { marginTop: 30 }]}
                    onPress={() => setIsSelect(true)}
                >
                    <View style={styles.CheckBack}>
                        {isSelect ? <CheckIcon name='check' style={{ color: 'black', fontSize: 15 }} /> : null}
                    </View>
                    <Text style={styles.SubButtonText}>YEARLY xxxRS/year</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.SecondButton}
                onPress={()=>navigation.navigate('Projectpage')}
                >
                    <Text style={{ fontFamily: Fonts.Inter600, color: Colors.CommonColor, fontSize: 12 }}>Start My Free Trail Now</Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: Fonts.Inter600, color: Colors.CommonColor, fontSize: 15, textAlign: 'center', marginVertical: 20 }}>Not Now</Text>
                <Text style={{ fontFamily: Fonts.Inter600, color: Colors.CommonColor, fontSize: 10, textAlign: 'center', marginHorizontal: 10 }}>Terms and conditions apply. Subscriptions will be charged via your  account. Terms of Use and Privacy Policy.</Text>
            </View>

            </ScrollView>

    )
}

export default SubsCription
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    SubsWrap: {
        backgroundColor: '#fff',
        flex: 1
    },
    TopBgimage: {
        width: '100%',
        height: height/2

    },
    ImageText: {
        color: Colors.CommonColor,
        fontSize: 30,
        fontFamily: Fonts.Montserrat700,
        lineHeight: 40

    },
    ImagesubText: {
        fontSize: 15,
        color: Colors.CommonColor,
        width: '78%',

    },
    SubButton: {
        marginHorizontal: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Colors.MainColor,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        borderWidth: 3,

    },
    SubButtonText: {
        color: Colors.CommonColor,
        fontSize: 15,
        fontFamily: Fonts.Montserrat700
    },
    SecondButton: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.MainColor,
        width: '65%',
        marginHorizontal: 70,
        marginTop: 40,
        borderRadius: 5,
        elevation: 5
    },
    CheckBack: {
        width: 25,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.CommonColor,
        borderWidth: 1,
        marginRight: 10
    }
})