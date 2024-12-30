function tabuada() {
   let num2 = document.querySelector("#num")
   let selectabuada2 = document.querySelector("#selectabuada")
   
   if (num2.value.length === 0) {
    window.alert("Por favor, insira um número.")
   }

   else {
    selectabuada2.innerHTML = " "
    n = Number(num2.value)
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement("option");
        item.text = `${n} x ${c} = ${n*c}`
        selectabuada.appendChild(item)
        
    }
        
   }
}