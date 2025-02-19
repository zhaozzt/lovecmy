// 获取元素
let questionText = document.getElementById('question');
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let mainImage = document.getElementById('mainImage');
let confessionContainer = document.getElementById('confessionContainer');
let buttonsContainer = document.querySelector('.buttons');

// 直接设置用户名为 "tom"
const username = "常梦瑶宝宝";

// 显示表白内容
questionText.innerText = `我可以一直喜欢你吗？${username}`;

let clickCount = 0; // 记录点击 No 的次数
const noTexts = [
    "？你认真的吗…",
    "要不再想想？",
    "不许选这个！ ",
    "我会很伤心…",
    "不行:(",
];

// No 按钮点击事件
noButton.addEventListener('click', function () {
    clickCount++;
    let yesSize = 1 + clickCount * 1.2;
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }
    if (clickCount === 1) mainImage.src = "assets/images/shocked.png"; // 震惊
    if (clickCount === 2) mainImage.src = "assets/images/think.png"; // 思考
    if (clickCount === 3) mainImage.src = "assets/images/angry.png"; // 生气
    if (clickCount === 4) mainImage.src = "assets/images/crying.png"; // 哭
    if (clickCount >= 5) mainImage.src = "assets/images/crying.png"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = (username) => `!!!喜欢你!! ( >᎑<)♡︎ᐝ  ${username ? `${username}  ♡︎ᐝ(>᎑< )` : ""}`;
yesButton.addEventListener('click', function () {
    // 创建表白成功页面
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="assets/images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;
    document.querySelector(".yes-text").innerText = loveTest(username);
    document.body.style.overflow = "hidden";
    document.querySelector('.yes-screen').classList.add('fade-in');
});
