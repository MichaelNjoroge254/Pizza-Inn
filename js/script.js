function Order(flavour, size, crust, toppings, number){
    this.pizzaFlavour = flavour;
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.numberOfPizzas = number;
    //this.PizzaDelivery = deliver
}


$(document).ready(function(){
    $("form#order").submit(function(event){
        event.preventDefault();

        var myPizzaFlavour = $("#flavour option:selected").text();
        var myPizzaSize = $("#size option:selected").text();
        var myPizzaCrust = $("#crust option:selected").text();
        var myPizzaToppings = $("#toppings option:selected").text();
        var myNumberOfPizzas = $("input#pizzaNumber").val();
       // var myPizzaDelivery = $(location).val();

        

        var newPizzaOrder = new Order(myPizzaFlavour , myPizzaSize, myPizzaCrust, myPizzaToppings, myNumberOfPizzas)
        console.log(newPizzaOrder);

                      $("#order").append(
                  '<p>' + "Flavour: " + myPizzaFlavour + '</p>' +
                  '<br>' +
                  '<p>' + "Size: " + myPizzaSize + '</p>' +
                  '<br>' +
                  '<p>' + "Pizza Crust: " + myPizzaCrust +'</p>' +
                  '<br>' +
                  '<p>' + "Pizza Toppings: " + myPizzaToppings + '</p>' +
                  '<br>' + 
                  '<p>' + "Number of Pizzas: " + myNumberOfPizzas + '</p>' +
                  '<button class="btn" id="confirmbutton">' + "Confirm Order" + '</button>'
                  )
                  $("#confirmbutton").click(function(){
                      alert("Your Order has been received, Thank You For Choosing Us")
                  })
                  
        })
            $("form input#option").click(function(){
                var location = prompt("Enter Location: ")
                if (location === "") {
                    alert("Enter a valid location")
                } else {
                    alert("You will be charged an additional cost of Ksh.300")
                }
                return location
            });

            var order = (f, s, c, t, n, total) =>{
                return{f, s, c, t, n, total}
            } 
            let myPizzaFlavour = $("#flavour option:selected").text();
            let myPizzaSize = $("#size option:selected").text();
            let myPizzaCrust = $("#crust option:selected").text();
            let myPizzaToppings = $("#toppings option:selected").text();
            let myNumberOfPizzas = $("input#pizzaNumber").val();
      
            let price, totalPrice
            switch (myPizzaFlavour) {
                case myPizzaFlavour = "Cheese Pizza":
                    switch (size) {
                        case myPizzaSize = "small":
                            price = 300;
                            if (myPizzaCrust == "Stuffed") {
                                totalPrice = (price * myNumberOfPizzas) + 300;
                            } else if (myPizzaCrust == "Gluten-Free") {
                                totalPrice = (price * myNumberOfPizzas) + 200;
                            } else if (myPizzaCrust == "Crispy") {
                                totalPrice = (price * myNumberOfPizzas) + 250;
                            } else {
                                totalPrice = (price * myNumberOfPizzas)
                            }
                            
                            break;
                           case myPizzaSize = "Medium":
                                  price = 500;
                                      if (myPizzaCrust == "Stuffed") {
                                          totalPrice = (price * myNumberOfPizzas) + 300;
                                      } else if (myPizzaCrust == "Gluten-Free") {
                                          totalPrice = (price * myNumberOfPizzas) + 200;
                                      } else if (myPizzaCrust == "Crispy") {
                                          totalPrice = (price * myNumberOfPizzas) + 250;
                                      } else {
                                          totalPrice = (price * myNumberOfPizzas)
                                      }       
                            break;
                            case myPizzaSize = "Large":
                              price = 650;
                                  if (myPizzaCrust == "Stuffed") {
                                      totalPrice = (price * myNumberOfPizzas) + 300;
                                  } else if (myPizzaCrust == "Gluten-Free") {
                                      totalPrice = (price * myNumberOfPizzas) + 200;
                                  } else if (myPizzaCrust == "Crispy") {
                                      totalPrice = (price * myNumberOfPizzas) + 250;
                                  } else {
                                      totalPrice = (price * myNumberOfPizzas)
                                  }   
                          break;
                    }
      
