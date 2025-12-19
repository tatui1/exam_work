const AboutMe = document.getElementById('AboutMe')
const Studies = document.getElementById('Studies')
const MyHobby = document.getElementById('Hobby')

const button = document.getElementById('AboutMe')

const customAlert = (message) => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    document.body.append(overlay);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    overlay.append(contentDiv);

    const messageH1 = document.createElement('p');
    messageH1.textContent = message;
    contentDiv.append(messageH1);

    const closeButton = document.createElement('AboutMe');
    closeButton.className = 'closeButton';
    closeButton.textContent = 'ok';
    contentDiv.append(closeButton);

    closeButton.addEventListener('click', () => {
        overlay.remove();
    })

    overlay.addEventListener('click', (event) => {
    if (event.target.className === 'overlay'){
        overlay.remove();
    }
})
}
 
button.addEventListener('click', () => {
    customAlert('About me: я родилась в бишкеке но жила не тут, переехала только в 5 классе')
})
