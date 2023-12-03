import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Detalhes ({ nome, logo, nomeFazenda, descricao, preco, botao }){
    return <>
        <Texto style={estilos.bodyTitulo}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imgLogo}></Image>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Texto style={estilos.textoBotao}>
                Comprar
            </Texto>
        </TouchableOpacity>
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
    },

    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },

    textoBotao:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})