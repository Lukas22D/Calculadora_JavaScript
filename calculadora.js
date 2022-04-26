function calculadora() {
    const operacao = prompt("Digite a operação desejada:\n 1- soma(+)\n 2- subtracao(-)\n 3-multiplicacao(*)\n  4- divisao real(/)\n 5 -divisao inteira(%)\n 6 -potencia(**)");
    if (!operacao || operacao>= 7) {
        alert("Erro!! - Operação inválida");
        calculadora();
    } else {
        let n1 = Number(prompt("Digite o primeiro valor"));
        let n2 = Number(prompt("Digite o segundo valor"));
        let resultado;

        if(!n1 || !n2) {
            alert("Erro!! - Valor inválido");
            calculadora();
        } else {
            function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
        }

        function potencializacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt("Deseja realizar outra operação?\n 1- Sim\n 2- Não");
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert("Obrigado por utilizar a calculadora, até mais!");
            } else {
                alert("Opção inválida!");
                novaOperacao();
            }
        }


        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potencializacao();
        }

        }
    }

}

calculadora();