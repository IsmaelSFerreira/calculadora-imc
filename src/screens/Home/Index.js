import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationContainer, useNavigation, useRoute, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home(props) {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState();

  useEffect(() => {
    setImc(peso / (altura * altura));
  }, [altura, peso])

  const navigation = useNavigation();
  const route = useRoute();

  function navigateTo() {

    navigation.navigate("Result", { imc: imc, genero: escolherGenero });

  }
  // const para receber o genêro escolhido para poder modificar o botão ao clicar e passar os dados corretos.
  const [escolherGenero, setEscolherGenero] = useState(null);

  // continuar amanhã... implementar as rotas para as outras telas e terminar a calculadora.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: '', backgroundColor: "#f5f5f5" }}>

      <Text style={styles.title}>Calculadora de IMC</Text>
      <FontAwesome6 name="weight-scale" size={60} color="#e8453d" />

      <View style={styles.inputContainer}>
        <Text style={styles.txtInput}>Altura:</Text>
        <TextInput onChangeText={(item) => setAltura(item)} keyboardType='numeric' style={styles.input} placeholder='Digite sua altura(m)...' />
        <Text style={styles.txtInput}>Peso:</Text>
        <TextInput onChangeText={(item) => setPeso(item)} keyboardType='numeric' style={styles.input} placeholder='Digite seu peso(kg)...' />
      </View>

      <Text style={styles.txtInput}>Sexo:</Text>

      <View style={styles.iconContainer}>
        {/* terminar icones de checkbox para seleção de homem ou mulher */}
        <View style={styles.iconsAllign}>
          {/* Ao clicar o escolherGenero rece o parametro 'male'. Depois é feita uma condição no style, se igual a 'male' o stylo é incrementado com a cor de fundo. */}
          <TouchableOpacity onPress={() => setEscolherGenero('homem')} style={[styles.icons, escolherGenero === "homem" ? styles.iconeSelecionado : null]} >
            <FontAwesome name="male" size={22} color="black" />
          </TouchableOpacity>
          <Text style={styles.iconText}>Homem</Text>

        </View>

        <View style={styles.iconsAllign}>

          <TouchableOpacity onPress={() => setEscolherGenero('mulher')} style={[styles.icons, escolherGenero === "mulher" ? styles.iconeSelecionado02 : null]} >
            <FontAwesome name="female" size={22} color="black" />
          </TouchableOpacity>
          <Text style={styles.iconText}>Mulher</Text>

        </View>

      </View>

      <TouchableOpacity onPress={navigateTo} style={styles.button}>
        <Text style={styles.txtButton}>Calcular IMC</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

        <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
        <Text style={styles.txtInformacoes}>Mais Informações</Text>

      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e8453d",
    textShadowColor: "#e8453d",
    marginTop: 40,
    marginBottom: 20
  },
  txtInput: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginLeft: 50
  },
  inputContainer: {
    width: "100%",
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#e8453d",
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 4
  },
  button: {
    width: "80%",
    backgroundColor: "#e8453d",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    elevation: 4,
    margin: 30
  },
  txtButton: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff"
  },
  iconContainer: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  icons: {
    backgroundColor: "#fff",
    width: "60%",
    alignItems: "center",
    margin: 10,
    borderRadius: 6,
    elevation: 4,
    height: 35,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e8453d"
  },
  iconsAllign: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "35%"
  },
  iconText: {
    fontSize: 16,
    fontWeight: "600",
  },
  iconeSelecionado: {
    backgroundColor: "#ADD8E6"
  },
  iconeSelecionado02: {
    backgroundColor: "#FFB6C1"
  },
  information: {
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 60
  },
  txtInformacoes: {
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 2,
    color: "#cd5c5c"
  }

})

