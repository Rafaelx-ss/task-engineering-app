// app.js - Task Engineering App

const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskPrioritySelect = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    taskList.innerHTML = '<li style="color:#aaa;">No hay tareas registradas aún.</li>';
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.title}</span>
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <span class="badge badge-${task.priority}">${task.priority}</span>
        <button onclick="deleteTask(${index})" style="background:none;border:none;cursor:pointer;color:#e74c3c;font-size:1rem;">✕</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask(title, priority) {
  tasks.push({ title, priority });
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  const priority = taskPrioritySelect.value;

  if (!title) return;

  addTask(title, priority);
  taskTitleInput.value = '';
});

// Inicializar con una tarea de ejemplo
addTask('Configurar repositorio en GitHub', 'alta');
addTask('Crear estructura del proyecto', 'media');
