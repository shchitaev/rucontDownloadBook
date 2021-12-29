const BookID = window.location.pathname.substr(5);
const UrlRead = `https://rucont.ru/read/11111?file=${BookID}&f=11111`;
const response = await fetch(UrlRead, {
    "credentials": "include",
    "headers": {
        "User-Agent": "`${navigator.userAgent}`",
        "cookie": "`${document.cookie}`",
        "Accept": "application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
    },
    "method": "GET",
    "mode": "cors"
});
const text = await response.text();
const DOM = new DOMParser().parseFromString(text, 'text/html');
document.querySelector('script').appendChild(document.createElement('script')).innerHTML = DOM.scripts[1].innerHTML;
const UrlDownload = `https://api.rucont.ru/api/efd/${window.eId}/${window.accessToken}`;
document.location.href = UrlDownload;