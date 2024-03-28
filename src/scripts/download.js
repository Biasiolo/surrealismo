$(document).ready(function() {
    const downloadButton = $('#downloadButton');
  
    downloadButton.on('click', function() {
      // Criação do link de download do PDF
      const link = $('<a>', {
        href: './assets/Manifesto-de-breton.pdf', // URL do arquivo PDF
        download: 'Manifesto-de-breton.pdf' // Nome do arquivo a ser baixado
      });
  
      // Adiciona o link à página e simula o clique
      $('body').append(link);
      link[0].click();
  
      // Remove o link após o download
      link.remove();
  
      // Exibe o modal de sucesso após o download
      showSuccessModal();
    });
  
    // Função para mostrar o modal de sucesso
    function showSuccessModal() {
      const modalContent = $('#successModalContent');
      modalContent.text('Download concluído');
  
      $('#successModal').modal('show');
    }
  });
  