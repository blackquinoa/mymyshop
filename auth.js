function isLoggedIn() {

    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim();
        if(cookie.startsWith('isLoggedIn=')){
            return cookie.substring('isLoggedIn='.length) == true;
        }
    }
    return false;

}
  
function requireLogin() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}
