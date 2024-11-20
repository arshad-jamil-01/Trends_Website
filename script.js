function lenis(){
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

}
lenis();


//let home = document.querySelector("#home")
let card = document.querySelector(".trend");
let card2 = document.querySelector("#cardsec")
let main = document.querySelector(".main");
let blogdown = document.querySelector("#blogdown");
let shop = document.querySelector("#shops");
let home = document.querySelector("#home");
let blog = document.querySelector("#blog");
let about = document.querySelector("#about");
let aboutPage = document.querySelector(".aboutPage");
let contact = document.querySelector("#contact")
let footer = document.querySelector("#footer");
let CPage = document.querySelector("#contactsPage");
// let lastfooter = document.querySelector(".footer")


//home
function homes(){
    home.addEventListener("click",function(){
        main.style.display="flex"
        blogdown.style.display="block"
        card.style.display="block"
        card2.style.display="block"
        shop.style.color="black";
        home.style.color="rgb(9, 135, 135)";
        home.style.borderBottom=" 2px solid rgb(9, 135, 135)";
        shop.style.borderBottom="none";
        blog.style.color="black";
        blog.style.borderBottom="none";
        about.style.color="black";
        about.style.borderBottom="none";
        aboutPage.style.color="none"
        contact.style.color="black";
        contact.style.borderBottom="none";
         CPage.style.display="none"
        
    })
}
homes();


//shop
function shops(){
    shop.addEventListener("click", function(){
        main.style.display="none";
        blogdown.style.display="none";
        shop.style.color="rgb(9, 135, 135)";
        shop.style.borderBottom=" 2px solid rgb(9, 135, 135)";
        home.style.color = "black";
        home.style.borderBottom=" none";
    })
}
shops();


//blog
function blogs(){
    blog.addEventListener("click", function(){
        blogdown.style.display="";
        main.style.display="none";
        card.style.display = "none"
        card2.style.display = "none"
        blog.style.color="rgb(9, 135, 135)";
        blog.style.borderBottom=" 2px solid rgb(9, 135, 135)";
        shop.style.color = "black";
        shop.style.borderBottom="none";
  })
}
blogs();


//about
function abouts(){
    about.addEventListener("click",function(){
        aboutPage.style.display="block"
        aboutPage.style.overflow = "hidden";
        blogdown.style.display="none";
        main.style.display="none";
        card.style.display = "none"
        card2.style.display = "none"
        about.style.color="rgb(9, 135, 135)";
        about.style.borderBottom=" 2px solid rgb(9, 135, 135)";
        blog.style.color = "black";
        blog.style.borderBottom="none";
        footer.style.display="flex"

       
    })
}
abouts()

function contactsPages(){
    contact.addEventListener("click",function(){
        CPage.style.display="block"
        aboutPage.style.display="none"
        blogdown.style.display="none";
        main.style.display="none";
        card.style.display = "none"
        card2.style.display = "none"
        about.style.color="black";
        about.style.borderBottom="none";
        blog.style.color = "black";
        blog.style.borderBottom="none";
        footer.style.display="flex"
        about.style.color="black";
        about.style.borderBottom="none";
        contact.style.color="rgb(9, 135, 135)";
        contact.style.borderBottom=" 2px solid rgb(9, 135, 135)";
        home.style.color="black";
        home.style.borderBottom="none";

       
    })
}
contactsPages()


function show(img){
    let newImage = document.getElementById("newImage");
    console.log(img)
    newImage.src = img.src;
    document.querySelector(".cart").style.display="flex";
    main.style.display="none"
    blogdown.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    shop.style.display="none";
    aboutPage.style.display="none"
    // footer.style.display="none"
    // lastfooter.style.display="none"
}

function addCart(){
    alert(" Added To Cart");
    location.reload();
}

