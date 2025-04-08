document.addEventListener('DOMContentLoaded', () => {
    const categorias = ['entradas', 'pratos-principais', 'sobremesas'];
    const menuContainer = document.getElementById('menu-container');
    const cartCount = document.getElementById('cart-count');

    let carrinho = [];

    // Simulação de dados se você estiver usando um arquivo externo (ex: menu-data.js)
    const menuData = {
        'entradas': [
            { nome: 'Bruschetta', preco: 12.99 },
            { nome: 'Salada Caprese', preco: 10.50 }
        ],
        'pratos-principais': [
            { nome: 'Lasanha', preco: 25.90 },
            { nome: 'Filé Mignon', preco: 35.00 }
        ],
        'sobremesas': [
            { nome: 'Pudim', preco: 8.00 },
            { nome: 'Sorvete', preco: 6.50 }
        ]
    };

    // Carregar o cardápio
    categorias.forEach(categoria => {
        const secao = document.getElementById(categoria);
        const container = secao.querySelector('.menu-category');
        container.innerHTML = '';

        menuData[categoria].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            itemDiv.innerHTML = `
                <h3>${item.nome}</h3>
                <p>R$ ${item.preco.toFixed(2)}</p>
                <button class="add-to-cart">Adicionar ao carrinho</button>
            `;
            itemDiv.querySelector('button').addEventListener('click', () => {
                carrinho.push(item);
                cartCount.textContent = carrinho.length;
            });
            container.appendChild(itemDiv);
        });
    });

    // Mostrar tudo inicialmente
    categorias.forEach(id => {
        document.getElementById(id).style.display = 'block';
    });

    // Filtro por categoria
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target');

            categorias.forEach(id => {
                const secao = document.getElementById(id);
                secao.style.display = (id === targetId) ? 'block' : 'none';
            });

            // Scroll suave para a seção
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // MENU HAMBURGER (mobile)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navList = document.getElementById('main-nav-list');

    hamburgerBtn.addEventListener('click', () => {
        const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !expanded);
        navList.classList.toggle('active'); // você precisa ter esse estilo no CSS
    });
});
