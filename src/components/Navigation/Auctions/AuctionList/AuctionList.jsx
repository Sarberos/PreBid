import Preloader from '../../../Tools/Preloader/Preloader'
import s from './AuctionList.module.css'


export const AuctionList= ({searchData,total_results,searchLoading})=>{

    if (searchLoading) {
        return (
            <Preloader />
        )
    }
    return(
        <div className={s.auctions_list_wrap}>
                    <div className={s.find_results_wrap}>
                        <p className={s.find_txt}>
                        {total_results === 1 ? "Найден" : "Найдено"}
                        </p>
                        <span className={s.find_results}>
                        {total_results === 1
                            ? `${total_results} результат`
                            : (total_results >= 2) & (total_results < 5)
                            ? `${total_results} результатa`
                            : total_results >= 5 
                            ? `${total_results} результатов`
                            : total_results===0 || !total_results ? '0 результатов ' :""}
                        </span>
                    </div>
                    <ul className={s.auctions_list_innerWrap}>
                        {!searchLoading ? searchData?.content?.map(auction=>(
                            <li className={s.auctionns_byData_wrap}>

                            <article className={s.day_auction}>
                                <h3 className={s.day_auction_date}>{auction.date}</h3>
                                {auction?.contents?.map(auctionItem=>(
                                    <div className={s.day_auction_content}>
                                    <ul className={s.content_list}>
                                        <li className={s.content_item}>
                                            <div className={s.day_auction_country}>
                                                {auctionItem?.countries?.map(auctionItemCountry=>(
                                                    <p className={s.day_auction_country_name}>
                                                        {auctionItemCountry.name_ru}
                                                    </p>
                                                ))}
                                                
                                            </div>
                                            <div className={s.day_auction_id}>
                                                <p className={s.day_auction_name}>{auctionItem.name}</p>
                                                <span className={s.auction_id_result}>
                                                    ID аукциона 
                                                    <p className={s.auction_id_number}>
                                                        {auctionItem.id}
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className={s.content_item}>
                                            <span className={s.cars_sum_txt}>Количество транспортных средств</span>
                                            <span className={s.cars_sum_number}>{auctionItem.transports_count}</span>
                                        </li>
                                        <li className={s.content_item}>
                                            <span className={s.passing_status}>{auctionItem.status.name}</span>
                                        </li>
                                        <li className={s.content_item}>
                                            <button className={s.more_btn}>Смотреть подробнее</button>
                                        </li>
                                    </ul>
                                </div>
                                ))}
                            </article>
                            
                            </li>
                        )):'Загрузка'}
                            
                    </ul>
                    </div>
    )
}