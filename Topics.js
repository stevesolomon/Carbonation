CreateLink_LastPost();

function CreateLink_LastPost() {
    document.querySelectorAll('tr').forEach(function (tr) {
        var td = tr.querySelector('td');

        if (td) {
            var postCount = parseInt(td.parentNode.getElementsByTagName('td')[2].innerHTML.split(' ')[0]);
            var lastPage = Math.ceil(postCount / POSTS_PER_PAGE);
            var topic = td.parentNode.querySelector('td').querySelector('a');
            var url_LastPost = topic.href + '&page=' + lastPage;

            var link_LastPost = document.createElement('a');
            link_LastPost.href = url_LastPost;
            link_LastPost.id = 'lastPost';
            link_LastPost.innerHTML = '&gt;';
            link_LastPost.style = 'text-decoration: none;';

            td.querySelector('.fr').appendChild(link_LastPost);
        }
    });
}