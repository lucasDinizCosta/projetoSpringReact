# projetoSpringReact
Curso Semana Spring React 6 -- Dev Superior
- https://devsuperior.com.br/
- https://github.com/devsuperior/sds-dsmovie

Distribuições gratuitas do java jdk:
- Java JDK adopt
- Java JDK Zulu

priorizar por baixar as versões LTS pois o suporte é pra longo prazo

## Extensões VSCode:
- Color Highlight
- ESLint
- JSX HTML <tags />
- Live Server
- Visual Studio IntelliCode

## Ferramentas Auxiliares:
- Figma: Site que auxilia montar o design da aplicação, desde o tamanho dos elementos até exportar as imagens.
- `https://start.spring.io/` : Site que cria o Spring Boot Initializr com os parametros determinados

## Links do Figma com o design da aplicacao:
- https://www.figma.com/file/ZcVPdZTjsE5vZ69rb5Hbuj/DSMovie1-(Copy)?node-id=0%3A1


Comandos:
- `java -version` ==> Verifica as versões do java instaladas
- `node -v` ==> Checa a versão do nodeJS instalado
- `yarn -v` ==> Checa a versão do nodeJS instalado
- `yarn create react-app frontend --template typescript` ==> Cria o projeto react com o template usando typescript na pasta frontend
- `yarn start` ==> Executa o projeto
- `yarn add react-router-dom@6.2.1 @types/react-router-dom@5.3.2` ==> Instalação da biblioteca que ajuda na construção das rotas dentro do site


## Anotações:
- Segmentação de criação do projeto:
  - Frontend:
    - Implementação:
      - HTML;
      - CSS;
      - Javascript;
      - Bootstrap;
      - React;
    - Hospedagem:
      - Netlify;
    - Link: https://lucas-dsmovie-portfolio.netlify.app/
  - Backend:
    - Implementação:
      - Java (versão 17 -- Azul Zulu Builds of OpenJDK);
      - Spring Boot (STS v4.13.0);
      - PostgreSQL 12 e pgAdmin 4 (Banco de dados);
    - Hospedagem:
      - Heroku;
    - Link: https://lucas-dsmovie-portfolio.herokuapp.com/
  - Outras ferramentas:
    - Git (Versionamento do projeto);
      - Armazenado no github;
    - Postman (Utilizar envios REST com HTTP para testar a aplicação);
    - VSCode (Editor de texto);
- Requisições feitas no postman:
  - Requisições GET:
    - Movies: Filtra na primeira pagina com 12 elementos
      - http://localhost:8090/movies?size=12&page=0
    - Movie by id: Pega o filme 1 a partir do id dele
      - http://localhost:8090/movies/1
  - Requisições PUT:
    - Score: Adicionar uma nota de avaliação para um filme
      - Corpo da requisição do formulário JSON:
```JSON
{
    "movieId": 1,
    "email": "rodrigo@gmail.com",
    "score": 5
}
```
- O banco de dados utilizados em memória para testar a parte do backend é o 'h2'
- As configurações dele são adicionadas em modo test em application.properties e são 'spring.profiles.active=test' para teste
- Erro na ferramenta de Spring Boot: "Identify and stop the process that's listening on port 8080 or configure this application to listen on another port."
  - Uma alternativa é trocar a porta que utiliza, por exemplo, no arquivo <i>application.properties</i> adicionar a linha `server.port = 8090` para utilizar a porta `8090` ao inv´pes da padrão que é a `8080`
- URL para acessar o banco de dados com o 'h2': `http://localhost:8090/h2-console`
  - Na tela de login do 'h2' colocar os mesmos dados presente no arquivo `application-test.properties`
  - O banco de dados 'h2' é atualizado automaticamente de acordo com o que estiver no script `import.sql`
  - Consulta com 12 elementos no Spring com REST: `http://localhost:8090/movies?size=12` 
  - Mudando a pagina(da pagina 0 para a 1) na consulta Spring com REST: `http://localhost:8090/movies?size=12&page=1`
  - Buscando um movie especifico no Spring com REST: `http://localhost:8090/movies/2`
- Erro grave no PostgreSQL:
  - `could not connect to server: Connection refused (0x0000274D/10061) Is the server running on host "localhost" (::1) and accepting TCP/IP connections on port 5433? could not connect to server: Connection refused (0x0000274D/10061) Is the server running on host "localhost" (127.0.0.1) and accepting TCP/IP connections on port 5433?`
    - Verifique no arquivo `postgresql.conf` se o comando `port` está com o mesmo valor da configuração dentro do `pgAdmin` em Servers/PostgreSQL (Apertar botão direito do mouse, ir properties e ir em connection e verificar a port). Caso estiver diferente, coloque o mesmo valor da porta e caso for iguais, tente mudar ambos os valores para ver se o erro desaparece.
    - Pressione a tecla <b>win+R</b> Procure por `services.msc` Uma janela será aberta para encontrar `postgresql-x64-13` e abra pare o processo e inicie novamente
    - Arquivos extremamente importantes para ficar de olho caso der erros:
      - `postgresql.conf`
      - `pg_hba.conf`
  - Quando houver erros graves nas configurações do pgAdmin:
    - Remova todos os conteúdo presente na pasta `C:\Users\lucas\AppData\Roaming\pgAdmin` e inicie o pgAdmin novamente.
- Termos que representam a variável de ambiente `DATABASE_URL`:
  - postgres://
  - plfpwubcliczvr   ==> Nome do usuário
  - :
  - b5d919499ee80e3034639b3f997991fd6c965a05362a4fb9d139b85bdc4b94ce   ==> Senha do usuario
  - @
  - ec2-3-232-22-121.compute-1.amazonaws.com   ==> HOST de onde está hospedado o banco de dados
  - :
  - 5432   ==> Porta
  - /
  - d9ttli2a8nturs  ==> Nome da base de dados
- No postgres após configurar o HEROKU será necessário criar um outro servidor colocando as informações da variável de ambiente `DATABASE_URL` e no campo advanced colocar o nome da base de dados novamente.
  - A base sincronizada com o heroku não terá tabelas dos dados, para isso agora deve ser inserido os dados do script `create.sql` para que a base esteja com os dados
- O arquivo `system.properties` com a versão do java é EXTREMAMENTE importante para o HEROKU pois na hora que está fazendo 'subtree' ele faz o download de algumas bibliotecas com base nessa versão
- O arquivo `./public/_redirects` é fundamental para a parte frontend no Netlify pois ajuda o site a saber os redirecionamentos para formulário e outras páginas, do contrario sem ele, a pagina não saberá pra onde ser redirecionado ao clicar em um formulário, por exemplo.
- Para iniciar somente o frontend isoladamente basta estar com o terminal na pasta do frontend e executar `yarn start`