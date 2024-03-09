# language: pt
Funcionalidade: Cadastro de Empresas

  Contexto: 
    Dado cliquei no menu 'Cadastros'
    E cliquei no primeiro sub-menu 'Empresas'
    E cliquei no segundo sub-menu 'Grupo Empresarial'

  Cenário: Cadastro de empresa bem Bem-Sucedido
    Quando clico no botão 'Novo' na tela Grupo Empresarial
    E preencho o campo 'RazaoSocial' com o valor 'Empresa 01'
    E preencho o campo 'Fantasia' com o valor 'Empresa Fantasia'
    E preencho o campo 'CNPJ' com o valor 'valor'
    E armazeno o identificador do cadastro
    E clico no botão 'Salvar' na tela Grupo Empresarial
    Então vejo a mensagem de Salvo com sucesso

  Cenário: Edição de cadastro de Empresa
    Quando clico no botão 'Filtrar' 
    E clico no registro filtrado
    E preencho o campo 'Fantasia' com o valor 'Editado, check!'
    E preencho o campo 'CNPJ' com o valor 'valor'
    E clico no botão 'Salvar' na tela Grupo Empresarial
    Então vejo a mensagem de Salvo com sucesso

  Cenário: Exclusão de cadastro de Empresa
    Quando clico no botão 'Filtrar' 
    E clico no registro filtrado
    E excluo o registro

