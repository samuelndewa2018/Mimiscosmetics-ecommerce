// import React from "react";
// import "./Hscrool.css";

// const Hscrool = ({ product }) => {
//   const button = document.getElementById("button");
//   const cart = document.getElementById("cart");
//   const text = document.getElementById("text");

//   function clickHandler() {
//     if (!document.getElementsByClassName("cartAnimation").length) {
//       cart.classList.add("cartAnimation");
//       text.classList.add("textAnimation");
//       button.classList.add("buttonAnimation");
//     } else {
//       cart.classList.remove("cartAnimation");
//       text.classList.remove("textAnimation");
//       button.classList.remove("buttonAnimation");
//     }
//   }
//   return (
//     <>
//       <header class="page-header">
//         <div class="container flow">
//           <h1 class="page-title">Horizontal scrolling</h1>
//           <p class="page-subtitle">Let's create a horizontal media scroller!</p>
//         </div>
//       </header>
//       <div className="body">
//         <button id="button" type="button" class="button" onClick={clickHandler}>
//           <svg
//             id="cart"
//             class="cart"
//             height="50px"
//             viewBox="0 -31 512.00033 512"
//             width="50px"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0" />
//             <path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0" />
//             <path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0" />
//           </svg>
//           <p id="text" class="text">
//             Add to cart
//           </p>
//         </button>
//       </div>

//       <h2 class="section-title">Featured Products</h2>
//       <div class="media-scroller snaps-inline">
//         <div class="media-element">
//           {" "}
//           <img
//             src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Lips Gross (plain)</p>
//           <p>Ksh. 450</p>
//           <p>Ratings goes here</p>
//         </div>
//       </div>
//       <h2 class="section-title">Individual elements</h2>
//       <div class="media-scroller snaps-inline">
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Short title</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">A longer title here</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">An even longer title on this one</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">A dog that's blinking?</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Chair</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Ut enim ad minim veniam</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Duis aute irure dolor</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Cillum dolore eu</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title"></p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Excepteur sint occaecat cupidatat non proident</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1642484865851-111e68695d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">At lectus urnaVestibulum</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Vestibulum</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Adipiscing tristique risus nec feugiat</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1643249960396-d39d2a63ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0Mw&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Rutrum tellus pellentesque eu tincidunt</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1641424222187-1c336d21804c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Bibendum enim</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1640998483268-d1faffa789ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODkwNA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Amet commodo</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1642034451735-2a8df1eaa2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">A erat nam at lectus</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1640808238224-5520de93c939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Pellentesque eu tincidunt tortor aliquam nulla</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1643039952431-38adfa91f320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Quam adipiscing vitae</p>
//         </div>
//         <div class="media-element">
//           <img
//             src="https://images.unsplash.com/photo-1643148636637-58b3eb95cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
//             alt=""
//           />
//           <p class="title">Fermentum</p>
//         </div>
//       </div>
//       <h2 class="section-title">Groups elements</h2>
//       <div class="media-scroller media-scroller--with-groups snaps-inline">
//         <div class="media-group">
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//         </div>

//         <div class="media-group">
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//         </div>

//         <div class="media-group">
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1642484865851-111e68695d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1643249960396-d39d2a63ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0Mw&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1641424222187-1c336d21804c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//         </div>

//         <div class="media-group">
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1640998483268-d1faffa789ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODkwNA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1642034451735-2a8df1eaa2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1640808238224-5520de93c939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1643039952431-38adfa91f320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//           <div class="media-element">
//             <img
//               src="https://images.unsplash.com/photo-1643148636637-58b3eb95cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Hscrool;
// scroll effect
// let currentScroll = 0;
// let scrollAmount = 320;

// const sCount = document.querySelector(".productContainer");
// const hScroll = document.querySelector(".container");
// const btnScrollRight = document.querySelector("#btnScrollRight");
// const btnScrollLeft = document.querySelector("#btnScrollLeft");

// // btnScrollLeft.style.opacity = "0";

// let maxScroll = -sCount.offsetWidth + hScroll.offsetWidth;

// function scrollHorizotal(val) {
//   currentScroll += val * scrollAmount;

//   if (currentScroll >= 0) {
//     currentScroll = 0;
//     btnScrollLeft.style.opacity = "0";
//   } else {
//     btnScrollLeft.style.opacity = "1";
//   }
//   if (currentScroll <= maxScroll) {
//     currentScroll = maxScroll;
//     btnScrollRight.style.opacity = "0";
//   } else {
//     btnScrollRight.style.opacity = "1";
//   }

//   sCount.style.left = currentScroll + "px";
// }
