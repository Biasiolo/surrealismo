document.addEventListener("DOMContentLoaded", function() {
    const projectTitle = document.getElementById('projectTitle');
    const projectDescription = document.getElementById('projectDescription');
  
    // Função para piscar o texto de forma aleatória
    function randomBlinkText(element) {
      // Cor original do texto
      let originalColor = window.getComputedStyle(element).color;
  
      // Piscar rapidamente algumas vezes
      let blinkCount = 0;
      let blinkInterval = setInterval(function() {
        element.style.color = (Math.random() < 0.5) ? originalColor : 'transparent';
        blinkCount++;
  
        if (blinkCount >= Math.floor(Math.random() * 5) + 1) { // Aleatoriedade no número de piscadas
          clearInterval(blinkInterval);
          setTimeout(function() {
            element.style.color = originalColor; // Restaurar cor original após um curto intervalo
          }, Math.floor(Math.random() * 1000) + 500); // Aleatoriedade no tempo de espera para restaurar a cor
        }
      }, Math.floor(Math.random() * 300) + 100); // Aleatoriedade no intervalo de tempo entre as piscadas
    }
  
    // Função para piscar o texto periodicamente
    function randomBlinkLoop() {
      setInterval(function() {
        // Garantir que o texto seja sempre visível antes de piscar
        projectTitle.style.color = window.getComputedStyle(projectTitle).color;
        projectDescription.style.color = window.getComputedStyle(projectDescription).color;
        
        randomBlinkText(projectTitle);
        randomBlinkText(projectDescription);
      }, 5000);
    }
  
    // Iniciar o loop de piscar o texto
    randomBlinkLoop();
  });
  