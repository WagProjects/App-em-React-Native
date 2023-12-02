import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import imgTopo from '../assets/topo.png'
import imgLogo from '../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={imgTopo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>
        <View style={estilos.body}>
            <Text style={estilos.bodyTitulo}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={imgLogo} style={estilos.imgLogo}></Image>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra sua cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: '100%',
        height: 578/ 768 * width
    },

    titulo:{
        position: 'absolute',
        width:  '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        lineHeight: 52,
        marginTop: 16,
        fontFamily: "MontserratBold"
    },

    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },

    imgLogo:{
        width: 32,
        height: 32
    },

    body:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    bodyTitulo: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})