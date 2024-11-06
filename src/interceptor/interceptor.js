export const fetchInterceptor = (url) => {
    return fetch(url, {
        method: 'GET',
    })
}