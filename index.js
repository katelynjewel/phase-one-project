const imgDiv = document.querySelector('.image-card')
const imgContainterDiv = document.querySelector('.image-container')



renderPic()
function renderPic(){
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
    commentInput.placeholder = "Add a comment..."

    img.src = "./0C83C2DF-64FF-4A2E-80B9-A41923D4B3D6_1_105_c.jpeg"
    img.alt = 'image display'

    reaction.append(likesDisplay,likesBtn, dislikeBtn)
    imgCard.append(img,reaction, commentForm)
    imgContainterDiv.append(imgCard)
    commentForm.append(ul,commentInput, post)

}

