const KEY = "baco_login";

const armazenar = (valor) => {
    localStorage.setItem(KEY, JSON.stringify(valor))
}

const consultar = () => {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export {
    armazenar,
    consultar,
};