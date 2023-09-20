function createContainer(containerId, textColor, buttonText, buttonColor) {
    const container = document.getElementById(containerId);

    container.style.color = textColor;

    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.add("button");
    button.style.backgroundColor = buttonColor;

    container.appendChild(button);
}

createContainer("container1", "#ff5733", "Button 1", "#33ff57");
createContainer("container2", "#3373ff", "Button 2", "#ff5733");
createContainer("container3", "#33ff57", "Button 3", "#3373ff");