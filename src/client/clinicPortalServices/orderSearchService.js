

export const fetchOrderMasterData = () => {
    return fetch(`https://www.mycovidnow.com/api/order/v1/`)
    .then((response) => response.json());
}