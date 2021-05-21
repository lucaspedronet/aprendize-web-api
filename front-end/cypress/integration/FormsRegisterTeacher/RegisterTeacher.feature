Funcionalidade: Criar um registro do tipo professor
	Eu como professor de uma disciplina qualquer (finanças)
  quero poder realizar o meu cadastro
  para que eu consiga realizar meu login e utilizar a plataforma

Cenário: Validar nome inválido
	Dado que o nome do professor não está preenchido
	Quando eu clicar no botão salvar
	Então devo ver a mensagem: "Informe os dados obrigatórios."
    E o campo nome deve estar em destaque

Cenário: Validar CPF do professor
	Dado que o campo CPF está preenchido corretamente
	Quando eu clicar no botão salvar
	Então os dados devem ser enviados para a API
	E devo receber o status code <statusCode> da API
    E devo exibir a mensagem: <msgRetornadaDaApi>

    Example: Exemplos de retorno
    |statusCode | msgRetornoDaApi                              |
    |   201     | Registro de professor realizado com sucesso. |
    |   500     | Problemas ao realizar alteração.             |
