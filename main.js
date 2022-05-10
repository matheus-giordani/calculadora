function criaCalculadora() {
  return {
    display: document.getElementById("display"),

    clear: document.querySelector("#clean"),
    inicia() {
      this.display.focus();
      this.capturaClick();
      this.pressionaEnter();
      this.pressionaBackspace();
    },
    pressionaBackspace() {
      this.display.addEventListener("keyup", (event) => {
        if (event.key === "Backspace") {
          this.deleteOne();
        }
      });
    },
    pressionaEnter() {
      this.display.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },
    deleteOne() {
      // slice(0,-1) retorna a string sem o ultimo caracter sew fosse -2 seriam sem os dois ultimos

      this.display.value = this.display.value.slice(0, -1);
    },

    capturaClick() {
      document.addEventListener("click", (event) => {
        const element = event.target;

        if (element.classList.contains("btnNum")) {
          this.btnToDisplay(element.innerText);
        }
        if (element.id == "clear") {
          this.clearDisplay();
        }
        if (element.id == "del") {
          this.deleteOne();
        }
        if (element.id == "igualdade") {
          this.realizaConta();
        }
      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    },
  };
}
// instanciando objeto
const calculadora = criaCalculadora();

calculadora.inicia();
