

const cliente = process.openStdin();
console.log("de cuanto es tu billete:");

cliente.addListener("data", (data) => {
    console.log("tu cambio es de: " + data.toString());
    //process.exit();
})

