class Github {
    constructor() {
        this.client_id = '3a8ebdf2ad9f8e55f7e4'
        this.client_secret = '2cdd613830faca76f872b7dd470d8e3a0e3cea0b'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}