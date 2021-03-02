export default class BookstoreService {
    
    data = [
        {
          id: 1,
          title: 'Production-Ready Microservices',
          author: 'Susan J. Fowler',
          price:  32,
          coverImage: 'https://cv02.twirpx.net/2111/2111167.jpg?t=20201018120109'},
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price:  35,
            coverImage: 'https://mxsmirnov.files.wordpress.com/2016/08/releaseit.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                // reject(new Error('Smt bad'));
            }, 700);
        });
    }
}