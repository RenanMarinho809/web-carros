🚗 WebCarros

O WebCarros é uma aplicação web desenvolvida em React para divulgação e gerenciamento de anúncios de carros. O projeto utiliza tecnologias modernas para garantir performance, segurança e uma ótima experiência do usuário 😄🔥

---

🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes ferramentas e bibliotecas:

⚛️ React — Biblioteca para criação de interfaces modernas e reativas

🎨 Tailwind CSS — Estilização rápida, responsiva e customizável

🔥 Firebase — Backend completo da aplicação:

📂 Firestore — Banco de dados NoSQL em tempo real

🔐 Firebase Auth — Autenticação de usuários (login e cadastro)

🖼️ Firebase Storage — Armazenamento de imagens dos veículos

🖼️ Swiper — Criação de sliders/carrosséis de imagens dos carros

---

🚀 Funcionalidades

👤 Cadastro e login de usuários com autenticação segura

🚘 Cadastro de anúncios de carros com imagens

🖼️ Upload e armazenamento de imagens no Firebase Storage

🔄 Exibição dos carros com slider de imagens usando Swiper

📱 Layout totalmente responsivo com Tailwind CSS

⚡ Atualização de dados em tempo real com Firestore

---

🔧 Configuração do Firebase

Para rodar o projeto corretamente, é necessário:

Criar um projeto no Firebase Console 🔥

Ativar:

Authentication (Email/Senha)

Firestore Database

Storage

Adicionar as credenciais do Firebase no projeto:

---

// src/services/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "SEU_AUTH_DOMAIN",
projectId: "SEU_PROJECT_ID",
storageBucket: "SEU_STORAGE_BUCKET",
messagingSenderId: "SEU_SENDER_ID",
appId: "SEU_APP_ID",
};

export const app = initializeApp(firebaseConfig);

---

▶️ Como Executar o Projeto

Acesse no navegador:
👉 http://localhost:5173

---

📸 Slides de Imagens

O Swiper é utilizado para criar uma experiência visual moderna, permitindo navegar pelas imagens dos carros de forma fluida e interativa 🖱️✨

---

🤝 Contribuição

Contribuições são sempre bem-vindas!
Sinta-se à vontade para abrir uma issue ou enviar um pull request 🚀

---

Desenvolvido com 💙 e ☕ por Renan Marinho 🚀😄
