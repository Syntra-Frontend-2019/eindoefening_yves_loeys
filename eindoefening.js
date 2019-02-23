
        var input1 = document.querySelector("#name");
        var input2 = document.querySelector("#day");
        var input3 = document.querySelector("#month");
        var input4 = document.querySelector("#year");
        var block = document.querySelector("#div_container");
        
        /*button*/
        var button = document.querySelector("button");
        button.addEventListener("click",add)

        /*JS for radiobuttons, declaration */
        var male = document.querySelector("#malecheck");
        var female = document.querySelector("#femalecheck");
        var other = document.querySelector("#othercheck");

        /*loop for days*/

        var daylist = document.querySelector("#day");
        var day = 0;
    for (var i=1; i <=31; i++)   {
        day++;
        var option = document.createElement("option");
        daylist.appendChild(option);
        option.value = i ;
        option.innerHTML =  day
               } 

        /* Loop for years*/

        var yearlist = document.querySelector("#year");
        var year = 1918;
    for (var i=1918; i <=2018; i++)   {
        year++;
        var option = document.createElement("option");
        yearlist.appendChild(option);
        option.value = i +1 ;
        option.innerHTML =  year
               } 
     
    function add(){
        /* declaration of the values of the inputfields*/
        var name = input1.value;
        var day = input2.value;
        var month = input3.value;
        var year = input4.value;

        /*create element(aka html tags)*/

        var color = document.createElement("div")
        var new_div = document.createElement("p");
        var strong = document.createElement("strong");
        var dob = document.createElement("h5");

        /* start of the appendChild section*/
              
        block.appendChild(color);
        color.appendChild(new_div)
        new_div.appendChild(strong);
        new_div.appendChild(dob);
            
        /* part 2 of checkbox JS , if else statements to change the color*/

              if (male.checked == true){
                 new_div.style.backgroud = "plum";}
              else if (female.checked ==true) {
                  new_div.style.background = "pink"}
              else {
                  new_div.style.background = "orange"
              }

        /*Name will be shown in Uppercase by using the .toUpperCase() */

        var capitalname = name.toUpperCase();

        /* Will print de inputvalues into the innerHTML*/

        strong.innerHTML = capitalname;
        dob.innerHTML =  day +"/"+ month + "/"+ year;

        /* This will clear the inputfields after every click of the button */
        
        input1.value = ""
        input2.value = ""
        input3.value = ""
        input4.value = ""
              }
       