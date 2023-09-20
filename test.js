'use strict';

let i = 0;

for (i = 0; i < 10; i++) {
  console.log(i + " Merhaba Node.js");
}

//.break yazılan komuttan çıkmak için kullanılır. 
//.clear .break komutu ile aynı işleve sahiptir.
//.editor Her komutu ayrı ayrı yazmak yerine Linux işletim sistemlerindeki vi, vim, nano benzeri bir editör açar.
//.exit REPL yorumlayıcısını kapatmak için kullanılır.
//.help Node.js REPL komutları listesini verir.
//.load kaydedilen Node.js komutlarını açmak, çalıştırmak ve dosya içerisinde yazılan değişken, fonksiyon gibi tanımlamaları REPL oturumunda kullanmak için kullanılan bir komuttur.
//.save yazılan REPL komutlarını dosyaya kaydetmek için kullanılır.


'use strict';

function merhaba(basla, bitir) {

  basla('İşlem başladı.');

  console.log('Burada uzun bir işlem yer alıyor.');

  bitir('İşlem bitti.');

}

merhaba(f1, f2);

function f1(msj) {

  console.log(msj);

}

function f2(msj) {

  console.log(msj);

}