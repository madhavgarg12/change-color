function changeColor(){
    const para = document.getElementById('main')
    const btn = document.getElementById('btn')
    const colors = ['red','blue','orange', 'aqua', 'black']
    btn.addEventListener('click',()=>{
      const randomIndex = Math.floor(Math.random() * 6)
      para.style.color = colors[randomIndex]
    })
}
changeColor()