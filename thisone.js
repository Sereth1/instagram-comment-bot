    function setNativeValue(element, value) {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
    
        if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
        } else {
        valueSetter.call(element, value);
        }
    }
    
    //   let ev = new KeyboardEvent("Enter",{bubbles:true});
    let ev = new Event("submit",{bubbles:true,cancelable:true});
    ev.preventDefault()
    // let ev = document.createEvent('KeyboardEvent');
    //ev.initKeyEvent('keypress')
    // ev.which=ev.keyCode=13
    // ev.key = "Enter"
        var comments = [
        'This picture is absolutely stunning! The colors are so vibrant and really pop.',
        'You have such a great eye for capturing beauty in your photos',
        'Wow, this picture looks like it belongs in a museum. So artistic and well-composed',
        'I love how you captured the natural light in this photo. It really adds to the mood.',
        'The details in this picture are incredible. I keep finding new things to admire every time I look at it.',
        'This photo looks like it could be a postcard. Such a perfect snapshot of this beautiful place.',
        'The way you framed this shot is so unique and interesting. It really draws the eye in.',
        'This picture makes me feel so happy and peaceful. Thank you for sharing it!',
        'The subject of this photo is so captivating. You really captured its essence.',
        'This photo is simply breathtaking. I cant stop looking at it']
        function generateComment (){
        const index = Math.floor(Math.random()*10)
        return comments[index] 
        }

        function doSomething() {
        
        // const heart = document.querySelector('svg[aria-label="Like"][width="24"]');
        const form = document.getElementsByTagName('form')[0]
        const comment = document.querySelector('textarea[aria-label="Add a comment…"]')
        const postButton =[...document.querySelectorAll('div[role="button"]')].filter((item)=>item.innerHTML==="Post");
        const next = document.querySelector('svg[aria-label="Next"]');
        //    if (heart) {
        //         heart.parentNode.parentElement.click()
        //         likes++;
        //         console.log(`You've liked ${likes} post(s)`);
        //     }
form.addEventListener('submit',(eventt)=>eventt.preventDefault())
        if (comment){
            comment.focus()
            setNativeValue(comment,generateComment())
        console.log('comment is ready');
        
        comment.dispatchEvent(new Event('input', { bubbles: true }));

            // comment.value=generateComment()
            // comment.dispatchEvent(ev);
        }


        if (postButton) {
            // form.dispatchEvent(ev)
        
         form.submit()
        
            console.log('clicking Is sexy');
    postButton.disabled=false
            //postButton.click();

        };
        // next.parentNode.parentElement.click();
        };

        (function loop() {  
            var rand = Math.random() * 10000;
            console.log('Random Time'+rand)
            setTimeout(function() {
                    //alert('A');
                    doSomething();
                    loop();  
            }, rand);
        }());
