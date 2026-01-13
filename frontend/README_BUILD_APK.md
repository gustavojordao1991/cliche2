# 📱 Calculadora de Isenção de Clichê - Guia de Build

## 🎯 Sobre o Aplicativo

Aplicativo mobile simples que calcula o valor da compra baseado no valor do clichê.
**Fórmula**: Valor da Compra = Valor do Clichê × 18

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Verifique: `node --version`

2. **Conta Expo** (gratuita)
   - Criar conta: https://expo.dev/signup
   - Não se preocupe, é 100% gratuito!

## 🚀 Passos para Gerar o APK

### 1️⃣ Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

ou se preferir usar yarn:

```bash
yarn install
```

### 2️⃣ Instalar EAS CLI

```bash
npm install -g eas-cli
```

### 3️⃣ Fazer Login na Expo

```bash
eas login
```

Digite seu email e senha da conta Expo quando solicitado.

### 4️⃣ Gerar o APK

Para gerar um APK de teste (recomendado):

```bash
eas build --platform android --profile preview
```

Para gerar um App Bundle para publicação na Play Store:

```bash
eas build --platform android --profile production
```

### 5️⃣ Aguardar o Build

- O build será feito nos servidores da Expo (na nuvem)
- Tempo estimado: **10-20 minutos**
- Você pode acompanhar o progresso no terminal
- Receberá um **link de download** quando concluído
- O link também será enviado por **email**

### 6️⃣ Baixar e Instalar o APK

1. Clique no link fornecido para baixar o APK
2. Transfira o arquivo para seu celular Android
3. Habilite "Instalar de fontes desconhecidas" nas configurações
4. Abra o arquivo APK e clique em "Instalar"
5. Pronto! 🎉

## 📋 Estrutura do Projeto

```
calculadora-isencao-cliche/
├── app/                    # Código do aplicativo (Expo Router)
│   └── index.tsx          # Tela principal da calculadora
├── assets/                # Imagens e ícones
├── app.json              # Configuração do app
├── eas.json              # Configuração do build
├── package.json          # Dependências
└── README_BUILD_APK.md   # Este arquivo
```

## 🔧 Comandos Úteis

### Testar Localmente (sem gerar APK)

```bash
npm start
```

Depois escaneie o QR code com o app **Expo Go** no seu celular.

### Ver Status dos Builds

```bash
eas build:list
```

### Ver Detalhes de um Build Específico

```bash
eas build:view [BUILD_ID]
```

### Logout da Conta Expo

```bash
eas logout
```

## 🆘 Problemas Comuns

### Erro: "No development build available"
- Use o perfil `preview` para APK: `eas build --platform android --profile preview`

### Erro de autenticação
```bash
eas logout
eas login
```

### Build falhou
- Verifique se todos os arquivos estão presentes
- Confira se não há erros no código
- Tente novamente: builds podem falhar por problemas temporários nos servidores

### Precisa de ajuda?
- Documentação oficial: https://docs.expo.dev/build/setup/
- Fórum da Expo: https://forums.expo.dev/
- Stack Overflow: https://stackoverflow.com/questions/tagged/expo

## 💡 Dicas Importantes

1. **Conta Gratuita é Suficiente**
   - A conta gratuita da Expo permite builds ilimitados
   - Não precisa pagar nada!

2. **Primeira Build Demora Mais**
   - O primeiro build pode levar até 30 minutos
   - Builds subsequentes são mais rápidos

3. **Guarde o Link do APK**
   - Você pode baixar o APK múltiplas vezes
   - O link não expira rapidamente

4. **Testes com Expo Go**
   - Para testar rapidamente sem gerar APK
   - Baixe "Expo Go" na Play Store
   - Execute `npm start` e escaneie o QR code

## 📱 Informações do App

- **Nome**: Calculadora de Isenção
- **Package**: com.calculadora.isencao
- **Versão**: 1.0.0
- **Plataforma**: Android
- **Orientação**: Portrait (vertical)

## 🎨 Sobre o Código

O aplicativo foi desenvolvido com:
- **Expo Router** - Navegação baseada em arquivos
- **React Native** - Framework mobile
- **TypeScript** - Tipagem estática
- **Cálculo local** - Não precisa de internet para funcionar

## ✨ Features

- ✅ Interface limpa e profissional
- ✅ Cálculo em tempo real
- ✅ Formatação em Real (R$)
- ✅ Funciona offline
- ✅ Suporta números decimais

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:
1. Revise este README
2. Consulte a documentação do Expo
3. Entre em contato com o desenvolvedor

---

**Boa sorte com seu build! 🚀**
