import phoImage from './pho.jpg'

function displayHome(contentBox) {
    const homePageDiv = document.createElement('div');
    homePageDiv.id = 'home-page'

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = '🇻🇳Welcome to Pho restaurant🍜';

    const phoImg = document.createElement('img')
    phoImg.src = phoImage;
    phoImg.style.width = '600px';
    phoImg.style.height = '400px';

    const phoDesc = document.createElement('p')
    phoDesc.textContent = 'One of the most popular and delicious dish in Vietnam'

    // add to the home page div
    homePageDiv.appendChild(restaurantName);
    homePageDiv.appendChild(phoImg);
    homePageDiv.appendChild(phoDesc);

    // add to the content box
    contentBox.appendChild(homePageDiv);
}

// named export
export { displayHome };


