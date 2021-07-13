# Calculadora de Horas Trabalhadas (Relógio de Ponto)

Calculadora de Horas Trabalhadas (Relógio de Ponto) desenvolvido Electron, React JS, TypeScript e Styled Components.

Baseado no boilerplate desenvolvido por Diego Fernandes, disponível no [aqui](https://github.com/diego3g/electron-typescript-react).

<hr>

## Instalação

Clone o repositório para sua máquina e, em seguida, execute o seguinte comando:

OBS: É necessário ter o [Node.js](https://nodejs.org/pt-br/) e o [yarn](https://yarnpkg.com) instalado em sua máquina.

```bash
yarn
```

<hr>

## Execução

Para executar a aplicação, execute o comando abaixo:

```bash
yarn start
```

<hr>

## Exportação de Instaladores

Para gerar arquivos instaladores da aplicação, execute um dos seguintes comandos:

Os arquivos serão criados na pasta `dist`.

### Windows

```bash
yarn dist:windows
```

### MacOS
(OBS: Necessário estar em uma máquina com MacOS)

```bash
yarn dist:mac
```

### Linux
(Utilizando uma máquina com Linux ou MacOS)

```bash
yarn dist:linux
```

OBS: Para criar o instalador para Linux utilizando uma máquina com Windows, siga os passos abaixo:

1 - Instale o [Docker](https://docs.docker.com/get-docker/).

2 - Execute o seguinte comando pelo PowerShell:

```bash
docker pull electronuserland/builder
```

3 - Vá até a pasta do projeto:

```bash
cd C:\<caminho da pasta do projeto>
```

4 - Execute o seguinte comando para inciarlizar o container:

```bash
docker run --rm -ti -v C:\<caminho da pasta do projeto>\:/project -w /project electronuserland/builder
```

5 - Abra o Docker, inicie o terminal do container e digite os seguintes comandos:

```bash
cd /project
yarn upgrade
yarn global add electron-builder
yarn dist:linux
```

6 - O arquivo será criado na pasta `dist`.

<hr>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
