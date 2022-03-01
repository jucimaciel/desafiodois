let input = document.querySelector('#input')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefas = document.querySelector('#listaTarefas')



btnAddTarefa.addEventListener('click', (e)=>{
    let tarefa ={
        nome: input.value
    }
    addTarefa(tarefa);

})

function addTarefa(tarefa){
    let li = criarLi(tarefa);
    listaTarefas.appendChild(li);
    input.value='';
}
function criarLi(tarefa){
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;
    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML= ' <i class="fa fa-pencil"></i>';

    li.appendChild(span);
    li.appendChild(div);
    return li;

}
    