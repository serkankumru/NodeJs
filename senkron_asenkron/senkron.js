'use strict';

function islem() {

  uzunBirIslem();

  console.log('Merhaba Dünya');

}

function uzunBirIslem() {

  let i = 0;

  while (i < 10E9) { i++ }

  console.log('İşlem tamamlandı');

}

islem();

