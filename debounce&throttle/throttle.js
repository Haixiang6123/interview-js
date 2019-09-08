function throttle(fn, interval) {
    let context, args
    let previous = 0

    return function () {
        let now = +new Date()
        context = this
        args = arguments

        if (now - previous > interval) {
            fn.apply(context, args)
            previous = now
        }
    }
}
