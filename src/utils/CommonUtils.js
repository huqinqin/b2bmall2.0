export default {
  getQueryParam (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let string = window.location.search.substr(1).match(reg);
    if (string && string.length) return decodeURIComponent(string[2])
    else return null;
  }
}
