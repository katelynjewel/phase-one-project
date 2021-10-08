const imgContainterDiv = document.querySelector('.image-container')
const imgDiv = document.querySelector('.image-card')
let baseUrl = 'http://localhost:3000/'

function renderPic(items){
    const imgCard = document.createElement('div')
    const img = document.createElement('img')
    imgCard.className = 'image-card'
    img.className = 'image'
    img.src = items.imageUrl
    img.alt = 'image display'

    const reaction = document.createElement('div')
    reaction.className = 'reaction-section'

    const likesDisplay = document.createElement('span')
    likesDisplay.textContent = '0 likes'
    likesDisplay.className = 'likes'

    const likesBtn = document.createElement('button')
    likesBtn.className = 'like-button'
    likesBtn.textContent = '👍'

    const dislikeBtn = document.createElement('button')
    dislikeBtn.className = 'dislike-button'
    dislikeBtn.textContent = '👎'

    const commentInput = document.createElement('input')
    commentInput.className = 'comment-input'
    commentInput.id = 'comment'
    commentInput.placeholder = "Add a comment..."

    const commentForm = document.createElement('form')
    commentForm.className = 'comment-form'
    const ul = document.createElement('ul')

    const post = document.createElement('button')
    post.className = 'comment-button'
    post.setAttribute = ('type', 'submit')
    post.textContent = 'Post'

    const pinIt = document.createElement('button')
    pinIt.className = 'pinit'
    pinIt.textContent = 'PickIt!'

    pinIt.addEventListener('click', (e) => {
        console.log(e)
        const sidebar = document.getElementById('side-bar')
        const pSideBar = document.querySelector('.sidebar')
        const newImg = document.createElement('img')
        newImg.className = "thumbnail"

        newImg.src = items.imageUrl
        sidebar.replaceChildren()
        sidebar.append(newImg)

    })

    reaction.append(likesDisplay, likesBtn, dislikeBtn, pinIt)
    imgCard.append(img, reaction, commentForm)
    imgContainterDiv.append(imgCard)
    commentForm.append(ul, commentInput, post)

    
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
}


getPictures()

function getPictures () {

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
