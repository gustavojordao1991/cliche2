import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [valorCliche, setValorCliche] = useState("");

  // Calcula o valor da compra (valor do clichê × 18)
  const calcularValorCompra = () => {
    const valor = parseFloat(valorCliche.replace(",", "."));
    if (isNaN(valor) || valor <= 0) {
      return "0,00";
    }
    const resultado = valor * 18;
    return resultado.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatarValor = (text: string) => {
    // Remove tudo que não é número, vírgula ou ponto
    const limpo = text.replace(/[^\d.,]/g, "");
    setValorCliche(limpo);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header */}
            <View style={styles.header}>
              <Ionicons name="calculator" size={48} color="#4A90E2" />
              <Text style={styles.title}>Calculadora de Regra de Três</Text>
              <Text style={styles.subtitle}>
                Valor da Compra = Valor do Clichê × 18
              </Text>
            </View>

            {/* Card de Input */}
            <View style={styles.card}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Valor do Clichê</Text>
                <View style={styles.inputWrapper}>
                  <Text style={styles.currencySymbol}>R$</Text>
                  <TextInput
                    style={styles.input}
                    value={valorCliche}
                    onChangeText={formatarValor}
                    keyboardType="decimal-pad"
                    placeholder="0,00"
                    placeholderTextColor="#999"
                    returnKeyType="done"
                    autoFocus={false}
                  />
                </View>
              </View>

              {/* Ícone de seta */}
              <View style={styles.arrowContainer}>
                <Ionicons name="arrow-down" size={32} color="#4A90E2" />
              </View>

              {/* Card de Resultado */}
              <View style={styles.resultContainer}>
                <Text style={styles.label}>Valor da Compra</Text>
                <View style={styles.resultWrapper}>
                  <Text style={styles.currencySymbol}>R$</Text>
                  <Text style={styles.resultText}>{calcularValorCompra()}</Text>
                </View>
              </View>
            </View>

            {/* Informação adicional */}
            <View style={styles.infoContainer}>
              <Ionicons name="information-circle" size={20} color="#666" />
              <Text style={styles.infoText}>
                Digite o valor do clichê para calcular automaticamente
              </Text>
            </View>
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginTop: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#7F8C8D",
    marginTop: 8,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E1E8ED",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  currencySymbol: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4A90E2",
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 24,
    fontWeight: "600",
    color: "#2C3E50",
    padding: 0,
    outlineStyle: "none",
  },
  arrowContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  resultContainer: {
    marginTop: 16,
  },
  resultWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F4F8",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4A90E2",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  resultText: {
    flex: 1,
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    paddingHorizontal: 16,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
    flex: 1,
    textAlign: "center",
  },
});
