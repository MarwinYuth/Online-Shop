var clik = document.getElementById('click');
var hid = document.getElementById('hide');

clik.addEventListener('click',function(){

   if(hid.style.display==='none')
   {
        hid.style.display='block';
        hid.style.transition='1s';
   }
   else
   {
        hid.style.display='none';
   }

})


//AddItemTobox
var btnadd = document.getElementById('additem');
var pay = document.getElementById('payment');

var sum=0,price=0;

btnadd.addEventListener('click',function(e){

     e.preventDefault();

     let messages = [];
     
     var itemadd = document.getElementById('added').value;
     var pay = document.getElementById('payment');

     var listli = document.createElement('li');
     listli.className="list-item"

     if(itemadd=="White Light" || itemadd=="white light")
     {
          listli.appendChild(document.createTextNode(itemadd));

          var listrow = document.getElementById('listitem');

          price=64;
          sum+=price;

         listrow.appendChild(listli);

         pay.style.display='block';
     }
     else if(itemadd=="blue light")
     {
          listli.appendChild(document.createTextNode(itemadd));

          var listrow = document.getElementById('listitem');

          price=41;
          sum+=price;

         listrow.appendChild(listli);

         pay.style.display='block';
     }
     else
     {
          messages.push("Item not in list");
     }

     itemadd.value=="";

     var erorr = document.getElementById('not-inlist');

     erorr.innerHTML=messages;
})
//AddItemTobox


//Payment
pay.onclick=function(){

     let total = [];

    var tol = document.getElementById('total');

     if(tol.style.display==='none')
     {
          tol.style.display='block';
     }
     else
     {
          tol.style.display='none';
     }

     document.getElementById('total-number').innerHTML="Your total is : " + sum + "$";
}
//Payment
