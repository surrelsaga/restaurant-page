import beefPhoImg from './menu-images/beef-pho.jpg';
import chickenPhoImg from './menu-images/chicken-pho.jpg';
import duckPhoImg from './menu-images/duck-pho.jpg';

function createMenuSection({ id, label, imageUrl }) {
    const container = document.createElement('div');
    container.id = id;

    const foodName = document.createElement('p');
    foodName.textContent = label;

    const foodImage = document.createElement('img');
    foodImage.src = imageUrl;
    foodImage.style.width = '333px';
    foodImage.style.height = '240px';

    container.append(foodImage, foodName);

    return container;
}

// Try the default export: no need to name the method
export default function(contentBox) {
    const menuPageDiv = document.createElement('div');
    menuPageDiv.id = 'menu-page';

    const text = document.createElement('h1');
    text.textContent = 'We have these specialties';

    menuPageDiv.appendChild(text);

    const dishes = [
        { id: 'beef-section', label: 'Beef Pho', imageUrl: beefPhoImg },
        { id: 'chicken-section', label: 'Chicken Pho', imageUrl: chickenPhoImg },
        { id: 'duck-section', label: 'Duck Pho', imageUrl: duckPhoImg },
    ];

    // Add menu sections in the menuPageDiv
    dishes.map(dish => createMenuSection(dish)) // list of menu sections(DOM elements)
          .forEach((menu_section) => menuPageDiv.appendChild(menu_section));

    // Add everything in the content box
    contentBox.appendChild(menuPageDiv);
}
