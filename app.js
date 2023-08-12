// const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
//           '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
//           '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
//           '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
//           '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
//           '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
//           '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
//           '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
//           '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
//           '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

// const contenedor =document.getElementsByTagName('body')
// const btn = document.querySelector('#btn')
// const colorText = document.querySelector('h2')

// const generarColor = ()=>{
//     const numRandom = Math.round(Math.random() * (50 - 1) + 1);
//     const colorRandom = colorArray[numRandom];

// };

// btn.addEventListener('click', (e)=>{
//     generarColor();
//   colorText.innerText = e.target.value

// })

const colores = document.getElementById("color");
const btn = document.querySelector("button");

const generarColor = () => {
  let cadena = "0123456789ABCDEF";
  let xcolores = "#";

  for (let i = 0; i < 6; i++) {
    let aleatorio = Math.floor(Math.random() * 16);
    xcolores += cadena[aleatorio];
  }
  return xcolores;
};

btn.addEventListener("click", function () {
  let aleatorio = generarColor();
  colores.textContent = aleatorio;
  document.body.style.backgroundColor = aleatorio;
});
