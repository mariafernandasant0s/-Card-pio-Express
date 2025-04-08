// menu-data.js

// Certifique-se que os caminhos em imageSrc correspondem
// exatamente aos nomes dos arquivos dentro da pasta /images/
const menuData = [
  // Entradas
  {
    id: "ent1",
    category: "entradas",
    name: "Bolinho de Carne Seca",
    description: "Bolinho crocante recheado com carne seca desfiada, perfeito para começar.",
    price: "15,90",
    imageSrc: "entrada1.png",
    imageAlt: "Tigela branca com vários bolinhos dourados de carne seca",
    tags: []
  },
  {
    id: "ent2",
    category: "entradas",
    name: "Polenta Frita",
    description: "Deliciosa polenta frita sequinha, servida com molho de queijo.",
    price: "19,00",
    imageSrc: "entrada2.png",
    imageAlt: "Tigela branca quadrada com palitos de polenta frita",
    tags: ['vegetariano']
  },
  {
    id: "ent3",
    category: "entradas",
    name: "Bruschetta Tradicional",
    description: "Pão italiano torrado com tomate fresco, manjericão, alho e azeite.",
    price: "19,00",
    imageSrc: "entrada3.png",
    imageAlt: "Duas fatias de pão torrado cobertas com tomate picado e manjericão",
    tags: ['vegetariano']
  },
  {
    id: "ent4",
    category: "entradas",
    name: "Carpaccio de Carne",
    description: "Finas fatias de carne crua, rúcula, alcaparras e lascas de parmesão.",
    price: "29,00",
    imageSrc: "entrada4.png",
    imageAlt: "Prato branco com finas fatias de carne crua dispostas em círculo com rúcula",
    tags: []
  },
  // Pratos Principais
  {
    id: "pp1",
    category: "pratos-principais",
    name: "Filé à Parmegiana",
    description: "Suculento filé empanado, coberto com molho de tomate caseiro e queijo derretido.",
    price: "45,00",
    imageSrc: "prato1.png",
    imageAlt: "Travessa preta com filé à parmegiana coberto com queijo derretido",
    tags: []
  },
  {
    id: "pp2",
    category: "pratos-principais",
    name: "Risoto de Frutos do Mar",
    description: "Risoto cremoso com camarões, lula, mariscos e um toque de açafrão.",
    price: "75,00",
    imageSrc: "prato2.png",
    imageAlt: "Prato fundo branco com risoto alaranjado cremoso e frutos do mar",
    tags: []
  },
   {
    id: "pp3",
    category: "pratos-principais",
    name: "Paillard de Filé com Fettuccine",
    description: "Fino filé grelhado coberto com fettuccine ao molho Alfredo.",
    price: "75,00",
    imageSrc: "prato3.png",
    imageAlt: "Prato branco quadrado com um fino bife coberto por fettuccine",
    tags: []
  },
  {
    id: "pp4",
    category: "pratos-principais",
    name: "Salmão Grelhado com Purê",
    description: "Posta de salmão grelhado na perfeição, acompanha purê de batata baroa.",
    price: "79,00",
    imageSrc: "prato4.png",
    imageAlt: "Prato branco com salmão grelhado ao lado de purê",
    tags: ['sem-gluten']
  },
  // Sobremesas
  {
    id: "sob1",
    category: "sobremesas",
    name: "Petit Gateau",
    description: "Bolinho quente de chocolate com centro cremoso, servido com sorvete de creme.",
    price: "26,00",
    imageSrc: "sobremesa1.png",
    imageAlt: "Prato branco com bolinho de chocolate com calda e sorvete ao lado",
    tags: []
  },
  {
    id: "sob2",
    category: "sobremesas",
    name: "Palha Italiana",
    description: "Doce cremoso de brigadeiro com biscoito maisena, coberto com açúcar.",
    price: "14,00",
    imageSrc: "sobremesa2.png",
    imageAlt: "Prato azul claro com pedaços de palha italiana quadrados",
    tags: ['vegetariano']
  },
  {
    id: "sob3",
    category: "sobremesas",
    name: "Tiramisù Clássico",
    description: "Camadas de biscoito champagne, café, creme de mascarpone e cacau.",
    price: "28,00",
    imageSrc: "sobremesa3.png",
    imageAlt: "Pedaço quadrado de Tiramisù em um prato branco com cacau por cima",
    tags: ['vegetariano']
  },
  {
    id: "sob4",
    category: "sobremesas",
    name: "Cheesecake Frutas Vermelhas",
    description: "Base crocante, recheio cremoso de queijo e calda de frutas vermelhas frescas.",
    price: "24,00",
    imageSrc: "sobremesa4.png",
    imageAlt: "Cheesecake redondo em base dourada com cobertura de frutas vermelhas",
    tags: ['vegetariano']
  }
];