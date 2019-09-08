/**
 * 你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，
 * 那我就以新的事件的时间为准，n 秒后才执行，
 * 总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行
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
