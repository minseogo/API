const mydata = ["영어", "중국어", "일본어"];

mydata.forEach(function(value,i){
    console.log("forEach의 첫번째 매개인자 : ", value);
    console.log("array문을 그대로 가져다 씀 : ", mydata[i])
})

for(i in mydata){
    console.log("for in문 : ", mydata[i]);
}

const testdata = [
    ["네이버", "naver"],
    ["다음", "daum"],
    ["구글", "google"]
]

console.log(testdata[1][1])

testdata.forEach(function(value,i){
    console.log(value[0])
})

const testdataoj = [
    {
        nm : "네이버",
        href : "http://www.naver.com",
        cls : "naver"
    },
    {
        nm : "다음",
        href : "http://www.daum.net",
        cls : "daum"
    }, {
        nm : "구글",
        href : "http://www.google.com",
        cls : "google"
    }
]

testdataoj.forEach((ele, idx)=>{
    console.log(`<li class = "${ele.cls}"><a href="${ele.href}">${ele.nm}</a></li>`)
    console.log(`<li class = "${ele["cls"]}><a href="${ele["href"]}">${ele["nm"]}</a></li>`)
    console.log(ele["nm"])
    // 백틱을 사용해서
    // <li><a href="http://www.naver.com">네이버</a><li>
    // <li><a href="http://www.daum.net">다음</a><li>
    // <li><a href="http://www.google.com">구글</a><li>
    // 위의 3줄이 출력되도록 합니다
})

function nomalfun(a, b){
    // 선언적 함수 ( 위치 상관없이 먼저 읽어주는 함수 )
    // 중요한 함수 사용할때 / 무겁다
}

const nomalfun = (a, b) => {
    // ( 실행 위치에 맞춰 읽어주는 함수 )
    // 1회용 함수 / 가볍다
}