import createElementFromHtml from "./createElementFromHtml.js";
import products from "./productData.js";
const prod1 = products[0];
export default function makeTable(myobject){
    const table=document.querySelector('.header-tr');
        Object.keys(myobject).forEach((value) => {
            let table2=table.appendChild(createElementFromHtml(`<td>${value}</td>`));
            console.table(table2)
        });
};
makeTable(prod1);

