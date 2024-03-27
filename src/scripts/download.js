document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('downloadButton');
  
    downloadButton.addEventListener('click', function() {
      // Criação do link de download do PDF
      const link = document.createElement('a');
      link.href = './assets/Manifesto-de-breton.pdf'; // URL do arquivo PDF
      link.download = 'Manifesto-de-breton.pdf'; // Nome do arquivo a ser baixado
  
      // Adiciona o link à página e simula o clique
      document.body.appendChild(link);
      link.click();
  
      // Remove o link após o download
      link.remove();

      // Exibe o modal de sucesso após o download
      showSuccessModal();
    });

    // Função para mostrar o modal de sucesso
    function showSuccessModal() {
        const successModal = new bootstrap.Modal($("#successModal"));
      
        const modalContent = $("#successModalContent");
        modalContent.text(`Download concluído`);
      
        successModal.show();
      }
});
