# Expo Auth

Este projeto é um app de autenticação feito com Expo e React Native. O objetivo é ter uma referência simples das bibliotecas usadas, tecnologias e passos de instalação e configuração.

## Tecnologias utilizadas

- Expo
- React Native
- React
- TypeScript
- React Hook Form
- Zod
- @hookform/resolvers

## Bibliotecas principais

- `expo`
- `expo-status-bar`
- `react`
- `react-native`
- `react-hook-form`
- `zod`
- `@hookform/resolvers`

## Estrutura do projeto

- `App.tsx` - componente principal do app
- `src/components/CustomInput.tsx` - componente de input customizado
- `src/components/CustomButton.tsx` - componente de botão customizado
- `package.json` - dependências e scripts do projeto
- `tsconfig.json` - configuração do TypeScript

## Passo a passo do que foi feito no projeto

1. Criei o app com Expo e configurei o `App.tsx` como tela principal.
2. Adicionei o React Hook Form para controlar os formulários.
3. Usei o Zod para criar o esquema de validação `signInSchema`.
4. Integrei o Zod com o React Hook Form usando `zodResolver`.
5. Instalei dependências com `npm install @hookform/resolvers zod`.
6. Resolvi um problema de compatibilidade do Zod com Expo fazendo downgrade para `zod@^4.4.2`.

## Observações

- Se precisar reconfigurar o Zod, verifique a versão usada atualmente no `package.json`.
- Se houver problema de bundling, sempre tente limpar cache com `expo start -c`.
- O app é uma base simples para login e pode ser expandido para incluir navegação, autenticação real ou chamadas de API.
