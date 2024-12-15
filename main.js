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
console.log(res, res.length);

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
const $array3 = [12, [56, 17, 85], 373, [16, 18, 26], -987, 75];
function reseverOddNum($array3) {
  const flattedArray = $array3.flat();
  const $newArray3 = [];
  for (let i = 0; i < flattedArray.length; i++) {
    if (flattedArray[i] % 2 !== 0) {
      $newArray3.push(flattedArray[i]);
    }
  }
  return $newArray3;
}
console.log(reseverOddNum($array3));

// 3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.
const $array4 = [
  12,
  [
    56,
    [123, 432, 765, 98, [21, 45, 765]],
    [55, -85, 98, [-45, 78, 65, [52, -63]]],
    17,
    85,
  ],
  373,
  [16, 18, 26],
  -987,
  75,
];
function twoDegreeFlatter($array4) {
  return $array4.flat(2);
}
console.log(twoDegreeFlatter($array4));

// Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.
const $array5 = [
  12,
  [
    56,
    [123, 432, 765, 98, [21, 45, 765]],
    [55, -85, 98, [-45, 78, 65, [52, -63]]],
    17,
    85,
  ],
  373,
  [16, 18, 26],
  -987,
  75,
];
const $array6 = [12, [56, 17, 85], 373, [16, 18, 26], -987, 75];
function elementSum($array5, $array6) {
  const flattedArray = $array6.flat(Infinity).concat($array5.flat(Infinity));
  let sum = 0;
  for (let i = 0; i < flattedArray.length; i++) {
    sum += flattedArray[i];
  }
  return sum;
}
console.log(elementSum($array5, $array6));

// 8. splice, toSpliced
// Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.
const array4 = [12, 56, 373, -987, 75];
function removerThreeElement(array4, index) {
  return array4.toSpliced(index, 3);
}
let res1 = removerThreeElement(array4, 2);
console.log(res1);

// Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.
const array = [12, 56, 373, -987, 75];
let newArr2 = [852];
for (let i = newArr2.length - 1; i >= 0; i--) {
  array.splice(0, 0, newArr2[i]);
}
console.log(array);

// Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.
const array5 = [12, 56, 373, -987, 75];
let newArr3 = 852;
const $newArray = array5.toSpliced(Math.floor(array5.length / 2), 0, newArr3);
console.log($newArray);

// 9. slice
// Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.
const array6 = [12, 56, 373, -987, 75];
function getMiddileElements(array6) {
  const midIndex = Math.floor(array6.length / 2);
  const getSlice = array6.slice(midIndex, midIndex + 1);
  return getSlice;
}
console.log(getMiddileElements(array6));

// Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.
const array7 = [12, 56, 373, -987, 75];
function massiReturnerInFront(array7) {
  const newArr4 = array7.slice(array7.length, -3);
  return newArr4;
}
console.log(massiReturnerInFront(array7));

// Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.
const array8 = [12, 56, 373, -987, 75];
function evenIndexreturner(array8) {
  const evenElements = [];
  for (let i = 1; i < array8.length; i += 2) {
    evenElements.push(array8.slice(i, i + 1)[0]);
  }
  return evenElements;
}
console.log(coupleIndexreturner(array8));

// 10. indexOf, lastIndexOf
// Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.
function indexSumReturner(array9, number) {
  let sum = 0;
  for (let i = 0; i < array9.length; i++) {
    if (array[i] == number) {
      const index = array9.indexOf(target, i);
      sum += index;
      i = index;
    }
  }
  return sum;
}
const array9 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
let number = 56;
console.log(array9, number);

// Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.
function lengthFinder(array10) {
  let firstElement = array10.indexOf(array10[0]);
  let lastElement = array10.lastIndexOf(array10[array10.length - 1]);
  let distance = lastElement - firstElement;
  return distance;
}
const array10 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(lengthFinder(array10));

// Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.
function indexChanger(array11, number1) {
  const firstIndex = array11.indexOf(number1);
  const lastIndex = array11.lastIndexOf(number1);
  if (firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex) {
    [array[firstIndex], array[lastIndex]] = [
      array[lastIndex],
      array[firstIndex],
    ];
  }
  return array11;
}
const array11 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
const number1 = 56;
console.log(indexChanger(array11));

// 11. includes
// Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.
const array12 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
function positiveArray1(array12) {
  for (let number of array12) {
    if (!array12.includes(number) || number <= 0) {
      return false;
    }
    return true;
  }
}
console.log(positiveArray1(array12));

// Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.
function addValue(arr13, value) {
  if (!arr13.includes(value)) {
    arr13.push(value);
  }
  return arr13;
}
const arr17 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(addValue(arr17, 100));

// Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.
function beInclude(ar1) {
  for (i = 0; i < ar1.length - 1; i++) {
    if (!ar.includes(ar[i] + 1)) {
      return false;
    }
  }
  true;
}
const ar = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(beInclude(ar));

// 12. sort
// Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.
function elementReturner(ar1) {
  return ar1.sort((a, b) => b - a).slice(0, 3);
}
const ar1 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(elementReturner(ar1));

// Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.
function sortTypeOfNumber(ar2) {
  let posNum = ar2.filter((num) => num > 0).sort((a, b) => a - b);
  let negNum = ar2.filter((num) => num < 0).sort((a, b) => a - b);
  return { posNum, negNum };
}
const ar2 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(sortTypeOfNumber(ar2));

// Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.
function sortThreeElements(ar3) {
  let firstThree = array.slice(0, 3).sort((a, b) => a - b);
  return firstThree;
}
const ar3 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(sortThreeElements(ar3));

// 13. reverse
// Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.
function revMassiv(ar4) {
  let revArr = ar4.slice(0, ar4.length - 1).reverse();
  revArr.push(ar4(ar4.length - 1));
  return revArr;
}
const ar4 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(revMassiv(ar4));

// Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.
function delMidMass(ar) {
  let revArr1 = ar.reverse();
  let midIndex = Math.floor(revArr1.length / 2);
  revArr1.splice(midIndex, 1);
  return revArr1;
}
const ar5 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(delMidMass(ar5));

// Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.
function rev2Times(ar) {
  let rev1Time = ar.reverse();
  let rev2Time = ar.reverse();
}
const ar6 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(rev2Times(ar6));

// 14. for...of
// for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.
function aveEveNum(ar) {
  let eveNUm = 0;
  let SumEveNUm = 0;
  for (let num of ar) {
    SumEveNUm += num;
    eveNUm++;
  }
  if (eveNUm > 0) {
    return SumEveNUm / eveNUm;
  } else {
    return null;
  }
}
const ar7 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(aveEveNum(ar7));

// for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.
function forOfTest(ar, val) {
  let newArr6 = [];
  for (let num of ar) {
    newArr6.push(num + val);
  }
  return newArr6;
}
const ar8 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(forOfTest(ar8, 7));

// for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.
function negNumNew(ar) {
  let newRes = [];
  for (let num of ar) {
    if (num < 0) {
      newRes.push(num);
    }
  }
  return newRes;
}
const ar9 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(negNumNew(ar9));

// 15. for...in
// for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.
function SumIndexAmount(ar) {
  let sum = 0;
  for (let index in ar) {
    sum += Number(index);
  }
  return sum;
}
const ar10 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(SumIndexAmount(ar10));

// for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.
function IndexChanger(ar) {
  for (let index in ar) {
    ar[index] = Number(index);
  }
  return ar;
}
const ar11 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(IndexChanger(ar11));

// for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.
function ShowPositiveIndex(ar) {
  for (let index in ar) {
    if (ar[index] > 0) {
      console.log(`Indeks:${index}ning Qiymat:${ar[index]}`);
    }
  }
  return ar;
}
const ar12 = [12, 56, 373, -987, 75, 56, 35, 95, 45, 54, 56, 57, 25];
console.log(ShowPositiveIndex(ar12));
