
const defaultLocale = "hr"; 

export function getLocale(path : string) {
    const slashes = path?.split("/").length;
    if (slashes > 1) {
        return path.split("/")[1];
    }
    return defaultLocale;

}

export function getPage(path : string) {
    const slashes = path?.split("/").length;
    console.log(path.split("/"));
    if (slashes > 2) {
        return path.split("/")[2];
    }
    return "project";
}