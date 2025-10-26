document.getElementById('root')?.addEventListener('click', (e: Event) => {
    const {isTrusted, target, bubbles} = e;
    console.log('mouse click occurs', {isTrusted, target, bubbles});    
    e.stopPropagation();
});

document.getElementById('root')?.addEventListener('click', (e: Event) => {
    const {isTrusted, target, bubbles} = e;
    console.log('mouse click also occurs', {isTrusted, target, bubbles});    
});

document.getElementById('child')?.addEventListener('click', (e: Event) => {
    const {isTrusted, target, bubbles} = e;
    console.log('mouse click also occurs', {isTrusted, target, bubbles});    
    e.stopPropagation();
});

export default function EventListener(){
    return <div id="child">Event Listener</div>
}