# Calculadora de Horas Trabalhadas (Relógio de Ponto) - Versão Desktop

Calculadora de Horas Trabalhadas (Relógio de Ponto) desenvolvida com [Electron](https://www.electronjs.org), [React JS](https://pt-br.reactjs.org), [TypeScript](https://www.typescriptlang.org/pt/) e [Styled Components](https://styled-components.com).

<br>

Possui dois modos de funcionamento:

### 1 - Calcular o horário de saída:
Insira os horários de início da jornada, saída para intervalo, retorno do intervalo e o total de horas que deseja / precisa trabalhar. Baseado nesses dados, a aplicação irá calcular o horário de término da jornada.

<br>

### 2 - Calcular o total de horas trabalhadas:
Insira os horários de início da jornada, saída para intervalo, retorno do intervalo e término da jornada. A aplicação então calculará o total de horas trabalhadas.

<br>

Veja também a versão web [aqui](https://github.com/daniloribeiro00/calculadora-relogio-de-ponto-next).

<br>
<hr>
<br>

## Instalação:

OBS: É necessário ter o [Node.js](https://nodejs.org/pt-br/) e o [Yarn](https://yarnpkg.com) instalados em sua máquina.

Clone o repositório para sua máquina e, em seguida, execute o seguinte comando:

```bash
yarn
```

<br>
<hr>
<br>

## Execução:

Para executar a aplicação, execute o comando abaixo:

```bash
yarn start
```

<br>
<hr>
<br>

## Exportação de Instaladores:

Para gerar arquivos instaladores da aplicação, execute um dos seguintes comandos:

Os arquivos serão criados na pasta `/dist`.

<br>

### Windows:

- #### 32bits / 64bits

    ```bash
    yarn dist:windows
    ```

- #### ARM 64bits

    ```bash
    yarn dist:windows-arm
    ```

<br>

### MacOS:

(OBS: Necessário estar em uma máquina com MacOS)

- #### Intel 32 bits

    No momento, a criação de instaladores para Macs com processador Intel de 32 bits pelo Electron Builder encontra-se indisponível.

- #### Intel 64 bits

    ```bash
    yarn dist:mac
    ```

- #### Apple Silicon

    ```bash
    yarn dist:mac-arm
    ```

<br>

### Linux:

(Utilizando uma máquina com Linux ou MacOS)

- #### 32bits / 64bits

    ```bash
    yarn dist:linux
    ```

- #### ARM 64bits

    ```bash
    yarn dist:linux-arm
    ```

#### Observação:

- #### Criando instalador para Linux utilizando uma máquina com Windows:

    Infelizmente, devido à indisponibilidade do electron-build-service ([saiba mais](https://github.com/electron-userland/electron-build-service/issues/9)), para criar um instalador para Linux utilizando uma máquina com Windows siga os passos abaixo:

    1 - Instale o [Docker](https://docs.docker.com/get-docker/).

    2 - Execute o seguinte comando pelo PowerShell:

    ```bash
    docker pull electronuserland/builder
    ```

    3 - Execute o seguinte comando com o caminho da pasta raíz do projeto para inicializar o container:

    ```bash
    docker run --rm -ti -v C:\caminho-da-pasta-do-projeto\:/project -w /project electronuserland/builder
    ```

    4 - Abra o Docker, inicie o terminal do container e digite os seguintes comandos:

    ```bash
    cd /project
    yarn upgrade
    yarn global add electron-builder
    yarn dist:linux <-ou-> yarn dist:linux-arm
    ```

    5 - O arquivo será criado na pasta `/dist`.

<br>
<hr>
<br>

## Créditos:

Baseado no boilerplate desenvolvido por Diego Fernandes, disponível [aqui](https://github.com/diego3g/electron-typescript-react).

Solução para criação de instalados do Linux em máquinas com Windows disponibilizada por Darkseal [aqui](https://github.com/electron-userland/electron-build-service/issues/9#issuecomment-704069238).

Icons made by [Freepik](https://www.freepik.com) from [flaticon](https://www.flaticon.com/).

<br>
<hr>
<br>

## Licença:

[MIT](https://choosealicense.com/licenses/mit/)
