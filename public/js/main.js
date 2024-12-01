import createElementFromHtml from "./js/createElementFromHtml.js";
import products from "./js/productData.js";
const prod1 = products[0];
export default function makeTable(myobject){
    const table=document.querySelector('.main-table');
        Object.keys(myobject).forEach((value) => {
            table.appendChild(`<tr>${createElementFromHtml(`<td>${value}</td>`)}</tr>`)
        });
};
makeTable(prod1);

