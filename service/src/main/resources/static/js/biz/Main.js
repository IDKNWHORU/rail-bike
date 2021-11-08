const clickNav = (selection, queryStr = '') => {
  const dom = selection.ownerDocument;
  const direction = selection.dataset.nav;
  const beforeSeleted = dom.querySelector('.active');

  changeActive(beforeSeleted, selection);
  callFile(`biz/${direction}`, queryStr, dom);
};

const callFile = (direction, queryStr, dom) => {
  const embedTag = dom.querySelector('embed');

  embedTag.setAttribute('src', `${direction}?${queryStr}`);
};

const changeActive = (before, selected) => {
  before.classList.remove('active');
  selected.classList.add('active');
};
