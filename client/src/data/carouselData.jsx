
import clothing from "../assets/jpeg/unsplash-force-majeure-00tlC0Clfrs.jpeg";
import gadgets from "../assets/jpeg/unsplash-screen-post-rhR20m0NBNw.jpeg";
import furniture from "../assets/jpeg/unsplash-alexandra-gorn-JIUjvqe2ZHg.jpeg";

const defaultStyle = {
    title: 'text-black-custom text-md md:text-xl text-center font-bold absolute z-10 block text-center top-[12rem]',
    desc: 'hidden md:inline-block text-black-custom text-md lg:text-lg absolute z-10 block text-center top-[17rem]'
}

export default [
    {
        title: 'GET THE LATEST FASHION TRENDS!',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident',
        url: clothing,
        style: {
            title: defaultStyle.title + ' md: w-full md:top-[22rem]',
            desc: defaultStyle.desc + ' md:w-full md:top-[24rem]',
        }
    }, {
        title: 'YOUR GATEWAY TO THE LATEST GADGETRY!',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident',
        url: gadgets,
        style: {
            title: defaultStyle.title + ' md: w-full md:top-[22rem]',
            desc: defaultStyle.desc + ' md:w-full md:top-[24rem]',
        }
    }, {
        title: 'START SHOPPING ONLINE!',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit essecillum.',
        url: furniture,
        style: {
            title: defaultStyle.title + ' md: w-full md:top-[22rem]',
            desc: defaultStyle.desc + ' md:w-full md:top-[24rem]',
        }
    }
]