const newFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#text').value.trim();

    if (text) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Could not create comment');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/comment/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Could not delete that comment');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);

    document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);
    
    // document
    // .querySelector('.comment-list')
    // .parentElement.addEventListener('click', delButtonHandler);

