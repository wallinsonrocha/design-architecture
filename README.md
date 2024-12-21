# Arquitetura de Projetos - App

Este é um aplicativo de arquitetura que exibe serviços e projetos personalizados para clientes. Através de uma interface intuitiva, os usuários podem explorar diferentes projetos residenciais e comerciais, visualizando galerias e imagens relacionadas aos serviços oferecidos. O app é construído com **Next.js** e usa a **API do Pixabay** para exibir imagens relacionadas aos serviços de arquitetura.

## Funcionalidades

1. **Serviços Personalizados**: Apresenta os diferentes tipos de serviços de arquitetura, como **Projetos Residenciais** e **Projetos Comerciais**.
2. **Galerias Interativas**: Mostra imagens interativas dos projetos, onde o usuário pode visualizar as imagens principais dos serviços e selecionar miniaturas para explorar diferentes fotos.
3. **Integração com a API do Pixabay**: As imagens são carregadas dinamicamente da **Pixabay API**, oferecendo uma ampla variedade de fotos para visualizar os projetos de arquitetura.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e construção de páginas dinâmicas.
- **React**: Biblioteca JavaScript para construir a interface de usuário.
- **Axios**: Cliente HTTP usado para fazer requisições para a API do Pixabay.
- **Tailwind CSS**: Framework CSS utilizado para o estilo da interface.
- **Pixabay API**: API usada para buscar e exibir imagens relacionadas aos serviços de arquitetura.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

Instale as dependências do projeto:

```bash
npm install
```

### 3. Definir a chave da API

Para acessar a API do Pixabay, crie uma conta em [Pixabay](https://pixabay.com/) e obtenha sua chave de API. Após obter a chave, defina-a como variável de ambiente:

```bash
NEXT_PUBLIC_KEY_API_PIXABAY=SuaChaveAqui
```

### 4. Rodar o servidor de desenvolvimento

Agora, execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `pages/`: Contém os arquivos de página principais, como a `Home`, onde os serviços e galeria de projetos são exibidos.
- `components/`: Contém componentes reutilizáveis como o `Gallery`, responsável pela galeria interativa de imagens.
- `styles/`: Contém o arquivo de estilo global para o projeto.

## Como Funciona

1. O componente `Home` apresenta os serviços de arquitetura.
2. O componente `Galery` carrega as imagens de serviços específicos via chamada para a API do Pixabay.
3. O usuário pode explorar diferentes imagens dos projetos, com a opção de selecionar miniaturas ou visualizar as imagens maiores ao clicar nas fotos.
4. Ao visualizar a galeria expandida, as imagens podem ser abertas em um link externo.

## Melhorias Futuras

- Adicionar a possibilidade de personalizar a busca de imagens por tipo de ambiente ou projeto.
- Implementar uma tela de contato para potenciais clientes interessados nos serviços.
- Melhorar o desempenho da galeria utilizando técnicas de lazy loading para imagens.
