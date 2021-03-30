function calculitePrice(price, taxes, description){
    taxes = taxes ?? .05;
    description = description ?? "Default item";

    const total = price * (1 + taxes);
    console.log(`%c${description} %cWith Tax: %c$${total}`,"font-weight: bold; color: red", "", "color:green");
}

calculitePrice(100, 0.07, "My item");
calculitePrice(100, 0, "");
calculitePrice(100, undefined, undefined);