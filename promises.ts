const promisedData = new Promise<number>(function (resolve, reject) {
    setTimeout(() => {
        reject(10);
    }, 2000);
});

const andAgain = promisedData
    .then((data: number) => data * 50)
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch(() => {
        console.log("upsi");
        throw new Error("upsi error");
    });

andAgain
    .then((data) => {
        console.log(`${data} shows again!`);
    })
    .catch(() => {
        console.log("upsi again");
    });
