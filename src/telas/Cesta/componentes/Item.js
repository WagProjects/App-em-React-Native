import React from "react";
import Texto from "../../../componentes/Texto";

import { Image, StyleSheet, View, FlatList } from "react-native";


export default function Item ({item: {nome, imagem}}){

    return <View style={estilos.containerItens}>
        <Image style={estilos.imagem} source={imagem} />
        <Texto key={nome} style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    containerItens:{
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC"
    },

    imagem:{
        width: 64,
        height: 64
    },

    nome:{
        fontSize: 16,
        marginStart: 12,
        color: "#464646"
    }
})