function wave(str) {
    let waveArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        let chars = str.split('');
        chars[i] = chars[i].toUpperCase();
        waveArray.push(chars.join(''));
    }
    return waveArray;
}