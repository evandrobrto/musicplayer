# Documentação do Projeto: Music Player

[Code Docs](Code%20Docs%2005f83753703443bd91bfc63c2f0f4341.csv)

[Documentação do Projeto: Music Player](https://www.notion.so/Documenta-o-do-Projeto-Music-Player-a16915f8c720486ca1697d1559ca444c?pvs=21)

# 1. Visão Geral

Este projeto é um reprodutor de música simples desenvolvido com HTML, CSS e JavaScript. O objetivo é proporcionar uma interface amigável para tocar músicas, permitindo navegação entre faixas, controle de volume e reprodução aleatória.

## 2. Estrutura do Projeto

A estrutura do projeto consiste em três arquivos principais:

- **HTML (`index.html`)**: Define a estrutura da interface do reprodutor de música.
- Bootstrap: Define um CSS estruturado, trazendo responsividade.
- **CSS (`style.css`)**: Estiliza o layout e a aparência do reprodutor.
- **JavaScript (`script.js`)**: Implementa a funcionalidade do reprodutor, como reprodução, controle de volume e navegação entre as faixas.

E os secundários: 

- Musicas: Para reproduzir no player.
- Imagens: Fica em um circulo no player.

## 3. Detalhes do Código

### 3.1 HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <!-- Conteúdo do Navbar -->
    </nav>
    <div class="player">
        <div class="wrapper-container">
            <div class="wrapper">
                <!-- Detalhes do Player -->
            </div>
        </div>
    </div>
    <script src="script/script.js"></script>
</body>
</html>

```

### Elementos:

- **Navbar**: Uma barra de navegação fixa com links para as canções disponíveis.
- **Player**: Uma interface central que exibe a arte da faixa, nome da música, artista e controles de reprodução (play, pause, próximo, anterior, etc.).

### Estrutura da Navbar com Bootstrap

1. **`<nav>` Elemento**

```html
html
Copiar código
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

```

- **`navbar`**: Classe principal que aplica estilos de navbar, como espaçamentos, alinhamentos e tipografia.
- **`navbar-expand-lg`**: Indica que a navbar será expandida (visível) em dispositivos grandes (tamanho "lg") e ficará colapsada (oculta) em dispositivos menores.
- **`navbar-light`**: Define um esquema de cores claro, onde o texto é escuro em um fundo claro.
- **`bg-light`**: Aplica uma cor de fundo clara à navbar.
- **`fixed-top`**: Faz com que a navbar fique fixada no topo da página, mesmo ao rolar o conteúdo.

### **Contêiner da Navbar**

```html
html
Copiar código
<div class="container-fluid">

```

- **`container-fluid`**: Cria um contêiner que ocupa toda a largura da tela. Ele é responsivo e se ajusta em diferentes tamanhos de tela.

### **Marca da Navbar**

```html
html
Copiar código
<a class="navbar-brand" href="#">Music Player</a>

```

- **`navbar-brand`**: Classe que estiliza o link que representa a marca do site. Geralmente usado para o nome do site ou logotipo.

### **Botão Toggler**

```html
html
Copiar código
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

```

- **`navbar-toggler`**: Classe que estiliza o botão para colapsar ou expandir a navbar em telas menores.
- **`type="button"`**: Define que o botão é do tipo normal.
- **`data-bs-toggle="collapse"`**: Indica que este botão vai alternar a visibilidade de um elemento colapsável.
- **`data-bs-target="#navbarNav"`**: Especifica o ID do elemento que deve ser colapsado/expandido quando o botão é clicado.
- **`aria-expanded="false"`**: Atributo acessível que indica se o elemento está atualmente expandido ou não.
- **`aria-label="Toggle navigation"`**: Fornece uma descrição acessível para o botão, útil para leitores de tela.

```html
html
Copiar código
<span class="navbar-toggler-icon"></span>

```

- **`navbar-toggler-icon`**: Estiliza o ícone que aparece dentro do botão, que geralmente consiste em três linhas horizontais representando um menu.

### **Div de Colapso**

```html
html
Copiar código
<div class="collapse navbar-collapse" id="navbarNav">

```

- **`collapse`**: Classe que faz o elemento (neste caso, a navbar) colapsar em telas menores.
- **`navbar-collapse`**: Aplica estilos apropriados ao conteúdo colapsável da navbar.
- **`id="navbarNav"`**: Um identificador que corresponde ao `data-bs-target` do botão toggler.

### **Lista de Navegação**

```html
html
Copiar código
<ul class="navbar-nav">

```

- **`navbar-nav`**: Classe que estiliza a lista de itens de navegação dentro da navbar.

### **Item de Navegação com Dropdown**

```html
html
Copiar código
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Canções
    </a>

```

- **`nav-item`**: Classe que define um item dentro da lista de navegação.
- **`dropdown`**: Indica que este item possui um submenu.
- **`nav-link`**: Estiliza o link como parte da barra de navegação.
- **`dropdown-toggle`**: Classe que indica que este link deve abrir um menu dropdown ao ser clicado.

### **Menu Dropdown**

```html
html
Copiar código
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">

```

- **`dropdown-menu`**: Classe que aplica estilos ao menu que aparece quando o link é clicado.
- **`aria-labelledby="navbarDropdown"`**: Indica que este menu é controlado pelo link com o ID `navbarDropdown`, ajudando na acessibilidade.

### **Itens do Menu Dropdown**

```html
html
Copiar código
<li><a class="dropdown-item" href="#" data-index="0">A Little Piece Of Heaven</a></li>

```

- **`dropdown-item`**: Classe que estiliza um item dentro do menu dropdown. O Bootstrap aplica estilos e interatividade a esses links.
- **`data-index="0"`**: Um atributo personalizado que pode ser usado para armazenar informações adicionais (neste caso, o índice da música).

### 3.2 CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.player {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.wrapper {
  width: 300px;
  height: 350px;
  border: 1px solid transparent;
  padding: 30px;
  border-radius: 20px;
  background-color: #ddd;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
}

```

### Estilização:

- **Layout**: O player é centralizado na tela com uma borda arredondada e uma sombra sutil.
- **Controles**: Os botões de controle têm efeitos de transição para melhorar a interação do usuário.

### 3.3 JavaScript

```jsx
    //Declarando cada variável do Player.
    
    let now_playing = document.querySelector('.now-playing'); //exibe a informação sobre a música que está tocando atualmente.
    let track_art = document.querySelector('.track-art'); //exibe a arte da capa da música atual.
    let track_name = document.querySelector('.track-name'); // Elemento que exibe o nome da musica.
    let track_artist = document.querySelector('.track-artist');// nome do artista.

    let playpause_btn = document.querySelector('.playpause-track'); //Botão que alterna entre tocar e pausa a musica.
    let next_btn = document.querySelector('.next-track'); //avança e voltar musica.
    let prev_btn = document.querySelector('.prev-track');

    let seek_slider = document.querySelector('.seek_slider'); //controle para volume.
    let volume_slider = document.querySelector('.volume_slider'); 
    let curr_time = document.querySelector('.current-time'); // Tempo e duração da musica
    let total_duration = document.querySelector('.total-duration');
    let wave = document.getElementById('wave'); // animação de áudio.
    let randomIcon = document.querySelector('.fa-random'); // indica a aleatoriadade do player.
    let curr_track = document.createElement('audio'); //elemento de audio para reproduzir musicas.

    let track_index = 0; //indice das musicas
    let isPlaying = false; // indica se a música está tocando.
    let isRandom = false; // indica se a reprodução aleatória está ativada.
    let updateTimer; // será usado para controlar a atualização do tempo da música.

    // Array com objetos setando as propriedades e atributos.
    const music_list = [
        {
            img: 'images/alittle.jpg',
            name: 'A Little Piece Of Heaven',
            artist: 'Avenged Sevenfold',
            music: 'music/Avenged Sevenfold - A Little Piece Of Heaven.mp3'
        } etc...
```

### Função `loadTrack`

```jsx
 function loadTrack(track_index) {
        clearInterval(updateTimer);
        reset();

        curr_track.src = music_list[track_index].music;
        curr_track.load();

        track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
        track_name.textContent = music_list[track_index].name;
        track_artist.textContent = music_list[track_index].artist;
        now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

        updateTimer = setInterval(setUpdate, 1000);

        curr_track.addEventListener('ended', nextTrack);
        random_bg_color();
    }

```

- **Descrição**: Carrega a música com base no índice fornecido.
    - **`clearInterval(updateTimer)`**: Para qualquer temporizador anterior.
    - **`reset()`**: Reseta os controles de tempo e slider.
    - **`curr_track.src = music_list[track_index].music`**: Define a fonte de áudio da música a ser reproduzida.
    - **`track_art.style.backgroundImage`**: Atualiza a imagem de fundo com a arte da capa da música.
    - **`track_name.textContent`** e **`track_artist.textContent`**: Atualiza o nome da música e do artista.
    - **`now_playing.textContent`**: Atualiza a mensagem de reprodução.
    - **`updateTimer = setInterval(setUpdate, 1000)`**: Inicia um timer para atualizar o tempo da música a cada segundo.
    - **`curr_track.addEventListener('ended', nextTrack)`**: Define o que acontece quando a música termina (próxima música).
    - **`random_bg_color()`**: Chama uma função para mudar a cor de fundo aleatoriamente.

### Função `random_bg_color`

```jsx
function random_bg_color() {
        let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
        let a;

        function populate(a) {
            for (let i = 0; i < 6; i++) {
                let x = Math.round(Math.random() * 14);
                let y = hex[x];
                a += y;
            }
            return a;
        }
        let Color1 = populate('#');
        let Color2 = populate('#');
        var angle = 'to right';

        let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
        document.body.style.background = gradient;
    }
```

Muda a cor de fundo da página de forma aleatória. Gera duas cores em gradiente e as aplica ao corpo do documento.

### Função `reset`

Reseta os elementos do player para seus valores iniciais.

```jsx
function reset() {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
    }
```

### Funções de Controle da Música

```jsx
function randomTrack() {
        isRandom ? pauseRandom() : playRandom();
    }
    function playRandom() {
        isRandom = true;
        randomIcon.classList.add('randomActive');
    }
    function pauseRandom() {
        isRandom = false;
        randomIcon.classList.remove('randomActive');
    }
    function repeatTrack() {
        let current_index = track_index;
        loadTrack(current_index);
        playTrack();
    }

    function playpauseTrack() {
        isPlaying ? pauseTrack() : playTrack();
    }

    function playTrack() {
        curr_track.play();
        isPlaying = true;
        track_art.classList.add('rotate');
        wave.classList.add('loader');
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        track_art.classList.remove('rotate');
        wave.classList.remove('loader');
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
    function nextTrack() {
        if (track_index < music_list.length - 1 && isRandom === false) {
            track_index += 1;
        } else if (track_index < music_list.length - 1 && isRandom === true) {
            let random_index = Number.parseInt(Math.random() * music_list.length);
            track_index = random_index;
        } else {
            track_index = 0;
        }
        loadTrack(track_index);
        playTrack();
    }
    function prevTrack() {
        if (track_index > 0) {
            track_index -= 1;
        } else {
            track_index = music_list.length - 1;
        }
        loadTrack(track_index);
        playTrack();
    }
```

### Funções de Controle de Slider

```jsx
function seekTo() {
        let seekto = curr_track.duration * (seek_slider.value / 100);
        curr_track.currentTime = seekto;
    }
    function setVolume() {
        curr_track.volume = volume_slider.value / 100;
    }
    function setUpdate() {
        let seekPosition = 0;
        if (!isNaN(curr_track.duration)) {
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;

            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

            curr_time.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
    }
```

Nestas funções ajustarás posição atual da música com base na posição do slider e o volume da música com base na posição do slider de volume.  Atualiza os elementos de tempo e slider com a posição atual da música.

### Interação com o Dropdown

```jsx
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o link seja seguido
        const index = this.getAttribute('data-index'); // Pega o índice do item - setado no HTML.
        loadTrack(index); // Carrega a música correspondente.
        playTrack(); // Toca a música.
    })});
```

Para cada item do dropdown, adiciona um evento de clique que:

- Previne o comportamento padrão do link.
- Obtém o índice do item clicado e carrega a música correspondente.
- Toca a música selecionada.

## 4. Funcionalidades

- **Reprodução e Pausa**: Permite ao usuário reproduzir e pausar músicas.
- **Controles de Volume**: O usuário pode ajustar o volume usando um controle deslizante.
- **Navegação entre Músicas**: O usuário pode navegar entre as faixas disponíveis.
- **Reprodução Aleatória**: O usuário pode ativar ou desativar a reprodução aleatória das faixas.

## 5. Conclusão

Este projeto de reprodutor de música é uma aplicação web simples que demonstra o uso de HTML, CSS e JavaScript para criar uma interface interativa. Ele pode ser expandido com novas funcionalidades, como playlists e integração com APIs de música.

## 6. Tecnologias Utilizadas

- **HTML5**: Para estruturar a página.
- **CSS3**: Para estilizar a interface do usuário.
- **JavaScript**: Para a lógica do reprodutor de música.
- **Bootstrap**: Para a responsividade e estilo dos componentes.

## 7. Próximos Passos

- Implementar playlists.
- Adicionar suporte para mais formatos de áudio.
- Integrar com serviços de streaming.

---

Table of Contents
