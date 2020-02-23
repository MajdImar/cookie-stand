var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Seattle = {

    max: 65,
    min: 23,
    avg: 6.3,

    custrandomnum: 0,
    customer: [],
    Total: 0,

    totalcookies: function () {
        

        for (var i = 0; i < Hours.length; i++) {
            this.custrandomnum = Math.floor(Math.random() * (this.max - this.min) + this.min );
            this.custrandomnum = Math.floor(this.custrandomnum * this.avg);
            this.Total = this.Total + this.custrandomnum;
            this.customer[i] = this.custrandomnum;

        }
      
       console.log(this.custrandomnum);
       console.log(this.customer);

        console.log(this.Total);
    }



}
Seattle.totalcookies();

var Tokyo = {

    max: 24,
    min: 3,
    avg:1.2,

    custrandomnum1: 0,
    customer1: [],
    Total1: 0,

    totalcookies1: function () {
        

        for (var i = 0; i < Hours.length; i++) {
            this.custrandomnum1 = Math.floor(Math.random() * (this.max - this.min) + this.min );
            this.custrandomnum1= Math.floor(this.custrandomnum1 * this.avg);
            this.Total1 = this.Total + this.custrandomnum1;
            this.customer1[i] = this.custrandomnum1;

        }
        
        console.log(this.custrandomnum1);
        console.log(this.customer1);

        console.log(this.Total1);
    }



}
Tokyo.totalcookies1();
