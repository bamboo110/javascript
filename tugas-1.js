function number(a) {
  if (Number.isInteger(a)) {
    let b = '';
    for(let x = 0; x < a; x++){
      b += x + 1;
    }
    console.log(b);
  } else {
    console.log('tolong masukan angka')
  }
}

number(7);
