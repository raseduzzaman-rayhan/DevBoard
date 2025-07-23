// always displaying date and day in the page 
const optionsDay = { weekday: 'long', timeZone: 'Asia/Dhaka' };
const optionsDate = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Dhaka' };

const today = new Date();
const day = today.toLocaleDateString('en-US', optionsDay);      // eg: Monday
const date = today.toLocaleDateString('en-US', optionsDate);    // eg: July 22, 2025

document.getElementById('day').innerText = day;
document.getElementById('date').innerText = date;


// js for all completed btns & all about btns works
const buttons = document.querySelectorAll('.completed-btn');
let index = 0;

for (const btn of buttons) {
    btn.addEventListener('click', function () {
        const increasingNumber = document.getElementById('increasing-number').innerText;
        const decreasingNumber = document.getElementById('decreasing-number').innerText;

        const countNumber = parseInt(increasingNumber);
        const subNumber = parseInt(decreasingNumber);

        // btn alert related js : 
        alert('Task updated successfully');
        if (index === buttons.length - 1) {
            setTimeout(() => {
                alert('This was the last task!');
            }, 300);
        }

        document.getElementById('increasing-number').innerText = countNumber + 1;
        document.getElementById('decreasing-number').innerText = subNumber - 1;

        btn.disabled = true;

        const taskTitle = btn.closest('.shadow-sm').querySelector('h2').innerText;

        const time = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Asia/Dhaka'
        });

        const logContainer = document.getElementById('activity-history');
        const newLog = document.createElement('div');
        logContainer.classList.add('bg-white')

        newLog.innerHTML = `
                    <div class="bg-[#dae4ff] mx-auto p-2 rounded-lg text-sm">
                        <p>You have Complete The Task <span class="text-violet-600 font-semibold">${taskTitle}</span> at ${time}</p>
                    </div>
                    `;
        logContainer.appendChild(newLog);
        index++;
    });
}


// js for clear history btn 
document.getElementById('clear-history-btn')
    .addEventListener('click', function () {
        const historyLog = document.getElementById('activity-history');
        historyLog.innerHTML = '';
    });


// js for changing the background color :
const colors = ['#ff96b9', '#289ff7', '#f5d49f', '#d4fad7', '#edb5f5'];
let currentColorIndex = 0;

document.getElementById('color-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });


document.getElementById('to-blogs')
    .addEventListener('click', function () {
        window.location.href = "/blogs.html"
    });
