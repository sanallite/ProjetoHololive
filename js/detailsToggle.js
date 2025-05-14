/* Função com escutador de eventos para mudar o texto do elemento summary, usado em ambas as páginas. */
export const configurarDetailsToggle = () => {
    const detalhes = document.querySelector('details');

    if (detalhes) {
        detalhes.addEventListener('toggle', () => {
            let sumario = document.querySelector('summary');

            if ( detalhes.open ) {
                sumario.textContent = 'Fechar'
            }

            else {
                sumario.textContent = 'Ler mais'
            }
        })
    }
}