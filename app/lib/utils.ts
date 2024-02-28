
const defaultLocale = "hr"; 

export function getLocale(path : string) {
    const slashes = path?.split("/").length;
    if (slashes > 3) {
        return path.split("/")[3];
    }
    return defaultLocale;

}

export function getPage(path : string) {
    const slashes = path?.split("/").length;
    if (slashes > 4) {
        return path.split("/")[4];
    }
    return "project";
}