export function get(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let c of ca) {
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}

export function getUser() {
    let user = get('username')
    if (user === undefined) {
        set('username', '[]')
        let user = get('username')
        return user
    } else if(JSON.parse(user).length === 0) {
        return false
    } else {
        return user
    }
}

export function set(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (350 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
    return true;
}
