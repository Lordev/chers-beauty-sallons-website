//! IG API

//*  stored API data
export const state = {
    results: [],
};

//* retrieving IG API data and pushing into state
export const updateMedia = async function (url) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous data fetching operation
        setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    //State update
                    console.log(data);
                    const imageResults = data.data
                        .filter((item) => item.media_type === "IMAGE")
                        .map((item) => ({
                            mediaType: item.media_type,
                            mediaUrl: item.media_url,
                            username: item.username,
                            timestamp: item.timestamp,
                            permalink: item.permalink,
                        }));

                    // Update state.results with the transformed data
                    state.results = imageResults;

                    resolve(state.results);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    reject(error);
                });
        }, Math.random() * 1000); // Simulating varying response times
    });
};
