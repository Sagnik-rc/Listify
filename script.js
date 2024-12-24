const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadlineInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const newTask = taskInput.value;
    const deadline = deadlineInput.value;

    if (newTask !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${newTask}</span>
            <span class="deadline"> - ${deadline}</span>
        `;

        // Add a checkbox for marking tasks as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });

        listItem.appendChild(checkbox);
        taskList.appendChild(listItem);
        taskInput.value = '';
        deadlineInput.value = '';
    }
});