# Calculadora de Horas Trabalhadas (Relógio de Ponto)

Calculadora de Horas Trabalhadas (Relógio de Ponto) desenvolvida com [Electron](https://www.electronjs.org), [React JS](https://pt-br.reactjs.org), [TypeScript](https://www.typescriptlang.org/pt/) e [Styled Components](https://styled-components.com).

Baseado no boilerplate desenvolvido por Diego Fernandes, disponível [aqui](https://github.com/diego3g/electron-typescript-react).

<hr>

## Instalação

OBS: É necessário ter o [Node.js](https://nodejs.org/pt-br/) e o [Yarn](https://yarnpkg.com) instalado em sua máquina.

Clone o repositório para sua máquina e, em seguida, execute o seguinte comando:

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

### Windows (32bits e 64bits)

```bash
yarn dist:windows
```

### Windows (ARM 64bits)

```bash
yarn dist:windows-arm
```

### MacOS (Intel)
(OBS: Necessário estar em uma máquina com MacOS)

```bash
yarn dist:mac
```

### MacOS (Apple Silicon)
(OBS: Necessário estar em uma máquina com MacOS)

```bash
yarn dist:mac-arm
```

### Linux (32bits e 64bits)
(Utilizando uma máquina com Linux ou MacOS)

```bash
yarn dist:linux
```

### Linux (ARM 64bits)
(Utilizando uma máquina com Linux ou MacOS)

```bash
yarn dist:linux-arm
```

OBS: Para criar o instalador para Linux utilizando uma máquina com Windows, siga os passos abaixo:

1 - Instale o [Docker](https://docs.docker.com/get-docker/).

2 - Execute o seguinte comando pelo PowerShell:

```bash
docker pull electronuserland/builder
```

3 - Execute o seguinte comando com o caminho da pasta raíz do projeto para inicializar o container:

```bash
docker run --rm -ti -v C:\<caminho-da-pasta-do-projeto>\:/project -w /project electronuserland/builder
```

4 - Abra o Docker, inicie o terminal do container e digite os seguintes comandos:

```bash
cd /project
yarn upgrade
yarn global add electron-builder
yarn dist:linux <ou> yarn dist:linux-arm
```

5 - O arquivo será criado na pasta `dist`.

<hr>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
