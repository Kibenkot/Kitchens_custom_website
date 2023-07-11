import review_1_1 from './media/review_1_1.png';
import review_1_2 from './media/review_1_2.png';
import review_2_1 from './media/review_2_1.png';
import review_2_2 from './media/review_2_2.png';
import review_3_1 from './media/review_3_1.png';
import review_3_2 from './media/review_3_2.png';
import review_4_1 from './media/review_4_1.png';
import review_4_2 from './media/review_4_2.png';
import review_5_1 from './media/review_5_1.png';
import review_5_2 from './media/review_5_2.png';

import kitchen_1 from './media/kitchen_1.png'
import kitchen_2 from './media/kitchen_2.png'
import kitchen_3 from './media/kitchen_3.png'
import kitchen_4 from './media/kitchen_4.png'
import kitchen_5 from './media/kitchen_5.png'
import kitchen_6 from './media/kitchen_6.png'
import kitchen_7 from './media/kitchen_7.png'
import kitchen_8 from './media/kitchen_8.png'
import kitchen_9 from './media/kitchen_9.png'

import catalog_1 from './media/catalog_1.png'
import catalog_2 from './media/catalog_2.png'
import catalog_3 from './media/catalog_3.png'
import catalog_4 from './media/catalog_4.png'

import designer_1 from './media/designer_1.png'
import designer_2 from './media/designer_2.png'
import designer_3 from './media/designer_3.png'

import service_1 from './media/service_1.png'
import service_2 from './media/service_2.png'
import service_3 from './media/service_3.png'

import line_1_R from './media/line_1_R.svg'
import line_1_W from './media/line_1_W.svg'
import line_2_R from './media/line_2_R.svg'
import line_2_W from './media/line_2_W.svg'
import line_3_R from './media/line_3_R.svg'
import line_3_W from './media/line_3_W.svg'
import line_4_R from './media/line_4_R.svg'
import line_4_W from './media/line_4_W.svg'
import line_5_R from './media/line_5_R.svg'
import line_5_W from './media/line_5_W.svg'
import line_6_R from './media/line_6_R.svg'
import line_6_W from './media/line_6_W.svg'


export const reviews = [
    {
        id: 1,
        data:'12.10.2021',
        name: 'Ирина Егорова',
        rating: 5,
        comments: 'Заказали кухню в свою квартиру.  Дизайн и качество нас полностью устраивает. С доставкой проблем не возникло, всё привезли без задержки и полный комплект, ничто не повредилось, опытные сборщики  быстро и качественно собрали всю кухню. Кроме того компания сделала нам хорошую скидку, отношение к клиентам очень теплое, спасибо вам.',
        img_1: review_1_1,
        img_2: review_1_2,       
    },
    {
        id: 2,
        data:'03.08.2021',
        name: 'Елена Федорова',
        rating: 5,
        comments: 'Компанию «Немецкий стандарт» нашли с мужем в интернете случайно. После  общения с дизайнером, я решила заказать кухню именно там! Впечатлила работа монтажников Евгения и Александра!  Мало того, что они отлично знают своё дело, но также очень вежливы в общении. При установке кухни  учли все мои пожелания, работу выполнили быстро ,чисто и качественно! Пользуюсь кухней уже год и получаю огромное удовольствие.',
        img_1: review_2_1,
        img_2: review_2_2,       
    },
    {
        id: 3,
        data:'12.05.2021',
        name: 'Николай Гриценко',
        rating: 5,
        comments: 'Пересмотрев большую часть компаний по изготовлению кухонь мы с женой  наткнулись на компанию "Немецкий стандарт", г. Краснодар. Пользуемся кухней вот уже на протяжении четырех  месяцев.  На сегодняшний день ни с какими проблемами не сталкивались, наоборот - стало более уютно и приятно проводить время на кухне. Получилось все, как хотели.',
        img_1: review_3_1,
        img_2: review_3_2,       
    },
    {
        id: 4,
        data:'25.11.2020',
        name: 'Ольга Юхневич',
        rating: 5,
        comments: 'Долго подыскивали где заказать мебель для кухни. Случайно нашли  "Немецкий стандарт" поинтересовались смогут ли изготовить кухню как мы хотим. Сделали у них заказ. Выполнено все в срок ( и даже чуть- чуть раньше), качественно с учетом  всех наших пожеланий по дизайну и размерам. Большое спасибо. Отдельное спасибо дизайнеру Юлии за  советы по подбору материалов и фурнитуры. Все вежливы, учтивы, корректны и доброжелательны.',
        img_1: review_4_1,
        img_2: review_4_2,       
    },
    {
        id: 5,
        data:'16.09.2020',
        name: 'Виктор Степанов',
        rating: 5,
        comments: 'Решили заказать кухонный гарнитур для небольшой кухни. Среди огромного количества фирм, выбрали компанию "Немецкий стандарт" в г. Краснодар, сейчас с уверенностью можем сказать, что не ошиблись! Благодарны за качественное изготовление мебели. Дизайнер Оксана учла все пожелания. Парни по установке работают быстро, чисто, тихо! Спасибо большое всему коллективу! В дальнейшем будем сотрудничать только с Вами!',
        img_1: review_5_1,
        img_2: review_5_2,       
    }
]

export const kitchens = [
    {
        id: 1,
        img: kitchen_1,
        front: 'Пластик',
        furniture: 'Fennel',
        worktop: 'Постформинг',
        price: 26850,
        discounted_price: 19900

    },
    {
        id: 2,
        img: kitchen_2,
        front: 'Крашенный МДФ и шпонированный МДФ',
        furniture: 'Braun',
        worktop: 'Компак-плита',
        price: 28620,
        discounted_price: 21200

    },
    {
        id: 3,
        img: kitchen_3,
        front: 'Пластик и шпонированный МДФ',
        furniture: 'Blum',
        worktop: 'Постформинг',
        price: 32900,
        discounted_price: 24400
    },
    {
        id: 4,
        img: kitchen_4,
        front: 'Пластик',
        furniture: 'Braun',
        worktop: 'Постформинг',
        price: 29200,
        discounted_price: 21700
    },
    {
        id: 5,
        img: kitchen_5,
        front: 'Массив и шпонированный МДФ',
        furniture: 'Blum',
        worktop: 'Компакт-плита',
        price: 61100,
        discounted_price: 45300
    },
    {
        id: 6,
        img: kitchen_6,
        front: 'Крашенный МДФ и шпонированный МДФ',
        furniture: 'Hettich',
        worktop: 'Постформинг',
        price: 34600,
        discounted_price: 25700
    },
    {
        id: 7,
        img: kitchen_7,
        front: 'Крашенный МДФ',
        furniture: 'Hettich',
        worktop: 'Искусственный камень',
        price: 32200,
        discounted_price: 23900
    },
    {
        id: 8,
        img: kitchen_8,
        front: 'Крашенный МДФ',
        furniture: 'Hettich',
        worktop: 'Компакт панель',
        price: 26850,
        discounted_price: 19900
    },
    {
        id: 9,
        img: kitchen_9,
        front: 'Крашенный МДФ',
        furniture: 'Blum',
        worktop: 'Постформинг',
        price: 27300,
        discounted_price: 20200
    },

]



export const catalogsAll = [
    {
        id:1,
        img: catalog_1,
        title: 'Современные кухни',
        count: 650
    },
    {
        id:2,
        img: catalog_2,
        title: 'Кухни Лофт',
        count: 470
    },
    {
        id:3,
        img: catalog_3,
        title: 'Классические кухни',
        count: 730
    },
    {
        id:4,
        img: catalog_4,
        title: 'Другое',
        count: 250
    },

]

export const designers = [
    {
        id: 1,
        img: designer_1,
        name: 'Оксана',
        year: 2011
    },
    {
        id: 2,
        img: designer_2,
        name: 'Татьяна',
        year: 2015
    },
    {
        id: 3,
        img: designer_3,
        name: 'Юлия',
        year: 2013
    },

]


export const services = [
    {
        id: 1,
        img: service_1,
        title: 'Подключение техники для кухни'
    },
    {
        id: 2,
        img: service_2,
        title: 'Подключение освещения'
    },
    {
        id: 3,
        img: service_3,
        title: 'Подключение сантехники'
    },
]

export const forms = [
    {
        id: 1,
        img_1: line_1_R,
        img_2: line_1_W,
        title: 'Прямая кухня'
    },
    {
        id: 2,
        img_1: line_2_R,
        img_2: line_2_W,
        title: 'Угловая кухня'
    },
    {
        id: 3,
        img_1: line_3_R,
        img_2: line_3_W,
        title: 'П-образная кухня'
    },
    {
        id: 4,
        img_1: line_4_R,
        img_2: line_4_W,
        title: 'Параллельная кухня'
    },
    {
        id: 5,
        img_1: line_5_R,
        img_2: line_5_W,
        title: 'Кухня с островом'
    },
    {
        id: 6,
        img_1: line_6_R,
        img_2: line_6_W,
        title: 'Другие формы'
    },
]

export const spaces = [
    {
        id: 1,
        text: 'До 5 м²'
    },
    {
        id: 2,
        text: 'До 8 м²'
    },
    {
        id: 3,
        text: 'До 15 м²'
    },
    {
        id: 4,
        text: 'Другое'
    },

]