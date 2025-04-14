// Menu Mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('menu-mobile').classList.toggle('show');
});

//menu responsivo

function menuShow () {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "images/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "images/close_white_36dp.svg";
  }
}

// Texto com digitação
const texto = "Transformamos ideias em resultados digitais.";
let index = 0;
const destaque = document.querySelector('.destaque');

function digitar() {
  if (index < texto.length) {
    destaque.textContent += texto.charAt(index);
    index++;
    setTimeout(digitar, 80);
  }
}
digitar();

// Scroll reveal simples com animação
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animado');
    }
  });
});

document.querySelectorAll('.servico-card, .portfolio-item').forEach(el => {
  el.classList.add('oculto');
  observer.observe(el);
});

// Estilo da animação (pode ser embutido no CSS)
const style = document.createElement('style');
style.innerHTML = `
  .oculto {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .animado {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Envio de formulário
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
});

// Animação de contadores (estatísticas)
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  });

  counters.forEach(counter => observer.observe(counter));
});

// Quiz interativo
function respostaQuiz(resposta) {
  const resultado = document.getElementById("resultadoQuiz");
  if (resposta === "Alcance") resultado.textContent = "Vamos criar uma estratégia para crescer sua audiência!";
  if (resposta === "Conversão") resultado.textContent = "Hora de otimizar seu funil de vendas!";
  if (resposta === "Reconhecimento") resultado.textContent = "Vamos trabalhar seu branding com excelência!";
}

// Contador animado
const stats = document.querySelectorAll(".stat");
stats.forEach(stat => {
  let target = +stat.getAttribute("data-target");
  let count = 0;
  let step = target / 100;
  let interval = setInterval(() => {
    count += step;
    if (count >= target) {
      stat.textContent = target;
      clearInterval(interval);
    } else {
      stat.textContent = Math.floor(count);
    }
  }, 20);
});

// Parallax simples para elementos com data-parallax
window.addEventListener('scroll', () => {
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.getAttribute('data-parallax'));
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
