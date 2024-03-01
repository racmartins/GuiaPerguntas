# Projeto de Redes de Comunicação Guiado e Particionado em várias Fichas de trabalho

Este projeto faz parte das atividades da disciplina de Redes de Comunicação do 2º ano do Curso Profissional de Programação. O projeto é composto por quatro fichas de trabalho e utiliza sistemas de gestão de bases de dados para armazenar informações. Inicialmente, o SQLite é empregue, mas à medida que o projeto evolui, adota-se o Sequelize juntamente com o MySQL2 para uma gestão de dados mais robusta.

## Objetivo

O objetivo das 4 fichas de trabalho é avançar na construção de uma aplicação web dinâmica, utilizando Node.js como plataforma de desenvolvimento.
Neste segmento, os alunos irão solidificar suas habilidades em:
- Configuração do Ambiente de Desenvolvimento: Onde aprenderão a configurar corretamente o ambiente para o desenvolvimento de aplicações web, incluindo a instalação de NodeJS, Express e EJS.
-	Roteamento Básico: Aprofundarão o conhecimento sobre o roteamento no Express, implementando rotas básicas e compreendendo os métodos HTTP GET e POST.
-	Uso do Template Engine EJS: Desenvolverão a capacidade de criar e manipular templates EJS para a renderização dinâmica do conteúdo.
-	Implementação de Recursos Estáticos e Estilização: Focarão na utilização correta de arquivos estáticos e aplicarão estilos utilizando Bootstrap para aprimorar a interface do utilizador.
-	Formulários e Codificação de URL: Serão capazes de integrar formulários na aplicação e processar os dados recebidos.
-	Funcionalidades Adicionais: Serão estimulados a adicionar funcionalidades extras, como interações com bases de dados ou APIs externas.
-	Qualidade do Código e Documentação: Deverão manter um alto padrão de organização, legibilidade e documentação do código-fonte, incluindo comentários explicativos para facilitar a manutenção e compreensão do código.
-	Adicionalmente, as fichas de trabalho promovem o uso do VS Code para o desenvolvimento, e o nodemon para agilizar o processo de teste ao reiniciar automaticamente a aplicação durante o desenvolvimento. Salienta-se a importância de seguir as instruções passo a passo, manter uma estrutura organizada de diretórios e arquivos, e garantir que a aplicação funcione corretamente após cada modificação. Boas práticas de codificação e documentação são também enfatizadas, e espera-se que os alunos completem as fichas durante a aula e que submetam capturas de ecrã das suas ações de teste para avaliação.


## Tarefas

-	Criação do projeto inicial, estabelecendo uma base sólida para o desenvolvimento com Node.js e o framework Express.
-	Instalação dos pacotes necessários, incluindo Express para a construção do servidor, EJS para a renderização de templates e Bootstrap 5 para o design responsivo e moderno da interface do utilizador.
-	Configuração do middleware no Express para permitir o uso de arquivos estáticos, como imagens, CSS e JavaScript, facilitando a organização e a manutenção dos recursos do lado do cliente.
-	Criação das rotas iniciais `/` e `/perguntar`, que são essenciais para o fluxo de navegação do usuário, permitindo que eles vejam a página inicial e tenham a capacidade de fazer perguntas.
-	Execução do servidor Express para servir a aplicação, ouvindo as solicitações HTTP e respondendo a elas de maneira adequada.
-	Conclusão do Projeto:
  -	Integração com um sistema de gestão de bases de dados, começando com SQLite para operações de armazenamento de dados leves e migrando para Sequelize e MySQL2 para uma abordagem mais robusta e escalável.
  -	Implementação de funcionalidades mais avançadas, como autenticação de utilizador, sessões, e interações mais complexas com a base de dados.
  -	Desenvolvimento de uma interface de utilizador interativa e amigável com a ajuda do Bootstrap 5, garantindo que a aplicação seja acessível e agradável de usar em diferentes dispositivos e tamanhos de ecrã.
  -	Testes abrangentes para garantir a funcionalidade, segurança e desempenho da aplicação, corrigindo quaisquer bugs e refinando a experiência do utilizador.
  -	Documentação completa do projeto, incluindo comentários de código e instruções de uso, para facilitar a manutenção futura e a contribuição de outros programadores.
  -	Deployment da aplicação num ambiente de produção, utilizando serviços de hospedagem adequados e configurando todo o necessário para que a aplicação esteja disponível publicamente na web.


## Execução do Projeto

1. Certifique-se de ter o Node.js instalado no seu sistema.
2. Clone este repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
3. Navegue até ao diretório do projeto: `cd seu-projeto`
4. Instale as dependências: `npm install`
5. Execute o servidor: `node index.js`
6. Aceda ao projeto no seu navegador: `http://localhost:8080`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork deste projeto e enviar as suas sugestões através de pull requests.
