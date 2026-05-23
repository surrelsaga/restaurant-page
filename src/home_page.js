import phoImage from './pho.jpg'

function displayHome(contentBox) {
    const headline = document.createElement('h1');
    headline.textContent = 'Vietnamese fuds 🇻🇳';

    const phoImg = document.createElement('img')
    phoImg.src = phoImage;

    const phoDesc = document.createElement('p')
    phoDesc.textContent = 'This is one of the most popular and delicious dish in Vietnam'

    // add to the content box
    contentBox.appendChild(headline);
    contentBox.appendChild(phoImg);
    contentBox.appendChild(phoDesc);
}

export { displayHome };


