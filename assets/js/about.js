document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('toggle-pdf-btn');
    const pdfViewerContainer = document.getElementById('pdf-viewer-container');
    const pdfViewer = document.getElementById('pdf-viewer');
    let pdfLoaded = false; // Para evitar cargar el PDF múltiples veces

    toggleBtn.addEventListener('click', () => {
        const isHidden = getComputedStyle(pdfViewerContainer).display === 'none';

        if (isHidden) {
            pdfViewerContainer.style.display = 'block';
            toggleBtn.textContent = 'Ocultar mi currículum en PDF';

            if (!pdfLoaded) {
                cargarPDF();
                pdfLoaded = true;
            }
        } else {
            pdfViewerContainer.style.display = 'none';
            toggleBtn.textContent = 'Ver mi currículum en PDF';
        }
    });

    function cargarPDF() {
        const url = '../assets/pdf/CV Victor Suarez Cruz.pdf';

        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

        pdfjsLib.getDocument(url).promise.then(pdf => {
            console.log('PDF cargado correctamente');

            pdf.getPage(1).then(page => {
                const scale = 1.5;
                const viewport = page.getViewport({ scale });

                // Crear y limpiar el canvas
                pdfViewer.innerHTML = ''; // Borra contenido anterior
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Renderizar la página en el canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                page.render(renderContext).promise.then(() => {
                    pdfViewer.appendChild(canvas);
                });
            });
        }).catch(error => {
            console.error('Error al cargar el PDF: ', error);
        });
    }
});
