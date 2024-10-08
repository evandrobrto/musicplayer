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
        },
        {
            img: 'images/sofaraway.jpg',
            name: 'So Far Away',
            artist: 'Avenged Sevenfold',
            music: 'music/Avenged Sevenfold - So Far Away.mp3'
        },
        {
            img: 'images/disturbed.jpg',
            name: 'The Sound Of Silence',
            artist: 'Disturbed',
            music: 'music/Disturbed  - The Sound Of Silence.mp3'
        },
        {
            img: 'images/morethan.jpg',
            name: 'More Than Words',
            artist: 'Extreme',
            music: 'music/Extreme - More Than Words.mp3'
        },
        {
            img: 'images/simpleman.jpg',
            name: 'Simple Man',
            artist: 'Lynyrd Skynyrd',
            music: 'music/Lynyrd Skynyrd - Simple Man.mp3'
        },
        {
            img: 'images/thehouseoftherisingsun.jpg',
            name: 'The House of The Rising Sun',
            artist: 'The White Buffalo',
            music: 'music/The House of The Rising Sun - The White Buffalo.mp3'
        }
    ];

    // Aqui vamos carregar a música, com o indice que fornecemos.
    loadTrack(track_index);

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
    function reset() {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
    }

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


    // Aqui chamamos a constante recebendo a classe da listagem no header, para que ao clicar em alguma musica começa a tocar a escolhida. 

 const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o link seja seguido
        const index = this.getAttribute('data-index'); // Pega o índice do item - setado no HTML.
        loadTrack(index); // Carrega a música correspondente.
        playTrack(); // Toca a música.
    })});

