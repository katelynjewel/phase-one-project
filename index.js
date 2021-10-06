const imgDiv = document.querySelector('.image-card')
const imgContainterDiv = document.querySelector('.image-container')
let baseUrl = 'http://localhost:3000/'

let ul = document.getElementById('comments-list')
ul.replaceChildren()

function defaultPhoto() {

    document.getElementById('comment-form').addEventListener('submit', (event) => {
        event.preventDefault()

        const comment = event.target['comment'].value
        const li = document.createElement('li')

        li.textContent = comment
        ul.append(li)

        event.target.reset()
    })

    let likes = 0

    document.getElementById('like-button').addEventListener('click', (event) => {
        ++likes
        document.getElementById('like-count').textContent = `${likes} likes`
    })

    document.getElementById('dislike-button').addEventListener('click', (event) => {
        --likes
        document.getElementById('like-count').textContent = `${likes} likes`
    })
}
defaultPhoto()

function getPictures (){
    const dropDown = document.querySelector('#option-dropdown')
    dropDown.addEventListener("change", (e) => {
        let value = dropDown.value
        fetch (baseUrl + `${value}`)
         .then (resp => resp.json())
         .then (pictures => {
            imgContainterDiv.replaceChildren()
            pictures.forEach(element => {
            renderPic(element)
         });  
     })
    }) 
}
getPictures()

function renderPic(items){
    const imgCard = document.createElement('div')
    const reaction = document.createElement('div')
    const img = document.createElement('img')
    const likesDisplay = document.createElement('span')
    const likesBtn = document.createElement('button')
    const dislikeBtn = document.createElement('button')
    const commentForm = document.createElement('form')
    const ul = document.createElement('ul')
    const commentInput = document.createElement('input')
    const post = document.createElement('button')

    imgCard.className = "image-card"
    img.className = 'image'
    reaction.className = 'reaction-section'
    likesDisplay.className = 'likes'
    likesDisplay.textContent = '0 likes'
    likesBtn.className = 'like-button'
    likesBtn.textContent = '👍'
    dislikeBtn.className = 'dislike-button'
    dislikeBtn.textContent = '👎'
    commentForm.className = 'comment-form'
    post.className = 'comment-button'
    post.setAttribute = ('type', 'submit')
    post.textContent = ' Post '
    commentInput.className = 'comment-input'
    commentInput.id = 'comment'
    commentInput.placeholder = "Add a comment..."

    let likes = 0

    likesBtn.addEventListener('click', (event) => {
        ++likes
        likesDisplay.textContent = `${likes} likes`
    })

    dislikeBtn.addEventListener('click', (event) => {
        --likes
        likesDisplay.textContent = `${likes} likes`
    })

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
    
        const comment = commentInput.value
        const li = document.createElement('li')
        li.className = 'comments'
    
        li.textContent = comment
        ul.append(li)
    
        event.target.reset()
    })

    img.src = items.imageUrl
    img.alt = 'image display'

    reaction.append(likesDisplay,likesBtn, dislikeBtn)
    imgCard.append(img,reaction, commentForm)
    imgContainterDiv.append(imgCard)
    commentForm.append(ul,commentInput, post)
}

document.getElementById(side-bar).addEventListener('click', (event) => {
    let newImg = 
})
