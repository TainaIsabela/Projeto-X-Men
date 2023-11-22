/* O que precisamos fazer? - aopassar o mouse em cima do personagem na lista temos que adcionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado
    
    Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo 
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse 
        passo 3 - verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele

    Obejtivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a decrição do personagem grande 
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande 
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande 

*/


// Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo 
//         passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

//console.log('olá') vai ser escrito no console da página web

//const itemCiclope = document.getElementById('ciclope');
//console.log(itemCiclope);

const personagens = document.querySelectorAll('.personagem');//metodo, abri e fecha parenteses. dentro do parenteses passa o que o método pedi. nesse caso, passa pra dentro uma tag, uma classe, aí irá buscar todos os elementos que tem a classe personagem.


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse 
// personagens.addEventeListener('click', () => {
//     console.log('clicou')
// });

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
       if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
       }
       
        // passo 3 - verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele
        if (document.querySelector('.selecionado') != null) {
            removerSelecaoDoPersonagem();
        }

        personagem.classList.add('selecionado');

        
        // Obejtivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a decrição do personagem grande 
        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            

        // passo 2 - alterar a imagem do personagem grande 
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src =  `./src/img/card-${idPersonagem}.png`;

        //passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);


        //passo 4 - alterar a descrição do personagem grande 
        alterarDescricaoPersonagem(personagem);



    })

}) // forEach é um laço 




function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    console.log(personagem.getAttribute('data-description'));
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
