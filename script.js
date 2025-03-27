let button = document.getElementById('greetingBtn');

button.addEventListener('click', function() {
    let name = document.getElementById('nameInp').value;
    let text = document.getElementById('greetingText');

    if (name === "") {
        text.innerHTML = 'ياريت تكتب اسم حضرتك'
        text.style.color = 'red';
    } else {
        text.innerHTML = `🎉 كل عام وانت بخير ${name} 🎉`
        text.style.color = 'green';
        launchConfetti();
    }
});

// دالة إطلاق تأثير الـ 🎉
function launchConfetti() {
confetti({
    particleCount: 200, // عدد القطع المتطايرة
    spread: 60, // مدى الانتشار
    origin: { y: 0.6 } // نقطة البداية
});
}