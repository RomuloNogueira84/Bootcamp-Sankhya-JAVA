let tarefas = [];

function adicionarTarefa() {
  let tarefa = document.getElementById('tarefa').value;
  tarefas.push({ nome: tarefa, concluida: false });
  atualizarLista();
}

function editarTarefa(index) {
  let novaTarefa = prompt("Editar tarefa", tarefas[index].nome);
  if (novaTarefa) {
    tarefas[index].nome = novaTarefa;
    atualizarLista();
  }
}

function marcarComoConcluida(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  atualizarLista();
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById('lista');
  lista.innerHTML = '';
  for (let i = 0; i < tarefas.length; i++) {
    lista.innerHTML += `
            <li>
                <input type="checkbox" ${tarefas[i].concluida ? 'checked' : ''} onclick="marcarComoConcluida(${i})" />
                <span ${tarefas[i].concluida ? 'style="text-decoration: line-through"' : ''}>${tarefas[i].nome}</span>
                <button onclick="editarTarefa(${i})">Editar</button>
                <button onclick="removerTarefa(${i})">Remover</button>
            </li>
        `;
  }
}
