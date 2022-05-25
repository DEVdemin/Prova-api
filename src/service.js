export function dobro(n) {
    return n * 2;
}

export function soma(a, b) {
    return a + b;
}

export function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

export function tabuada(n) {
    let array = [];
    for (let i = 0; i <= 10; i++) {
        array[i] = i * n;

    }
    return array
}


export function temperatura(a) {
    if (a > 37.5) {
        return true;
    }

    else {
        return false;
    }

}

export function corPrinmaria(cor) {
    

    if (cor == "vermelho" || cor == "azul" || cor == "amarelo") {
        return true;
    }
    else {
        return false;
    }
}

export function maiorNumero(n){
    let maior = 0;
    for(let item  of n){
        if(item>maior){
            maior = item;
        }
    }
    return maior;
}

export function ingresso (quantidadeI, quantidadeM, DiaSemana, Nacionalidade){
    let meia = 28.5 / 2;
    let inteira = 28.5;
    let soma = quantidadeI+quantidadeM;
    let total = 0;
    if(DiaSemana == "quarta" && Nacionalidade == "Brasileira" ){
        total = soma*5
    }
    else if(DiaSemana == "quarta"){
        total = meia * soma
    }
    else{
        total = (quantidadeI*inteira)+(quantidadeM*meia)
    }
    return total;
}

export function qtdCaracter(txt){
    
}