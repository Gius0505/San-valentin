const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

btnYes.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background: linear-gradient(135deg, #ff4e8b, #ff9ecf);
      font-family:Arial;
      text-align:center;
      padding:20px;
    ">
      <div style="
        background:white;
        padding:30px;
        border-radius:20px;
        max-width:400px;
        box-shadow:0 15px 30px rgba(0,0,0,0.3);
      ">
        <img src="final.jpg" style="
          width:100%;
          border-radius:15px;
          margin-bottom:20px;
        ">
        <h1>Sabía que dirías que sí 💖</h1>
        <p> Gracias por existir y hacerme tan feliz amor, eres lo mejor que me paso en la vida princesa Te Amo Amor 💕</p>
         <p> "CON MUCHO AMOR Y CARIÑO, GIUSEP</p>
    </div>
  `;
});

btnNo.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  btnNo.style.position = "fixed";
  btnNo.style.left = x + "px";
  btnNo.style.top = y + "px";
});

