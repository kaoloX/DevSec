import React, { useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity,KeyboardAvoidingView } from "react-native";
import firebase from "../../config/firebase"
import styles from "./style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native";


export default function Login({navigation}){
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let user = userCredential.user;
    navigation.navigate("Map", { idUser: user.uid})
  })
  .catch((error) => {
    setErrorLogin(true)
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

    useEffect(()=> {

    }, []);

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <Text style={styles.title}>Dev Sec</Text>
        <TextInput
            style={styles.input}
            placeholder="Insira seu e-mail"
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
        />
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Insira sua senha"
            type="text"
            onChangeText={(text) => setPassword(text)}
            value={password}
        />

        {errorLogin === true
        ?
        <View style={styles.contentAlert}>
            <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="#bdbdbd"
            />
            <Text style={styles.warningAlert}>E-mail ou Senha inválidos</Text>
        </View>
        :
        <View/>  
        }
        { email === "" || password === ""
        ?
        <TouchableOpacity
        disabled={true}
        style={styles.buttonLogin}
        >
            <Text style={styles.textButtonLogin}>Login</Text>

        </TouchableOpacity>
        :
        <TouchableOpacity
        style={styles.buttonLogin}
        onPress={loginFirebase}
        >
            <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        }
        <Text style={styles.registration}>Você já possui um cadastro?  
        <Text
        style={styles.linkSubscribe}
        onPress={()=> navigation.navigate("Cadastral")}
        >
          Cadastre-se Agora
        </Text>
        </Text>
        <View style={{height : 100}}></View>
        </KeyboardAvoidingView>
    );
}