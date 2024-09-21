
const PizzaDelivery = () => {
    return (
        <div className="w-1/2">
            <h2 className="uppercase text-redHighlighter1">pizza delivery</h2>
            <h2 className="uppercase">Get Started Today!</h2>
            <hr className="w-20 border-2 border-redHighlighter1" />
            <p>Everything you need to build an amazing food restaurant responsive website.</p>
            <small>
                Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.
            </small>
            <div className="flex gap-5">
                <div>
                    <img src="/images/Simplification.png" className="w-16" alt="" />
                    <p>Food Order</p>
                    <small>
                        Food is the necessity of life. It provides nutrition, sustenance growth to human body.
                    </small>
                </div>
                <div>
                    <img src="/images/Simplification.png" className="w-16" alt="" />
                    <p>Food Order</p>
                    <small>
                        Food is the necessity of life. It provides nutrition, sustenance growth to human body.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default PizzaDelivery;