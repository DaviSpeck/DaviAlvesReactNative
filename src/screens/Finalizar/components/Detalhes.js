import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';


import Texto from "../../../components/Texto";


export default function Detalhes({ titulo, formas_de_pag, desc, botao, navigation }) {

    return <>

        <TouchableOpacity style={estilos.botao} onPress={() => { navigation.navigate('Carrinho') }}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>

        <Texto style={estilos.titulo}> {titulo}</Texto>
        <Texto style={estilos.desc}> {desc}</Texto>
        <Texto style={estilos.formas_de_pag}> {formas_de_pag}</Texto>

    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#008000",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 42,
        textAlign: "center"
    },
    formas_de_pag: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 5,
        textAlign: "center"
    },
    desc: {
        color: "black",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 5,
        textAlign: "center"
    },

    botao: {
        marginTop: 1,
        backgroundColor: "#32CD32",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "black",
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "bold"
    }
})