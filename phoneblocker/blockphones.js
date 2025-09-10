function isSmallDevice() {
    return window.innerWidth <= 480;
}

if (isSmallDevice()) {
    document.documentElement.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.fontFamily = 'sans-serif';
    document.body.style.fontSize = '1.5rem';
    document.body.style.textAlign = 'center';
    document.body.style.backgroundColor = 'white';

    const msg = document.createElement('div');
    msg.textContent = "Sorry, a phone or small tablet cannot fit this entire page.";
    document.body.appendChild(msg);
}

// this is based off sizes, so its not 100% and might affect actual computers, if you detect this -please let me know!
