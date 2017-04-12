/*jshint esversion:6*/

const dataReq = (source, element) => {
  const dReq = new XMLHttpRequest();

  dReq.addEventListener(`load`, function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const content = document.querySelector('#content');
    for (var i = 0; i < 4; i++) {
      const title = document.createElement('h2');
      const about = document.createElement('p');
      const blurb = document.createElement('p');
      title.innerHTML = data.data.children[i].data.title;
      title.className = 'title';
      about.className = 'about';
      about.style.fontSize = '16px';
      about.innerHTML = `by ${data.data.children[i].data.author} • `;
      content.appendChild(title);
    }

  });
  dReq.open(`GET`, 'http://www.reddit.com/r/news.json');
  dReq.send();
};
dataReq();