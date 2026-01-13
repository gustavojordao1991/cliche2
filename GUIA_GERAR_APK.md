# 📱 Guia para Gerar APK - Calculadora de Isenção de Clichê

## ✅ Arquivos Já Configurados

O projeto já está configurado com:
- ✅ `app.json` - Configurado com nome do app e package Android
- ✅ `eas.json` - Configurado com perfis de build

## 🚀 Como Gerar o APK

### Opção 1: No Seu Computador Local (Recomendado)

1. **Baixe o código do projeto**
   - Faça download de todos os arquivos da pasta `/app/frontend`

2. **Instale o EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

3. **Navegue até a pasta do projeto**
   ```bash
   cd frontend
   ```

4. **Faça login na sua conta Expo**
   ```bash
   eas login
   ```
   - Se não tem conta, crie uma gratuitamente em: https://expo.dev/signup

5. **Inicie o build do APK**
   ```bash
   eas build --platform android --profile preview
   ```

6. **Aguarde o build**
   - O build será feito nos servidores da Expo
   - Leva aproximadamente 10-20 minutos
   - Você receberá um link para download do APK quando concluído

### Opção 2: Build Local (Avançado)

Se preferir fazer o build totalmente no seu computador:

```bash
eas build --platform android --profile preview --local
```

**Requisitos:**
- Android Studio instalado
- Android SDK configurado
- Mais tempo de processamento

## 📦 Perfis de Build Disponíveis

### Preview (APK - Para testes)
```bash
eas build --platform android --profile preview
```
- Gera arquivo APK
- Ideal para testes e instalação direta
- Não precisa Google Play Store

### Production (App Bundle - Para publicação)
```bash
eas build --platform android --profile production
```
- Gera arquivo AAB
- Otimizado para Google Play Store
- Necessário para publicação oficial

## 📋 Informações do App

- **Nome**: Calculadora de Isenção
- **Package**: com.calculadora.isencao
- **Versão**: 1.0.0
- **Version Code**: 1

## 🔧 Troubleshooting

### Erro de autenticação?
```bash
eas logout
eas login
```

### Quer ver o status do build?
```bash
eas build:list
```

### Precisa de ajuda?
- Documentação Expo: https://docs.expo.dev/build/setup/
- Suporte Expo: https://forums.expo.dev/

## 📱 Instalando o APK no Android

1. Transfira o arquivo APK para o celular
2. Nas configurações do Android, habilite "Instalar apps de fontes desconhecidas"
3. Abra o arquivo APK
4. Clique em "Instalar"
5. Pronto! ✅

## 🎉 Dicas

- A conta gratuita da Expo permite builds ilimitados
- O primeiro build pode demorar mais
- Guarde o link do APK que a Expo envia por email
- Você pode baixar o APK direto do site da Expo também

## ⚠️ Importante

Este projeto foi configurado para funcionar sem backend (cálculo feito no frontend).
Se no futuro adicionar backend, certifique-se de atualizar as URLs no `.env`.
