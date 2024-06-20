const store = ["사과", "파인애플", "수박","체리"];
// 변수는 const 를 사용한다
// 변수는 늘 존재해야한다 / 변수 존재여부, 값 편집

for(let x = 0; x < store.length; x++){
    console.log("for문", store[x])
}

for(x in store){
    console.log("forin문", store[x])
}

store.forEach(function(ele,idx){   
    console.log("foreach문", ele)
})

store.forEach(function(ele,idx){
    // array에 직접 접근해서 값과 index 모두 접근가능
    // 2개의 매개인자 중 앞의 것이 값이 저장되고, 뒤의 변수가 index를 저장한다
    console.log("foreach문", ele,idx, typeof idx)
})

// --------------------------------------------------------------- // 


const storetest = [
     ["사과", 10000, 7000]
    ,["파인애플", 5000, ""]
    ,["수박", 15000, ""]
    ,["체리", 13000, 9000]
]
// 체리는 원가가 13000원이고 할인해서 9000 판매중입니다.
// 백틱을 사용해서 표현식

    console.log(`${storetest[3][0]}는 원가가 ${storetest[3][1]} 원이고 할인해서 ${storetest[3][2]} 원에 판매중입니다.`)
   
    for(x in storetest){
        console.log(`${storetest[x][0]}는 원가가 ${storetest[x][1]} 원이고 할인해서 ${storetest[x][2]} 원에 판매중입니다.`)
}
// x 가 받아야 할 변수 확인


    storetest.forEach(function(ele,idx){
        console.log(`${ele[0]}는 원가가 ${ele[1]} 원이고 할인해서 ${ele[2]} 원에 판매중입니다.`)
    })
// forEach value 타입확인 정렬이다

// --------------------------------------------------------------- // 


const stringdataapi = "서울|종로구|명륜3가|감나무집";
// string[], {} -> JSON.parse
// string -> array 전환 split 메서드
// array -> string 전환 join 메서드

let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word, typeof word);
// 출력: "Hello"

let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray);
// 출력: ["H", "e", "l", "l", "o"]

const parts = stringdataapi.split("|");

console.log(parts[0]+" "+parts[1])
