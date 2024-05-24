const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const price=document.querySelectorAll(".price");
	let total=0;
	price.forEach((price)=>{
		total+=parseFloat(price.textContent);
	})
	const totalRow = document.createElement("tr");
  const totalItemCell = document.createElement("td");
  totalItemCell.textContent = "Total Price";
  totalItemCell.setAttribute("colspan", "2");
  totalRow.appendChild(totalItemCell);

  const totalPriceCell = document.createElement("td");
  totalPriceCell.textContent = total;
  totalRow.appendChild(totalPriceCell);

  document.querySelector("table").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

