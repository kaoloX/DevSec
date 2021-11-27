import React,{ useState } from "react";
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./style"
import firebase from "../../config/firebase"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Map from "../Mapa";

export default function Cadastral( {navigation} ){
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [errorCadastral, setErrorCadastral] = useState("")

    const cadastral = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    let user = userCredential.user;
    navigation.navigate("Login", { idUser: user.uid })
  })
  .catch((error) => {
    setErrorCadastral(true)
    let errorCode = error.code;
    let errorMessage = error.message;
  });
    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <Text style={styles.title}>Crie sua conta</Text>
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
        {errorCadastral === true
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
        style={styles.buttonCadastral}
        >
        <Text style={styles.textButtonCadastral}>Cadastrar</Text>

        </TouchableOpacity>
        :
        <TouchableOpacity
        style={styles.buttonCadastral}
        onPress={cadastral}
        >
            <Text style={styles.textButtonCadastral}>Cadastrar</Text>
        </TouchableOpacity>
        }
        <Text style={styles.login}>Você já concluiu seu cadastro?
        <Text
        style={styles.linkLogin}
        onPress={()=> navigation.navigate("Login")}
        >
        Login
        </Text>
        </Text>
        <View style={{height : 100}}></View>

        </KeyboardAvoidingView>
    );
}
