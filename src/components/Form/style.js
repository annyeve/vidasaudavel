//Bloco de importação de componentes
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%", //largura
        height:"100%", // altura
        bottom:0,
        backgroundColor:"#000000",
        alignItems: "center", // centraliza os itens
        borderTopLeftRadius:30, //arredonda as bordas.
        borderTopRightRadius:30, 
        marginTop:30, // espaço que tem no topo do app
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding: 10, //distância entre os elementos
    },
    formLabel:{
        color: "#ffffff",
        fontSize: 18,
        paddingLeft: 20, //define a distancia da direção, para esquerda.

    },
    input:{
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textButtonCalculator:{
        fontSize: 20, //define o tamanho do botão de calcular.
        color:"#ffffff",
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#00ffc3",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    } //alinha e centraliza.
});

//Exportação da variável styles
export default styles