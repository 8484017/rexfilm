export const Wait = function wait(s) {
    return new Promise(r => setTimeout(r, s * 1000));
}