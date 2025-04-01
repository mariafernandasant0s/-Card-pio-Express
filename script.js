// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    const cartCountElement = document.getElementById('cart-count');

    // --- Estado do Carrinho (com localStorage) ---
    let cart = JSON.parse(localStorage.getItem('menuCart')) || {};
    let cartItemCount = 0;

    function saveCart() {
        localStorage.setItem('menuCart', JSON.stringify(cart));
    }

    // --- LÓGICA PARA MENU HAMBURGER ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navElement = document.querySelector('nav'); // A tag <nav>
    const navList = document.getElementById('main-nav-list'); // A lista <ul>

    if (hamburgerBtn && navElement && navList) {
        hamburgerBtn.addEventListener('click', () => {
            navElement.classList.toggle('nav-active'); // Adiciona/remove classe na <nav>
            const isExpanded = navElement.classList.contains('nav-active');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
            hamburgerBtn.setAttribute('aria-label', isExpanded ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
        });

        // Fecha o menu ao clicar em um link (para navegação na mesma página)
        navList.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navElement.classList.remove('nav-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                hamburgerBtn.setAttribute('aria-label', 'Abrir menu de navegação');
            }
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!navElement.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                if (navElement.classList.contains('nav-active')) {
                    navElement.classList.remove('nav-active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                    hamburgerBtn.setAttribute('aria-label', 'Abrir menu de navegação');
                }
            }
        });

    } else {
        console.warn("Elementos do menu hamburger não encontrados.");
    }
    // --- FIM LÓGICA MENU HAMBURGER ---

    // --- Função para criar o HTML de um item do menu (Componente) ---
    function createMenuItemHTML(item) {
        if (!item || !item.id || !item.name || !item.price || !item.imageSrc || !item.imageAlt) {
            console.warn('Item de menu inválido:', item);
            return '';
        }
        const quantityInCart = cart[item.id] || 0;
        const buttonText = quantityInCart > 0 ? `Adicionado (${quantityInCart})` : 'Adicionar ao Carrinho';
        const buttonClass = quantityInCart > 0 ? 'add-to-cart-btn added' : 'add-to-cart-btn';

        return `
            <article class="menu-item" data-id="${item.id}" data-tags="${item.tags ? item.tags.join(' ') : ''}">
                <img src="${item.imageSrc}" alt="${item.imageAlt}" loading="lazy">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="preco">R$ ${item.price}</p>
                <button class="${buttonClass}"
                        data-id="${item.id}"
                        aria-label="Adicionar ${item.name} ao carrinho">
                    ${buttonText}
                </button>
            </article>
        `;
    }

    // --- Função para renderizar todos os itens do menu ---
    function renderMenu(data) {
        if (!menuContainer) {
            console.error("#menu-container não encontrado.");
            return;
        }
        const containers = {
            entradas: menuContainer.querySelector('#entradas .menu-category'),
            'pratos-principais': menuContainer.querySelector('#pratos-principais .menu-category'),
            sobremesas: menuContainer.querySelector('#sobremesas .menu-category')
        };

        Object.values(containers).forEach(container => {
            if (container) container.innerHTML = '';
            else console.error("Container de categoria não encontrado!");
        });

        if (!data || data.length === 0) {
             console.warn("Nenhum dado de menu para renderizar.");
             return;
        }

        data.forEach(item => {
            const container = containers[item.category];
            if (container) {
                const itemHTML = createMenuItemHTML(item);
                if (itemHTML) container.insertAdjacentHTML('beforeend', itemHTML);
            } else {
                console.warn(`Container para categoria "${item.category}" não encontrado. Item: ${item.name}`);
            }
        });
    }

    // --- Função para atualizar a contagem no ícone do carrinho ---
    function updateCartCountDisplay() {
        cartItemCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
        if (cartCountElement) {
            cartCountElement.textContent = cartItemCount;
             const summary = cartCountElement.closest('.cart-summary');
             if (summary && cartItemCount > 0 && document.body.contains(summary)) { // Só pisca se adicionou algo e existe
                if (!summary.classList.contains('updating')) { // Evita piscar repetido rápido
                    summary.classList.add('updating');
                    summary.style.transition = 'none';
                    summary.style.backgroundColor = '#e67e22';
                    summary.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        summary.style.transition = 'background-color 0.3s ease, transform 0.2s ease';
                        summary.style.backgroundColor = '#e74c3c';
                        summary.style.transform = 'scale(1)';
                        summary.classList.remove('updating');
                    }, 200);
                 }
             }
        }
    }

    // --- Função para lidar com o clique no botão "Adicionar ao Carrinho" ---
    function handleAddToCartClick(event) {
        const button = event.target.closest('.add-to-cart-btn');
        if (button) {
            const itemId = button.dataset.id;
            if (!itemId) return;
            cart[itemId] = (cart[itemId] || 0) + 1;
            saveCart();
            updateCartCountDisplay();
            button.textContent = `Adicionado (${cart[itemId]})`;
            button.classList.add('added');
        }
    }

    // --- Inicialização ---
    if (typeof menuData !== 'undefined') {
        renderMenu(menuData);
    } else {
        console.error("Dados do menu (menuData) não encontrados. Verifique menu-data.js.");
        if (menuContainer) menuContainer.innerHTML = "<p style='color: red; text-align: center;'>Erro ao carregar o cardápio.</p>";
    }
    updateCartCountDisplay(); // Atualiza contagem inicial

    if (menuContainer) {
        menuContainer.addEventListener('click', handleAddToCartClick);
    }

}); // Fim do DOMContentLoaded