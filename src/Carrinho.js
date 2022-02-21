import { React } from 'react';
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';

import topo from '../assets/topo.png'
import logo from '../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.texto}>Carrinho</Text>
            <Text style={estilos.titulo}>Kit IOT</Text>
            <View style={estilos.vendedor}>
                <Image source={logo} style={estilos.logoVendedor} />
                <Text style={estilos.nomeVendedor}>Cloud Shopping</Text>
            </View>
            <Text style={estilos.desc}>Um kit de IOT para alunos iniciantes se aventurarem nas nuvens</Text>
            <Text style={estilos.preco}>R$99,90</Text>
        </>
    );
};

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 582 / 772 * width,
    },
    texto: {
        position: 'absolute',
        padding: 50,
        textAlign: 'center',
        width: width,
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 40,
        color: 'black'
    },
    titulo: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 42,
        fontFamily: 'MontserratRegular'
    },
    vendedor: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    logoVendedor: {
        width: 32,
        height: 32,
        marginLeft: 10
    },
    nomeVendedor: {
        fontSize: 20,
        lineHeight: 42,
        marginLeft: 10
    },
    desc: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#ffa500',
        fontSize: 30,
        fontFamily: 'MontserratBold',
        lineHeight: 42,
        marginTop: 8
    }
});