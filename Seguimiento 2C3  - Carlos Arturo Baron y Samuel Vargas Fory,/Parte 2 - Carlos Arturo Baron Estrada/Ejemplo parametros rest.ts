function sumar(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3));
console.log(sumar(5, 10, 15, 20)); 
