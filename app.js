nav = document.getElementById('nav')
proj1PeekBtn = document.getElementById('proj1PeekBtn')
proj2PeekBtn = document.getElementById('proj2PeekBtn')
proj3PeekBtn = document.getElementById('proj3PeekBtn')
proj1div = document.getElementById('proj-1')
proj2div = document.getElementById('proj-2')
proj3div = document.getElementById('proj-3')
proj1img = document.getElementById('proj1img')
proj2img = document.getElementById('proj2img')
proj3img = document.getElementById('proj3img')
navHeight = nav.offsetHeight;
video1 = document.createElement('video')
video2 = document.createElement('video')
video3 = document.createElement('video')
video1.src =
  './images/KetoMeals-fave.mp4';
video2.src = './images/MovieDB.mp4'
video3.src = './images/hennas.mp4'
video2.controls = video1.controls = video3.controls = true;
video2.muted = video1.muted = video3.muted = true;
video2.autoplay = video1.autoplay = video3.autoplay = true;
video2.height = video1.height = video3.height = 400;
video2.width = video1.width = video3.width = 400;
video1.classList.add('project-display')
video2.classList.add('project-display')
video3.classList.add('project-display')


window.onscroll = function(e) {
    if (!(this.oldScroll > this.scrollY)){
        nav.classList.remove('scrollUp');
        nav.classList.add('scrollDown');
    } else if ((this.oldScroll > this.scrollY) || (this.scrollY < navHeight)){
        nav.classList.remove('scrollDown');
        nav.classList.add('scrollUp');
    }
    this.oldScroll = this.scrollY;
}


proj1PeekBtn.addEventListener('click',()=>{
    if (proj1div.classList.contains('img')){
        proj1div.replaceChild(video1,proj1img)
        proj1div.classList.replace('img','vid');
    } else if (proj1div.classList.contains('vid')){
        proj1div.replaceChild(proj1img,video1)
        proj1div.classList.replace('vid','img');
    }
})

proj2PeekBtn.addEventListener('click',()=>{
    if (proj2div.classList.contains('img')){
        proj2div.replaceChild(video2,proj2img)
        proj2div.classList.replace('img','vid');
    } else if (proj2div.classList.contains('vid')){
        proj2div.replaceChild(proj2img,video2)
        proj2div.classList.replace('vid','img');
    }
})

proj3PeekBtn.addEventListener('click',()=>{
    if (proj3div.classList.contains('img')){
        proj3div.replaceChild(video3,proj3img)
        proj3div.classList.replace('img','vid');
    } else if (proj3div.classList.contains('vid')){
        proj3div.replaceChild(proj3img,video3)
        proj3div.classList.replace('vid','img');
    }
})

function sendMail(){
    var params = {
        name: document.getElementById('user_name').value ,
        email: document.getElementById('user_email').value ,
        message: document.getElementById('message').value
    }
    const serviceId = 'service_ey8ec4o';
    const templateId = 'template_mo7898f'
    emailjs.send(serviceId,templateId,params)
    .then(
        res =>{
            document.getElementById('user_name').value = "" ;
            document.getElementById('user_email').value = "" ;
            document.getElementById('message').value = "";
            alert('Message sent successfully')
        }
    )
    .catch(err=>console.log(err));
}

