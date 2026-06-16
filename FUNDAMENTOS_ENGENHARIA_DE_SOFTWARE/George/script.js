const loginForm = document.getElementById('loginForm');
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === 'admin@finance.com' && password === '123456') {

        loginScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');

    } else {
        alert('Email ou senha incorretos!');
    }
});


const simulateBtn = document.querySelector('.simulate-btn');

simulateBtn.addEventListener('click', () => {

    const parcelas = document.querySelector('select').value;

    let valor = 950;

    if(parcelas.includes('24')) {
        valor = 620;
    }

    if(parcelas.includes('36')) {
        valor = 480;
    }

    if(parcelas.includes('48')) {
        valor = 390;
    }

    document.querySelector('.loan-result h3').innerHTML = `R$ ${valor}`;

    alert('Simulação realizada com sucesso!');
});


const menuItems = document.querySelectorAll('.sidebar li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {

        menuItems.forEach(li => li.classList.remove('active'));

        item.classList.add('active');
    });
});


const premiumBtn = document.querySelector('.premium-btn');

premiumBtn.addEventListener('click', () => {
    alert('Área Premium ativada!');
});


const challengeButtons = document.querySelectorAll('.challenge-item button');

challengeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = 'Concluído';
        button.style.background = '#22c55e';
    });
});

setInterval(() => {

    const investmentCards = document.querySelectorAll('.investment-card h2');

    investmentCards.forEach(card => {

        let valor = Math.floor(Math.random() * 90000 + 10000);

        card.innerHTML = `R$ ${valor.toLocaleString('pt-BR')}`;
    });

}, 5000);