const books=[
    {
        book:"불편한 편의점",
        author:"김호연",
    },
    {
        book:"세븐 테크",
        author:"김미경",
    },
    {
        book:"물고기는 존재하지 않는다",
        author:"룰루 밀러",
    },
    {
        book:"달러구트 꿈 백화점",
        author:"이미예",
    },
    {
        book:"미드나잇 라이브러리",
        author:"매트 헤이그",
    },
    {
        book:"소크라테스 익스프레스",
        author:"에릭 와이너",
    },
    {
        book:"공감한다는 착각",
        author:"마이클 샌델",
    },
    {
        book:"완전한 행복",
        author:"정유정",
    },
    {
        book:"작은 별이지만 빛나고 있어",
        author:"소윤",
    },
    {
        book:"기분이 태도가 되지 않게",
        author:"레몬심리",
    }
];

const book=document.querySelector("#book span:first-child");
const author=document.querySelector("#book span:last-child");

//Math.random() 0부터 1사이의 숫자를 랜덤으로 발생
//Math.random() *10 0부터 10사이의 숫자를 랜덤으로 발생
//Math.floor 소수점 자리 반내림

const todayBooks=books[Math.floor(Math.random()*books.length)];

book.innerText=todayBooks.book;
author.innerText=todayBooks.author;
