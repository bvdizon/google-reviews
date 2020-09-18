const addForm = document.querySelector('#addForm');
const output = document.getElementById('output');

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const url = document.getElementById('client-url').value;
    const days = document.getElementById('days-ago').value;
    const stars = parseInt(document.getElementById('stars-count').value);
    const review = document.getElementById('feedback').value;
    


    let html = `<div class="column -width-1/2 -width-1/2@md -width-1/1@sm -width-1/1@xs"><div><a href="${url}" target="_blank" style="text-decoration: none">${name}</a></div><div> <img src="/uploads/agent-1/star-full-icon.png" alt="" width="16" height="16"/> <img src="/uploads/agent-1/star-full-icon.png" alt="" width="16" height="16"/> <img src="/uploads/agent-1/star-full-icon.png" alt="" width="16" height="16"/> <img src="/uploads/agent-1/star-full-icon.png" alt="" width="16" height="16"/> <img src="/uploads/agent-1/star-full-icon.png" alt="" width="16" height="16"/> </div><div style="font-size: 12px; color: grey"> ${days}</div><div> ${review}</div></div>`;


    output.insertAdjacentHTML('afterbegin', html);
    console.log(output);

    addForm.reset();
});