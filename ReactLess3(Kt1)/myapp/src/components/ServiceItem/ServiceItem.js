import styles from './ServiceItem.module.css'

function ServiceItem(props){

    const {title, color} = props

    return(
        <div 
            style={{backgroundColor: color}}
            className={styles.card_wrapper}
        >
            <h2 className='white_main_text'>{title}</h2>
        </div>
    )
}

export default ServiceItem