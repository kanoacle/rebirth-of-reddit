/*jshint esversion:6*/

const dataReq = (source, element) => {
  const dReq = new XMLHttpRequest();

  dReq.addEventListener(`load`, function () {
    const data = JSON.parse(this.responseText);
    const content = document.querySelector('#content');
    for (var i = 0; i < data.data.children.length; i++) {
      const title = document.createElement('h2');
      const about = document.createElement('p');
      const blurb = document.createElement('p');
      title.innerHTML = data.data.children[i].data.title;
      content.appendChild(title);
    }

  });
  dReq.open(`GET`, 'http://www.reddit.com/r/news.json');
  dReq.send();
};
dataReq();