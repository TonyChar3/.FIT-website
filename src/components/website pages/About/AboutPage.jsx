

const AboutPage = () => {
    return(
        <div className="flex flex-col mt-2 mb-[50px] lg:mb-[100px] lg:mt-5">
            <div className="flex flex-row justify-center p-3 w-full border-b-2 border-black lg:w-1/2">
                <h2 className="text-3xl lg:text-5xl">More about us...</h2>
            </div>
            <div className="flex flex-col items-center my-2 p-5 lg:flex-row lg:items-center lg:justify-evenly lg:w-full lg:mt-5">
                <p className="text-center mb-4 text-lg lg:w-1/4 lg:text-left lg:text-2xl">
                Hi, as you might already know, we are FIT.
                We are a Canadian fitness apparel brand that is dedicated to helping you look and feel your best during your workouts. 
                We understand that choosing the right fitness gear can be overwhelming, 
                which is why we're committed to providing high-quality products that are not only stylish but also functional. 
                Our brand is built on the values of quality, transparency, and sustainability, 
                and we're proud to say that all of our products are made with ethically sourced materials.
                </p>
                <div className="lg:flex lg:flex-row lg:justify-center lg:w-2/4 ">
                    <iframe 
                    width="600" 
                    height="400" 
                    style={{ border:0 }} 
                    className="w-full lg:w-3/4 rounded-xl"
                    loading="lazy" 
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/view?zoom=10&center=48.5650%2C-78.1125&key=AIzaSyAHnbbXP-VrtEE9oHUPdOJQsPnCD6CrH0A"
                    >
                    </iframe>
                </div>
            </div>
            <div className="flex flex-col items-center my-2 p-5 lg:flex-row lg:w-full lg:justify-around lg:items-center">
                <p className="text-center text-lg lg:w-1/4 lg:text-2xl">
                At FIT, we believe that trust is everything. 
                That's why we go above and beyond to ensure that our customers can shop with confidence. 
                From our transparent and honest pricing to our commitment to ethical manufacturing practices, 
                we want you to know that we value your trust and loyalty. 
                We also offer a hassle-free return policy, so if for any reason you're not satisfied with your purchase, we'll make it right. 
                With FIT, you can trust that you're getting a high-quality product that will stand the test of time. 
                </p>
                <div className="border-b-4 border-black w-20 my-4 lg:border-b-0"><i className="fa-regular fa-dumbbell hidden lg:block lg:text-7xl hover:rotate-180 hover:scale-150 duration-300"></i></div>
                <p className="text-center text-lg lg:w-1/4 lg:text-2xl">
                When you shop with FIT, you're not just buying fitness apparel 
                - you're joining a community of like-minded individuals who are passionate about health and wellness. 
                We believe that fitness should be accessible to everyone, regardless of their size, shape, or fitness level. 
                That's why we offer a range of sizes and styles that are designed to fit every body type. 
                Whether you're just starting your fitness journey or you're a seasoned athlete, we have something for you. So why not give FIT a try? 
                We're confident that you'll love our products and our brand just as much as we do. 
                </p>
            </div>
        </div>
    );
}

export default AboutPage;