let heartCount = 0;
const congratsMessages = [
    "亲爱的阿长公主，恭喜你在漫威争锋中成功上钻！",
    "你是最棒的，继续加油！",
    "你的努力终于得到了回报，祝贺你！",
    "为你感到骄傲，阿长公主！",
    "你是我们的英雄，继续前行！"
];

document.getElementById('giveHeart').addEventListener('click', function() {
    heartCount++;
    document.getElementById('heartCount').textContent = heartCount;
    createFloatingHeart();
});

document.getElementById('changeMessage').addEventListener('click', function() {
    const messageElement = document.querySelector('.congrats-message');
    const randomIndex = Math.floor(Math.random() * congratsMessages.length);
    messageElement.textContent = congratsMessages[randomIndex];
});

document.getElementById('princessImg').addEventListener('click', function() {
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '0';
    heart.style.fontSize = '24px';
    heart.style.animation = 'float 3s ease-in forwards';
    document.body.appendChild(heart);

    setTimeout(() => {
        document.body.removeChild(heart);
    }, 3000);
}

// 添加浮动爱心的动画
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-100vh); opacity: 0; }
    }
`;
document.head.appendChild(style);
