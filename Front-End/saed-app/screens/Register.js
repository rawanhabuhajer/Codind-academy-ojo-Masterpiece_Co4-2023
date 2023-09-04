import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native"

import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import InputField from "../components/InputField";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
   

      {/* Main content */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 60, height: 70 }}
            source={require("../assets/icon/logo.png")}
          />
          <Image
            style={{ width: 80, height: 18, marginTop: 15 }}
            source={require("../assets/icon/Saed.png")}
          />
        </View>

        {/* Form for registration */}
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            {/* Title */}
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Start your journey with best service
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
            {/* Input field for name */}

            <InputField
              value={name}
              onChangeText={setName}
              placeholder={"Enter your Name"}
              user={"user"}
            />
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder={"Enter your Email"}
              user={"email"}
            />
            <InputField
              value={password}
              onChangeText={setPassword}
              placeholder={"Confirm Password"}
              user={"lock"}
            />
            <InputField
              value={password}
              onChangeText={setPassword}
              placeholder={"Enter your Password"}
              user={"lock"}
            />
          </View>
          <View style={{ maxWidth: "80%" }}>
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {errorMessage}
            </Text>
          </View>
          {/* Register button */}

          <View
            style={{
              marginTop: 25,
            }}
          >
            <Button title="Register" colors={["#FF5F6D", "#FFC371"]} />
          </View>

          {/* Link to Sign In */}
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
              Already have an account?
            </Text>
            <Text
              style={{ textAlign: "center", color: "#2DBCCF", fontSize: 14 }}
            >
              {" "}
              Login here!
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Register;
