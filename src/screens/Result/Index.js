import { Image, StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import NavigationContainer from "@react-navigation/native";
import React from "react";

export default function Results() {

    const route = useRoute();
    const navigation = useNavigation();

    const { imc, genero } = route.params;

    if (imc <= 18.5)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Abaixo do Normal</Text>
                <Text style={styles.subtitle}>Seu IMC: {imc.toFixed(2)}</Text>

                <Image style={styles.img} source={{
                    uri: genero === "homem"
                        ? "https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png.webp"
                        : "https://abeso.org.br/wp-content/uploads/2019/12/imc_m_06.png.webp"
                }} />

                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Procure um médico. Algumas pessoas têm um baixo peso por características do seu
                        organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição.
                        É preciso saber qual é o caso.
                    </Text>
                </View>

                <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

                    <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
                    <Text style={styles.txtInformacoes}>Mais Informações</Text>

                </TouchableOpacity>

            </View>
        );

    if (imc > 18.5 & imc <= 24.9)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Normal</Text>
                <Text style={styles.subtitle}>Seu IMC: {imc.toFixed(2)}</Text>

                <Image style={styles.img} source={{
                    uri: genero === "homem"
                        ? "https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png.webp"
                        : "https://abeso.org.br/wp-content/uploads/2019/12/imc_m_05.png.webp"
                }} />

                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Que bom que você está com o peso normal! E o melhor jeito de
                        continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.
                    </Text>
                </View>

                <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

                    <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
                    <Text style={styles.txtInformacoes}>Mais Informações</Text>

                </TouchableOpacity>

            </View>
        );

    if (imc >= 25 & imc <= 29.9)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sobrepeso</Text>
                <Text style={styles.subtitle}>Seu IMC: {imc.toFixed(2)}</Text>

                <Image style={styles.img} source={{
                    uri: genero === "homem"
                        ? "https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png.webp"
                        : "https://abeso.org.br/wp-content/uploads/2019/12/imc_m_04.png.webp"
                }} />

                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        É na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças
                        associadas, como diabetes e hipertensão. Importante rever hábitos e
                        buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.
                    </Text>
                </View>

                <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

                    <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
                    <Text style={styles.txtInformacoes}>Mais Informações</Text>

                </TouchableOpacity>

            </View>
        );

    if (imc >= 30 & imc <= 34.9)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Obesidade grau I</Text>
                <Text style={styles.subtitle}>Seu IMC: {imc.toFixed(2)}</Text>

                <Image style={styles.img} source={{
                    uri: genero === "homem"
                        ? "https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png.webp"
                        : "https://abeso.org.br/wp-content/uploads/2019/12/imc_m_03.png.webp"
                }} />

                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais.
                        Vamos dar início a mudanças hoje! Cuide de sua alimentação.
                        Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
                    </Text>
                </View>

                <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

                    <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
                    <Text style={styles.txtInformacoes}>Mais Informações</Text>

                </TouchableOpacity>

            </View>
        );

    if (imc >= 35 & imc <= 39.9)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Obesidade grau II</Text>
                <Text style={styles.subtitle}>Seu IMC: {imc.toFixed(2)}</Text>

                <Image style={styles.img} source={{
                    uri: genero === "homem"
                        ? "https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png.webp"
                        : "https://abeso.org.br/wp-content/uploads/2019/12/imc_m_02.png.webp"
                }} />

                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando
                        mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.
                    </Text>
                </View>

                <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

                    <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
                    <Text style={styles.txtInformacoes}>Mais Informações</Text>

                </TouchableOpacity>

            </View>
        );

    if (imc > 40)
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Obesidade grau III</Text>
                <Text style={styles.subtitle}>Seu IMC: {imc.toFixed(2)}</Text>

                <Image style={styles.img} source={{
                    uri: genero === "homem"
                        ? "https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png.webp"
                        : "https://abeso.org.br/wp-content/uploads/2019/12/imc_m_01.png.webp"
                }} />



                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Aqui o sinal é vermelho, com forte probabilidade de já
                        existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.
                    </Text>

                </View>

                <TouchableOpacity style={styles.information} onPress={() => navigation.navigate("Informacoes")}>

                    <Ionicons name="information-circle-outline" size={20} color="#cd5c5c" />
                    <Text style={styles.txtInformacoes}>Mais Informações</Text>

                </TouchableOpacity>

            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 10,
        color: "#e8453d",

    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        fontWeight: "700",
        color: "#e8453d"
    },
    txt: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "justify",
    },
    txtContainer: {
        width: "80%",
        backgroundColor: "#ffeae6",
        borderRadius: 10,
        height: "28%",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 11,
        borderTopRightRadius: 60,
        elevation: 4,
        borderLeftWidth: 6,
        borderLeftColor: "#fa7f72",
        justifyContent: "center"
    },
    img: {
        width: "25%",
        height: "26%",
        margin: 25
    },
    information: {
        flexDirection: "row",
        alignContent: "space-between",
        marginTop: 100
    },
    txtInformacoes: {
        fontSize: 14,
        fontWeight: "800",
        marginLeft: 2,
        color: "#cd5c5c"
    }
})