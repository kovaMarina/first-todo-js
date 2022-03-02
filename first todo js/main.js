window.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form')
    const content = document.querySelector('.content')
    const p = document.querySelector('.pCard')
    let send = form.send


    function createCard() {
        const card = document.createElement('div')
        const cardButton = document.createElement('button')
        const cardInfo = document.createElement('div')
        const cardTitle = document.createElement('div')
        const cardText = document.createElement('div')


        card.classList.add('card')
        cardButton.classList.add('card__button')
        cardInfo.classList.add('card_info')
        cardTitle.classList.add('card__title')
        cardText.classList.add('card__text')

        cardButton.textContent = 'X'
        card.append(cardButton)
        card.append(cardInfo)
        cardInfo.append(cardTitle)
        cardInfo.append(cardText)

        return card
    }


    NotContent(content)
    send.addEventListener('click',function (e){
        e.preventDefault()

        let Ititle = form.title.value
        let Itext = form.text.value
        if (Ititle !== '' || Itext !== '') {
            const card = createCard();
            const createdCard = fillCard(card, Ititle, Itext)
            content.insertAdjacentElement('afterbegin', createdCard)

        setLocal(Ititle, Itext)
            form.title.value = ''
            form.text.value = ''

            if (content.children.length !== 0) {
                let p = document.querySelector( 'p' )
                if ( p !== null ){
                    p.remove()
                }
            }
    }} )
    function NotContent(cont){
        if(cont.children.length===0 ) {
            let p = document.createElement( 'p' )
            p.classList.add( 'pCard' )
            p.textContent = 'list is empty '
            cont.append(p)
        }
    }
    function fillCard(card, title, text) { //эта функция долджна принять input и заполнять новую карточку
    const _title = card.querySelector('.card__title')
    const _text = card.querySelector('.card__text')
    _title.textContent = title
    _text.textContent = text;
    return card
    }
    let cards = []
    function setLocal(t,te) {
        let  card =({title:t, text: te})
        cards.push(card)
        localStorage.setItem('card',JSON.stringify(cards))
    }
    function getLocal() {
        let a = JSON.parse(localStorage.getItem('card'))
            return  a
        }
        let LocalCard = getLocal()
        // console.log(LocalCard)
         LocalCard.forEach(function  (item, title ,text  ){
             // LocalCards(item,LocalCardWrap)
             console.log(item )
             title = item.title
             text = item.text
             let LocalCardWrap = createCard()
             LocalCards(item,title,text ,LocalCardWrap)
             //принять функцию создания карточки с тетле и текст
        } )
    // function f(){
    //      let ob
    //     for (let i = 0 ; i < LocalCard.length; i++){
    //         ob = (LocalCard[i])
    //         console.log(ob)
    //     }
    //     return ob
    // }
    //     let q = f()
    let local = LocalCards
        function LocalCards(item,title,text ,LocalCardWrap) {
            if(LocalCard!==null){
                for (let i = 0 ; i <LocalCard.length; i++){
                    let Ititle = title
                    let Itext = text
                    const _title = LocalCardWrap.querySelector('.card__title')
                    const _text = LocalCardWrap.querySelector('.card__text')
                    _title.textContent =title //тУТ ПРОБЛЕМА
                    _text.textContent =text
                    content.insertAdjacentElement('afterbegin', LocalCardWrap)
                    return LocalCardWrap

                }
                content.insertAdjacentElement('afterbegin', item)
            }
            content.insertAdjacentElement('afterbegin', LocalCardWrap)
            //     const card = createCard();
            //     const createdCard = fillCard(card, Ititle, Itext)
            //     content.insertAdjacentElement('afterbegin', createdCard)

            // let title = LCard.document.querySelector('.card__title')
            // let text = LCard.document.querySelector('.card__text')
            // title.textContent=LTit
            // text.textContent=LText

        }
    // LocalCards(z,LocalCardWrap)
    content.addEventListener('click', function ( e ) {
        const target =  e.target
        if(target.classList.contains('card__button')){
            const del = target.closest('.card')
            del.remove()
            if (content.children.length === 0){
                NotContent(content)
            }
        }

    })
})
/*
1)отправляем локально по ключу инфр title и text
2) парсем эту игформацию обратно в обьект и присваиваем новой карточке хначения title и текс взятые из сервера(объект)
3) добовляем на страницу карточку если


 */
