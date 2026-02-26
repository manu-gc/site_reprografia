// Recupera o nome do usuário do localStorage e exibe no header
function carregarNome() {
    const nome = localStorage.getItem('usuarioNome');
    const display = document.getElementById('display-user');
    if (display && nome) {
        display.innerText = nome;
    }
}

// Lógica de Login
function realizarLogin() {
    const nomeInput = document.getElementById('usuario');
    const nome = nomeInput.value.trim();

    if (!nome) {
        alert("Por favor, digite seu nome ou matrícula.");
        return;
    }

    localStorage.setItem('usuarioNome', nome);

    const userLow = nome.toLowerCase();
    if (userLow === 'admin' || userLow === 'coordenador') {
        window.location.href = 'coordenador.html';
    } else if (userLow === 'repro' || userLow === 'reprografia') {
        window.location.href = 'reprografia.html';
    } else {
        window.location.href = 'professor.html';
    }
}

// Alternar entre botões de Impressão (PB / Colorido)
const btnPB = document.getElementById('btn-pb');
const btnCor = document.getElementById('btn-cor');

if (btnPB && btnCor) {
    btnPB.onclick = () => {
        btnPB.classList.add('active');
        btnCor.classList.remove('active');
    };
    btnCor.onclick = () => {
        btnCor.classList.add('active');
        btnPB.classList.remove('active');
    };
}

// Envio de Pedido
function enviarPedido() {
    const curso = document.getElementById('curso').value;
    const qtd = document.getElementById('qtd').value;

    if (!curso || !qtd) {
        alert("Preencha todos os campos antes de enviar!");
        return;
    }

    alert("Pedido enviado com sucesso!");
    window.location.href = 'acompanhamento.html';
}

// Logout
function logout() {
    localStorage.removeItem('usuarioNome');
    window.location.href = 'login.html';
}

// Executa ao carregar qualquer página
window.onload = carregarNome;