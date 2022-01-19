document.write("Hello. ");

// window.alert("오류입니다!");

// var name = prompt("이름을 입력하세요!");

// document.write("my name is " + name);

// var age = parseInt(prompt("Input age")); //파싱int
// var height = parseFloat(prompt("Input height")); //파싱float

// document.write("my age is " + age + " my heigt is " + height);

// var ret = confirm("링크를 표시하겠습니까?"); //True or False Return

// document.write("Ret value is " + ret);

document.write("<br>")
document.write("------------------------------");
document.write("<br>")

//객체의 프로퍼티 목록 표시
var p = {x:1, y:2};
console.log(p);

document.write(p);
document.write("<br>")
document.write(p.x + " " + p.y);

console.time("answer_time");
alert ("확인 버튼을 누르십시오")
console.timeEnd("answer_time");
