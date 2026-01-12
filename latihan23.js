function isRotation(a, b) {

    // 1. Panjang harus sama
    if (a.length !== b.length) {
        return false;
    }

    // 2. Gabungkan string a dengan dirinya sendiri
    let doubled = a + a;
    console.log(doubled);
    // 3. Cek apakah b ada di dalam doubled
    if (doubled.includes(b)) {
        return true;
    } else {
        return false;
    }
}

console.log(isRotation("abcd", "cdab"));
