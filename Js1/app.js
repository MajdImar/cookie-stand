var Hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var Seattle = {
    loc1: 'Seattle',
    max: 65,
    min: 23,
    avg: 6.3,

    rancut: 0, //random number custumer
    amountp: [], //amount cookies per hour
    Total: 0, //total cookies

    totalcookies: function () {


        for (var i = 0; i < Hours.length; i++) {
            this.rancut = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.rancut = Math.floor(this.rancut * this.avg);
            this.Total = this.Total + this.rancut;
            this.amountp[i] = this.rancut;

        }

        console.log(this.rancut);
        console.log(this.amountp);

        console.log(this.Total);
    },

    render: function () {

    var container = document.getElementById('Finalcookies');
    //  console.log(container) ;
    var articleE1 = document.createElement('artilce');
    console.log(articleE1);
    container.appendChild(articleE1);
    var h1E1 = document.createElement('h1');
    articleE1.appendChild(h1E1);
    h1E1.textContent = this.loc1;
    var ulE1 = document.createElement('ul')
    articleE1.appendChild(ulE1);
    for (var y = 0; y < Hours.length ; y++) {
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1);
        liE1.textContent = ` ${Hours[y]} ${this.amountp[y]} cookies `;







    }
    liE1.textContent = ` Total: ${this.Total} cookies `;
    }




}

Seattle.totalcookies();
    Seattle.render();

