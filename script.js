// 1. Navegação com rolagem suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Extrai o ID da seção
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 20, // Ajuste de 20px para a parte superior
            behavior: 'smooth'
        });

        // Chama a função highlightSelected após o clique
        highlightSelected(this.closest('.nav-item'), targetElement); // Passa o item de navegação e o alvo para a função
    });
});

// 2. Efeito de fade-in nos álbuns
const albums = document.querySelectorAll('.album');
window.addEventListener('scroll', () => {
    albums.forEach(album => {
        const albumTop = album.getBoundingClientRect().top;
        if (albumTop < window.innerHeight - 100) {
            album.classList.add('fade-in');
        }
    });
});

// 3. Função para adicionar a classe 'selected' ao item de navegação e ao álbum correspondente
function highlightSelected(navItem, targetElement) {
    // Remove a classe 'selected' de todos os itens de navegação e de todas as seções
    let items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
        item.classList.remove('selected');
    });
    let albums = document.querySelectorAll('.album');
    albums.forEach(album => {
        album.classList.remove('selected'); // Remove de todos os álbuns
    });

    // Adiciona a classe 'selected' no item de navegação e no álbum clicado
    navItem.classList.add('selected');
    targetElement.classList.add('selected'); // Destaca o álbum ou seção correspondente
}
