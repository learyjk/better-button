import { gsap } from 'gsap'

const init = () => {
    const mButtons = document.querySelectorAll('[wb-data=m-button]')
    if (mButtons.length === 0) return

    mButtons.forEach((mButton) => {
        const circle = mButton.querySelector('[wb-data=circle]')
        if (!circle) return

        gsap.set(circle, { scale: 0, opacity: 1 })

        mButton.addEventListener("click", (e: Event) => {

            let xDist = (e as PointerEvent).clientX - mButton.getBoundingClientRect().x
            let yDist = (e as PointerEvent).clientY - mButton.getBoundingClientRect().y

            gsap.set(circle, { left: xDist, top: yDist })
            gsap.fromTo(circle, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: .5, ease: "ease.out" })
        })
    })
}

// const init = () => {
//     const mButton = document.querySelector('[wb-data=m-button]')
//     if (!mButton) return
//     const circle = mButton.querySelector('[wb-data=circle]')
//     if (!circle) return

//     gsap.set(circle, { scale: 0, opacity: 1 })

//     mButton.addEventListener("click", (e: Event) => {

//         let xDist = (e as PointerEvent).clientX - mButton.getBoundingClientRect().x
//         let yDist = (e as PointerEvent).clientY - mButton.getBoundingClientRect().y

//         gsap.set(circle, { left: xDist, top: yDist })
//         gsap.fromTo(circle, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: .5, ease: "ease.out" })
//     })
// }

document.addEventListener("DOMContentLoaded", init)