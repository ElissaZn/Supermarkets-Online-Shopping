let bevData =JSON.parse(localStorage.getItem('bevData')) || [
    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 19,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 15,
        image: " https://www.bigbasket.com/media/uploads/p/s/126906_8-aashirvaad-atta-whole-wheat.jpg",
        productName: " Atta/Godihittu - Whole Wheat",
        productprice: 12,
    },
    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 27,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 13.25,
        image: " https://www.bigbasket.com/media/uploads/p/s/20001214_15-bb-royal-sona-masoori-raw-rice.jpg",
        productName: " Sona Masoori Raw Rice/Akki",
        productprice: 18
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 54,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 30,
        image: " https://www.bigbasket.com/media/uploads/p/s/1204455_2-fortune-sunflower-refined-oil-sun-lite.jpg",
        productName: " Sunflower Refined Oil - Sun Lite",
        productprice: 25
    },

    {
        Brand: "BB-Combo",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 18,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 8,
        image: " https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg",
        productName: "Ladies Finger/Bhendi",
        productprice: 3.75
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 24,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 6,
        image: " https://www.bigbasket.com/media/uploads/p/s/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
        productName: " Toor Dal/Togari Bele - Desi",
        productprice: 2.25
    },

    {
        Brand: "BB-Combo",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 21,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: "",
        image: " https://www.bigbasket.com/media/uploads/p/s/1214143_1-nandini-pure-ghee.jpg",
        productName: " Pure Ghee",
        productprice: 1.30
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 30,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 13,
        image: " https://www.bigbasket.com/media/uploads/p/s/40075469_9-bb-royal-organic-turtoor-dal.jpg",
        productName: " Organic - Toor Dal/Togari Bele",
        productprice: 9.07
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 38,
        QtyPiece: "Price of 2 Kg",
        QtyPieceForOneElement: "2 Kg",
        StrikePrice: 10,
        image: " https://www.bigbasket.com/media/uploads/p/s/40044731_13-bb-popular-moong-dal.jpg",
        productName: " Moong Dal/Hesaru Bele",
        productprice: 8.69
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 2,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 15,
        image: " https://www.bigbasket.com/media/uploads/p/s/274120_3-sunpure-refined-sunflower-oil.jpg",
        productName: " Refined - Sunflower Oil",
        productprice: 10.65
    },

    {
        Brand: "BB-Combo",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 45,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 25,
        image: " https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
        productName: " Iodized",
        productprice: 23.50
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 40,
        QtyPiece: "Price of 200 g",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 40,
        image: " https://www.bigbasket.com/media/uploads/p/s/20000541_12-bb-royal-fried-grambengal-gram.jpg",
        productName: " Fried Gram/Huri Kadale",
        productprice: 28
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 17,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 17,
        image: " https://www.bigbasket.com/media/uploads/p/s/40000291_8-tata-sampann-unpolished-toor-dalarhar-dal.jpg",
        productName: "Tender Coconut",
        productprice: 14
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 27,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 10,
        image: " https://www.bigbasket.com/media/uploads/p/s/30005421_6-bb-popular-kabuli-channa.jpg",
        productName: " Kabuli Channa/Kabuli Kadale",
        productprice: 7
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 45,
        QtyPiece: "Price of 10 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 9.75,
        image: " https://www.bigbasket.com/media/uploads/p/s/1200049_2-bb-combo-bb-royal-sona-masoori-raw-rice-10-kg-toor-dal-1kg-sugar-1kg.jpg",
        productName: " bb Royal Sona Masoori Raw Rice (10 kg) + Toor Dal 1kg + Sugar 1kg",
        productprice: 6.35
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 21,
        QtyPiece: "Price of 10 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 6.9,
        image: " https://www.bigbasket.com/media/uploads/p/s/40236230_2-aashirvaad-atta-with-multigrains-high-fibre-soft-rotis.jpg",
        productName: " Atta with Multigrains - High Fibre",
        productprice: 5.9
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 23,
        QtyPiece: "Price of 25 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 16,
        image: "https://www.bigbasket.com/media/uploads/p/s/10000044_42-fresho-beans-french-ring.jpg",
        productName: " Rice/Akki - Raw, Sona Masoor",
        productprice: 12.50
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 630,
        QtyPiece: "Price of 10 Kg",
        QtyPieceForOneElement: "10 Kg",
        StrikePrice: 6.3,
        image: " https://www.bigbasket.com/media/uploads/p/s/40236231_2-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg",
        productName: " Select Sharbati Atta - Rich In Nutrients, For Soft & Fluffy Roti",
        productprice: 5.9
    },

    {
        Brand: "Fresho",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 20,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 14.13,
        image: " https://www.bigbasket.com/media/uploads/p/s/1203724_1-bb-combo-bb-royal-basmati-rice-everyday-1-kg-fresho-new-potato-1-kg.jpg",
        productName: " BB Royal Basmati Rice - Everyday 1 kg + Fresho New Potato 1 kg",
        productprice: 11.8
    },

    {
        Brand: "BB-Combo",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 13,
        QtyPiece: "Price of 5 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 32.6,
        image: " https://www.bigbasket.com/media/uploads/p/s/1220743_1-aashirvaad-atta-whole-wheat-5-kg-iodised-salt-1-kg.jpg",
        productName: " Atta - Whole Wheat 5 kg + Iodised Salt 1 kg",
        productprice: 31.25
    }
];


let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
document.querySelector("#total_item").innerHTML = cartData.length + " ";
display(bevData);

function display(bevData) {
    document.querySelector(".container").innerHTML = ""; // Clear previous content
    bevData.forEach(function (ele, index) {
        let maindiv = document.createElement("div");
        maindiv.setAttribute("class", "maindiv");

        let offerdiv = document.createElement("div");
        offerdiv.innerText = "Get" + " " + ele.OFF + " " + "off";
        offerdiv.setAttribute("class", "offer");

        let mainimg = document.createElement("img");
        mainimg.src = ele.image;
        mainimg.setAttribute("class", "mainimg");

        let namediv = document.createElement("div");
        let childp1 = document.createElement("p");
        childp1.innerText = ele.Brand;
        let childp2 = document.createElement("p");
        childp2.innerText = ele.productName;

        namediv.append(childp1, childp2);

        let select = document.createElement("select");
        select.value = ele.QtyPiece;
        select.setAttribute("class", "select");

        let truckdiv = document.createElement("div");

        let pricediv = document.createElement("div");
        pricediv.setAttribute("class", "pricediv");
        let Total = document.createElement("p");
        Total.innerText = "Total:" + ele.productprice + "/kg";
        Total.style.marginRight = "10px";

        let cuttp = document.createElement("del");
        cuttp.innerText = ele.StrikePrice;
        cuttp.style.fontSize = "13px";
        pricediv.append(Total, cuttp);

        let del_div = document.createElement("div");
        del_div.setAttribute("class", "del_div");
        let trimg = document.createElement("img");
        trimg.src = "./imgs/delivery-truck.png";
        trimg.style.width = "20%";
        let del_p = document.createElement("p");
        del_p.innerText = ele.Date;

        del_div.append(trimg, del_p);

        let inputdiv = document.createElement("div");
        inputdiv.setAttribute("id", "last");
        let qtydiv = document.createElement("div");
        qtydiv.innerText = "Qty";
        qtydiv.setAttribute("class", "Qty");

        let quantity = document.createElement("input");
        quantity.type = "number";
        quantity.setAttribute("class", "quantity");

        let cartbtn = document.createElement("div");
        cartbtn.setAttribute("class", "cartbtn");
        let deletep = document.createElement("p");
        deletep.innerText = "DELETE";
        let logoimg = document.createElement("img");
        logoimg.src = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
        logoimg.style.width = "25%";

        cartbtn.addEventListener("click", function () {
            deleteFromCart(index);
        });

        cartbtn.append(deletep, logoimg);
        inputdiv.append(qtydiv, quantity, cartbtn);

        truckdiv.append(pricediv, del_div, inputdiv);
        maindiv.append(offerdiv, mainimg, namediv, select, truckdiv);

        document.querySelector(".container").append(maindiv);
    });
    localStorage.setItem("bevData", JSON.stringify(bevData));
}

// ----------------------deleteFromCart function--------
function deleteFromCart(index) {
    bevData.splice(index, 1);
    localStorage.setItem("bevData", JSON.stringify(bevData));
    display(bevData);
    alert("Item deleted successfully!");
}
 
//-----------------------Adding a new item
document.getElementById("addItemForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the uploaded image file
    let imageFile = document.getElementById("imageUpload").files[0];
    let imageURL = URL.createObjectURL(imageFile); // Create a URL for the uploaded image

    // Get other values from the form
    let productName = document.getElementById("productName").value;
    let productPrice = parseFloat(document.getElementById("productPrice").value);

    // Create a new item object
    let newItem = {
        Brand: "User Added",
        Date: "Standard Delivery : 10AM To 6PM",
        OFF: 0,
        QtyPiece: "Price of 1 Kg",
        QtyPieceForOneElement: "1 Kg",
        StrikePrice: 0,
        image: imageURL,
        productName: productName,
        productprice: productPrice
    };

    // Add the new item to the bevData array
    bevData.push(newItem);

    // Update the display
    display(bevData);

    // Clear the form fields
    document.getElementById("addItemForm").reset();

    // Alert the user
    alert("Item added successfully!");
});

