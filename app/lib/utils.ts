
const defaultLocale = "hr"; 

export function getLocale(path : string) {
    const slashes = path?.split("/").length;
    if (slashes > 3) {
        return path.split("/")[3];
    }
    return defaultLocale;

}

export function getPage(path : string) {
    console.log(path);
    const slashes = path?.split("/").length;
    console.log(path.split("/"));
    if (slashes > 4) {
        return path.split("/")[4];
    }
    return "project";
}