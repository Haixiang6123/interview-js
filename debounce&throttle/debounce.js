/**
 * The function won't be called until stop moving in interval ms
 * @param fn
 * @param interval
 * @param immediate
 * @returns {Function}
 */
function debounce(fn, interval, immediate) {
    let timeout
    return function () {
        const context = this
        const args = arguments

        if (timeout) {
            clearTimeout(timeout)
        }

        if (immediate) {
            const callNow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, interval)

            if (callNow) {
                fn.apply(context, args)
            }
        }
        else {
            timeout = setTimeout(function () {
                // `this` points to current element
                fn.apply(context, args)
            }, interval)
        }
    }
}
