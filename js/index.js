/*
quando clicar no pokemon da listagem tem que esconder o cortao do pokemon aberto e mostrar o cartao correspondente ao selecionado na listagem

para isso vamos precisar trabalhar com 02 elementos
1-listagem 
2-cartao pokemon

precisamos criar 02 variveis js para trabalhar com os elementos na tela

vamos precisar trabalhar com o efeito de clique feito pelo usuariona listagem dos pokemons

-remover classe aberto so do cartao que estiver aberto

-ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar

-remover a classe ativa que marca o pokemon selecionado

-adicionar a classe ativo no pokemon selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => { 
    
    
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')  

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})
