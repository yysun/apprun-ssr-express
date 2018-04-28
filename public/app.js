$.ajaxSetup({ cache: false });
const get = async url => new Promise((resolve, reject) => {
  $.getJSON(url)
    .then(d => resolve(d))
    .fail(e => reject(e))
})
const view = (state) => state;
const update = {
  '/': async (state, e, path) => {
    e && e.preventDefault();
    const json = await get(path || '/');
    history.pushState(null, null, path);
    return json;
  }
};
app.start('my-app', null, view, update);
window.onpopstate = (e) => {

}
