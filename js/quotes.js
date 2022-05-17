const quotes = [
    {
        quote: "니가 놓친 기회는 딴놈이 얻는다.",
        author: "태형 김"
    },
    {
        quote: "밥을 많이 먹으면 배가 부르다.",
        author: "Taehyeong Kim"
    },
    {
        quote: "잠을 안자면 졸리다.",
        author: "Foo Kim"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;