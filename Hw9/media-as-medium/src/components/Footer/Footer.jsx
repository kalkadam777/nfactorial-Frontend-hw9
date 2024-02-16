import './style.css'
export default function Footer(){
    return (
        <div className="footer">
            <div className="top_footer">
                Credits: photos from
                <a className="links" href={"https://unsplash.com/@surface"}> Unsplash.com </a>, 
                icons from <a className="links" href={"https://icons8.com/"}>Icons8</a>,
                graphics from 
                <a
                  className="links"
                  href={'https://craftwork.design/checkout/purchase-confirmation/?payment_key=a3ba0d28aa30dfd691cd535acb1f4228'}
                  >craftwork.design
                </a>
            </div>
            <div className="bottom_footer">Made with ✨🖤 at nFactorial in 2022.</div>
        </div>
    )
}