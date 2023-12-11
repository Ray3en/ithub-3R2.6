import styles from './Post.module.css'

function Post(props){

    const {color, title, text} = props
    // let title = 'Title 1'
    // let text = 'text 1'

    return(
        <div className={styles.post_item}>
            <h2 className="main_text" style={{color}}>{title}</h2>
            <p className="second_text">{text}</p>
        </div>
    )
}

export default Post