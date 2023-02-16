var arr = [1,2,3,4,5];

for (var i=0; i > arr.length; i++){
    console.log(arr[i]); 
}
/*---------------------------------------*/

function encontrarLetraP(string){
    var letras =string.split("");

    for (var i=0; i < string.length; i++){
        if (letras[i] == 'p'){
            console.log('Si contiene la letra p');
                    }
        }
    

}
encontrarLetraP('javascript');
encontrarLetraP('henry');

//*---------------------------------------*

var arr =[];

while (arr.length < 10){
    arr.push('BOOM!');
}
console.log(arr);
//*-------------------------------------------*/
arrayChar = ['a', 'b', 'c', 'd', 'e', 'f'];
arrayString  = ["Hola", "mundo"];
arrayNumeros = [1, 2, 3, 4, 5];
arrayNumerosF = [1.1,2.2];

arrayInvalido = ['a',5,-1,"texto",1.1];    //Los array son de un tipo de lista 

arrayArray = [[1,2,3],[4,5,6],[7,8,9]];    //Contiene varios arrays