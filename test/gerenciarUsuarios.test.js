const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expert, expect } = require('Chai');

describe('testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo usuário na lista', function () {
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario('Maria');

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();
        
        //3. Comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');

    });
})