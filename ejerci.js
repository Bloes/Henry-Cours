function numesPositivo(num){
    if(num > 0){
        return ('Positivo');
}
    if (num < 0){
        return ('Negativo');

}
    else{
        return false;

}}
//console.log(numesPositivo(5));
/*-------------------------------------------------*/
 num = 1;
 while(num < 3){
   console.log(num);
   num =+1;
 
 } 
/*--------------------------------------------------*/
num1 = 1;
do{
    console.log(num1);
    num1 =+1;
}while(num1 < 3); 
/*--------------------------------------------------*/
for(i = 0; i <= 3; i = i + 1){
    console.log(i);
}
/*-------------------------------------------------*/
var estacion = "";
switch(estacion){
    case 'verano':
        console.log('ES verano');
        break;
    case 'primavera':
        console.log('Es primavera');
        break;
    case 'otoño':
        console.log('Es otoño');
        break;
        
    case 'inverno':
    console.log('Es inverno');
    break;
    default:
        console.log('Estacion no encontrada');
}
    
