// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos y
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía que algún día pasaría", time: 46 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 47 },
  { text: "No te apures, no detengas el instante del encuentro", time: 58 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 62 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 65 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 93 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente la miro tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía que algún día pasaría", time: 122 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 126 },
  { text: "No te apures, no detengas el instante del encuentro", time: 135  },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 136 },
  { text: "No te olvides que la vida", time: 143 },
  { text: "Casi nunca está dormida", time: 145 },
  { text: "Flores amarillas", time: 159 },
  { text: "Ella sabía que él sabía que algún día pasaría", time: 168 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 170 },
  { text: "No te apures, no detengas el instante del encuentro", time: 180 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 182  },
  { text: "No te olvides que la vida", time: 187 },
  { text: "Casi nunca está dormida", time: 192 },
  { text: "Ella sabía que él sabía, él sabia ella sabia", time: 198 },
  { text: "Que él sabia ella sabia", time: 200 },
  { text: "Y se olvidaron de sus flores amarillas", time: 202 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(time,time);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 4s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 219 segundos (219,000 milisegundos)
setTimeout(ocultarTitulo, 219000);