const tutorials = [
  {
    title: "Bolo de Cenoura",
    category: "Bolos",
    description: "Aprenda a fazer um delicioso bolo de cenoura fofinho com cobertura de chocolate.",
    url: "tutorials/bolo-cenoura.html"
  },
  {
    title: "Pão de Queijo",
    category: "Salgados",
    description: "Receita tradicional de pão de queijo mineiro, crocante por fora e macio por dentro.",
    url: "tutorials/pao-queijo.html"
  },
  {
    title: "Brigadeiro",
    category: "Doces",
    description: "Como fazer brigadeiro simples e rápido para festas e sobremesas.",
    url: "tutorials/brigadeiro.html"
  },
  {
    title: "Torta de Frango",
    category: "Salgados",
    description: "Receita prática de torta de frango cremosa para o lanche ou jantar.",
    url: "tutorials/torta-frango.html"
  },
  {
    title: "Mousse de Maracujá",
    category: "Doces",
    description: "Sobremesa rápida, refrescante e muito fácil de fazer.",
    url: "tutorials/mousse-maracuja.html"
  },
  {
    title: "Quiche de Alho-Poró",
    category: "Salgados",
    description: "Quiche leve e saborosa, perfeita para qualquer ocasião.",
    url: "tutorials/quiche-alho-poro.html"
  },
  {
    title: "Pudim de Leite Condensado",
    category: "Doces",
    description: "O clássico pudim com calda de caramelo, irresistível!",
    url: "tutorials/pudim-leite.html"
  },
  {
    title: "Coxinha de Frango",
    category: "Salgados",
    description: "Aprenda a fazer a coxinha perfeita, crocante por fora e macia por dentro.",
    url: "tutorials/coxinha-frango.html"
  },
  {
    title: "Arroz Doce Cremoso",
    category: "Doces",
    description: "Receita tradicional de arroz doce com toque de canela.",
    url: "tutorials/arroz-doce.html"
  },
  {
    title: "Escondidinho de Carne Seca",
    category: "Salgados",
    description: "Prato nordestino delicioso, com purê de mandioca e carne seca.",
    url: "tutorials/escondidinho.html"
  },
  {
    title: "Brownie de Chocolate",
    category: "Doces",
    description: "Brownie molhadinho, fácil e rápido para adoçar seu dia.",
    url: "tutorials/brownie.html"
  },
  {
    title: "Empadão de Palmito",
    category: "Salgados",
    description: "Empadão cremoso e recheado, perfeito para festas.",
    url: "tutorials/empadao-palmito.html"
  },
  {
    title: "Canjica",
    category: "Doces",
    description: "Receita típica de festa junina, cremosa e cheia de sabor.",
    url: "tutorials/canjica.html"
  },
  {
    title: "Panqueca de Carne",
    category: "Salgados",
    description: "Panquecas recheadas com carne moída e molho de tomate.",
    url: "tutorials/panqueca-carne.html"
  },
  {
    title: "Beijinho de Coco",
    category: "Doces",
    description: "Docinho de coco tradicional, fácil e delicioso.",
    url: "tutorials/beijinho.html"
  }
];

function renderCards(arr) {
  const cards = document.getElementById('cards');
  if (!cards) return;
  cards.innerHTML = '';
  arr.forEach(tutorial => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${tutorial.title}</h2>
      <span class="category">${tutorial.category}</span>
      <p>${tutorial.description}</p>
      <a href="${tutorial.url}">Ver tutorial</a>
    `;
    cards.appendChild(card);
  });
}

const search = document.getElementById('search');
if (search) {
  search.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const filtered = tutorials.filter(tut =>
      tut.title.toLowerCase().includes(value) ||
      tut.description.toLowerCase().includes(value)
    );
    renderCards(filtered);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards(tutorials);
});

const homeSearch = document.getElementById('search-home');
const destaques = [
  {
    title: "Bolo de Cenoura",
    category: "Bolos",
    description: "Fofinho, fácil e com cobertura de chocolate. Veja como preparar!",
    url: "tutorials/bolo-cenoura.html"
  },
  {
    title: "Pão de Queijo",
    category: "Salgados",
    description: "O clássico mineiro para o café da tarde. Aprenda o segredo da receita perfeita.",
    url: "tutorials/pao-queijo.html"
  },
  {
    title: "Brigadeiro",
    category: "Doces",
    description: "O doce mais amado do Brasil, pronto em minutos!",
    url: "tutorials/brigadeiro.html"
  },
  {
    title: "Torta de Frango",
    category: "Salgados",
    description: "Receita prática de torta de frango cremosa para o lanche ou jantar.",
    url: "tutorials/torta-frango.html"
  },
  {
    title: "Mousse de Maracujá",
    category: "Doces",
    description: "Sobremesa rápida, refrescante e muito fácil de fazer.",
    url: "tutorials/mousse-maracuja.html"
  },
  {
    title: "Quiche de Alho-Poró",
    category: "Salgados",
    description: "Quiche leve e saborosa, perfeita para qualquer ocasião.",
    url: "tutorials/quiche-alho-poro.html"
  },
  {
    title: "Pudim de Leite Condensado",
    category: "Doces",
    description: "O clássico pudim com calda de caramelo, irresistível!",
    url: "tutorials/pudim-leite.html"
  },
  {
    title: "Coxinha de Frango",
    category: "Salgados",
    description: "Aprenda a fazer a coxinha perfeita, crocante por fora e macia por dentro.",
    url: "tutorials/coxinha-frango.html"
  },
  {
    title: "Arroz Doce Cremoso",
    category: "Doces",
    description: "Receita tradicional de arroz doce com toque de canela.",
    url: "tutorials/arroz-doce.html"
  },
  {
    title: "Escondidinho de Carne Seca",
    category: "Salgados",
    description: "Prato nordestino delicioso, com purê de mandioca e carne seca.",
    url: "tutorials/escondidinho.html"
  },
  {
    title: "Brownie de Chocolate",
    category: "Doces",
    description: "Brownie molhadinho, fácil e rápido para adoçar seu dia.",
    url: "tutorials/brownie.html"
  },
  {
    title: "Empadão de Palmito",
    category: "Salgados",
    description: "Empadão cremoso e recheado, perfeito para festas.",
    url: "tutorials/empadao-palmito.html"
  },
  {
    title: "Canjica",
    category: "Doces",
    description: "Receita típica de festa junina, cremosa e cheia de sabor.",
    url: "tutorials/canjica.html"
  },
  {
    title: "Panqueca de Carne",
    category: "Salgados",
    description: "Panquecas recheadas com carne moída e molho de tomate.",
    url: "tutorials/panqueca-carne.html"
  },
  {
    title: "Beijinho de Coco",
    category: "Doces",
    description: "Docinho de coco tradicional, fácil e delicioso.",
    url: "tutorials/beijinho.html"
  }
];

function renderDestaques(arr) {
  const destaquesDiv = document.getElementById('destaques');
  const hamburger = document.querySelector('.hamburger');
  if (!destaquesDiv) return;
  destaquesDiv.innerHTML = '';
  (arr.length > 0 ? arr.slice(0, 6) : destaques.slice(0, 6)).forEach(item => {
    const card = document.createElement('div');
    card.className = 'card destaque-card';
    card.style.width = '270px';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <span class="category">${item.category}</span>
      <p>${item.description}</p>
      <a href="${item.url}">Ver tutorial</a>
    `;
    destaquesDiv.appendChild(card);
  });
}

if (homeSearch) {
  renderDestaques(destaques);
  homeSearch.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const filtered = destaques.filter(item =>
      item.title.toLowerCase().includes(value) ||
      item.description.toLowerCase().includes(value)
    );
    renderDestaques(filtered.length > 0 ? filtered : destaques);
  });
}