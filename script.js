function carregarNome() {
    const nome = localStorage.getItem('usuarioNome');
    const display = document.getElementById('display-user');
    if (display && nome) {
        display.innerText = nome;
    }
}

function realizarLogin() {
    const nomeInput = document.getElementById('usuario');
    const nome = nomeInput.value.trim();

    if (!nome) {
        alert("Digite seu nome.");
        return;
    }

    localStorage.setItem('usuarioNome', nome);

    window.location.href = 'professor.html';
}

function enviarPedido() {
    const curso = document.getElementById('curso').value;
    const qtd = document.getElementById('qtd').value;

    if (!curso || !qtd) {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem('statusPedido', 'coordenacao');
    localStorage.setItem('qtdPedido', qtd);

    alert("Pedido enviado!");
    window.location.href = 'acompanhamento.html';
}

function aprovarPedido() {
    localStorage.setItem('statusPedido', 'impressao');
    alert("Aprovado!");
    window.location.href = 'acompanhamento.html';
}

function finalizarImpressao() {
    localStorage.setItem('statusPedido', 'pronto');
    alert("Finalizado!");
    window.location.href = 'acompanhamento.html';
}

function atualizarStatus() {
    const status = localStorage.getItem('statusPedido');
    const steps = document.querySelectorAll('.step-item');
    const msg = document.getElementById('msgFinalizado');

    if (!steps.length) return;

    steps.forEach(step => {
        step.classList.remove('done', 'current');
    });

    if (msg) msg.style.display = "none";

    if (status === 'coordenacao') {
        steps[0].classList.add('done');
        steps[1].classList.add('current');
    }

    if (status === 'impressao') {
        steps[0].classList.add('done');
        steps[1].classList.add('done');
        steps[2].classList.add('current');
    }

    if (status === 'pronto') {
        steps[0].classList.add('done');
        steps[1].classList.add('done');
        steps[2].classList.add('done');
        steps[3].classList.add('done');

        if (msg) msg.style.display = "block";
    }
}

function logout() {
    localStorage.removeItem('usuarioNome');
    window.location.href = 'login.html';
}

function irParaCoordenador() {
    const senha = prompt("Digite a senha da coordenação:");

    if (senha === "gm1234") {
        window.location.href = 'coordenador.html';
    } else {
        alert("Senha incorreta!");
    }
}

function irParaReprografia() {
    const senha = prompt("Digite a senha da reprografia:");

    if (senha === "gm1234") {
        window.location.href = 'reprografia.html';
    } else {
        alert("Senha incorreta!");
    }
}

function irParaAcompanhamento() {
    window.location.href = 'acompanhamento.html';
}

window.onload = () => {
    carregarNome();
    atualizarStatus();

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
};

setInterval(() => {
    atualizarStatus();
}, 1000);