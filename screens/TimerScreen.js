import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
TouchableOpacity,
ImageBackground,
Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class TimerScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          disable:false,
          timer:"",
        }
    }
    
   /* timeNowfive =()=>{
       var i = 300;
       var funcNameHere = function(){
        if (i == 0) clearInterval(this);
        else console.log((i--));
    };
    setInterval(funcNameHere, 1000);
    funcNameHere();
    }

    timeNowTen =()=>{
      var i = 600;
      var funcNameHere = function(){
       if (i == 0) clearInterval(this);
       else console.log((i--));
   };
   setInterval(funcNameHere, 1000);
   funcNameHere();
   }

   timeNowThirty =()=>{
    var i = 1800;
    var funcNameHere = function(){
     if (i == 0) clearInterval(this);
     else console.log((i--));
 };
   setInterval(funcNameHere, 1000);
   funcNameHere();
 }*/

 timerCount =()=>{
  var time=this.state.timer
  time*60-1
 }
  componentDidUpdate(){
  setInterval(this.timerCount,1000)
 }
    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding dong</Text>
               </View>
               <View style={styles.background}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.BackgroundImage}/>
               </View>
               <View style={styles.timerContainer}>
                  <Text style={styles.timer}>TIMER</Text>
               </View>
               <View style={styles.timerContainer2}>
                  <Text style={styles.timer2}>Kindly enter your required time in minutes:</Text>
               </View>
               <View style={styles.buttonContainer}>
                  <TextInput
                    style={styles.button}
                    keyboardType="numeric"
                    onChangeText={text=>{
                      this.setState({timer:text})
                      this.timerCount()
                    }}
                  />
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  appLogo:{
    right:10,
    left:30,
    top:10,
    bottom:10
 },

 logo:{
    height:200,
    width:100,
    right:700,
 },

 textContainer:{
    height:200,
    width:500,
    right:350,
    bottom:141,
 },

 text:{  
    color: "black",
   fontSize: 50,
   fontStyle:'italic',
 },

 timerContainer:{
   bottom:241,
   right:5,
 },

 timerContainer2:{
  bottom:231,
  right:5,
},

 timer:{
   fontSize:40,
   color:"black",
   fontStyle:"italic",
 },

 buttonContainer:{
   bottom:200
  },

  buttonText:{
   fontSize: 30,
   fontStyle:'italic',
   justifyContent:"center",
   alignItems:"center",
},

 button:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 50,
   width: 300,
   height: 100,
   backgroundColor: '#999999',
   alignItems:"center"
 },

 timer2:{
  fontSize:30,
  color:"black",
  fontStyle:"italic",
},

})