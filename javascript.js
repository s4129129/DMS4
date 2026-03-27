

    function triggerAlarm() {
        alarmActive = true;
        alarmLockUntil = Date.now() + 5000; 
        document.body.classList.add('alarm-active');
        
        // Select a random insult from the list
        const randomIndex = Math.floor(Math.random() * insults.length);
        insultText.innerText = insults[randomIndex];
        
        insultPopup.style.display = 'block';

        alarm.play().catch(e => console.log("Audio play failed: ", e));
    }

