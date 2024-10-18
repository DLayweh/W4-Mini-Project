
document.addEventListener("DOMContentLoaded" , ()=>{
    const overnightform = document.getElementById("overnightform");
    const when = document.getElementById("when");
    const output = document.getElementById("output");
    const nights = document.getElementById("nights");


   overnightform.addEventListener("submit", (event)=>{
        event.preventDefault();
        const selectedRoom = document.querySelector('input[name="roomtype"]:checked');
        const selectedDiscount = document.querySelector('input[name="discount"]:checked');




        let total = 0
        let numberofdays= Number(nights.value)
        const outSeasonQueen = 150.00
        const outSeasonKing = 150
        const outSeasonsuite =210
        let rate = 0
        if(selectedRoom.value == "queen"){
            rate = outSeasonQueen
        }
        else if(selectedRoom.value == "king"){
            rate = outSeasonKing
        }
        else if(selectedRoom.value == "suite"){
            rate = outSeasonsuite
        }
        if(selectedDiscount.value == "AAA"){
            discount = rate * .1
        }
        else if(selectedDiscount.value == "military"){
            discount = rate * .2
        }
        else{
            discount = 0
        }
        rate = rate - discount
        total = rate * numberofdays
        output.innerText = `
        nights:${numberofdays}
        room:${selectedRoom.value}
        total:${total}
        discount:${discount}
        `;
    
        
    });   


})
