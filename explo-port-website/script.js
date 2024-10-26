// รอให้ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    var textElement = document.querySelector('.text1 h1 span');

    textElement.addEventListener('click', function() {
        // ซ่อนข้อความโดยเพิ่ม class 'hidden'
        textElement.classList.add('hidden');
        
        // รอให้การเปลี่ยนแปลงเสร็จสิ้น (ใช้เวลา 0.5 วินาที) แล้วค่อยเปลี่ยนข้อความ
        setTimeout(function() {
            if (textElement.textContent === 'Napat') {
                textElement.textContent = 'Can you call me "Sun"';
            } else {
                textElement.textContent = 'Napat';
            }
            // แสดงข้อความอีกครั้งโดยเอา class 'hidden' ออก
            textElement.classList.remove('hidden');
        }, 500); // ต้องสอดคล้องกับเวลาใน CSS (0.5s)
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
        var position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) { 
            element.classList.add('show');
        }
    });
});

const navbarItems = document.querySelectorAll('.navbar a');

navbarItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderBottom = '2px solid #333';
        this.style.transition = 'border-bottom 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.borderBottom = 'none';
    });
});

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // ลบ active class ออกจากลิงก์ทั้งหมด
        navbarLinks.forEach(item => item.classList.remove('active'));
        
        // เพิ่ม active class ให้ลิงก์ที่ถูกคลิก
        this.classList.add('active');
    });
});

// สร้างฟังก์ชันสำหรับพิมพ์ข้อความอัตโนมัติ
function typeWriter(text, elementId, speed) {
    let i = 0;
    let isDeleting = false; // ตัวแปรเพื่อเก็บสถานะการพิมพ์หรือการลบ

    function typing() {
        const element = document.getElementById(elementId);
        
        if (!isDeleting) {
            // พิมพ์ตัวอักษร
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                // รอเมื่อพิมพ์จบแล้ว
                setTimeout(() => { isDeleting = true; }, 1000); // รอ 1 วินาที
            }
        } else {
            // ลบตัวอักษร
            if (i > 0) {
                element.innerHTML = text.slice(0, i - 1);
                i--;
            } else {
                // กลับไปพิมพ์ใหม่
                isDeleting = false; // เปลี่ยนสถานะกลับเป็นการพิมพ์
                i = 0; // เริ่มนับใหม่
                setTimeout(typing, speed); // เรียกฟังก์ชันนี้อีกครั้ง
                return; // ออกจากฟังก์ชัน
            }
        }
        setTimeout(typing, speed); // เรียกฟังก์ชันนี้อีกครั้ง
    }
    typing();
}

// เรียกใช้ฟังก์ชันหลังจากโหลดหน้าเว็บ
window.onload = function() {
    typeWriter("Computer Engineering", "typing", 100); // ระบุข้อความ, id ของพารากราฟ, และความเร็วในการพิมพ์
};




