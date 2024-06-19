import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  export default function LongIn() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState({});
    //use navigation to be able to navigate and pass params
    const navigation = useNavigation();
  
    const validate = () => {
      //the validation function checks the form inputs if any of them are being violated
      const newErrors = {};
      //check if name is empty
      if (!name) newErrors = "Please enter your name";
      //check if email is empty
      if (!email) newErrors = "Please enter your email";
      //check if email is valid
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
        newErrors = "Please enter a valid email";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = () => {
      if (validate()) {
        navigation.navigate("Home", { name, email });
        console.log("Form Submitted");
      }
    };
  
    return (
      <SafeAreaView style={style.container}>
        <View style={style.main}>
          <View style={style.JobizzContainer}>
            <Text style={style.Jobizz}>Jobizz</Text>
            <View>
              <Text style={style.welcomeText}>Welcome Back 👋</Text>
              <Text style={style.subText}>Let's Log in. Apply to jobs!</Text>
            </View>
          </View>
  
          <View style={style.logInForm}>
            <View style={style.input}>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={style.nameInput}
              />
              {errors.name && <Text style={style.error}>{errors.name}</Text>}
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={style.emailInput}
              />
              {errors.email && <Text style={style.error}>{errors.email}</Text>}
            </View>
  
            <TouchableOpacity style={style.logInButton} onPress={handleSubmit}>
              <Text style={style.logInText}>Log in</Text>
            </TouchableOpacity>
          </View>
  
          <View style={style.clip}>
            <View style={style.hr} />
            <Text style={style.option}>Or Continue with</Text>
            <View style={style.hr} />
          </View>
  
          <View style={style.section5}>
            <View style={style.subSection5}>
              <Image
                style={style.logo}
                source={require("../assets/icons8-apple-500.png")}
              />
              <Image
                style={style.logo}
                source={require("../assets/icons8-google-480.png")}
              />
              <Image
                style={style.logo}
                source={require("../assets/icons8-facebook-500.png")}
              />
            </View>
          </View>
  
          <View style={style.question}>
            <Text>
              Don't have an account?{" "}
              <Text style={style.resgister}> Register</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FAFAFD",
    },
    main: {
      flex: 1,
      padding: 20,
      gap: 10,
    },
  
    Jobizz: {
      fontSize: 22,
      fontWeight: "600",
      lineHeight: 33,
      color: "#356899",
      marginBottom: 5,
    },
  
    welcomeText: {
      fontSize: 24,
      fontWeight: "600",
      lineHeight: 33.6,
      color: "#0D0D26",
    },
  
    subText: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 22.4,
      color: "#0D0D26",
      opacity: 0.5,
    },
  
    logInForm: {
      gap: 25,
      marginTop: 50,
    },
  
    logInText: {
      color: "white",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 24.8,
    },
  
    input: {
      gap: 20,
    },
  
    nameInput: {
      height: 52,
      borderColor: "#AFB0B6",
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
    },
    emailInput: {
      height: 52,
      borderColor: "#AFB0B6",
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
    },
    error: {
      color: "red",
      marginBottom: 10,
    },
    logInButton: {
      backgroundColor: "#356899",
      height: 52,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      borderWidth: 0,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
  
    section5: {
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      height: 208,
    },
  
    subSection5: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      gap: 50,
      width: 300,
      padding: 10,
    },
  
    logo: {
      width: 48,
      height: 48,
    },
  
    clip: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 15,
      marginTop: 50,
    },
  
    hr: {
      height: 0.5,
      width: 90,
      backgroundColor: "#AFB0B6",
    },
  
    option: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 22.4,
      color: "#0D0D26",
      opacity: 0.5,
    },
  
    question: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      marginBottom: 20,
      opacity: 0.5,
    },
  
    resgister: {
      color: "#356899",
      fontWeight: "500",
      lineHeight: 22.4,
    },
  });
  