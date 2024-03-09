import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import EmpresasPageActions from '../../../PageObjects/PageActions/EmpresasPageActions';


When("clico no botão {string} na tela Grupo Empresarial", (nomeBotao) => {
    EmpresasPageActions.clickBotao(nomeBotao);
});

When("preencho o campo {string} com o valor {string}", (nomeCampo, valor) => {
    EmpresasPageActions.preencherCampo(nomeCampo, valor);
});

When("armazeno o identificador do cadastro", () => {
    EmpresasPageActions.armazenarRazaoSocial();
});

Then("vejo a mensagem de Salvo com sucesso", () => {
    EmpresasPageActions.verificarMensagemSucesso();
});

When("clico no botão {string}", () => {
    EmpresasPageActions.filtrarTabela();
});

When("clico no registro filtrado", () => {
    EmpresasPageActions.clicarNoCadastroFiltrado();
});

When("excluo o registro", () => {
    EmpresasPageActions.excluirRegistro();
});