// create your flatten method here
function flatten(...a) {
    return [...a].join(",").split(",");
}