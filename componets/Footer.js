import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

function Footer() {
    return (
    <View style={styles.footerView}>
        <Text style={styles.footerText}>
            All right reserved by little lemmon, 2022
        </Text>
    </View>
    );
}
const styles = StyleSheet.create({
    footerText:{
        fontWeight:'bold',
       
    },
    footerView:{
        backgroundColor:'#EE9972',
        flex:0.05,
        top:610,
        // bottom:-650,//same thing
        alignItems:'center',
        justifyContent:'center'
       
    }
})

export default Footer;