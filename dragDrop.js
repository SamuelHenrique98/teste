var dropbox = document.querySelectorAll('#dropbox');
var drp = [];
var i = 0;

var dragbox = document.querySelector('#dragbox')
var dragIni = dragbox.getBoundingClientRect()

dropbox.forEach(element => {
    drp[i] = element.getBoundingClientRect()
    i++;
});

var drg , drgT , drgL , drgB , drgR ;
var el , avail ;


function dragStart(evt){
    // evt = <div id="dragbox" draggable="true"></div>
    
    el = evt.target ;
    if(el.getAttribute('draggable') == 'true'){
        avail = 'available';
    } else {
        avail = '';
    }
}
    
function drag(evt){
    if(avail == 'available'){
        //Coloca o position absolute e as coordenadas
        el.style.position="absolute";
        el.style.left=evt.touches[0].clientX-el.clientWidth/2;
        el.style.top=evt.touches[0].clientY-el.clientHeight/2;
        
        drg = el.getBoundingClientRect();
        drgT = drg.top ;
        drgB = drg.bottom ;
        drgL = drg.left ;
        drgR = drg.right ;
    } else {}
    evt.preventDefault();
}

function drop(){
    // update on drop
    let c = 0;
    drp.forEach(d => {
        if(avail == 'available'){
            if(d.top < drgT && d.left < drgL && d.bottom > drgB && d.right > drgR){
                dropbox[c].appendChild(el);
                el.style.position='';
                el.setAttribute('draggable','false');
                c++
            }else{
                if (c == (drp.length-1)) {
                    el.style.position='';
                    el.style.left=dragIni.x;
                    el.style.top=dragIni.y;
                }
            }
            c++ 
        }else { }
    })
}