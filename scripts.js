
function acceptCookies(){
  localStorage.setItem('hgv_cookie_consent','accepted');
  if (typeof gtag === 'function') gtag('consent','update',{'analytics_storage':'granted'});
  document.getElementById('cookie-banner').style.display='none';
  if (typeof gtag === 'function') {
    gtag('event','cookie_consent_accepted');
  }
}
function rejectCookies(){
  localStorage.setItem('hgv_cookie_consent','rejected');
  if (typeof gtag === 'function') gtag('consent','update',{'analytics_storage':'denied'});
  document.getElementById('cookie-banner').style.display='none';
}
if(!localStorage.getItem('hgv_cookie_consent')){
  document.getElementById('cookie-banner').style.display='block';
}
function trackClick(name){
  if(typeof gtag === 'function'){
    gtag('event', name);
  }
}

if(localStorage.getItem('hgv_cookie_consent')==='accepted' && typeof gtag==='function'){gtag('consent','update',{'analytics_storage':'granted'});}
