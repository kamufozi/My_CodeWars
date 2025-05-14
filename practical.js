async function fetchWithRetry(url, options = {}, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (attempt === retries) {
                throw new Error(`Failed after ${retries} retries: ${error.message}`);
            }
        }
    }
}

async function fetchFirstUserPostsWithRetries() {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    
    try {
        const users = await fetchWithRetry(usersUrl, {}, 3);
        const firstUser = users[0];
        const userId = firstUser.id;
        
        const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        const posts = await fetchWithRetry(postsUrl, {}, 3);
        
        return {
            user: firstUser,
            posts: posts
        };
    } catch (error) {
        console.error("Error fetching user or posts:", error.message);
        throw error;
    }
}

// Example usage
fetchFirstUserPostsWithRetries()
    .then(data => console.log(data))
    .catch(err => console.error("Final Error:", err.message));
