["cats", "dogs", "mosqitoes"].forEach(async (query) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=y4ULTrA90itnKSg8Vb6xA30HsIOyNdxf&s=${query}`,
        { mode: "cors" }
    );
    const json = await response.json();
    console.log(json);
});
