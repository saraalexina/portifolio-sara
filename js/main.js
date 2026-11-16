// 1. Seleciona todos os botões e todos os painéis de conteúdo
const botoesAbas = document.querySelectorAll('.tab-btn');
const paineisAbas = document.querySelectorAll('.tab-pane');

// 2. Percorre cada botão para adicionar o evento de clique
botoesAbas.forEach((botao) => {
    botao.addEventListener('click', () => {
        // 3. Remove a classe 'active' de todos os botões e painéis
        botoesAbas.forEach((btn) => btn.classList.remove('active'));
        paineisAbas.forEach((pane) => pane.classList.remove('active'));

        // 4. Ativa o botão clicado
        botao.classList.add('active');

        // 5. Pega o ID do painel alvo (ex: "pilar-2") e ativa ele
        const alvoId = botao.getAttribute('data-target');
        const painelAlvo = document.getElementById(alvoId);
        
        if (painelAlvo) {
            painelAlvo.classList.add('active');
        }
    });
});