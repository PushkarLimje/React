function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;

    for (const prop in reactElement.props) {
        if(prop === 'Children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props :{
        href: 'https://youtube.com',
        target : '_blank',   
    },
    Children: 'Click here to visit YouTube',
}
const maincontainer = document.getElementById("root")

customRender(reactElement, maincontainer);
