// 1. at
// Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)
function getValue(arr, endIndex) {
  return arr.at(endIndex);
}
const arr = [10, 20, 30, 40, 50];
console.log(getValue(arr, -2));

// Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.
function getEvenIndexElements(arr3) {
  const result = [];
  for (let i = 0; i < arr3.length; i++) {
    if (i % 2 === 0) {
      result.push(arr3.at(i));
    }
  }
  return result;
}
const arr3 = [10, 20, 30, 40, 50, 60];
console.log(getEvenIndexElements(arr3));

// Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating.
function changeElement(arr4, index) {
  arr4[index] = `hello`;
  return arr4;
}
let arr4 = [10, 20, 30, 40, 50];
let index = 2;
console.log(changeElement(arr4, index));

// 2. join
// Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.
function mergeArray(arr5, element) {
  return arr5.join(element);
}
let arr5 = [10, 20, 30, 40, 50];
let element = `*`;
let res = mergeArray(arr5, element);
console.lo(res, res.length);

// Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.
function reverseAndJoin(arr6, separator) {
  return arr6.reverse().join(separator);
}
const arr6 = ["apple", "banana", "cherry", "date"];
console.log(reverseAndJoin(arr6, ", "));

// Berilgan massivning faqat toq sonli elementlarini ajratib, ularni biriktiruvchi funksiyani yarating.
function joinOddNumbers(arr7) {
  const oddNumbers = [];
  for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 !== 0) {
      oddNumbers.push(arr7[i]);
    }
  }
  return oddNumbers.join(", ");
}
const arr7 = [10, 21, 32, 43, 54, 65];
console.log(joinOddNumbers(arr7));

// 3. toString
// Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.
function getStringLengths(arr8) {
  const lengths = [];
  for (let i = 0; i < arr8.length; i++) {
    lengths.push(arr8[i].toString().length);
  }
  return lengths;
}

const arr8 = [10, "hello", true, 45.6];
console.log(getStringLengths(arr8));

// Massiv elementlarini string shaklida birlashtiring.
function joinArrayToString(arr9) {
  return arr9.toString();
}
const arr9 = [10, "apple", true, 45, `hello`];
console.log(joinArrayToString(arr9));

// Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.
function $toString(arr10) {
  const arrString = arr10.toString();
  const newArr = arrString.split(",");
  newArr.pop();
  return newArr.join(",");
}

const arr10 = [10, "apple", true, 45, "hello"];
console.log(toString(arr10));

// 4. split (Massiv metodlariga oid emas, shuning uchun bu yerda ishlatilmaydi.)

// 5. concat
// Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.
let arr11 = [12, 56, 373, 987, 75];
let arr12 = [98, 76, 35, 12, 78, 10, 221];
let newArr1 = [];
function $concat(arr11, arr12) {
  newArr1 = arr11.concat(arr12);
  newArr1.pop();
  return newArr1;
}
console.log($concat(arr11, arr12));

// Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.
let arr13 = [12, 56, 373, 987, 75];
let arr14 = [98, 76, 35, 12, 78, 10, 221];
let arr15 = [98, 76, 35, 12, 78, 10, 221];
let arr16 = [];
const unique = [];
function $concat(arr13, arr14, arr15) {
  arr16 = arr13.concat(arr14, arr15);
  for (let i = 0; i < arr16.length; i++) {
    if (unique.indexOf(arr16[i]) == -1) {
      unique.push(arr16[i]);
    }
  }
  return unique;
}
console.log($concat(arr13, arr14, arr15, arr16));

// Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.
let array1 = [12, 56, 373, -987, 75];
let array2 = [98, -76, 35, 12, 78, 10, -221];
let array3 = [-89, -67, -53, -21, 78, 10, 221];
function positiveCalculator(array1, array2, array3) {
  let reseverArray = array1.concat(array2, array3);
  const positiveArray = [];
  for (let i = 0; i < reseverArray.length; i++) {
    if (reseverArray[i] > 0) {
      positiveArray.push(reseverArray[i]);
    }
  }
  return positiveArray;
}
console.log(positiveCalculator(array1, array2, array3));

// 6. copyWithin
// Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.
const $array1 = [12, 56, 373, -987, 75];
function indexReplacer($array1) {
  $array1.copyWithin(0, -3);
  return $array1;
}
console.log(indexReplacer($array1));

// Massivning bir qismini ko'chirish orqali oxirgi bo'lakni juft indekslarga qo'yuvchi funksiyani yarating.
//bajara olmadim
// const $array2 = [12, 56, 373, -987, 75];
// function replaceLastIndex($array2) {
//   const lastPart = $array2.slice();
// }

// Massivning biror qismini boshqa indeksga ko'chirgan holda yangi massiv qaytaruvchi funksiyani yarating.
const $array2 = [12, 56, 373, -987, 75];
function replaceSliceToNewArray($array2) {
  const $newArray2 = $array2.copyWithin(0, -4);
  return $newArray2;
}
console.log(replaceSliceToNewArray($array2));

// 7. flat
// Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.
const $array3 = [12, [56, 17, 85], 373, [16, 18, 26] - 987, 75];
function reseverOddNu($array3) {
  const $newArray3 = $array3;
  $array3.flat();
}

// 3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.
// Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.

// 8. splice, toSpliced
// Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.
// Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.
// Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.

// 9. slice
// Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.
// Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.
// Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.

// 10. indexOf, lastIndexOf
// Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.
// Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.
// Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.

// 11. includes
// Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.
// Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.
// Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.

// 12. sort
// Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.
// Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.
// Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.

// 13. reverse
// Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.
// Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.
// Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.

// 14. for...of
// for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.
// for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.
// for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.

// 15. for...in
// for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.
// for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.
// for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.
