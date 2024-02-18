//----------  Ticket Selection Manipulation ------------

const seats = document.querySelectorAll('.seat');

 // Total Price --
    let costTotal = 0;
//  Seat Counter --
    let totalSeat = 0;
// Seat left ---
    let seatLeft = 40;

for(let i = 0; i < seats.length; i++){
    const seat = seats[i];
   seat.addEventListener("click", function(){
    
    if(totalSeat < 4){
        seat.classList.add('bg-green-500');
    
        // get the seat numbers  
   const seatNum = seat.querySelector("h3").innerText;
   
   const seatContainer = document.getElementById('seatNum-container');
   
  const div = document.createElement("div");
  div.classList.add('flex','justify-between');
//    Booked Seats -------
   const bookedSeat = document.createElement('p');
   bookedSeat.innerText = seatNum;
   div.appendChild(bookedSeat);
//    Seat Class --------
   const classOfSeat = document.createElement('p');
   classOfSeat.innerText = "Economy";
   div.appendChild(classOfSeat);
   // Seat Price --------
   const seatPrice = document.createElement('p');
   seatPrice.innerText = '500';
   div.appendChild(seatPrice);

   seatContainer.appendChild(div);
  
// Seat Left -----------
   seatLeft --;
   document.getElementById('seat-left').innerText = seatLeft;
   // Seat Counter ----------
   totalSeat ++;
   document.getElementById('seatQuantity').innerText = totalSeat;
   //    Total Price ----
   costTotal += 500;
   document.getElementById('totalPrice').innerText = costTotal;
//    Grand Total -----
    document.getElementById('grandTotal').innerText = costTotal;
    }
    else{
        alert('You can only get 4 seats at once.!')
    }
   })
}
 
        //---------- Manipulation of Apply Button --------------

    const applyButton = document.getElementById('applyBtn');
    applyButton.addEventListener("click", function(){

        const couponInput = document.getElementById('couponInput').value;
        const inputValue = couponInput.split(" ").join("").toUpperCase();
      
      if(inputValue === "NEW15"){
        const discountContainer = document.getElementById('discount-container');
         const discountTotal = document.createElement('div');
         discountTotal.classList.add('flex', 'justify-between', 'pb-3');
        //  Title --------
        const discountTitle = document.createElement('p');
        discountTitle.innerText = "Total Discount";
        discountTotal.appendChild(discountTitle);
        // Amount -----
        const discountAmount = document.createElement('p');
        discountAmount.innerText = costTotal*0.15;
        discountTotal.appendChild(discountAmount);

        discountContainer.appendChild(discountTotal);

        const grandTotal = costTotal - discountAmount.innerText;
        console.log(grandTotal);
        document.getElementById('grandTotal').innerText = grandTotal;

        document.getElementById('apply-container').classList.add('hidden');
      }
      else if(inputValue === "COUPLE20"){
        const discountContainer = document.getElementById('discount-container');
         const discountTotal = document.createElement('div');
         discountTotal.classList.add('flex', 'justify-between', 'pb-3');
        //  Title --------
        const discountTitle = document.createElement('p');
        discountTitle.innerText = "Total Discount";
        discountTotal.appendChild(discountTitle);
        // Amount -----
        const discountAmount = document.createElement('p');
        discountAmount.innerText = costTotal*0.20;
        discountTotal.appendChild(discountAmount);

        discountContainer.appendChild(discountTotal);

        const grandTotal = costTotal - discountAmount.innerText;
        console.log(grandTotal);
        document.getElementById('grandTotal').innerText = grandTotal;

        document.getElementById('apply-container').classList.add('hidden');
      }
    })
  
// ----------   Next Button Manipulation --------------- 

  const nextButton = document.getElementById('nextBtn');

  nextButton.addEventListener("click", function(){
    if( totalSeat > 0){
        const getBanner = document.getElementById('banner');
        getBanner.classList.add('hidden');

        const getMainPage = document.getElementById('main-page');
        getMainPage.classList.add('hidden');

        const getConfirm = document.getElementById('confirmation');
        getConfirm.classList.remove('hidden');
    }
    else{
        alert('Select minimum one seat to proceed!')
    }
  }) 

// -----------  Continue Button Manipulation -------------
const continueButton = document.getElementById('contBtn');
continueButton.addEventListener("click", function(){
    const getBanner = document.getElementById('banner');
    getBanner.classList.remove('hidden');

    const getMainPage = document.getElementById('main-page');
    getMainPage.classList.remove('hidden');

    const getConfirm = document.getElementById('confirmation');
    location.reload();
})


