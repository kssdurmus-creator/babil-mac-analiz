function analiz() {
  let t1 = document.getElementById("t1").value;
  let t2 = document.getElementById("t2").value;
  let avg = parseFloat(document.getElementById("avg").value);

  let tahmin = "";

  if (avg > 2.7) tahmin = "Üst (2.5)";
  else if (avg < 2.0) tahmin = "Alt (2.5)";
  else tahmin = "KG Var";

  document.getElementById("sonuc").innerHTML =
    `⚽ <b>${t1}</b> vs <b>${t2}</b><br><br> Tahmin: <b>${tahmin}</b>`;
}