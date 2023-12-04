import React from "react";
import Texto from "../../../componentes/Texto";

import { StyleSheet, Image } from "react-native";


export default function Itens ({titulo, lista}){
    return <>
        <Texto>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    containerItens:{
        paddingVertical: 12
    },
    
    tituloItens:{
        paddingVertical: 16,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    }
})