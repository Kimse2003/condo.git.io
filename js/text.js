const navbar = document.getElementById("navbar");

window.onscroll = () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    const valuescroll = 120;

    if (window.scrollY > valuescroll) {
        navbar.style.backgroundColor = "    #353935";
        navbar.style.transition = "0.5s";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "0.5s";
    }

};

// const condos = [
//     {
//       "id": 1,
//       "title": "Small Condo in Downtown",
//       "price": 75000,
//       "bedrooms": 1,
//       "location": "Downtown City",
//       "image": "https://example.com/images/condo1.jpg"
//     },
//     {
//       "id": 2,
//       "title": "Cozy Studio Condo",
//       "price": 85000,
//       "bedrooms": 1,
//       "location": "Suburban Area",
//       "image": "https://example.com/images/condo2.jpg"
//     },
//     {
//       "id": 3,
//       "title": "Compact City Condo",
//       "price": 69000,
//       "bedrooms": 1,
//       "location": "City Center",
//       "image": "https://example.com/images/condo3.jpg"
//     },
//     {
//       "id": 4,
//       "title": "Modern Condo with City View",
//       "price": 90000,
//       "bedrooms": 2,
//       "location": "Uptown District",
//       "image": "https://example.com/images/condo4.jpg"
//     },
//     {
//       "id": 5,
//       "title": "Affordable Condo in the Suburbs",
//       "price": 80000,
//       "bedrooms": 1,
//       "location": "Suburban Neighborhood",
//       "image": "https://example.com/images/condo5.jpg"
//     }
//   ];

// const rowcard = document.getElementById("rowcard");

// condos.forEach(condo => {
//     const condoElment = 
//     `
//         <div class="col-6 col-md-4 col-lg-3 p-1 p-md-2 my-1">
//             <div class="card overflow-hidden">
//             <div class="image bg-secondary">
//                 <img
//                 class="w-100 h-100 object-fit-cover"
//                 src="https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Small-bedroom-in-a-condo-interior-design.jpg"
//                 alt=""
//                 />
//             </div>
//             <div class="card-body text-center suse-font">
//                 <h4>$${condo.price}</h4>
//                 <div class="border-top text-center pt-2">
//                 <p class="m-0 text-secondary">
//                     <i class="bi bi-geo-alt-fill text-dark"></i>
//                     ${condo.location}
//                 </p>
//                 <p class="m-0 text-secondary">
//                     <i class="fa-solid fa-bed text-dark"></i>
//                     ${condo.bedrooms} BED</p>
//                 </div>
//             </div>
//             </div>
//         </div>
//     `
//     rowcard.innerHTML += condoElment;
// })