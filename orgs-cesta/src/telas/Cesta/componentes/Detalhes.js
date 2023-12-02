import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Detalhes ({ nome, logo, nomeFazenda, descricao, preco }){
    return <>
        <Texto style={estilos.bodyTitulo}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imgLogo}></Image>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 12,
    },

    imgLogo:{
        width: 32,
        height: 32
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