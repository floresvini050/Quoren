let arrayMaterias = [];
let cont = 0;

function adicionarMateria() {
    if (document.querySelector('.formulario-class')) return;

    const listaMaterias = document.getElementById('lista-materias');

    const divFormulario = document.createElement('div');
    divFormulario.className = 'div-formulario-class';

    const formulario = document.createElement('input');
    formulario.type = 'text';
    formulario.placeholder = 'Matéria';
    formulario.className = 'formulario-class';

    const botaoEnviar = document.createElement('button');
    botaoEnviar.className = 'botao-enviar-class';
    botaoEnviar.textContent = 'Adicionar';

    botaoEnviar.addEventListener('click', () => {
        const materia = formulario.value.trim();

        if (!materia) return;

        if (arrayMaterias.includes(materia)) {
            alert('Essa matéria já está cadastrada');
            return;
        }


        const materiaItem = document.createElement('button');
        cont++;
        materiaItem.className = 'materia-item';
        materiaItem.textContent = materia;
        materiaItem.setAttribute("id", cont);

        // Atualiza array e DOM
        arrayMaterias.push(materia);
        listaMaterias.appendChild(materiaItem);

        // Remove o formulário
        listaMaterias.removeChild(divFormulario);
    });

    divFormulario.appendChild(formulario);
    divFormulario.appendChild(botaoEnviar);
    listaMaterias.appendChild(divFormulario);
}

  const ctx = document.getElementById('graficoPrincipal');


  let listax = []
  for (let i = -10; i <= 10; i ++)
  {
    listax.push(i);
  }

  listay = [];
  for (let valor of listax){
    listay.push(valor*valor);
  }
  new Chart(ctx,{
    type: 'line',
    data: {
      labels: listax,
      datasets: [{
        label: 'Páginas lidas no dia',
        data: listay,
        borderWidth: 1
      }]
    },
    options: {
        animation: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
