export default function(contentBox) {
    const aboutPageDiv = document.createElement('div');
    aboutPageDiv.id = 'about-page';

    const text = document.createElement('h2');
    text.textContent = ':-) Feel free to contact me ';

    const contactLink = document.createElement('a');
    contactLink.textContent = 'here';
    contactLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'
    // to open a new tab when the link is clicked
    contactLink.target = '_blank';
    contactLink.rel = 'noopener noreferre';

    // add to the aboutPageDiv
    text.appendChild(contactLink);
    aboutPageDiv.appendChild(text);

    // add to content box
    contentBox.appendChild(aboutPageDiv);
}
