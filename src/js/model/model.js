//! IG API

//*  stored API data
export const state = {
    mediaUrl: [],
};

//* retrieving IG API data and pushing into state
export const updateMedia = async function (url) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous data fetching operation
        setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    data.data.forEach((item) => {
                        state.mediaUrl.push(item.media_url);
                    });
                    resolve(this.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    reject(error);
                });
        }, Math.random() * 1000); // Simulating varying response times
    });
};
