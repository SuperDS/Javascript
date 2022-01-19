## **제어구문**

순차실행흐름을 변화시키는 문장을 제어구문이라고 함

그렇기에 자바스크립트가 문서가 준비된 상황 이후에 발동하도록만 한다면 문서 앞에 선언해도 상관 없어지는데,

바로 이런 것을 해주는 것이 window.onload 메소드다.



*window.onload\
<script>
window.onload = function(){
var a = document.getElementById( 'hel' );
a.style.color = "blue"
}
</script>
<p id = "hel">hello</p>
위와 같이 window.onload라는 메서드를 오버라이딩(재정의) 해주면 되는데, 해당 함수 내의 코드 스크립트는 웹브라우저 내의 모든 요소가 준비가 되어야 실행이 되도록 할수 있다.
(웹브라우저 자체를 담당하는 window라는 객체가, 웹 문서를 불러올때, 문서가 사용되는 시점에 실행되는 onload라는 함수를 내가 다시 재정의 한다는 개념이다.)
