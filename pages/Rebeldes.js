import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native'; 
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/films/'); 
  const parsed = await response.json();
  callback(parsed.results);
}

export default function Filmes() {
 const [registros, setRegistros] = useState([]);

 useEffect(() => { 
  request(setRegistros);
 },[])

 return (
  <SafeAreaView style={estilo.container}>
   <View>
    <Text style={estilo.superior}>
    Filmes Star Wars
    </Text> 
   </View>

   <FlatList
    data={registros}
    keyExtractor={(item) => item.title.toString()} 
    renderItem={({item}) =>
      <View style={estilo.item}>
        <Text style={estilo.title}>Título: {item.title}{'\n'}</Text> 
        <Text style={estilo.title}>>Episódio: {item.episode_id}{'\n'}</Text> 
        <Text style={estilo.details}>Texto de Abertura: {item.opening_crawl}{'\n'}</Text> 
        <Text style={estilo.details}>Diretor: {item.director}{'\n'}</Text> 
        <Text style={estilo.details}>Produtor: {item.producer}{'\n'}</Text> 
        <Text style={estilo.details}>Data de Lançamento: {item.release_date}{'\n'}</Text> 
      </View>
    }
   />
  </SafeAreaView>
 );
}
