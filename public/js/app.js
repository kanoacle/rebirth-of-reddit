/*jshint esversion:6*/

const dataReq = (source, element) => {
  const dReq = new XMLHttpRequest();

  dReq.addEventListener(`load`, function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const content = document.querySelector(`#content`);
    for (var i = 0; i < data.data.children.length; i++) {
      const contain = document.createElement(`div`);
      const thumbnail = document.createElement(`img`);
      const title = document.createElement(`a`);
      const divider = document.createElement(`h3`);
      const about = document.createElement(`p`);
      contain.className = `container`;
      thumbnail.src = data.data.children[i].data.thumbnail;
      title.innerHTML = `${data.data.children[i].data.title}`;
      title.href = `${data.data.children[i].data.url}`;
      divider.innerHTML = `. . .`;
      about.innerHTML = `by ${data.data.children[i].data.author} • ${data.data.children[i].data.score} Views`;
      thumbnail.className = `pic`;
      title.className = `title`;
      divider.className = `divider`;
      about.className = `about`;
      contain.appendChild(thumbnail);
      contain.appendChild(title);
      contain.appendChild(divider);
      contain.appendChild(about);
      content.appendChild(contain);
    }

  });
  dReq.open(`GET`, `https://www.reddit.com/top.json`);
  dReq.send();
};
dataReq();