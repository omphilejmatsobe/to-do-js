
let addbutton = document.querySelector("button")
let tasks = document.querySelector("ul")
let input = document.querySelector("input")

function addTask (e)
{
    e.preventDefault()

    if (input.value == "")
    {
        alert("Add Task")
        return
    }

    let listItem = document.createElement('li')

    // Input Text
    let text = document.createElement('span');
    text.textContent = input.value;

    // Edit button
    let edit_button = document.createElement('button')
    edit_button.textContent = 'Edit'

    // Delete button
    let delete_button = document.createElement('button')
    delete_button.textContent = "Delete"

    edit_button.addEventListener("click", editTask)
    delete_button.addEventListener("click", deleteTask)

    listItem.appendChild(text)
    listItem.appendChild(edit_button)
    listItem.appendChild(delete_button)
    tasks.appendChild(listItem)
    input.value = ''

}

function editTask (e)
{
    let listItem = e.srcElement.parentElement
    let text = listItem.querySelector('span')

    let newText = prompt('Edit task:', text ? text.textContent : '')
    
    if (newText == '')
    {
        alert("No text entered.")
        return
    }

    text.textContent = newText;  
    
}

function deleteTask (e)
{
    console.log("Hi")
    tasks.removeChild(e.srcElement.parentElement)
}

//Event Listener
addbutton.addEventListener("click", addTask)