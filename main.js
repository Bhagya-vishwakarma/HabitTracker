
function handle_date() {
    const dateInput = document.getElementById('inp_date');
    const selectedDate = dateInput.value;
    console.log(selectedDate); // Log the selected date for now

    // Assuming you want to store the selected date in local storage
    localStorage.setItem("date", selectedDate);
}




if (localStorage.getItem("date") == null) {
    const dateInput = document.getElementById('inp_date');
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    dateInput.value=yyyy+'-'+mm+'-'+dd;
    
    const selectedDate = dateInput.value;
    localStorage.setItem("date", selectedDate);

}

else {
    const dateInput = document.getElementById('inp_date');
    dateInput.value=localStorage.getItem("date");

}




for (let i = 1; i < 22; i++) {
    Cal.innerHTML += `<div class="num" data-completed="0" >${i}</div>`
}










let nums = document.querySelectorAll(".num")

let nums_data = []





if (localStorage.getItem("nums_data") == null) {
    nums_data=[]
    for (let i = 0; i < nums.length; i++) {
        nums_data[i] = "0"
    }
    localStorage.setItem("nums_data", nums_data)
}

else{
     nums_data = ( localStorage.getItem("nums_data")).split(',')     
     for (let i = 0; i < nums.length; i++) {
        if (nums_data[i] == "1") {
            gsap.to(nums[i], {
                backgroundColor: "green",
                duration: 1,
                ease: "power2.out",
            })
            gsap.to(nums[i], {
                backgroundColor: "black",
                duration: 1,
                delay:1,
                ease: "power2.out",
            })
        }
    }
}









for (let i = 0; i < nums.length; i++) {

    nums[i].addEventListener("click", function () {
        nums_data[i] = "1"

        if (nums_data[i] == "1") {
            gsap.to(nums[i], {
                backgroundColor: "green",
                duration: 1,
                ease: "power2.out",
            })
            gsap.to(nums[i], {
                backgroundColor: "black",
                duration: 1,
                delay:1,
                ease: "power2.out",
            })
        }
      
        localStorage.setItem("nums_data", nums_data)

    })

}




// ! button


res.addEventListener("click",function(){
    localStorage.removeItem("nums_data")
    localStorage.removeItem("date")

    let but =gsap.timeline()
    but.to(res,{
        border: "2px golden",
        duration:0.5,
        scale:0.8,

        
    })

    but.to(res,{
        duration:0.5,
        scale:1,
        ease:"power3.Out",
        border:"none"

        
    })
    setTimeout(()=>{ location.reload();},1000)
   
})




