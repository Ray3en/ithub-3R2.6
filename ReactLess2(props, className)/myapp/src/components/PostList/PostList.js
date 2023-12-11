import Post from "../Post/Post"
import styles from './PostList.module.css'


function PostList(){
    let data = [
        {id: 1, color: 'red', title: 'Title 1', text: 'text 1'},
        {id: 2, color: 'blue', title: 'Title 2', text: 'text 2'},
        {id: 3, color: 'green', title: 'Title 3', text: 'text 3'},
        {id: 4, color: 'purple', title: 'Title 4', text: 'text 4'},
        {id: 5, color: 'darkgreen', title: 'Title 5', text: 'text 5'},
        {id: 6, color: 'yellow', title: 'Title 6', text: 'text 6'},
    ]

    return(
        <div className={styles.post_wrapper}>
            {data.map(elem => <Post 
                                    key={elem.id}
                                    title={elem.title} 
                                    text={elem.text} 
                                    color={elem.color}
                                />)}
        </div>
    )
}

export default PostList