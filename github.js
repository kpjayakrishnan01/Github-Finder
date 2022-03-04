class Github {
    constructor() {
        this.client_id = '21c5db3de312cb90f978'
        this.client_secret = '9f6c0444fdc1f325fe8fcb54bd556318b3e1c1a3'
    }

    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}