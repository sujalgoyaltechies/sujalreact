import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default Splash1 = ({navigation}) => {
    const handleclick = () => {
        navigation.navigate('2');
    }

    const handlesignin = ()=>{
        navigation.navigate('Signin');

    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Image style={{width:270,height:270,alignSelf:"center",marginVertical:40, borderRadius:150}} source={require("../../images/splash1.png")} />
                    <View style={{backgroundColor:"#f2ecec", height:350,width:"100%",borderRadius:30, flexDirection:"column", padding:10}}>
                        <Text style={{color:"#000", fontSize:25,fontWeight:"900", textAlign:"center", marginTop:30}}>Discover The Right{"\n"}<Text style={{color:"#6739FF"}}>Yoga</Text> & <Text style={{color:"#6739FF"}}>Sports Club</Text></Text>
                        <Text style={{textAlign:"center", fontSize:11,marginTop:6}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dapibus enim. Pellentesque lectus lectus, porttitor eu tellus ut, dapibus tincidunt arcu.</Text>
                        <TouchableOpacity onPress={handleclick}>
                            <View style={styles.StartBtn}>
                                <Text style={styles.BtnText}>Let's Get Started</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.signupContainer}>
                            <Text style={{textAlign:"center", fontSize:14,color:"#000", fontWeight:"500"}}>Already have an account?</Text>
                            <TouchableOpacity onPress={handlesignin}>
                                <Text style={{fontSize:14,color:"#6739FF", fontWeight:"500", marginLeft: 5}}> Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    StartBtn: {
        width: "98%",
        height: 60,
        backgroundColor: "#6739FF",
        alignSelf: "center",
        marginTop: 30,
        margin: 10,
        borderRadius: 100,
        justifyContent: 'center'
    },
    BtnText: {
        fontSize: 22,
        color: "#ffffff",
        textAlign: "center",
        fontWeight:"600"
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    }
})
