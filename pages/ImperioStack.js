import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView } from 'react-native'; 
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/people/'); 
  const parsed = await response.json();
  callback(parsed.results);
}

export default function Rebeldes() {
 const [registros, setRegistros] = useState([]);

 useEffect(() => { 
  request(setRegistros);
 },[])


 return (
  <SafeAreaView style={estilo.container}>
   <View>
    <Text style={estilo.superior}>
    Personagens Star Wars 
    </Text> 
   </View>

   <FlatList
   data={registros}
   keyExtractor={(item) => item.name.toString()} 
   renderItem={({item}) =>
    <Text style={estilo.item}>
    <Text> Nome: {item.name}{'\n'}</Text> 
    <Text> Peso: {item.mass}{'\n'}</Text> 
    <Text> Cor do cabelo: {item.hair_color}{'\n'}</Text> 
    <Text>Altura: {item.height}{'\n'}</Text>
    <Text>Cor da Pele: {item.skin_color}{'\n'}</Text>
    <Text>Cor dos Olhos: {item.eye_color}{'\n'}</Text>
    <Text>Ano de Nascimento: {item.birth_year}{'\n'}</Text>
    <Text>Gênero: {item.gender}{'\n'}</Text>
   </Text>
 }/>

  </SafeAreaView>
 );
}