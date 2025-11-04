export const HomeSearch = (value) => {
    console.log('home Search', value)
}

export const favouriteSearch = (value) => {
    console.log('Favourite Search', value)
}

export const routeHandlers = {
    '/authorCard': favouriteSearch,
    '/writerHome': HomeSearch,
}
export const handlePageSearch = (value, route) => {
    if (route && route in routeHandlers) {
        routeHandlers[route](value);
    } else {
        return;
    }
}