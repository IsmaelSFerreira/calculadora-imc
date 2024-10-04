import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Informacoes() {

    const rote = useRoute();
    const navigation = useNavigation();

    return (

        <View style={styles.container}>


            <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>O que é IMC ?</Text>
                <Text style={styles.txt}>   O IMC (Índice de Massa Corporal) é uma medida que avalia se
                    uma pessoa está em um peso adequado para sua altura. Ele é calculado
                    dividindo o peso pela altura ao quadrado e classifica o
                    peso em categorias como magreza, normal, sobrepeso e obesidade.
                </Text>
            </View>

            <Image style={styles.img} source={{ uri: "https://fs21.com.br/studiofs21/wp-content/uploads/2020/08/1-2.png" }} />

            <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Limitações do calculo de IMC</Text>
                <Text style={styles.txt}>   O IMC não distingue entre músculo e gordura, o que pode causar classificações imprecisas,
                    especialmente em atletas. Ele também não considera fatores como idade, sexo ou distribuição
                    de gordura, por isso é apenas uma estimativa que deve ser complementada por outras avaliações
                    de saúde
                </Text>
            </View>

            <TouchableOpacity style={styles.retornar} onPress={() => navigation.navigate("Home")}>

                <Ionicons name="return-down-back" size={22} color="#cd5c5c" />
                <Text style={styles.txtInformacoes}>  Voltar
                </Text></TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        justifyContent: "center"
    },
    img: {
        height: "38%",
        width: "100%",
        marginTop: 10
    },
    txt: {
        fontSize: 15,
        fontWeight: "700",
        textAlign: "justify",
    },
    txtContainer: {
        width: "98%",
        backgroundColor: "#ffeae6",
        borderRadius: 10,
        height: "22%",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 11,
        elevation: 4,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderColor: "#fa7f72",
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 10
    },
    txtTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "justify",
        paddingBottom: 6
    },
    txtInformacoes: {
        fontSize: 14,
        fontWeight: "800",
        marginLeft: 2,
        color: "#cd5c5c"
    },
    retornar: {
        flexDirection: "row",
        alignContent: "space-between",
        marginTop: 6
    },

})