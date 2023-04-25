//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8080";

let findAllOrders = () => {
 return fetch(host + '/orders')
        .then(x => x.json()); 
};

let addOrderItem = (item) => {
    return fetch(host + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: item.name,
            email: item.email
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    addOrderItem: addOrderItem
};

export default data;