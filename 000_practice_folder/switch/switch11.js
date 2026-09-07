
    function order(menu) {
        switch (menu) {
            case 1: console.log("Coffee - Rs.50");   
            break;
            case 2: console.log("Tea - Rs.30");
            break;
            case 3: console.log("Juice - Rs.60");
            break;
            case 4: console.log("Exit");
            break;
            default: console.log("Invalid choice");           
        }
    }


    order(1); // "Coffee - Rs.50"    
    order(2); // "Tea - Rs.30"
    order(3); // "Juice - Rs.60"
    order(4); // "Exit"
    order(5); // "Invalid choice"