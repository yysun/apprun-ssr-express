$.ajaxSetup({ cache: false });
const get = async url => new Promise((resolve, reject) => {
  $.getJSON(url)
    .then(d => resolve(d))
    .fail(e => reject(e))
})
const view = (state) => state;
const update = {
  '/': async (state, e, path) => {
    if (e) {
      e.preventDefault()
      // console.log('push', path, e)
      history.pushState({}, path, path);
    }
    const json = await get(path);
    return json;
  }
};
app.start('my-app', null, view, update);
window.addEventListener('popstate', (e) => {
  const path = document.location.pathname;
  // console.log('pop', path, e)
  app.run('/', null, path);
});

