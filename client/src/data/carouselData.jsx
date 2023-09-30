
import clothing from "../assets/jpeg/unsplash-force-majeure-00tlC0Clfrs.jpeg";
import gadgets from "../assets/jpeg/unsplash-screen-post-rhR20m0NBNw.jpeg";
import furniture from "../assets/jpeg/unsplash-alexandra-gorn-JIUjvqe2ZHg.jpeg";

const defaultStyle = {
    title: 'text-black-custom text-4xl text-center font-bold absolute z-10 ',
    desc: 'text-black-custom text-md absolute z-10 '
}

export default [
    {
        title: 'GET THE LATEST FASHION TRENDS!',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident',
        url: clothing,
        style: {
            title: defaultStyle.title + 'left-[18rem] top-[28rem]',
            desc: defaultStyle.desc + 'w-[38rem]  left-[18rem] top-[31rem]'
        }
    }, {
        title: 'YOUR GATEWAY TO THE LATEST GADGETRY!',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident',
        url: gadgets,
        style: {
            title: defaultStyle.title + 'left-[55rem] top-[7rem]',
            desc: defaultStyle.desc + 'w-[38rem] left-[55rem] top-[10rem]'
        }
    }, {
        title: 'START SHOPPING ONLINE!',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit essecillum.',
        url: furniture,
        style: {
            title: defaultStyle.title + 'w-full text-center top-[21rem]',
            desc: defaultStyle.desc + 'w-full text-center  top-[24rem]'
        }
    }
]