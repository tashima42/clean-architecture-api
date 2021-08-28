
# Clean architecture concept API
Essa API é uma aplicação do conceito da [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), o objetivo dela é integrar deals do Pipedrive no Bling, salvar eles em um banco de dados e dar acesso as informações deles por uma interface REST.

![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg) 
## Camadas
As diferentes camadas da aplicação e pra que elas servem. A Clean Architecture tem uma opinião muito forte sobre a dependência de camadas. Uma camada só pode depender de outra mais interna que ela. Isso não quer dizer que elas não podem interagir, elas devem fazer isso, mas uma camada mais interna que outra não precisa nem deve conhecer nada sobre a implementação de uma camada mais externa. 
### Entidades
As [Entidades](https://github.com/Tashima42/clean-architecture-api/tree/main/src/entities) são o ponto central dessa API, elas são completamente independentes do resto da aplicação, elas contém as regras de negócio que dificilmente serão alteradas e podem ser reaproveitadas, inclusive por aplicações totalmente diferentes.
### Use Cases
Os [Use Cases](https://github.com/Tashima42/clean-architecture-api/tree/main/src/use-cases) contém regras específicas dessa aplicação, eles controlam os dados que entram e saem das entidades Entidades. 
Aqui, nenhuma dependência de tecnologia existe, ou seja, nenhum desses casos de uso pode estar atrelado a, por exemplo, um banco de dados específico. Ele pode interagir com um banco de dados, mas sem depender dele.
### Controllers
Os [Controllers](https://github.com/Tashima42/clean-architecture-api/tree/main/src/controllers) são a interface da aplicação com o mundo externo, eles controlam os dados que entram e saem, servindo com adaptadores. Até essa camada, nenhuma inferior sabia que o estilo arquitetural de acesso aos dados seria REST, elas não precisavam se preocupar com isso. Os Controllers adaptam todos os dados que vem de fora pra um formato que as camadas inferiores entendem e faz o mesmo com os dados que vem delas para o mundo exterior.
### Providers
Os [Providers](https://github.com/Tashima42/clean-architecture-api/tree/main/src/providers) são dependências externas, nesse caso, APIs REST que fazem consultas e escritas. Essas APIs estão encapsuladas pra que possam ser inejetadas nos casos de uso, usando o conceito de [Injeção de dependências](https://martinfowler.com/articles/injection.html). Isso é feito pra tornar o resto do sistema mais resiliente a mudanças. Se um método que busca uma informação sofre uma mudança por parte de uma provider, a mudança precisa ser feita apenas nessa camada, preservando todas as outras abaixo dela.
### Repositories
Os [Repositories](https://github.com/Tashima42/clean-architecture-api/tree/main/src/repositories) funcionam de uma maneira muito parecida com os Providers, eles encapsulam as interações com o banco de dados, deixando uma interface padrão, o que desacopla a tecnologia usada para o banco de dados do resto da aplicação.

## Outros padrões
### Ice factory
O padrão [Ice Factory](https://dev.to/billsourour/elegant-patterns-in-modern-javascript-icefactory-3k5h) é amplamente utilizado nessa aplicação, um exemplo são os [Repositories](https://github.com/Tashima42/clean-architecture-api/blob/main/src/repositories/OpportunityRepository.js) esse pattern oferece uma maneira simples de agrupar funções,  funções privadas, facilita composição de objetos e também injeção de dependências.
### Conventional commits
O [Coventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) é um padrão utilizado pra escrever mensagens de [commits](https://github.com/Tashima42/clean-architecture-api/commits/main?before=c133904f91af86a6c703403eb5f972d87adb7c77+35&branch=main)  que melhoram a legibilidade. 

## Desenvolvimento

**Rodando localmente**

1. Instale as dependências: `npm install`
1. Crie um arquivo `.env` com base no `.env.example` e preencha as informaçãoes necessárias
1. Inicie o servidor local: `npm run dev`

**Testando localmente**

1. Rode testes com `npm run test`
Observações: Esse conceito tinha um prazo pra ser feito e por esse motivo escolhi não usar o TDD. Por isso, nem todos os componentes tem testes automatizados e nem testes de integração.



