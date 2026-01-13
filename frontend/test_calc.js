// Test calculation logic
const valorCliche = "100";
const valor = parseFloat(valorCliche.replace(",", "."));
const resultado = valor * 18;
console.log("Input:", valorCliche);
console.log("Parsed:", valor);
console.log("Result:", resultado);
console.log("Formatted:", resultado.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}));
