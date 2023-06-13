import * as React from 'react'
import {View, Text,StyleSheet} from 'react-native';

function Header() {
    return (
        <View style={styles.view}>
            <Text style={styles.headerText}>Little Lemon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText:{
        padding:20,
        fontSize:30,
        color:'black',
       
    },
     view:{
        flex:0.19,
        backgroundColor:'#EE9972',
        alignItems:'center',
        justifyContent:'center',
     }  

})

export default Header;