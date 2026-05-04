# 💈 Barbearia Imperial — Landing Page

Landing page institucional desenvolvida para a **Barbearia Imperial**, uma barbearia clássica e premium. O projeto foi criado como parte de um portfólio de desenvolvimento front-end, com foco em design sofisticado, identidade visual forte e experiência de usuário refinada.

---

## 🖥️ Preview

> Design escuro com detalhes dourados, tipografia serifada e animações sutis que transmitem a atmosfera premium da barbearia.

---

## 📋 Seções da Página

### 🏠 Hero
Seção inicial de impacto com imagem de fundo em tela cheia, sobreposição gradiente e dois botões de chamada para ação: **"Marcar Horário"** e **"Nossos Serviços"**. Inclui indicador de scroll animado.

### 🧾 Sobre
Apresenta a história da barbearia com foto lateral, destaques em números (**+10.000 clientes atendidos** e **12 anos de experiência**) e textos que reforçam a proposta de valor: precisão, tradição e atendimento personalizado desde 2012.

### ✂️ Serviços
Grade com os 6 serviços oferecidos, cada um com ícone e descrição:
- Corte Imperial
- Barba Completa
- Corte + Barba
- Barboterapia
- Tratamento Premium
- Noivo/Formando

### ⭐ Depoimentos
Três depoimentos de clientes reais com citação, nome e tempo de relacionamento com a barbearia.

###  Contato / Agendamento
Formulário de agendamento com campos de nome, telefone e mensagem, além de botão direto para o **WhatsApp**. Após o envio, exibe uma tela de confirmação com feedback visual.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** — Biblioteca de interface
- **Vite** — Build tool e servidor de desenvolvimento
- **Tailwind CSS v4** — Estilização utility-first
- **Lucide React** — Ícones SVG
- **Radix UI** — Componentes acessíveis de base

---

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| Cor principal (dourado) | `#d4af37` / `#f2ca50` |
| Fundo escuro | `#121414` / `#1a1c1c` / `#1e2020` |
| Texto principal | `#e2e2e2` |
| Texto secundário | `#d0c5af` |
| Tipografia serifada | Fonte serif (headings) |
| Tipografia sans-serif | Fonte sans (corpo e labels) |

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/followmedoug/barbearia.git

# Entre na pasta
cd barbearia

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 📦 Scripts Disponíveis

```bash
npm run dev       # Servidor de desenvolvimento
npm run build     # Build de produção
npm run preview   # Preview do build
npm run lint      # Verificação de lint
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Barbers.jsx
│   ├── Testimonials.jsx
│   ├── Location.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionDivider.jsx
├── lib/
│   └── utils.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 👨‍💻 Autor

Desenvolvido por **[@followmedoug](https://github.com/followmedoug)** como projeto de portfólio.


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
