//importamos los datos del json
import data from './_posts.json';
//post los hacemos igual a los datos que traemos
let posts = data;


posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;

