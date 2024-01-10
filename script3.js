const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        text: "i m a baby meggings twee health golth +1.bicycle rights tumerix xhartreswuse before they sold out chembray pop-up.shamam humblebrag picked coloring book salvia hoodie,cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        text: "helvetica artisan kinfolk thundercats lumbersexual blue bottle.disrupt glossier gastropub  deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',

    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let currentitem = 0;

window.addEventListener("DOMContentLoaded",function(){
    randomperson();
});

function randomperson(){
    const item = reviews[currentitem];
    img.src = item.img ;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextbtn.addEventListener("click",function(){
    currentitem++;
    if(currentitem>reviews.length-1){
       currentitem = 0
    }
    randomperson();
});

prevbtn.addEventListener("click",function(){
    currentitem--;
    if(currentitem<0){
        currentitem = reviews.length-1
     }
    randomperson();
});

randombtn.addEventListener("click",function(){
   currentitem = Math.floor(Math.random() * reviews.length)
   randomperson(currentitem);
});