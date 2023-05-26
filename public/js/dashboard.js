const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
if (title && description) {
    const response = await fetch(`api/projects`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Could not create a new post');
    }
 }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/project/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Could not delete this post');
        }
    }
};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

    document
    .querySelector('.project-list')
    .addEventListener('click', newFormHandler);