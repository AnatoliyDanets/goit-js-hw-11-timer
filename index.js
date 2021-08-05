// const daysSpan = document.querySelector('[data-value="days"]');
// const hoursSpan = document.querySelector('[data-value="hours"]');
// const minsSpan = document.querySelector('[data-value="mins"]');
// const secsSpan = document.querySelector('[data-value="secs"]');
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
        this.start();
    }

    start() {
        const startDate = new Date(this.targetDate);
        this.intervalId = setInterval(() => {
            const currentTime = new Date();
            const endTime = (startDate - currentTime);
            const time = this.getComponent(endTime)
            this.updateTimer(time)
            if (endTime < 0) {
                clearInterval(this.intervalId);
                document.querySelector(this.selector).innerHTML = "Time is up";
            }
        }, 1000);
    }
    getComponent(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs }
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
    updateTimer({ days, hours, mins, secs }) {
        let selector = document.querySelector(this.selector)
        const allowField = selector.children;
        const allowDays = allowField[0].firstElementChild;
        const allowHours = allowField[1].firstElementChild;
        const allowMins = allowField[2].firstElementChild;
        const allowSecs = allowField[3].firstElementChild;
        allowDays.textContent = days;
        allowHours.textContent = hours;
        allowMins.textContent = mins;
        allowSecs.textContent = secs;

    }
   
};
const countDown = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 6, 2021, 21:38:00'),
});
const countDown2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Aug 7, 2021'),
});
// countDown.start();
// countDown2.start();
