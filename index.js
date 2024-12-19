const express = require('express')

const app = express()

require('dotenv').config()

const githubUser = {
    "login": "hydham",
    "id": 24681065,
    "node_id": "MDQ6VXNlcjI0NjgxMDY1",
    "avatar_url": "https://avatars.githubusercontent.com/u/24681065?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hydham",
    "html_url": "https://github.com/hydham",
    "followers_url": "https://api.github.com/users/hydham/followers",
    "following_url": "https://api.github.com/users/hydham/following{/other_user}",
    "gists_url": "https://api.github.com/users/hydham/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hydham/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hydham/subscriptions",
    "organizations_url": "https://api.github.com/users/hydham/orgs",
    "repos_url": "https://api.github.com/users/hydham/repos",
    "events_url": "https://api.github.com/users/hydham/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hydham/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 1,
    "followers": 1,
    "following": 4,
    "created_at": "2016-12-20T15:39:32Z",
    "updated_at": "2024-12-10T16:45:10Z"
    }

app.get('/', (req, res) => {
    res.send("chai aur code")
})

app.get('/twitter', (req, res) => {
    res.send("<h1>arhydham</h1>")
})

app.get('/github', (req, res) => {
    res.json(githubUser)
})

app.listen(process.env.PORT, () => console.log(`app available on  http://localhost:${process.env.PORT}`))