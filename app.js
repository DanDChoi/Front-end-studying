const title = document.querySelector("div .hello");

function handleTitleClick(){
    console.log("title was clikced!");
}

title.addEventListener("click", handleTitleClick);

