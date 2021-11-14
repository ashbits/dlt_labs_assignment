const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/posts'
class AutoCompleteService {
  constructor() {
    this.posts = [];
  }
  async getPosts(query) {
    if (!this.posts.length) {
      const posts = await axios.get(url);
      this.posts = posts.data;
    }
    const requiredPosts = this.posts.filter(post => {
      if (post.body.indexOf(query) > -1) {
        return post
      }
    })
    return requiredPosts;
  }
}

module.exports = new AutoCompleteService();
