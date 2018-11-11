import React, { Component} from "react";
import {Field, reduxForm} from "redux-form";
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Button,Image,} from 'react-native';
import PhotoUpload from "react-native-photo-upload";

  
const NewPostComponent=props =>{
    const { handleSubmit} =props;
    return(
        <View style={{ flex:1, flexDirection:"column",margin:40, justifyContent:"flex-start"}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>New Post</Text>
       
        <TextInput 
            style={{ height:40, borderColor:"gray", borderWidth:1,  width:"95%",marginBottom:20 }}
            
            placeholder="Enter the Title please::"
           />
        <TextInput 
            style={{ height:80, borderColor:"gray", borderWidth:1,  width:"95%",marginBottom:20 }}
            
            placeholder="Enter the Description please:"
           />
        <TextInput 
            style={{ height:40, borderColor:"gray", borderWidth:1,  width:"95%",marginBottom:20 }}
            
            placeholder="Enter the Price you want to sell:"
           />
           <PhotoUpload
            onPhotoSelect={avatar => {
                 if (avatar) {
                console.log('Image base64 string: ', avatar)
                 }
            }}
            >
        <Image
             style={{
             paddingVertical: 30,
             width: 150,
             height: 150,
             borderRadius: 75
             }}
             resizeMode='cover'
            source={{
        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
         }}
            />
    </PhotoUpload>

         <Text 
            style={{
                    backgroundColor: "white", color:"green", fontSize:18,
                    borderRadius: 100/2,
                    textAlign:"center", padding:10
            }}>Add Photo</Text>

        <TouchableOpacity onPress={handleSubmit} style={{ margin:10, alignItems:"center"}} >
            <Text style={{
                backgroundColor: "steelblue", color:"white", fontSize:16,
                height:37, width:200, textAlign:"center", padding:10
            }}>Submit</Text>

        </TouchableOpacity>
        </View>
    );
}
const NewPost = reduxForm({
    form: 'post', // a unique identifier for this form
})(NewPostComponent);

export default NewPost;
