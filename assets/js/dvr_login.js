var alert = Vue.createApp(alert_).mount('#alert');
var login = Vue.createApp(login_).mount('#login_form');
var param = {};

(function () {
  document.getElementById('login_main').classList.remove('d-none');
  document.getElementById('alert').classList.remove('d-none');
  param = getAllUrlParams();
  if (param['tenant'] === undefined) {
    document.getElementById('login_main').classList.add('d-none');
    alert.add({ type: 'error', text: 'You must specify a VAMS tenant as part of the web site address, e.g., '+window.location.href+'?tenant=XXXXX' });
  }

})();