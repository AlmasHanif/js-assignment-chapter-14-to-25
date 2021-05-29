
// Chapter 14 to 16
// Arrays


// Q no 1

// var stud_name1 = [];


// Q no 2

// var stud_name2 = [];


// Q no 3

// var str_arry = ["almas"];


// Q no 4

// var num_arry = [1,2,3,4];


// Q no 5

// var bol_arry = [true,false];


// Q no 6

// var mix_arry = ["almas" , 16 , true , "karachi"];


// Q no 7

// var edu_pak_arry = [  "SSC" , "HSC" , "BSC" , " BS" , "B.COM" , "MS" , "M.PhiL" , "PhD"  , "<br>"];
// document.write(edu_pak_arry);


// Q no 8


// var stud_name = ["Aisha" , "Amna" , "Hani"];
// var stud_marks =[500 , 400 , 450];
// document.write("Score of" + " " +  stud_name[0]  + " " + "is" + " " + stud_marks[0] + "<br>");
// document.write("Score of" + " " +  stud_name[1]  + " " + "is" + " " + stud_marks[1] + "<br>");
// document.write("Score of" + " " +  stud_name[2]  + " " + "is" + " " + stud_marks[2] + "<br>");


// Q no 9

// var colors =["red" , "green" , "blue" , "white"];
// document.write(colors + "<br>");

// // ((a))
// colors.unshift("black");
// document.write(colors + "<br>");

// // ((b))
// colors.push("orange");
// document.write(colors + "<br>");

// // ((c))
// colors.unshift("brown" , "purple");
// document.write(colors + "<br>");

// // ((d))
// colors.shift();
// document.write(colors + "<br>");

// // ((e))
// colors.pop();
// document.write(colors + "<br>");

// // ((f))
// colors.splice(3,0,"grey");
// document.write(colors + "<br>");

// // ((g))
// colors.splice(3,2);
// document.write(colors + "<br>");

// Q no 10

// var scores = [320 , 420 , 250 , 500];
// document.write("Scores of Students" + scores + "<br>");

// scores.sort();
// document.write("Orderd  Scores of Students" + scores + "<br>");


// Q no 11

// var city_name =["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities Name" +  "<br>" + city_name + "<br>");

// var selected_city = city_name.slice(2,4)
// document.write("Selected Cities Name" +  "<br>" + selected_city);


// Q no 12

//  var arr = ["this" , "is" , "my" ,"cat"];
//  document.write("Array <br>" + arr + "<br>");

//  var conv = arr.join(" ");
// document.write("String <br>" + conv);

// Q no 13





// Q no 14




// Q no 15

// var phone =['Apple', 'Samsung' , 'Motorola' , 'Nokia' , 'Sony' , 'Haier'];
// document.write(`<select>

// <option>${phone[0]}</option>
// <option>${phone[1]}</option>
// <option>${phone[2]}</option>
// <option>${phone[3]}</option>
// <option>${phone[4]}</option>
// <option>${phone[5]}</option>

// </select>`)



// Chapter 17 to 20

// Q no 1

// var arr =[
//     [ ]
// ];

// Q no 2

// var arr =[
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ];
// for(var i =0; i < 3; i++){
// document.write(arr[i] + "<br>");
// }


// Q no 3

// for(var i = 0; i <= 10; i++){
//     document.write(i + "<br>")
// }


// Q no 4

 //var a =  +prompt();
// for(var i = 0; i<a; i++){
// var ans = i*a
//     document.write(ans + "<br>")
// }


// var table = +prompt("enter table number");
// var table_length =+prompt("enter table length");
// for(var i = 0; i <= table_length; i++){
//     var ans =table*i
//     document.write(table + " x " + i + " = " +  ans + "<br>")
// }


// Q no 5

//  var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Strawbery"];
// for(var i =0; i < fruits.length; i++){
// document.write("Element at "  + [i] +  " index is " + fruits[i] + "<br>")
// }   


// Q no 6




// Q no 7

// var items =["cake" , "apple pie" , "cookies" , "chips" , "patties"];
// var search_inp = prompt("Welcome to ABC bakery. what do you want to order sir/mam? ");
// for(var i = 0; i < items.length ; i++){
//     if(search_inp===items[i]){
//         alert("your item is " + search_inp + " available at " + " index " +  [i])
//         break;
//     }
    
//     else{
//         alert("not available")
//     }
// }


// Q no 8

// var a = [24, 53, 78, 91, 12];
// var largest = a[0];
// for(var i =0; i < a.length; i++){
//     if(largest < a[i]){
//         largest = a[i];
//     }
// }
// document.write("Array items " + a + "<br>");
// document.write("largest number is " +  largest);


// Q no 9

// var a = [24, 53, 78, 91, 12];
// var smallest = a[0];
// for(var i =0; i > a.length; i++){
//     if(smallest > a[i]){
//         smallest = a[i];
//     }
// }
// document.write("Array items " + a + "<br>");
// document.write("Smallest number is " +  largest);


// Chapter no 21 to 25

// Q no 1

// var first_name = prompt("enter your first name");
// var last_name = prompt("enter your last name");
// var full_name = first_name + " " + last_name;

// alert("Hello " + full_name);


// Q no 2
 
// var fav_mob = prompt("enter your favourite mobile");
// alert("My favourite mobile is " + fav_mob);

//  var userAnswar = (fav_mob);
//  alert(userAnswar);
//  alert("User String Count Words" + " " + userAnswar.length);


// Q no 3

// var str = "pakistani";
// var position = str.indexOf("n");
//document.write("String : Pakistan"  + "<br>");
// document.write("index of  " +  " n " + position);


// Q no 4

// var str = "Hello World";
// var position = str.lastIndexOf("l");
// document.write("String : Hello World"  + "<br>");
//  document.write("Last index of  " +  " 'l' " + position);


// // Q no 5

// var country_name = "pakistani";
// document.write("String : Pakistani"  + "<br>");
// document.write("Character at index 3 : "  +  country_name[3]);


// Q no 6

// var first_name =["Almas"];
// var last_name = ["Hanif"];
// var full_name = first_name.concat(last_name);
// alert(full_name);


// Q no 7

// var city = "Hyderabad";
// var repl = city.replace("Hyderabad" , "Islamabad");
// document.write(repl);


// Q no 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var repl = message.replace(/and/g , "&");
// document.write(repl);


// Q no 9

// var str = "472";
// document.write("Value:" + str + "<br>");
// document.write("Type : String" + "<br>");

// var num = Number(str);

// document.write("Value:" + str + "<br>");
// document.write("Type : Number");


// Q no 10

// var inp = prompt();
// var change_case = inp.toUpperCase();
// alert(change_case);


// Q no 11

// var inp = prompt();
// var cap_word = inp.slice(0,1);
// cap_word=cap_word.toUpperCase();
// var small_word= inp.slice(1);
// small_word =small_word.toLowerCase();
// var inp= cap_word + small_word; 
    
// alert(inp);



// Q no 12


// var num = 35.36;
// var str = num.toString();
// document.write(str);


// Q no 13

// var input = prompt("");
// var symbols =input.charCodeAt()
// if(symbols===33){
//     alert("sumbols not allowed")
// }





// Q no 14

// var user_inp = prompt("Enter your item what you want?");
// user_inp =user_inp.toUpperCase();
// var items= ["CAKE" ,"APPLEPIE" , "CHIPS" , "COOKIE"];
// for(var i = 0; i <items.length ; i++){
// if(user_inp===items[i])
// alert("your item is available")

// else{
//     alert("its not available")
// }
// }

// Question 15

//  var Password = prompt("Enter Your Pasword")
// for (var i = 0; i<0 ; i++){
//      var capWrod = Password.slice(0,1)
//     var smallWord = Password.slice(0,1)
//      if(capWrod === smallWord){
//          console.log("enter capis")
//      }   
//  }

//  Question 16

//  var userInput = prompt()
//  var convert = [userInput]
//   console.log(convert)

//  Question 17

//  var userInput = prompt()
//  var convert = [userInput]
//  var index = convert.indexOf("n")
//  console.log(index)
