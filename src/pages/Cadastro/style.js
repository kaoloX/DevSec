import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 35 ,
        color: "#00CED1",
        marginBottom: 10,
        fontWeight: "bold"
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#00CED1",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",    
    },
    buttonCadastral:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00CED1",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonCadastral: {
        color: "#ffffff"
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    login: {
        marginTop: 20,
        color: "#4d5156"
    },
    linkLogin:{
        color: "#bdbdbd",
        fontSize: 16,
    }
});

export default styles
