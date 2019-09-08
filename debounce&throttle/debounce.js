/**
 * The function won't be called until stop moving in interval ms
 * @param fn
 * @param interval
 * @returns {Function}
 */
function debounce(fn, interval) {
    let timeout
    return function () {
        const context = this
        const args = arguments

        clearTimeout(timeout)

        timeout = setTimeout(function () {
            // `this` points to current element
            fn.apply(context, arguments)
        }, interval)
    }
}
