const menuBtn=document.querySelector('.menu-btn');
const mobileNav=document.querySelector('.mobile-nav');
menuBtn.addEventListener('click',()=>mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
let count=0;
const bag=document.getElementById('bagCount');
document.querySelectorAll('.add,.add-feature').forEach(button=>button.addEventListener('click',()=>{count++;bag.textContent=count;const old=button.textContent;button.textContent='Added ✓';setTimeout(()=>button.textContent=old,900)}));
const form=document.getElementById('newsletter');
form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('message').textContent='Thank you — you are on the list.';form.reset()});
