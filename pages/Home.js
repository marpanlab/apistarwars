import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const Home = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.ytimg.com/vi/_tTtrsWLYCk/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLC90u-_xo36qaY4Vf4S5nBYkmx4kw' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao APP de consumir API de Star Wars!</Text>
        <Text style={styles.quote}>“May the Force be with you.”</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD700',
    marginBottom: 20,
  },
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#FFF',
  },
});

export default Home;
