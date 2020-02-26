<<<<<<< HEAD

'use strict';

var Hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var locations = [];


function Shop(locationname, max, min, avg) {
    this.locationname = locationname;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.rancustmer = 0;//random  custumer number 
    this.total = 0;
    this.amountofcookies = [];//
    locations.push(this);


}

Shop.prototype.allCookies = function () {
    for (var i = 0; i < Hours.length; i++) {
        this.rancustmer = Math.floor((Math.random() * (this.max - this.min))) + this.min//random customer per hour
        this.rancustmer = Math.floor(this.rancustmer * this.avg);//number of cookies per hour
        this.total = this.total + this.rancustmer;//final total number of cookies
        this.amountofcookies[i] = this.rancustmer;//store ammount in array



    }
}
=======
<<<<<<< HEAD
=======
var Hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:','8pm:'];
var Seattle = {
    loc1: 'Seattle',
    max: 65,
    min: 23,
    avg: 6.3,
>>>>>>> 5e1829cc3263de4396e6859a57f4d25e2ae85657

var Hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:','8pm:'];
function shops(location,rancustmer,amountofcokkies,total){
    this.location=location;
    this.rancustmer=rancustmer;
    this.amountofcookies=amountofcokkies;
    this.total=total;
    
}










              
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

shops.prototype.randomcustomer=function( max,min){
    for (var i = 0; i < Hours.length; i++)
this.rancustmer= Math.floor((Math.random() * (this.max - this.min) + min) )//random customer
this.rancustmer = Math.floor(this.rancustmer * this.avg);//number of cookies
this.Total = this.Total + this.rancutmer;//total number of cookies
         this.amountp[i] = this.rancut;//store ammount in array
}



// var Seattle = {
//     loc1: 'Seattle',
//     max: 65,
//     min: 23,
//     avg: 6.3,

<<<<<<< HEAD
var container = document.getElementById('Finalcookies');
var tableE1 = document.createElement('table');
container.appendChild(tableE1);

function HeaderTable() {
    var tr0 = document.createElement('tr');
    tableE1.appendChild(tr0);
    var th = document.createElement('th');
    tr0.appendChild(th);
    th.textContent = " ";
    for (var i = 0; i < Hours.length; i++) {
        var th1 = document.createElement('th')
        tr0.appendChild(th1);
        th1.textContent = Hours[i];
    }
    var th2 = document.createElement('th')
    tr0.appendChild(th2);
    th2.textContent = " Daily Location Total";

=======
//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies: function () {
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

}

//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

<<<<<<< HEAD
Shop.prototype.render=function(){

    var tr1 =document.createElement('tr');
   tableE1.appendChild(tr1)
var td1=document.createElement('td');
tr1.appendChild(td1);
td1.textContent = this.locationname;

 console.log(this.locationname);

for(var i=0;i<Hours.length;i++){
    var td2=document.createElement('td');
    tr1.appendChild(td2);
    td2.textContent=this.amountofcookies[i];

}
var td2 =document.createElement('td');
tr1.appendChild(td2);
td2.textContent=this.total;

}
var Seattle = new Shop('Seattle', 65, 23, 6.3);
console.log(Seattle);
var Tokyo = new Shop('Tokyo', 24, 3, 1.2);
var Dubai = new Shop('Dubai', 38, 11, 3.7);
var Paris = new Shop('Paris', 38, 20, 2.3);
var Lima = new Shop('Lima', 16, 2, 4.6);

//Seattle.allCookies();

HeaderTable();
for (var i =0; i<locations.length ; i++) {
    locations[i].allCookies();
       locations[i].render();
   }
   function footer(){
       var tr4=document.createElement('tr');
       tableE1.appendChild(tr4);
       var td4=document.createElement('td')
       tr4.appendChild(td4)
       td4.textContent="Total";
       var thefinaltotal=0;
      
    
       for(var i=0;i<Hours.length;i++){
        var sumpercolum=0;
        for(var y=0;y<locations.length;y++){
            var sumpercolum=  sumpercolum+ locations[y].amountofcookies[i];
        }
        thefinaltotal=thefinaltotal+sumpercolum;
        var td6=document.createElement('td');
        tr4.appendChild(td6);
        td6.textContent=sumpercolum;

       }
var td7=document.createElement('td');
tr4.appendChild(td7);
td7.textContent=thefinaltotal;
    }
    footer();


=======
//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc1;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144




<<<<<<< HEAD
// Shop.prototype.content1 = function () {
//     for (var i = 0; i < locations.length; i++) {
//         var trE1 = document.createElement('tr');
//         tableE1.appendChild(trE1);
//         var tdE1 = document.createElement('td');
//         trE1.appendChild(tdE1);
//         tdE1.textContent = this.locationname[i];
//         console.log(this.locationname);

//         for (var j = 0; j < Hours.length; j++) {
//             var tdE2 = document.createElement('td');
//             trE1.appendChild(tdE2);
//             tdE2.textContent = this.amountofcookies[j];
//             console.log(this.amountofcookies[j]);

//         }
//         var tdE3 = document.createElement('td');
//         trE1.appendChild(tdE2);
//         tdE3.textContent = this.total;
//     }
// }

=======



//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144


// Shop.prototype.header=function(){

//     for(var i=0;i<locations;i++){
//         var trE2=document.createElement('tr')
//         tableE1.appendChild(trE2);
//         var thE1=document.createElement('th')
//        trE2.appendChild(thE1);
//         thE1.textContent='';
//         var thE2=document.createElement('th')

// }

// Seattle.totalcookies();
// Seattle.render();

<<<<<<< HEAD
//     }

// }

=======
// var Tokyo = {
//     loc: 'Tokyo',
//     max: 24,
//     min: 3,
//     avg: 1.2,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies1: function () {
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

 //Seattle.HeaderTable();

//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

<<<<<<< HEAD



=======
//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144







<<<<<<< HEAD
=======
//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144




// }

// Tokyo.totalcookies1();
// Tokyo.render();
// var Dubai = {
//     loc: 'Dubai',
//     max: 38,
//     min: 11,
//     avg: 3.7,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

<<<<<<< HEAD
=======
//     totalcookies2: function () {
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

<<<<<<< HEAD






// var Seattle = {
//     loc1: 'Seattle',
//     max: 65,
//     min: 23,
//     avg: 6.3,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies: function () {


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }
=======
//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;







//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }

>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

<<<<<<< HEAD
//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc1;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;
=======
// }

// Dubai.totalcookies2();
// Dubai.render();
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

// var Paris = {
//     loc: 'Paris',
//     max: 38,
//     min: 20,
//     avg: 2.3,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

<<<<<<< HEAD
=======
//     totalcookies3: function () {
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

<<<<<<< HEAD
//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }




// }
=======
//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;

>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

// Seattle.totalcookies();
// Seattle.render();

<<<<<<< HEAD
// var Tokyo = {
//     loc: 'Tokyo',
//     max: 24,
//     min: 3,
//     avg: 1.2,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies1: function () {


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }
=======




//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }

>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

<<<<<<< HEAD
//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;
=======
// }

// Paris.totalcookies3();
// Paris.render();
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144

// var Lima = {
//     loc: 'Lima',
//     max: 16,
//     min: 2,
//     avg: 4.6,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

<<<<<<< HEAD
=======
//     totalcookies4: function () {
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

<<<<<<< HEAD
//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }




// }

// Tokyo.totalcookies1();
// Tokyo.render();
// var Dubai = {
//     loc: 'Dubai',
//     max: 38,
//     min: 11,
//     avg: 3.7,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies2: function () {


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;







//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }




// }

// Dubai.totalcookies2();
// Dubai.render();

// var Paris = {
//     loc: 'Paris',
//     max: 38,
//     min: 20,
//     avg: 2.3,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies3: function () {


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;







//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }




// }

// Paris.totalcookies3();
// Paris.render();

// var Lima = {
//     loc: 'Lima',
//     max: 16,
//     min: 2,
//     avg: 4.6,

//     rancut: 0, //random number custumer
//     amountp: [], //amount cookies per hour
//     Total: 0, //total cookies

//     totalcookies4: function () {


//         for (var i = 0; i < Hours.length; i++) {
//             this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.rancut = Math.floor(this.rancut * this.avg);
//             this.Total = this.Total + this.rancut;
//             this.amountp[i] = this.rancut;

//         }

=======
>>>>>>> 87c64ba4d75b363edaf7444496aed8e90e368144
//         console.log(this.rancut);
//         console.log(this.amountp);

//         console.log(this.Total);
//     },

//     render: function () {

//         var container = document.getElementById('Finalcookies');
//         //  console.log(container) ;
//         var articleE1 = document.createElement('artilce');
//         console.log(articleE1);
//         container.appendChild(articleE1);
//         var h1E1 = document.createElement('h1');
//         articleE1.appendChild(h1E1);
//         h1E1.textContent = this.loc;
//         var ulE1 = document.createElement('ul')
//         articleE1.appendChild(ulE1);
//         for (var y = 0; y < Hours.length; y++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;







//         }
//         liE1.textContent = ` Total: ${this.Total} cookies `;
//     }




// }

// Lima.totalcookies4();
// Lima.render();





