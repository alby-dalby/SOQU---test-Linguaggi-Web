let a = document.getElementsByClassName("item_text");
for (let i = 0; i < a.length; i++) {
    console.log(a);
}
a[0].innerHTML = "Assembly"
a[1].innerHTML = "Batchfile"
a[5].innerHTML = "C"
a[6].innerHTML = "C#"
a[10].innerHTML = "C++"
a[13].innerHTML = "Coljoure"
a[14].innerHTML = "CoffeScript"
a[15].innerHTML = "Dart"

let immagine = document.getElementsByClassName("eltdf-normal-logo")[0];

immagine.src = "https://store-images.s-microsoft.com/image/apps.20300.13703813498146682.59ea0965-457f-440d-a02e-2a8fce6ff46e.404b0156-857f-463c-87b0-49dafb530f9e";

for (let i = 0; i < a.length; i++) { if (a[i].innerHTML === "Assembly" || a[i].innerHTML === "Batchfile" || a[i].innerHTML === "C" || a[i].innerHTML === "C++" || a[i].innerHTML === "C#" || a[i].innerHTML === "Coljoure" || a[i].innerHTML === "CoffeScript" || a[i].innerHTML === "Dart") { a[i].addEventListener("click", function () { window.open('https://it.wikipedia.org/wiki/' + a[i].innerHTML) }); } }


var link = document.createElement('a'); link.href = 'https://it.wikipedia.org/wiki/Pagina_di_Wikipedia'; link.textContent = 'Vai alla pagina di Wikipedia'; document.body.appendChild(link);