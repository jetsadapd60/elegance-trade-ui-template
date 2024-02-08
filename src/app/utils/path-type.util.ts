function getPathType(url: string) {
    let endpoint = url.split('/');
    let path = endpoint[endpoint.length-1].split('-');
    return path[path.length-1];
}

export default getPathType;