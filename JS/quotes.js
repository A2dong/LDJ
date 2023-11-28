const quotes = [
    {
        quote : "가끔은 슬픈 것도 나쁘지 않아. 그래야 행복한 게 어떤 느낌인지 알잖아.",
        author : "Nunu & Willump",
    },
    {
        quote : "한 걸음 물러서는 건 더 찬란한 전진에 대한 약속이죠.",
        author : "Lux",
    },
    {
        quote : "자신의 한계를 인정하는 것이 실패의 첫걸음이지.",
        author : "Lee Sin",
    },
    {
        quote : "인생의 쓴 맛을 보았나! 꾹 참고 씹다 보면, 달달해질 거야.",
        author : "Braum",
    },
    {
        quote : "두려움 따위를 안고 살기엔 인생은 너무 짧다!",
        author : "Illaoi",
    },
    {
        quote : "시간이 얼마나 있는지는 상관없어. 어떻게 쓰느냐가 중요하지.",
        author : "Ekko",
    },
    {
        quote : "과거는 잊어라. 미래를 가릴 뿐이니까.",
        author : "Yone",
    },
    {
        quote : "아름다움은 사그라들기 마련. 그래서 아름다운 거야.",
        author : "Kindred",
    },
    {
        quote : "산을 오르긴 힘들죠. 그러나 정상의 전망은 그럴 가치가 충분합니다.",
        author : "Taric",
    },
    {
        quote : "진실을 본 자는, 다신 거짓된 세상으로 돌아갈 수 없어!",
        author : "Sylas",
    }


];

const sayQuote = document.querySelector("#quote span:first-child");
const sayAuthor = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

sayQuote.innerText = todaysQuote.quote;
sayAuthor.innerText = todaysQuote.author;
