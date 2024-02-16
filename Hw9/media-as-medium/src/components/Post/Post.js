import './style.css'
import ico1 from './images/Ico1.png'

export default function Post(props){
    const {author, topic, title, desc, date, img, icon} = props;
    return (
        <div className="first" >
            <div className="block">
                <div className="left_content">
                    <div className="author_div">
                        <img src={icon} alt="icon" className="icon_img" />
                        <p className="Author_name">{author}<span className="gray_font">in</span> {topic} ⋅ <span className="gray_font">{date}</span></p>
                    </div>
                    <p className="title">{title}</p>
                    <p className="description">{desc}</p>
                    <div className="bottom">
                        <div className="left_side">
                            <button className="btn_java">Java Script</button>
                            <p id="min" className="gray_font">12 min read </p>
                            <p>⋅</p>
                            <p id="sel" className="gray_font">Selected for you</p>
                        </div>
                        <div className="right_side">
                            <img src={ico1} alt="" />
                            <img src={ico1} alt="" />
                            <img src={ico1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right_content">
                    <img src={img} alt="main" className="main_img" />
                </div>
            </div> 
            <hr />
        </div>
    )
}