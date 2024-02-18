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
    }
    else{
        alert('You can only get 4 seats at once.!')
    }
   

   })
}
 
        

   
    
   
//----------- Utility functions -------------

