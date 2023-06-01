export function setCookie(name: string, value: string, exdays?: number) {
  let expires = '';
  if (exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    expires = `expires=${d.toUTCString()}`;
  }
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function existsCookie(name: string) {
  return document.cookie.split(';').some(item => item.trim().startsWith(`${name}=`));
}

export function getCookie(cname: string) {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return '';
}
