import ServiceItem from '../ServiceItem/ServiceItem'
import styles from './ServiceList.module.css'

function ServiceList(){

    let data = [
        {id: 1, title: 'Годовое ТО', color: '#22356F'},
        {id: 2, title: 'Выравнивание колес', color: '#0052C1'},
        {id: 3, title: 'Настройка переключателей', color: '#76B58B'},
    ]

    return(
        <div className={styles.service_wrapper}>
            {data.map(elem => <ServiceItem key={elem.id} title={elem.title} color={elem.color}/>)}
        </div>
    )
}

export default ServiceList