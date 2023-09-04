import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import { Ionicons , MaterialCommunityIcons , FontAwesome , AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";
const ExpertProfile = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#F9FEFF",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <ImageBackground
            source={require("../assets/img/userBg.png")}
            style={{
              width: 200,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Image
              source={require("../assets/img/user.png")}
              style={{
                width: 165,
                height: 165,
                resizeMode: "contain",
              }}
            />
          </ImageBackground>
        </View>
      </View>

      <View
        style={{
          
          backgroundColor: "white",
          marginTop: 25,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 25,
          elevation: 5,
          paddingBottom:50
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 15,
            gap:15
          }}
        >
          <View
            style={{
              borderBottomColor: "#95F3FF",
              borderBottomWidth: 4,
              width: "20%",
              borderRadius: 15,
            }}
          ></View>
          <Text>Expert name</Text>
        </View>

        <Text
        style={{
          width:"85%",
          marginLeft:15,
          fontSize:16,
          fontWeight:500,
          marginTop:15
        }}
        >About</Text>
        <Text
        style={{
          width:"85%",
          marginLeft:15,
          fontSize:12,
          marginTop:15
        }}
        >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
         praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
         excepturi sint occaecati cupiditate non provident</Text>

         <View style={{
           display: "flex",
           flexDirection:"row",
           justifyContent: "center",
           alignItems: "center",
           gap:10,
           flexWrap:"wrap",
           marginTop:35
         }}>

         
         <Pressable
            style={{
             paddingHorizontal:20,
             paddingVertical:20,
              backgroundColor: "#EDFFF3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap:"wrap",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
           
            <Text style={{ fontWeight: 500 }}>Reviews</Text>
            <View 
            style={{
              display: "flex",
              flexDirection:"row",
              justifyContent: "center",
              alignItems: "center",
              gap:10
            }}
            >
            <AntDesign name="star" size={24} color="#FFDC64" />
            <Text style={{ fontWeight: 400 }}>4.8</Text>
            </View>
            </Pressable>
         
         <Pressable
            style={{
             paddingHorizontal:20,
             paddingVertical:20,
              backgroundColor: "#FFF5ED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap:"wrap",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
           
            <Text style={{ fontWeight: 500 }}>Jobs Done</Text>
            <View 
            style={{
              display: "flex",
              flexDirection:"row",
              justifyContent: "center",
              alignItems: "center",
              gap:10
            }}
            >
            
            <Text style={{ fontWeight: 400 }}>24</Text>
            </View>
            </Pressable>
         
         <Pressable
            style={{
             paddingHorizontal:20,
             paddingVertical:20,
              backgroundColor: "#F1F0FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap:"wrap",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
           
            <Text style={{ fontWeight: 500 }}>Experience</Text>
            <View 
            style={{
              display: "flex",
              flexDirection:"row",
              justifyContent: "center",
              alignItems: "center",
              gap:10
            }}
            >
           
            <Text style={{ fontWeight: 400 }}>4 years</Text>
            </View>
            </Pressable>
       
            </View>
            <Text
            style={{
              width:"85%",
              marginLeft:15,
              fontSize:16,
              fontWeight:500,
              marginTop:35}}
            >
              Specialiest
            </Text>

            <View 
            style={{
              display: "flex",
              flexDirection:"row",
              gap:35,
              alignItems: "center",
              justifyContent:"center",
              marginTop:25
            }}
            >
              <Pressable 
              style={{
                display: "flex",
                gap:10,
                alignItems: "center",
                justifyContent:"center",
              }}
              >
                <Image 
                source={require('../assets/icon/laundry.png')}
                
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                />
                <Text  style={{ fontSize:12}}>laundary</Text>
              </Pressable>
              <Pressable
               style={{
                display: "flex",
                gap:10,
                alignItems: "center",
                justifyContent:"center",
              }}
              >
                <Image 
                source={require('../assets/icon/deepcleaning.png')}
                
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                />
                <Text  style={{ fontSize:12}}>deep cleaning</Text>
              </Pressable>
              <Pressable
               style={{
                display: "flex",
                gap:10,
                alignItems: "center",
                justifyContent:"center",
              }}
              >
                <Image 
                source={require('../assets/icon/cabins.png')}
                
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                />
                <Text 
                style={{ fontSize:12}}
                >Cabinets</Text>
              </Pressable>
              
            </View>
            <View 
            style={{
              marginTop:45
            }}>

                <Button 
                title={"Book now"}
                />
            </View>
      </View>
      
    </ScrollView>
  );
};

export default ExpertProfile;
