

# Clean architecture concept API
Essa API é uma aplicação do conceito da [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), o objetivo dela é integrar integrar dois serviços, o CRM [Pipedrive](https://www.pipedrive.com/pt) e o ERP [Bling](https://www.bling.com.br/) quando um deal é marcado como ganho no Pipedrive, ele deve ser salvo em um banco de dados e enviado para o Bling como um pedido. Todos os deals salvos no banco podem ser consultados.
![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Esse projeto segue esses 5 princípios: 
1. Independente de Frameworks. Não depende da existência de uma biblioteca ou software. Isso permite o uso de frameworks como ferramentas, ao invés de limitações
2. Testável. As regras de negócio podem ser testadas sem a UI, Banco de dados, Web Server ou qualquer outro elemento. 
3. Independende da UI. A UI pode ser facilmente alterada, sem mudar nada do restante do sistema. Uma UI Web HTTP pode ser trocada por uma Console UI sem alterar nenhuma das regras de negócio. 
4. Independente de um Banco de dados. O Banco de dados pode ser alterado sem problemas, seja ele Oracle, SQL Server, Mongo, etc. As regras de negócio não estão ligadas ao Banco de Dados. 
5. Independente de agentes externos. As regras de negócio não conhecem nada sobre o mundo externo. 

## Camadas
A Clean Architecture tem uma opinião muito forte sobre a separação entre camadas. Uma camada só pode depender de outra mais interna que ela. Isso não quer dizer que elas não podem interagir, elas devem fazer isso, mas uma camada mais interna que outra não precisa nem deve conhecer nada sobre a implementação de uma camada mais externa. Por exemplo, um **Use Case** pode usar um banco de dados, que está na camada mais externa da arquitetura, porém ele jamais pode depender de um banco de dados específico, como o MongoDB, ou o PostgresSQL, o **Use Case** sabe que está chamando um método que vai persistir dados, mas ele não pode saber onde ou como esses dados estão sendo salvos.  
### Entidades (Enterprise Business Rules)
As [Entidades](https://github.com/Tashima42/clean-architecture-api/tree/main/src/entities) são o ponto central dessa API, elas são completamente independentes do resto da aplicação, nelas estão as regras de negócio que dificilmente serão alteradas e podem ser reaproveitadas sem se preocupar com mudanças de protocolos, serviços externos, etc. 
### Use Cases (Application Business Rules)
Os [Use Cases](https://github.com/Tashima42/clean-architecture-api/tree/main/src/use-cases) contém regras específicas dessa aplicação, eles controlam os dados que entram e saem das entidades **Entidades**. Os fluxos de negócio devem ficar aqui, um dos casos feitos nessa aplicação, é o de procurar deals ganhos em um serviço, persistir eles em um banco de dados e os integrar em outro serviço. Esse caso de uso tem uma dependência de negócio em dois serviços externos, o Pipedrive e o Bling, porém, técnicamente ele não depende de nenhuma API específica deles. O Pipedrive pode atualizar a API e mudar como os campos de retorno são chamados, mas desde que ainda seja possível acessar as mesmas informações, esse **Use Case** não vai sofrer nenhuma alteração.
### Controllers (Interface Adapters)
Os [Controllers](https://github.com/Tashima42/clean-architecture-api/tree/main/src/controllers) são a interface da aplicação com o mundo externo, eles controlam os dados que entram e saem, servindo com adaptadores. Até essa camada, nenhuma inferior sabia que seriam acessadas pela internet, usando HTTP, elas não precisavam se preocupar com isso. Os **Controllers** adaptam todos os dados que vem de fora pra um formato que as camadas inferiores entendem e faz o mesmo com os dados que vem delas para o mundo exterior. Com essa camada, é possível alterar totalmente a interface de acesso e criar uma CLI em vez de uma API REST.
### Providers (Frameworks & Drivers)
Os [Providers](https://github.com/Tashima42/clean-architecture-api/tree/main/src/providers) são dependências externas, nesse caso, APIs REST que fazem consultas e escritas. Essas APIs estão encapsuladas pra que possam ser inejetadas nos casos de uso, usando o conceito de [Injeção de dependências](https://martinfowler.com/articles/injection.html). Isso é feito pra tornar o resto do sistema mais resiliente a mudanças. Se um desses **Providers** sofrer alguma alteração, como uma mudança de versão, troca de nomes de campos, etc. Apenas essa camada precisa ser alterada, preservando todas as outras de mudanças. 
Como os **Providers** são totalmente desacoplados, eles facilitam testes automatizados, ja que é muito simples de os substituir por [fixtures](https://github.com/Tashima42/clean-architecture-api/tree/main/test/fixtures), métodos que retornam as mesmas informações que os métodos normalmente retornariam, mas sem necessariamente precisar acessar eles. 
### Repositories (Frameworks & Drivers)
Os [Repositories](https://github.com/Tashima42/clean-architecture-api/tree/main/src/repositories) funcionam de uma maneira muito parecida com os Providers, eles encapsulam as interações com o banco de dados, deixando uma interface padrão, o que desacopla a tecnologia usada para o banco de dados do resto da aplicação. Se um dia for necessário trocar o banco de dados, todo o resto da aplicação está protegido, seria necessário alterar apenas os métodos que estão nos **Repositories**.

## Outros padrões
### Ice factory
O padrão [Ice Factory](https://dev.to/billsourour/elegant-patterns-in-modern-javascript-icefactory-3k5h) é amplamente utilizado nessa aplicação, um exemplo são os [Repositories](https://github.com/Tashima42/clean-architecture-api/blob/main/src/repositories/OpportunityRepository.js) esse pattern oferece uma maneira simples de agrupar funções, ter funções privadas e facilita composição de objetos e também injeção de dependências. Ele consiste em ter uma função que tem todas as funções do mesmo grupo  declaradas dentro dela e retornar um objeto com esssas funções.
### Conventional commits
O [Coventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) é um padrão utilizado pra escrever mensagens de [commits](https://github.com/Tashima42/clean-architecture-api/commits/main?before=c133904f91af86a6c703403eb5f972d87adb7c77+35&branch=main)  que melhoram a legibilidade, fica claro na mensagem qual foi o tipo da alteração, onde ela foi feita e o que fez.

## Desenvolvimento

**Rodando localmente**

1. Instale as dependências: `npm install`
1. Crie um arquivo `.env` com base no `.env.example` e preencha as informaçãoes necessárias
1. Inicie o servidor local: `npm run dev`

**Testando localmente**

1. Rode testes com `npm run test`
Observações: Esse conceito tinha um prazo pra ser feito e por esse motivo escolhi não usar o TDD. Por isso, nem todos os componentes tem testes automatizados e nem testes de integração.
