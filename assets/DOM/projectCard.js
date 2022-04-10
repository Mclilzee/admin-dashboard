const projectCardFavoriteButton = "assets/icons/star-plus-outline.svg";
const projectCardViewButton = "assets/icons/eye-plus-outline.svg";
const projectCardMergeButton = "assets/icons/source-merge.svg";

function createCard(title, text) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("project-card");

    cardContainer.append(createTitleElement(title), createTextElement(text), createCardButtons());
    return cardContainer;
}

function createTitleElement(title) {
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = title;

    return titleElement;
}

function createTextElement(text) {
    const textElement = document.createElement("span");
    textElement.classList.add("text");
    textElement.textContent = text;

    return textElement;
}

function createCardButtons() {
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("images-container");

    const cardFavoriteButton = createImage(projectCardFavoriteButton, "favorite icon")
    const cardViewButton = createImage(projectCardViewButton, 'view icon')
    const cardMergeButton = createImage(projectCardMergeButton, "merge icon");

    imagesContainer.append(cardFavoriteButton, cardViewButton, cardMergeButton);

    return imagesContainer;
}

function createImage(src, alt) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;

    return image;
}

export {createCard};