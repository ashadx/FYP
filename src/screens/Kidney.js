import { View, Text , StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'

import { TextInput , Button } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'

const Kidney = () => {
  return (
    <LinearGradient colors={['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff', '#7CCFD9' ,'#0F8F9F']} style={styles.cont}>
        <ScrollView>
        <View style={styles.Logo}>
        <Image style={{height:80,width:80}} source={require('/Users/Asad Aslam/Desktop/React Native/NewProject/src/assets/img/logo.png')}/>
        </View>
        <Text style={styles.docText}>DIABETES</Text>
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'column', alignItems:'center'}}>
                <Text style={styles.txt}>Test Name</Text>
                <Text style={styles.Subtxt}>Blood Urea</Text>
                <Text style={styles.Subtxt}>Creatinine</Text>
                <Text style={styles.Subtxt}>Uric Acid</Text>
                <Text style={styles.Subtxt}>Sodium</Text>
                <Text style={styles.Subtxt}>Potassium</Text>
                <Text style={styles.Subtxt}>Chloride</Text>
                <Text style={styles.Subtxt}>Total Protien</Text>
            </View>
            <View style={{flex:1,flexDirection:'column', alignItems:'center'}}>
                <Text style={styles.txt}>LR</Text>
                <Text style={styles.Subtxt}>10</Text>
                <Text style={styles.Subtxt}>0.6</Text>
                <Text style={styles.Subtxt}>2.4</Text>
                <Text style={styles.Subtxt}>135</Text>
                <Text style={styles.Subtxt}>3.5</Text>
                <Text style={styles.Subtxt}>98</Text>
                <Text style={styles.Subtxt}>6</Text>
            </View>
            <View style={{flex:1,flexDirection:'column', alignItems:'center'}}>
                <Text style={styles.txt}>Result</Text>
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
                <TextInput 
                outlineColor='#0F8F9F'
                activeOutlineColor='#0F8F9F'
                mode='outlined' 
                style={styles.txtinp}
                />
            </View>
            <View style={{flex:1,flexDirection:'column', alignItems:'center'}}>
                <Text style={styles.txt}>HR</Text>
                <Text style={styles.Subtxt}>50</Text>
                <Text style={styles.Subtxt}>1.3</Text>
                <Text style={styles.Subtxt}>7.0</Text>
                <Text style={styles.Subtxt}>145</Text>
                <Text style={styles.Subtxt}>5.1</Text>
                <Text style={styles.Subtxt}>106</Text>
                <Text style={styles.Subtxt}>8.3</Text>
            </View>
            <View style={{flex:1,flexDirection:'column', alignItems:'center'}}>
                <Text style={styles.txt}>Unit</Text>
                <Text style={styles.Subtxt}>mg/dL</Text>
                <Text style={styles.Subtxt}>mg/dL</Text>
                <Text style={styles.Subtxt}>mg/dL</Text>
                <Text style={styles.Subtxt}>mmol/L</Text>
                <Text style={styles.Subtxt}>mmol/L</Text>
                <Text style={styles.Subtxt}>mmol/L</Text>
                <Text style={styles.Subtxt}>g/dL</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row', marginTop:40,marginBottom:20,marginLeft:16,marginRight:16}}>
            <View style={{flex:0,flexDirection:'column',marginRight:10}}>
            <Button  
             labelStyle={{fontSize:9}}
            buttonColor='#0F8F9F' 
            icon="file-import-outline" 
            mode="contained" 
            onPress={() => console.log('Pressed')}
            >
                Import From PDF
            </Button>
            </View>
            <View style={{flex:0,flexDirection:'column',marginLeft:10}}>
            <Button 
            labelStyle={{fontSize:9}}
            buttonColor='#0F8F9F' 
            icon="file-image" 
            mode="contained"
            onPress={() => console.log('Pressed')}>
                Import From Image
            </Button>
            </View>
        </View>
        <View style={{margin:10}}>
            <Button buttonColor='#0F8F9F' icon="database-export-outline" mode="contained" onPress={() => console.log('Pressed')}>
                SAVE
            </Button>
        </View>
        </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    cont:{
        height:'100%',
        padding:20,
        
    },
    Logo:{
        alignItems:'flex-end'
    },
    doc:{
        alignItems:'center',
        marginBottom:-200
    },
    docText:{
        fontSize:15,
        fontWeight: 'bold',
        color:'#0F8F9F',
        fontSize:30,
        textAlign:'left',
        padding:20,
        paddingTop:40
    },
    txt:{
        color:'black',
        fontSize:13,
        fontWeight:'bold',
        marginBottom:20
    },
    Subtxt:{
        color:'#0F8F9F',
        fontSize:13,
        fontWeight:'500',
        marginBottom:23,
        marginTop:25
    },
    txtinp:{
        backgroundColor:'#EFEFEF', 
        borderTopRightRadius:10, 
        borderTopLeftRadius:10,
        width:60,
        marginBottom:10

    },
})

export default Kidney