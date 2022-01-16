var card ={suit : "heart", rank : "A"};

console.log(card.suit)

card.value = 14;

console.log(card);

card.rank = "B";
delete card.suit;
console.log(card);

console.log("suit" in card);

var circle = {
	center: {x:1.0, y: 2.0}, //객체의 프로퍼티 값으로 객체를 넣을 수도 있음
	radius: 2.5
};

console.log(circle);

function square(x)
{
	return x*x;
}

console.log(square(3));

var bark = function() { console.log("Bow-wow"); };
bark();
