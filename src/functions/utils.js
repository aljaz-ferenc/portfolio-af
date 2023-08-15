export function throttle(fn, time) {
    let lastTime = 0
    let timeoutId = null

    return (...args) => {
        const now = new Date().getTime()

        if (now - lastTime >= time) {
            fn(...args)
            lastTime = now
        } else {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                fn(...args)
                lastTime = new Date().getTime()
            }, time - (now - lastTime))
        }
    }
}