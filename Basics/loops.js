//4 loops

{
  /*
    4.1 for loops
    
      for(let i =1; i<=5 ;i++){
        //code
      }

  */
}


{
  /*
   4.2 while loop
      while( condition){
          //code
      }
  */
}

{
  /*
    4.3 do-while loop: runs atleast once
    do{
      //code
    }while(condition){
      //code
    }
  */
}


{
  /*
    4.4 for-or-loops
      for(let val of strVar){
        //code
      }
  */

  let str ="Hi I Am Sarvesh"
  for(let a of str){
    console.log(a);
  }
}

{
  /*
  4.5 for-in-loops: used to loop inside a obj it return keys inside the obj
  */
  let student ={
    fullName:"Sarvesh Khamkar",
    age:21,
    dob:'01/04.2002',
    isPass:true,
    cgpa:8.9
  }
  for(let a in student){
    console.log(a+":"+student[a]);
  }

  //doubt
  for(let a in student){
    console.log(a+":"+student.a);
  }
}