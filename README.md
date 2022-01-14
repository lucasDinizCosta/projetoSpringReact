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