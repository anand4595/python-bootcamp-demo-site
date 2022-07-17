AOS.init();

const counters = document.querySelectorAll('.counter'); 
const speed = 50;
counters.forEach(
    counters =>  {
        const updateCount  = () => {
            const target = +counters.getAttribute('data-target');
            const count = +counters.innerText;
            const inc = target/speed;
            if (count < target){
                counters.innerText = count + inc;
                setTimeout(updateCount,80);
            }   
            else {
                count.innerText = target;
            }       
        }
        updateCount();
    }
);