
export const debounce = ( fn:Function, ms:number ) => {
    let timeout:ReturnType<typeof setTimeout>;
    return function() {
        const fnCall = () => {fn.apply(fn, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    }
}
