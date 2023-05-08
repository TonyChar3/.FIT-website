

const PolicyPage = () => {
    return(
        <div 
            className="flex flex-col justify-center items-center mb-[50px]"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="flex flex-row w-full justify-center p-4 border-b-2 border-black lg:w-1/2 lg:p-6">
                <h2 className="text-3xl lg:text-5xl">Policy</h2>
            </div>
            <div className="p-2 my-2 lg:w-1/2">
                <p className="text-center text-lg lg:text-xl">
                    We believe that transparency is key to building trust with our customers. 
                    Here, you will find important information regarding our shipping, return, privacy, payment, and security policies. 
                    We want you to have a seamless and enjoyable experience shopping with us, and our policies are designed to ensure that happens. 
                    If you have any questions or concerns, please don't hesitate to reach out to us. 
                    Thank you for choosing FIT!
                </p>
            </div>
            <div className="w-20 border-b-2 border-black my-2"></div>
            <div className="my-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div className="p-1 w-40 ml-5 border-b-2 border-black lg:w-80 lg:text-center lg:p-3">
                    <h3 className="text-xl lg:text-3xl">Shipping Policy:</h3>
                </div>
                <div className="p-3 lg:w-4/6">
                    <ul className="list-disc list-inside text-center text-lg lg:text-xl">
                        <li className="my-2 lg:my-4">We offer free shipping on all orders over a certain amount.</li>
                        <li className="my-2 lg:my-4">For orders under that amount, shipping charges will apply.</li>
                        <li className="my-2 lg:my-4">We ship orders within 1-3 business days after receiving the order.</li>
                        <li className="my-2 lg:my-4">Shipping times vary depending on the location and shipping method chosen.</li>
                        <li className="my-2 lg:my-4">Customers will receive a tracking number via email once their order has shipped.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div className="p-1 w-40 ml-5 border-b-2 border-black lg:w-80 lg:text-center lg:p-3">
                    <h3 className="text-xl lg:text-3xl">Return Policy:</h3>
                </div>
                <div className="p-3 lg:w-4/6">
                    <ul className="list-disc list-inside text-center text-lg lg:text-xl">
                        <li className="my-2 lg:my-4">We offer a 30-day return policy on all items.</li>
                        <li className="my-2 lg:my-4">To be eligible for a return, items must be in their original condition and packaging.</li>
                        <li className="my-2 lg:my-4">Customers are responsible for the cost of return shipping.</li>
                        <li className="my-2 lg:my-4">Once we receive the returned item, we will issue a refund or exchange as requested.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div className="p-1 w-40 ml-5 border-b-2 border-black lg:w-80 lg:text-center lg:p-3">
                    <h3 className="text-xl lg:text-3xl">Privacy Policy:</h3>
                </div>
                <div className="p-3 lg:w-4/6">
                    <ul className="list-disc list-inside text-center text-lg lg:text-xl">
                        <li className="my-2 lg:my-4">We value our customers' privacy and will not sell or share their personal information with third parties.</li>
                        <li className="my-2 lg:my-4">We collect and use personal information for the purpose of fulfilling orders and providing customer support.</li>
                        <li className="my-2 lg:my-4">We use secure payment processing to protect customers' payment information.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div className="p-1 w-40 ml-5 border-b-2 border-black lg:w-80 lg:text-center lg:p-3">
                    <h3 className="text-xl lg:text-3xl">Payment Policy:</h3>
                </div>
                <div className="p-3 lg:w-4/6">
                    <ul className="list-disc list-inside text-center text-lg lg:text-xl">
                        <li className="my-2 lg:my-4">We accept major credit cards and PayPal as forms of payment.</li>
                        <li className="my-2 lg:my-4">Payment is due at the time of purchase.</li>
                        <li className="my-2 lg:my-4">If an order is cancelled, a refund will be issued to the original form of payment.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div className="p-1 w-40 ml-5 border-b-2 border-black lg:w-80 lg:text-center lg:p-3">
                    <h3 className="text-xl lg:text-3xl">Security Policy:</h3>
                </div>
                <div className="p-3 lg:w-4/6">
                    <ul className="list-disc list-inside text-center text-lg lg:text-xl">
                        <li className="my-2 lg:my-4">We use industry-standard encryption to protect customers' personal and payment information.</li>
                        <li className="my-2 lg:my-4">We regularly update our security protocols to ensure the highest level of protection.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PolicyPage;