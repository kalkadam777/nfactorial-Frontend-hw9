import { posts } from '../../data/posts'
import Post from '../Post/Post'
import './style.css'

export default function Posts(){
    return (
        <div className="container">
            {
                posts.map((item,idx)=>(
                    <Post 
                        key={item.id}
                        author={item.author}
                        topic={item.topic}
                        title={item.title}
                        desc={item.description}
                        date={item.date}
                        img={item.img}
                        icon={item.icon_img}
                    />
                ))
            }
        </div>
    )
}