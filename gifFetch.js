const image = document.querySelector("img");
const images = document.querySelector(".images");
const searchBar = document.querySelector("input[type='search']");
const form = document.querySelector("form");

const doFetch = async function doFetch() {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=y4ULTrA90itnKSg8Vb6xA30HsIOyNdxf&s=${searchBar.value}`,
        {
            mode: "cors",
        }
    );
    const json = await response.json();
    image.src = json.data.images.original.url;
    let index = 1000;

    ["cats", "dogs", "mosqitoes"].forEach(async (query) => {
        console.log("looping");
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=y4ULTrA90itnKSg8Vb6xA30HsIOyNdxf&s=${query}`,
            { mode: "cors" }
        );
        const json = await response.json();

        console.log(`Applied ${index} to loop`);
        console.log(
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(`Timer finished, with index${index}`);
                    console.log("Code after resolve?");
                }, index);
            })
        );

        console.log(`Loop ${index}`);
        index *= 2;
        const img = document.createElement("img");
        img.src = json.data.images.downsized_still.url;
        images.append(img);
    });
};

form.addEventListener("submit", (event) => {
    doFetch().catch(() => {
        alert("Couldn't find GIF based on that search :(");
    });
    event.preventDefault();
});

doFetch();
